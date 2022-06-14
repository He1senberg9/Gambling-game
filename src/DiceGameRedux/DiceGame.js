import React, { Component } from "react";
import Dice from "./Dice";
import Result from "./Result";
import "./DiceGame.css";
import { connect } from "react-redux";

class DiceGame extends Component {
  handlePlay = () => {
    let { yourChoice, rightChoice, numOfGames, numOfWins } = this.props.figure;
    const dice1 = Math.ceil(Math.random() * 5 + 1);
    const dice2 = Math.ceil(Math.random() * 5 + 1);
    const dice3 = Math.ceil(Math.random() * 5 + 1);

    if ((dice1 + dice2 + dice3) % 2 === 0) {
      rightChoice = "CHẴN";
    } else {
      rightChoice = "LẺ";
    }

    if (yourChoice === rightChoice) {
      numOfWins++;
    }
    numOfGames++;
    const data = {
      dices: {
        dice1,
        dice2,
        dice3,
      },
      figure: {
        yourChoice,
        rightChoice,
        numOfGames,
        numOfWins,
      },
    };
    this.props.rollTheDice(data);
  };

  render() {
    return (
      <div className="back-ground">
        <div className="container text-center pt-5">
          <h1>GAME ĐỔ XÚC XẮC</h1>
          <Dice />
          <Result />
          <button onClick={this.handlePlay} className="btn btn-success">
            Play game
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    figure: state.figure,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    rollTheDice: (data) => {
      dispatch({ type: "ROLL_DICE", data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiceGame);
