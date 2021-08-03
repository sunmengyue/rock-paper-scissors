import React, { useState } from 'react';
import './App.css';

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  let choices = ['ROCK', 'PAPER', 'SCISSORS'];

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    getComputerChoice();
  };

  const getComputerChoice = () => {
    let random = Math.random() * 3;
    let index = Math.floor(random);
    let comp = choices[index];
    setComputerChoice(comp);
  };

  return (
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
  );
}

export default App;
