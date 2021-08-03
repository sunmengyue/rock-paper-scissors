import handleGamePlay from '../reducers/GameReducers';

const handleOutcome = (playerChoice, computerChoice) => {
  return {
    type: 'DECIDE_WINNER',
    payload: {
      playerChoice,
      computerChoice,
    },
  };
};

export default handleOutcome;
