import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Item from './Item';

import './Category.scss';

const Category = ({category, categoryIndex, addItem, deleteItem, deleteCategory, updateCategory, editItem}) => {
    const [value, setValue] = useState('');
    const [categoryTitle, setCategory] = useState(category.category);
    const [isMouseHere, setIsMouseHere] = useState(false);

    const handleChanges = e => {
        setValue(e.target.value);
    }

    const handleCategoryChange = e => {
        setCategory(e.target.value);
    }

    const keyPressHandler = e => {
        if(e.keyCode === 13) {
            updateCategory(categoryIndex, categoryTitle);
            e.target.blur();
        }
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("New Item:", value);
        addItem(categoryIndex, value);
        setValue('');
    }

    const onDeleteClick = () => {
        deleteCategory(categoryIndex);
    } 

    return (
        <div className='category'>
            <div onMouseEnter={() => setIsMouseHere(true)}
                 onMouseLeave={() => setIsMouseHere(false)}>
                <input
                    className="category-title" 
                    type='text'
                    value={categoryTitle}
                    onChange={handleCategoryChange}
                    onKeyDown={keyPressHandler}
                />
                { isMouseHere ? <FontAwesomeIcon className='trash' icon={faTrash} onClick={() => onDeleteClick()} /> : null}
            </div>
            { category.items.map( (item, key) => {
                return <Item key={key} 
                             categoryIndex={categoryIndex}
                             itemIndex={key}
                             item={item}
                             selected={(category.selected === key) ? true : false}
                             deleteItem={deleteItem}
                             editItem={editItem}/>;
            })}
            <form onSubmit={handleSubmit}>
                <input
                    className='add-item'
                    type='text'
                    placeholder='add item'
                    value={value}
                    onChange={handleChanges}
                />
            </form>
        </div>
    )
}
export default Category;