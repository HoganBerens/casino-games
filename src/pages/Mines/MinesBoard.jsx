import React, { useState } from "react";
import "./MinesBoard.css";
import { minesGameBoard, handleResetBoard } from "./MinesBoard.utils";

const MinesBoard = (props) => {
  const [continueGame, setContinueGame] = useState(false);
  let userBalance = props.userBalance;
  let setUserBalance = props.setUserBalance;

  const handleLoss = () => {
    console.log("you lose");
  };
  const handleWithdraw = () => {
    handleResetBoard();
    setContinueGame(!continueGame);
  };

  const handleMinesTileClick = (tile) => {
    if (tile.mine === true) {
      tile.clicked = true;
      setContinueGame(!continueGame);
      handleLoss();
    } else {
      tile.clicked = true;
      setContinueGame(!continueGame);
    }
  };

  return (
    <div>
      <div className="mines-game-board-wrapper">
        {minesGameBoard.map((tile, tileIndex) => (
          <div key={tileIndex} onClick={handleMinesTileClick.bind(this, tile)}>
            {tile.clicked ? tile.mine ? <div className="mines-game-board-tile-mine">Mine</div> : <div className="mines-game-board-tile-gem">No Mine</div> : <div className="mines-game-board-tile-default">Click Me</div>}
          </div>
        ))}
      </div>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};
export default MinesBoard;
