import React, { Component } from "react";
import Dice from "./Dice";
import Result from "./Result";
import "./DiceGame.css";

class DiceGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }
  checkResult = () => {
    const { dice1, dice2, dice3 } = this.state.dices;
    let { numOfGames, numOfWins, rightChoice, yourChoice } = this.state.figure;
    if ((dice1 + dice2 + dice3) % 2 === 0) {
      rightChoice = "CHẴN";
    } else {
      rightChoice = "LẺ";
    }
    if (rightChoice === yourChoice) {
      numOfWins++;
    }
    numOfGames++;
    const figure = { numOfGames, numOfWins, rightChoice, yourChoice };
    this.setState((state) => ({
      ...state,
      figure,
    }));
  };
  handlePlay = () => {
    const dice1 = Math.ceil(Math.random() * 5 + 1);
    const dice2 = Math.ceil(Math.random() * 5 + 1);
    const dice3 = Math.ceil(Math.random() * 5 + 1);
    this.setState(
      (state) => ({
        ...state,
        dices: {
          dice1,
          dice2,
          dice3,
        },
      }),
      this.checkResult,
    );
  };
  handleChoice = (yourChoice) => {
    this.setState((state) => ({
      ...state,
      figure: { ...state.figure, yourChoice },
    }));
  };
  render() {
    return (
      <div className="back-ground">
        <div className="container text-center pt-5">
          <h1>GAME ĐỔ XÚC XẮC</h1>
          <Dice dices={this.state.dices} onChoice={this.handleChoice} />
          <Result figure={this.state.figure} />
          <button onClick={this.handlePlay} className="btn btn-success">
            Play game
          </button>
        </div>
      </div>
    );
  }
}

export default DiceGame;
