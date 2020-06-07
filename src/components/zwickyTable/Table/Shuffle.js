import React from 'react';
import './Shuffle.scss';

const Shuffle = ({handleShuffle, exploredPossibilities, numPossibilities}) => {

    return (
        <div className='shuffle'>
            <button onClick={handleShuffle}>Shuffle</button>
            <p><span>{exploredPossibilities}</span> combinations explored of a possible <span>{numPossibilities}</span> combinations</p>
        </div>
    )
}

export default Shuffle;