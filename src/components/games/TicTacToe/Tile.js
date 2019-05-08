import React from 'react';

/**
 * getTileImage uses a constant string to get the correct UI
 * @param {String}
 */
function getTileImage(tileData) {
  let tileImage;
  switch (tileData) {
  case 0:
    tileImage = '';
    break;
  case 1:
    tileImage = 'X';
    break;
  case 2:
    tileImage = 'O';
    break;
  default:
    tileImage = '';
    break;
  }
  return tileImage;
}

/**
 * Tile component to render on the board
 * @param props
 * tileData {String}
 * selectTile {Function}
 * row {Number}
 * col {Number}
 */
function Tile(props) {
  const {
    tileData, onSelectTile, row, col,
  } = props;
  const tileImage = getTileImage(tileData);

  function checkSelectTile() {
    if (tileData === 0) {
      onSelectTile(row, col);
    }
  }
  return <div className="tile" onClick={() => checkSelectTile()}>{tileImage}</div>;
}

export default Tile;
