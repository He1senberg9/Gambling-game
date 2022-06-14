import React, { Component } from "react";
import { connect } from "react-redux";
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import five from "../assets/images/5.png";
import six from "../assets/images/6.png";

class Dice extends Component {
  dicesImage = (diceX) => {
    const dice = this.props.dices[diceX];
    switch (dice) {
      case 1:
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
    const { onChoice } = this.props;
    return (
      <div className="d-flex justify-content-evenly mt-5">
        <button onClick={() => onChoice("CHẴN")} className="even-odd">
          CHẴN
        </button>
        <div className="dice-group">
          <img src={this.dicesImage("dice1")} alt="" />
          <img src={this.dicesImage("dice2")} alt="" />
          <img src={this.dicesImage("dice3")} alt="" />
        </div>
        <button onClick={() => onChoice("LẺ")} className="even-odd">
          LẺ
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dices: state.dices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChoice: (yourChoice) => {
      dispatch({ type: "CHOICE", yourChoice });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dice);
