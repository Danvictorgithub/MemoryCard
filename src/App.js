import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Game from './components/Game';
import Score from './components/Score';
import Menu from './components/Menu';
import GameOver from './components/GameOver';
class App extends Component {
  constructor(props) {
    super(props);
    this.menuButtonFunction = this.menuButtonFunction.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.gameOverFunction = this.gameOverFunction.bind(this);
    this.setGameOver = this.setGameOver.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.state = {
      bestScore:0,
      currentScore:0,
      showGame:false,
      isGameOver: false,
    }
  }
  updateScore() {
    this.setState({currentScore:this.state.currentScore + 1});
  }
  resetScore() {
    this.setState({currentScore: 0});
  }
  menuButtonFunction() {
    this.setState({showGame: true});
  }
  gameOverFunction() {
    this.setState({isGameOver: false});
  }
  setGameOver() {
    this.setState({showGame: false});
    this.setState({isGameOver:true});
    if (this.state.currentScore > this.state.bestScore) {
      this.setHighScore();
    }
  }
  setHighScore() {
    this.setState({bestScore:this.state.currentScore});
  }
  render() {
    const {showGame, bestScore, currentScore, isGameOver} = this.state;
    const {updateScore, gameOverFunction, setGameOver, resetScore} = this;
    return (
    <div className='container'>
      <Nav />
      {(showGame) ? [<Score key='score' bestScore={bestScore} currentScore={currentScore}/>,
                    <Game key='game' reset={resetScore} update={updateScore}  updateLoseFunction={setGameOver}/>]
                    : ((isGameOver) ? null: <Menu menuButton={this.menuButtonFunction}/>)}
      {(isGameOver) ? <GameOver Score={currentScore} gameOverFunction={gameOverFunction}/> : null}
      
    </div>
    );
  }
}
export default App;
