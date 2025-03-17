import React from "react";
import style from "./PlayerStats.module.css";
import ava from "../../../../assets/avatar_global.svg";
const PlayerStats = ({ player }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.player}>
        <img className={style.ava} src={ava} alt="ava" />
        <div>{player.username}</div>
      </div>
      <div className={style.score}>
        <div className={style.kills}>
          Убийств: <span>{player.kills}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
