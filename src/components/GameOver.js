import React from 'react';
import './GameOver.css';
const GameOver = (props) => {
    const {Score, gameOverFunction} = props; 
    return(
        <div className='gameOver'>
            <h2>Game Over</h2>
            <p>Score: {Score}</p>
            <button type="button" onClick={gameOverFunction}>Play Again</button>
        </div>
    )
}
export default GameOver