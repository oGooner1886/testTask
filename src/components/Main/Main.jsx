import React, { useContext, useMemo } from "react";
import Card from "../Card/Card";
import Context from "../../Context/Context";

const Main = () => {
  const value = useContext(Context);
  const { data } = value;

  const matches = useMemo(() => data.data.matches, [data.data.matches]);
  return (
    <main>
      {matches.map((item, index) => {
        return (
          <Card
            key={index}
            homeTeam={item.homeTeam}
            awayTeam={item.awayTeam}
            homeScore={item.homeScore}
            awayScore={item.awayScore}
            status={item.status}
            index={index}
          />
        );
      })}
    </main>
  );
};

export default Main;
