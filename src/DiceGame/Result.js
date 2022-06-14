import React, { Component } from "react";

export default class Result extends Component {
  render() {
    const { numOfGames, numOfWins, rightChoice, yourChoice } =
      this.props.figure;
    return (
      <div className="mt-5">
        <p>BẠN CHỌN: {yourChoice}</p>
        <p>KẾT QUẢ: {rightChoice}</p>
        <p>Số bàn thắng: {numOfWins}</p>
        <p>Tổng số bàn chơi: {numOfGames}</p>
      </div>
    );
  }
}
