import React from 'react';

const reset = ({ resetItems }) => {
    return (
        <button onClick={ () => resetItems() }>Clear and reset</button>
    )
}

export default reset;