import React from "react";
import style from "./Team.module.css";
import avatar from "../../../assets/avatar.svg";
const Team = ({name}) => {
  return (
    <div className={style.wrapper}>
      <img src={avatar} alt="avatar" />
      <p>{name}</p>
    </div>
  );
};

export default Team;
