import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './CurrentCombo.scss';

const CurrentCombo = ({keys, table, saveCombo}) => {
    const items = [];
    const categories = [];
    keys.map( (category, _) => {
        const index = table[category].selected;
        categories.push(table[category].category);
        items.push(table[category].items[index]);
        return null;
    })

    return (
        <div className="current-combo-table">
             { keys.map( (category, _) => {
                 const index = table[category].selected;
                 let item = table[category].items[index];
                 return ( 
                            <div key={uuidv4()}>
                                <h3>{table[category].category}</h3>
                                <h2>{item}</h2>
                            </div>
                        );
             })
             }
             <button className='save-combo' onClick={() => saveCombo(categories, items)}>Save</button>
        </div>
    )
};

export default CurrentCombo;