import React from 'react';
import Item from './Item';

import './Category.scss';

const Category = ({category, items}) => {
    return (
        <div className='category'>
            <h2>{category}</h2>
            { items.map( (item, key) => {
                return <Item key={key} item={item}/>;
            })}
            <input 
                placeholder='new item'
            />
        </div>
    )
}
export default Category;