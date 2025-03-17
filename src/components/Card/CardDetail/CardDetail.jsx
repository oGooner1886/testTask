import React from "react";
import style from "./CardDetail.module.css";
import PlayerStats from "./PlayerStats/PlayerStats";
import TotalStats from "./TotalStats/TotalStats";
const CardDetail = ({ homeTeam, awayTeam }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.teams}>
        {homeTeam.players.map((player) => {
          return <PlayerStats player={player} />;
        })}
        <TotalStats
          place={homeTeam.place}
          points={homeTeam.points}
          totalKills={homeTeam.total_kills}
        />
      </div>

      <div className={style.teams}>
        {awayTeam.players.map((player) => {
          return <PlayerStats player={player} />;
        })}
        <TotalStats
          place={homeTeam.place}
          points={homeTeam.points}
          totalKills={homeTeam.total_kills}
        />
      </div>
    </div>
  );
};

export default CardDetail;
