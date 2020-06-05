import React, {useState} from 'react';

import './Item.scss';

const Item = ({item}) => {
    const [value, setValue] = useState(item)

    const handleChanges = e => {
        setValue(e.target.value);
    }
    
    const loseFocus = e => {
        console.log('Focus Lost');
    }

    return (
        <input
            type='text'
            value={value}
            onChange={handleChanges}
            onBlur={loseFocus}
        />
    )
}

export default Item;