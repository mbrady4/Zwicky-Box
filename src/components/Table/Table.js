import React from 'react';
import { connect } from 'react-redux';

import Category from './Category';
import Shuffle from './Shuffle';
import Reset from './Reset';
import CurrentCombo from './CurrentCombo';
import SavedCombos from './SaveCombos';

import { updateItem, shuffleItems, resetItems, saveCombo, updatedSavedCombos } from '../../actions/action';
import { removeByKey } from '../../utils/helperFunctions';
import './Table.scss';

const Table = ({table, numPossibilities, exploredPossibilities, savedCombos, hasShuffled, updateItem, shuffleItems, resetItems, saveCombo, updatedSavedCombos}) => {
    const keys = Object.keys(table);

    const editItem = (categoryIndex, itemIndex, newValue) => {
        let categoryToUpdate = table[categoryIndex];
        categoryToUpdate.items[itemIndex] = newValue;
        const updatedTable = {
            ...table,
            [categoryIndex]:categoryToUpdate
        };
        updateItem(updatedTable);
    }

    const addItem = (categoryIndex, newItem) => {
        const categoryToUpdate = table[categoryIndex];
        categoryToUpdate.items.push(newItem);
        const updatedTable = {
            ...table,
            [categoryIndex]:categoryToUpdate
        }
        updateItem(updatedTable);
    }

    const deleteItem = (categoryIndex, itemIndex) => {
        let categoryToUpdate = table[categoryIndex];
        categoryToUpdate.items.splice(itemIndex, 1);
        const updatedTable = {
            ...table, 
            [categoryIndex]:categoryToUpdate
        }
        updateItem(updatedTable);
    }

    const deleteCategory = (categoryIndex) => {
        const updatedTable = removeByKey(table, categoryIndex)
        updateItem(updatedTable);
    }

    const updateCategory = (categoryIndex, value) => {
        let categoryToUpdate = table[categoryIndex];
        categoryToUpdate.category = value;
        const updatedTable = {
            ...table,
            [categoryIndex]:categoryToUpdate
        };
        updateItem(updatedTable);
    }

    const addCategory = () => {
        const key = keys.length + 1;
        const initialCat = {
            category: 'Category ' + key,
            items: ['Item 1', 'Item 2', 'Item 3'],
            selected: null
        }
        const updatedTable = {
            ...table,
            [key]: initialCat
        }
        updateItem(updatedTable);
    }

    const handleShuffle = () => {
        shuffleItems(table, exploredPossibilities);
    }

    const deleteCombo = (id) => {
        const updatedCombos = removeByKey(savedCombos, id);
        console.log("updated combos,", updatedCombos);
        const key = Object.keys(savedCombos).length;
        updatedSavedCombos(updatedCombos, key);
    }

    return (
        <div>
            <Shuffle handleShuffle={handleShuffle}
                    exploredPossibilities={exploredPossibilities}
                    numPossibilities={numPossibilities}/>
            { hasShuffled ? <div>
                                <h3>Current Combination</h3>
                                <CurrentCombo
                                    keys={keys}
                                    table={table}
                                    saveCombo={saveCombo}
                                />
                            </div> : null }
            { (Object.keys(savedCombos).length > 0) ? <div>
                                                        <h3>Saved Combinations</h3>
                                                        <SavedCombos savedCombos={savedCombos} deleteCombo={deleteCombo}/>
                                                      </div> : null }
            <h3>Zwicky Table</h3>
            <div className='table'>
                { keys.map( (category, key) => {
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
                <button className='add-category' onClick={addCategory}>+</button>
            </div>
            <Reset resetItems={resetItems}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        table: state.table,
        numPossibilities: state.numPossibilities,
        exploredPossibilities: state.exploredPossibilities,
        savedCombos: state.savedCombos,
        hasShuffled: state.hasShuffled
    }
};

export default connect(mapStateToProps, { updateItem, shuffleItems, resetItems, saveCombo, updatedSavedCombos })(Table);