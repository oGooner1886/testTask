import React from "react";
import style from "./CardStatus.module.css";
const CardStatus = ({ status }) => {
  const getStatus = (status) => {
    switch (status) {
      case "Ongoing":
        return style.live;
      case "Finished":
        return style.finished;
      case "Scheduled":
        return style.scheduled;
      default:
        return "";
    }
  };
  const getModifyStatus = (status) => {
    if (status === "Ongoing") {
      return "Live";
    }
    if (status === "Scheduled") {
      return "Match preparing";
    }
    return status;
  };

  return <div className={getStatus(status)}>{getModifyStatus(status)}</div>;
};

export default CardStatus;
