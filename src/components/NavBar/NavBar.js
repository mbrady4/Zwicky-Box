import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
    return (
            <div className='navbar'>
                <Link to='/'><h1>Zwicky Box</h1></Link>
                <div>
                    <Link to='/howtouse'>How to Use</Link>
                    <Link to='/examples'>Examples</Link>
                </div>
            </div>
    )
}

export default NavBar;