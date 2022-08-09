import React from 'react';
import './Score.css';

function Score(props) {
    const {currentScore, bestScore} = props
    return(
        <div className='scoreBoard'>
            <p>Score:{currentScore}</p>
            <p>Best Score:{bestScore}</p>
        </div>
    )
}
export default Score; 