import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Game from './components/Game';
import Score from './components/Score';
import Menu from './components/Menu';
class App extends Component {
  constructor(props) {
    super(props);
    this.menuButtonFunction = this.menuButtonFunction.bind(this);
    this.state = {
      bestScore:0,
      currentScore:0,
      clickedList:[],
      showGame:false,
    }
  }
  menuButtonFunction() {
    this.setState({showGame: true});
  }
  render() {
    const {showGame} = this.state;
    return (
    <div className='container'>
      <Nav />
      {(showGame) ? (<Score />,<Game />): <Menu menuButton={this.menuButtonFunction}/>}
      {/* <Score />
      <Game /> */}
    </div>
    );
  }
}
export default App;
