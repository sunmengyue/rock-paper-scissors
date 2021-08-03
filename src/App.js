import React, { useState, useContext } from 'react';
import './App.css';
import handleGamePlay from './redux/reducers/GameReducers';
import handleOutcome from './redux/actions/GameActions';
import { ReactReduxContext } from 'react-redux';
import context from './context';

function App() {
  const { store } = useContext(ReactReduxContext);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);

  let choices = ['ROCK', 'PAPER', 'SCISSORS'];

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    let random = Math.random() * 3;
    let index = Math.floor(random);
    let computerChoice = choices[index];

    setComputerChoice(computerChoice);

    setGameHistory(
      handleGamePlay(gameHistory, handleOutcome(playerChoice, computerChoice)),
    );
  };

  const handleScore = () => {
    if (gameHistory[gameHistory.length - 1]) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <context.Provider value={{ gameHistory, setGameHistory }}>
      <div className="App">
        <h2>Rock Paper Scissors</h2>
        <div className="choices">
          <img
            onClick={() => {
              handlePlayerChoice('PAPER');
            }}
            src="./images/Paper.png"
            alt="paper"
            width={120}
          />
          <img
            onClick={() => {
              handlePlayerChoice('ROCK');
            }}
            src="./images/Rock.png"
            alt="rock"
            width={120}
          />
          <img
            onClick={() => {
              handlePlayerChoice('SCISSORS');
            }}
            src="./images/Scissors.png"
            alt="scissors"
            width={120}
          />
        </div>
      </div>
    </context.Provider>
  );
}

export default App;
