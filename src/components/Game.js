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
        key:'wPawn',
        },
        {
        img:bPawn,
        desc:'Black Pawn',
        key:'bPawn',
        },
        {
        img:wKnight,
        desc:'White Knight',
        key:'wKnight',
        },
        {
        img:bKnight,
        desc:'Black Knight',
        key:'bKnight',
        },
        {
        img:wBishop,
        desc:'White Bishop',
        key:'wBishop',
        },
        {
        img:bBishop,
        desc:'Black Bishop',
        key:'bBishop',
        },
        {
        img:wRook,
        desc:'White Rook',
        key:'wRook',
        },
        {
        img:bRook,
        desc:'Black Rook',
        key:'bRook',
        },
        {
        img:wKing,
        desc:'White King',
        key:'wKing',
        },
        {
        img:bKing,
        desc:'Black King',
        key:'bKing',
        },
        {
        img:wQueen,
        desc:'White Queen',
        key:'wQueen',
        },
        {
        img:bQueen,
        desc:'Black Queen',
        key:'bQueen',
        },
    ];
    const [cards,setCards] = useState([]);
    const [clickedArray,clickedArrayUpdate] = useState([]);
    useEffect(()=> {
        props.reset();
        const createCard = [...defaultCard].sort(() => Math.random() - 0.5);
        setCards(createCard);
    },[]);
    useEffect(()=>{console.log(clickedArray)},[clickedArray]);
    function shuffleCard() {
        const newCards = [...cards].sort(() => Math.random() - 0.5);
        setCards(newCards);
    }
    function checkLose(val) {
        if (clickedArray.includes(val)) {
            props.updateLoseFunction();
        } else {
            props.update();
        }
    }
    function getCardInfo(e) {
        const cardValue = e.currentTarget.getAttribute('value');
        checkLose(cardValue);
        clickedArrayUpdate([...clickedArray].concat(cardValue));
    }
    function gameFunction(e) {
        shuffleCard();
        getCardInfo(e);
    }
    return(
        <div className='game'>
            <div className='cardList'>
                {cards.map((card) => {
                    return(
                        <div className='card' key={card.key} onClick={gameFunction} value={card.key}>
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

