import React from 'react';
import './Menu.css';
export default function Menu(props) {
    return(
        <div className="menu">
            <h2>Rules</h2>
            <p>You can only click the Card <u>Once</u></p>
            <button type="button" onClick={props.menuButton}>Play the Game</button>
        </div>
    )
}