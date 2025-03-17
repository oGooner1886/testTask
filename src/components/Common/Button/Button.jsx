import React from "react";
import style from "./Button.module.css";
import refresh from "../../../assets/Refresh.svg";
const Button = ({ onClick }) => {
  return (
    <button className={style.buttonRefresh} onClick={onClick}>
      <div>Обновить</div>
      <span>
        <img className={style.refresh} src={refresh} alt="Refresh" />
      </span>
    </button>
  );
};

export default Button;
