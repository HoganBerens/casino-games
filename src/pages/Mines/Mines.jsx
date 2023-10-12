import React from "react";
import "./Mines.css";
import MinesBoard from "./MinesBoard";

const Mines = (props) => {
  return (
    <div className="mines-container">
      <MinesBoard userBalance={props.userBalance} setUserBalance={props.setUserBalance} />
    </div>
  );
};

export default Mines;
