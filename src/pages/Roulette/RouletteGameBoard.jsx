import "./Roulette.css";
import { useState } from "react";
import { prevNumbers, getNumber } from "./Roulette.utils";

const RouletteGameBoard = () => {
  const [rouletteNumber, setRouletteNumber] = useState(Number);
  let number;

  const handleRouletteNumber = () => {
    number = getNumber();
    prevNumbers.unshift(number, " ");
    setRouletteNumber(number);
  };

  return (
    <div className="roulette-game-board-container">
      <div>{rouletteNumber}</div>
      <div>{prevNumbers}</div>
      <button onClick={handleRouletteNumber}>New Number</button>
    </div>
  );
};
export default RouletteGameBoard;
