import React from "react";
import style from "./TotalStats.module.css";
import PlayerStats from "../PlayerStats/PlayerStats";
const TotalStats = ({ place, points, totalKills }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.points}>
        Points: <span> {points}</span>
      </div>
      <div className={style.place}>
        Место: <span> {place}</span>
      </div>
      <div className={style.totalKills}>
        Всего убийств:<span> {totalKills}</span>
      </div>
    </div>
  );
};

export default TotalStats;
