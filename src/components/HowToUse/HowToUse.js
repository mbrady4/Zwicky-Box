import React from 'react';
import Examples from '../Examples/Examples';
import { Link } from 'react-router-dom';

import './HowToUse.scss';

const HowToUse = () => {
    return (
        <div>
            <div className='how-to-use'>
                <h1>How to use a Zwicky Box</h1>
                <p>One of the greatest challenges of problem solving is ensuring that the beginning design assumptions of the process cover the full scope of the problem and potential solutions. The Zwicky box is a is a tool, built by Fritz Zwicky, for the systematic exploration of options within a defined system.</p>
                <p>As stated in Matt Taylor's excellent paper on <a href='https://matttaylor.com/public/zwicky_box_uses.htm'>the history and practice of the Zwicky Box</a>:</p>
                <blockquote cite='https://matttaylor.com/public/zwicky_box_uses.htm'>"Employing the Zwicky Box is to use a conceptual tool that can be used to generate more application opportunities and ways to use it. The processes, itself, is a discipline and way of using your innate mental skills. It quickly becomes a way of organizing and thinking - a creative habit. This habit is to start every enquiry with an enhanced understanding of the true size and many ramifications that a question or challenge presents. It forces awareness of hidden design assumption that close down the range of thinking way too early in the creative process."</blockquote>
                <p>By tradition a Zwicky box is at least three dimensional. Of course, large multidimensional boxes are difficult for humans to conceptualize and work with. Fortunately, a two dimensional matrix can yield surprisingly robust and insightful results.</p>
                <p>Per <a href='https://matttaylor.com/public/zwicky_box_uses.htm'>Taylor</a>, the steps to constructing a two dimensional Zwicky box are as follows:</p>
                <ol>
                    <li><span>1. Establish categories</span> / attributes (it is okay for there to redundancy and overlap)</li>
                    <li><span>2. Fill in alternatives</span> and variations by doing many categories at once; add more categories as you go. </li>
                    <li><span>3. Run through and write out combinations</span> (do not pre-judge; make it a truly random process).</li>
                    <li><span>4. Model the alternatives</span>; what will it really be like? What are the costs, implications, opportunities? What is new about the idea?</li>
                    <li><span>5. Select combinations</span> of combinations and make new combinations.</li>
                    <li><span>6. Repeat</span> the process as useful</li>
                </ol>
                <p>The purpose of this site is to aid in the creation, experimentation, and use of two dimensional Zwicky boxes. You can build a Zwicky box from <Link to='/'>scratch</Link> or use an <Link to='/examples'>example</Link> to get started. </p>
            </div>
            <Examples />
        </div>
    )
}

export default HowToUse;