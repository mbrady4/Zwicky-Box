import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';

import { updateItem } from '../../../actions/action';
import './Table.scss';

const Table = ({table, updateItem}) => {
    const keys = Object.keys(table);
    console.log(table);
    console.log(keys);

    const editItem = (categoryIndex, itemIndex, newValue) => {
        let categoryToUpdate = table[categoryIndex];
        categoryToUpdate.items[itemIndex] = newValue;
        const updatedTable = {
            ...table,
            [categoryIndex]:categoryToUpdate
        };
        updateItem(updatedTable);
        console.log('edit item triggered!');
    }

    const addItem = (categoryIndex, newItem) => {
        const categoryToUpdate = table[categoryIndex];
        categoryToUpdate.items.push(newItem);
        const updatedTable = {
            ...table,
            [categoryIndex]:categoryToUpdate
        }
        updateItem(updatedTable);
        console.log('Add Item Triggered');
    }

    const deleteItem = (categoryIndex, itemIndex) => {
        let categoryToUpdate = table[categoryIndex];
        categoryToUpdate.items.splice(itemIndex, 1);
        const updatedTable = {
            ...table, 
            [categoryIndex]:categoryToUpdate
        }
        updateItem(updatedTable);
        console.log('Delete Item Triggered');
    }

    // Helper function which rebuilds the object sans deleted category
    const removeByKey = (myObj, deleteKey) => {
        return Object.keys(myObj)
          .filter(key => key !== deleteKey)
          .reduce((result, current) => {
            result[current] = myObj[current];
            return result;
        }, {});
    }

    const deleteCategory = (categoryIndex) => {
        const updatedTable = removeByKey(table, categoryIndex)
        console.log(updatedTable);
        updateItem(updatedTable);
        console.log('Delete Category Triggered');
    }

    const updateCategory = (categoryIndex, value) => {
        let categoryToUpdate = table[categoryIndex];
        categoryToUpdate.category = value;
        const updatedTable = {
            ...table,
            [categoryIndex]:categoryToUpdate
        };
        updateItem(updatedTable);
        console.log('update Category triggered!');
    }

    const addCategory = () => {
        const key = keys.length + 1;
        console.log(key);
        const initialCat = {
            category: 'Category ' + key,
            items: ['Item 1', 'Item 2', 'Item 3']
        }
        const updatedTable = {
            ...table,
            [key]: initialCat
        }
        updateItem(updatedTable);
        console.log('New Category Added');
    }

    return (
        <div className='table'>
            { keys.map( (category, key) => {
                console.log({category});
                return <Category category={table[category]} 
                                 key={category}
                                 categoryIndex={category}
                                 addItem={addItem}
                                 editItem={editItem}
                                 deleteItem={deleteItem} 
                                 deleteCategory={deleteCategory}
                                 updateCategory={updateCategory}
                        />
                }) 
            }
            <button onClick={addCategory}>+</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        table: state.table
    }
};

export default connect(mapStateToProps, { updateItem })(Table);