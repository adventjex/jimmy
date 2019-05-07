import React from 'react';
import * as CONSTANTS from './Constants';

const { EMPTY_STATE, X_STATE, O_STATE } = CONSTANTS;

/**
 * getTileImage uses a constant string to get the correct UI
 * @param {String}
 */
function getTileImage(tileData) {
  let tileImage;
  switch (tileData) {
  case EMPTY_STATE:
    tileImage = '';
    break;
  case X_STATE:
    tileImage = 'X';
    break;
  case O_STATE:
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
    tileData, continueTurn, row, col,
  } = props;
  const tileImage = getTileImage(tileData);

  function checkSelectTile() {
    if (tileData === EMPTY_STATE) {
      continueTurn(row, col);
    }
  }
  return <div className="tile" onClick={() => checkSelectTile()}>{tileImage}</div>;
}

export default Tile;
