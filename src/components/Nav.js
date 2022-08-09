import React from 'react';
import './Nav.css';
import logo from '../logo.png';
function Nav() {
    return(
        <div className='nav'>
            <img src={logo}></img>
            <h1>Piece Memory</h1>
        </div>
    )
}
export default Nav;