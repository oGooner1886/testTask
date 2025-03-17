import React from "react";
import Team from "../Team/Team";
import CardStatus from "../CardStatus/CardStatus";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import style from "./CardInfo.module.css";

const CardInfo = ({ homeTeam, awayTeam, homeScore, awayScore, status }) => {
  return (
    <div className={style.wrapper}>
      <Team name={homeTeam.name} />
      <div className={style.score}>
        <ScoreBoard homeScore={homeScore} awayScore={awayScore} />
        <CardStatus status={status} />
      </div>
      <Team name={awayTeam.name} />
    </div>
  );
};

export default CardInfo;
