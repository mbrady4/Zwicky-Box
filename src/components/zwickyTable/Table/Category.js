import React, { useState } from 'react';
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
                    type='text'
                    value={categoryTitle}
                    onChange={handleCategoryChange}
                    onKeyDown={keyPressHandler}
                />
                { isMouseHere ? <button onClick={() => onDeleteClick()}>Delete</button> : null}
            </div>
            { category.items.map( (item, key) => {
                return <Item key={key} 
                             categoryIndex={categoryIndex}
                             itemIndex={key} 
                             item={item}
                             deleteItem={deleteItem}
                             editItem={editItem}/>;
            })}
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='new item'
                    value={value}
                    onChange={handleChanges}
                />
            </form>
        </div>
    )
}
export default Category;