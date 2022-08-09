import React, { useState, useEffect } from 'react';
import wPawn from '../wPawn.png';
import bPawn from '../bPawn.png';
import wKnight from '../wKnight.png';
import bKnight from '../bKnight.png';
import wBishop from '../wBishop.png';
import bBishop from '../bBishop.png';
import wRook from '../wRook.png';
import bRook from '../bRook.png';
import wKing from '../wKing.png';
import bKing from '../bKing.png';
import wQueen from '../wQueen.png';
import bQueen from '../bQueen.png';


import './Game.css';
function Game(props) {
    const defaultCard = [
        {
        img:wPawn,
        desc:'White Pawn',
        },
        {
        img:bPawn,
        desc:'Black Pawn'
        },
        {
        img:wKnight,
        desc:'White Knight'
        },
        {
        img:bKnight,
        desc:'Black Knight'
        },
        {
        img:wBishop,
        desc:'White Bishop'
        },
        {
        img:bBishop,
        desc:'Black Bishop'
        },
        {
        img:wRook,
        desc:'White Rook'
        },
        {
        img:bRook,
        desc:'Black Rook'
        },
        {
        img:wKing,
        desc:'White King'
        },
        {
        img:bKing,
        desc:'Black King'
        },
        {
        img:wQueen,
        desc:'White Queen'
        },
        {
        img:bQueen,
        desc:'Black Queen'
        },
    ];
    useEffect(()=> {
        const createCard = [...defaultCard].sort(() => Math.random() - 0.5);
        setCards(createCard);
    },[]);
    const [cards,setCards] = useState([]);
    function shuffleCard() {
        const newCards = [...cards].sort(() => Math.random() - 0.5);
        setCards(newCards);
        console.log(cards);
    }
    return(
        <div className='game'>
            <div className='cardList'>
                {cards.map((card) => {
                    return(
                        <div className='card' key={Math.random()} onClick={shuffleCard}>
                            <img src={card.img}></img>
                            <p>{card.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Game;

