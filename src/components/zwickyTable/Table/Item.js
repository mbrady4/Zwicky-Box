import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './Item.scss';

const Item = ({item, categoryIndex, itemIndex, selected, deleteItem, editItem}) => {
    const [value, setValue] = useState(item)
    const [isMouseHere, setIsMouseHere] = useState(false);

    const handleChanges = e => {
        setValue(e.target.value);
    }
    
    const loseFocus = e => {
        console.log('Focus Lost');
        console.log(e.target.value);
        editItem(categoryIndex, itemIndex, e.target.value);
    }

    const keyPressHandler = e => {
        if(e.keyCode === 13) {
            editItem(categoryIndex, itemIndex, value);
            e.target.blur();
        }
    }

    const onDeleteClick = e => {
        console.log('Delete Button Clicked');
        deleteItem(categoryIndex, itemIndex);
    }

    return (
        <div onMouseEnter={() => setIsMouseHere(true)}
             onMouseLeave={() => setIsMouseHere(false)}
             className={ (selected) ? "selected item" : 'item'}>
            <input
                type='text'
                value={value}
                onChange={handleChanges}
                onKeyDown={keyPressHandler}
                onBlur={loseFocus}
            />
            { isMouseHere ? <FontAwesomeIcon className='trash' icon={ faTrash } onClick={() => onDeleteClick()} /> : null}
        </div>
    )
}

export default Item;