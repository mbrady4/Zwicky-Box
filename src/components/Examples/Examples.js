import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setMarketingExample, setLivingExample} from '../..//actions/action';
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router-dom';

import './Examples.scss';

const Examples = (props) => {
    const examples = ['Marketing Strategies', 'Places to live']
    const images = ['marketingExample.png', 'livingExample.png']
    const [toTable, setToTable] = useState(false)

    const clickHandler = (i) => {
        console.log('click handler activated!');
        if (i === 0) { props.setMarketingExample()}
        else { props.setLivingExample()};
        setToTable(true);
    }

    return (
        <div className='examples'>
            { toTable ? <Redirect to='/' /> : null}
            <h1>Example Zwicky Boxes</h1>
            <p>Click an example to explore it.</p>
            { examples.map( (example, i) => {
                return (
                    <div className='example' onClick={() => clickHandler(i)} key={uuidv4()}>
                        <div className='overlay'>
                            <h2>{example}</h2>
                            <img src={images[i]} alt={example}/>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default connect(null, {setMarketingExample, setLivingExample})(Examples);