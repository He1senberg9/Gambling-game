import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    const { yourChoice, rightChoice, numOfGames, numOfWins } =
      this.props.figure;
    return (
      <div className="mt-5">
        <p>BẠN CHỌN:{yourChoice} </p>
        <p>KẾT QUẢ:{rightChoice} </p>
        <p>Số bàn thắng:{numOfWins}</p>
        <p>Tổng số bàn chơi:{numOfGames}</p>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    figure: state.figure,
  };
};

export default connect(mapStateToProp)(Result);
