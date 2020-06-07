import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './SavedCombos.scss';

const SaveCombos = ({savedCombos, deleteCombo}) => {
    console.log(savedCombos);
    return (
        <div className="saved-combos-table">
            { Object.keys(savedCombos).map( (combo, key) => {
                return (
                    <div key={uuidv4()} className='saved-combo'>
                        { savedCombos[combo].categories.map( (category, key) => {
                        return (
                            <div key={uuidv4()}>
                                <h3>{category}</h3>
                                <h2>{savedCombos[combo].items[key]}</h2>
                            </div>
                            )
                        })
                        }
                        <button className='delete-combo' onClick={() => deleteCombo(combo)}>Delete</button> 
                    </div>
                    )
                })
            }
        </div>
    )
}

export default SaveCombos;