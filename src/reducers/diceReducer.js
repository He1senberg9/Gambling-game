const initialState = {
  dices: {
    dice1: 1,
    dice2: 1,
    dice3: 1,
  },
  figure: {
    yourChoice: "",
    rightChoice: "",
    numOfGames: 0,
    numOfWins: 0,
  },
};
const diceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ROLL_DICE":
      return action.data;
    case "CHOICE":
      return {
        ...state,
        figure: { ...state.figure, yourChoice: action.yourChoice },
      };
    default:
      return state;
  }
};
export default diceReducer;
