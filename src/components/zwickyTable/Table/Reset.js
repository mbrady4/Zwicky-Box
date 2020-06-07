import React from 'react';
import './Reset.scss';

const reset = ({ resetItems }) => {
    return (
        <button className='reset' onClick={ () => resetItems() }>Clear and reset</button>
    )
}

export default reset;