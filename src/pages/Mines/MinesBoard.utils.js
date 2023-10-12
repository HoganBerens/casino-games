export const minesGameBoard = [
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
  { mine: Boolean, clicked: false },
];

export const handleResetBoard = () => {
  minesGameBoard.forEach((tile) => {
    tile.clicked = false;
    tile.mine = !Math.round(Math.random());
  });
};
