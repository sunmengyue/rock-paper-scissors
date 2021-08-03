let results = { ROCK: 'SCISSORS', SCISSORS: 'PAPER', PAPER: 'ROCK' };

const handleGamePlay = (gameHistory = [], action) => {
  if (action.type === 'DECIDE_WINNER') {
    if (
      results[action.payload.playerChoice] === action.payload.computerChoice
    ) {
      return [...gameHistory, true];
    }
    return [...gameHistory, false];
  }
  return gameHistory;
};

export default handleGamePlay;
