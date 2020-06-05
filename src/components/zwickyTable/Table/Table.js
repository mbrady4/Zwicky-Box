import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';

import './Table.scss';
const Table = ({table}) => {
    console.log(table);

    const categories = []
    const items = []
    for (let i = 0; i < Object.keys(table).length; i++) {
        categories.push(Object.keys(table)[i]);
        items.push(table[categories[i]]);
    }

    return (
        <div className='table'>
            { categories.map( (category, key) => {
                return <Category category={category} 
                                 key={key} 
                                 items={items[key]}
                        />
                }) 
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        table: state.table
    }
};

export default connect(mapStateToProps, {})(Table);