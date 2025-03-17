import React from "react";
import style from "./Card.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardInfo from "./CardInfo/CardInfo";
import CardDetail from "./CardDetail/CardDetail";

const Card = ({ homeTeam, awayTeam, homeScore, awayScore, status }) => {
  return (
    <div className={style.wrapper}>
      <Accordion
        sx={{
          backgroundColor: "#0B0E12",
          color: "#FFFFFF",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <CardInfo
            homeTeam={homeTeam}
            awayTeam={awayTeam}
            homeScore={homeScore}
            awayScore={awayScore}
            status={status}
          />
        </AccordionSummary>
        <AccordionDetails>
          <CardDetail homeTeam={homeTeam} awayTeam={awayTeam} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Card;
