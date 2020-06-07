import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const SaveCombos = ({savedCombos, deleteCombo}) => {
    console.log(savedCombos);
    return (
        <div className="table">
            { Object.keys(savedCombos).map( (combo, key) => {
                return (
                    <div key={uuidv4()}>
                        { savedCombos[combo].categories.map( (category, key) => {
                        return (
                            <div key={uuidv4()}>
                                <h3>{category}</h3>
                                <h2>{savedCombos[combo].items[key]}</h2>
                            </div>
                            )
                        })
                        }
                        <button onClick={() => deleteCombo(combo)}>Delete</button> 
                    </div>
                    )
                })
            }
        </div>
    )
}

export default SaveCombos;