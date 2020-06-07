import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CurrentCombo = ({keys, table, saveCombo}) => {
    const items = [];
    const categories = [];
    keys.map( (category, key) => {
        const index = table[category].selected;
        categories.push(table[category].category);
        items.push(table[category].items[index]);
        return null;
    })

    return (
        <div className="table">
             { keys.map( (category, key) => {
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
             <button onClick={() => saveCombo(categories, items)}>Save Combo</button>
        </div>
    )
};

export default CurrentCombo;