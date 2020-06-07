import React from 'react';
import './Shuffle.scss';

const Shuffle = ({handleShuffle, exploredPossibilities, numPossibilities}) => {

    return (
        <div className='shuffle'>
            <button onClick={handleShuffle}>Shuffle</button>
            <p>{exploredPossibilities} combinations explored of a possible {numPossibilities} combinations</p>
        </div>
    )
}

export default Shuffle;