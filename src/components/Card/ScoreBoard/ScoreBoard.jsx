import React from "react";
import style from "./ScoreBoard.module.css";

const ScoreBoard = ({ homeScore, awayScore }) => {
  return (
    <div className={style.wrapper}>
      <div>{homeScore}</div>
      <div>:</div>
      <div>{awayScore}</div>
    </div>
  );
};

export default ScoreBoard;
