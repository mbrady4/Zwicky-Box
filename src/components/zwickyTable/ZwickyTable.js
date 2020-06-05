import React from 'react';

import Shuffle from './Shuffle';
import Reset from './Reset';
import Table from './Table/Table';

const ZwickyTable = () => {

    return (
        <div>
            <Shuffle />
            <Table />
            <Reset />
        </div>
    )
}

export default ZwickyTable;