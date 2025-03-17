import React, { useCallback, useContext } from "react";
import style from "./Header.module.css";
import logo from "../../assets/Match Tracker.svg";
import Button from "../Common/Button/Button";
import ErrorCard from "../Common/ErrorCard/ErrorCard";
import Context from "../../Context/Context";

const Header = () => {
  const value = useContext(Context);
  const { error } = value;

  const refreshPage = useCallback(() => {
    window.location.reload();
  }, []);
  return (
    <header>
      <div className={style.wrapper}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        {!!error && <ErrorCard />}
        <Button onClick={refreshPage} />
      </div>
    </header>
  );
};

export default Header;
