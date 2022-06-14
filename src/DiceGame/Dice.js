import React, { Component } from "react";
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import five from "../assets/images/5.png";
import six from "../assets/images/6.png";

export default class Dice extends Component {
  choiceDice = (dice) => {
    switch (dice) {
      case 1:
        console.log(dice);
        console.log(one);
        return one;
      case 2:
        return two;
      case 3:
        return three;
      case 4:
        return four;
      case 5:
        return five;
      case 6:
        return six;
      default:
        return one;
    }
  };

  render() {
    const { dice1, dice2, dice3 } = this.props.dices;
    const { onChoice } = this.props;
    return (
      <div className="d-flex justify-content-evenly mt-5">
        <button className="even-odd" onClick={() => onChoice("CHẴN")}>
          CHẴN
        </button>
        <div className="dice-group">
          <img src={this.choiceDice(dice1)} alt="" />
          <img src={this.choiceDice(dice2)} alt="" />
          <img src={this.choiceDice(dice3)} alt="" />
        </div>
        <button className="even-odd" onClick={() => onChoice("LẺ")}>
          LẺ
        </button>
      </div>
    );
  }
}
