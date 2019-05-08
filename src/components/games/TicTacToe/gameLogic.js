import * as CONSTANT from './Constants';
import winConditions from './winConditions';

const { checkMiddleAndCornerTiles, checkSideTile } = winConditions;

const {
  GAME_SIZE, MIDDLE_TILE, SIDE_TILE, CORNER_TILE,
} = CONSTANT;

const gameLogic = {
  /**
   * resetBoardData returns a blank board.
   * Uses a double for loop to create a 2d array of 0
   * @returns 2D Array
   */
  resetBoardData: () => {
    const blankBoard = [];
    for (let i = 0; i < GAME_SIZE; i += 1) {
      const boardRow = [];
      for (let j = 0; j < GAME_SIZE; j += 1) {
        boardRow.push(0);
      }
      blankBoard.push(boardRow);
    }
    return blankBoard;
  },

  /**
   * isMatchComplete returns true or false if a win condition is satisfied
   * @returns {Boolean} Boolean
   */
  checkIfMatchComplete: (row, col, boardData) => {
    const tilePosition = getTilePosition(row, col);
    let isMatchComplete;

    // based on tile position, it will call a function to check
    switch (tilePosition) {
    case MIDDLE_TILE:
      isMatchComplete = checkMiddleAndCornerTiles(row, col, boardData, MIDDLE_TILE);
      break;
    case CORNER_TILE:
      isMatchComplete = checkMiddleAndCornerTiles(row, col, boardData, CORNER_TILE);
      break;
    case SIDE_TILE:
      isMatchComplete = checkSideTile(row, col, boardData);
      break;
    default:
      isMatchComplete = false;
      break;
    }
    return isMatchComplete;
  },
};

/**
 * Uses basic math and position to determine tile position
 * Works only on an odd grid
 * @param {Number} row
 * @param {Number} col
 */
function getTilePosition(row, col) {
  // check if tile is the middle tile
  const middlePosition = Math.floor(GAME_SIZE / 2);
  if (row === middlePosition && col === middlePosition) {
    return MIDDLE_TILE;
  }

  /**
   * check if tile is corner or side
   * if tile row - col is odd, then it's a side tile
   * if tile row - col is even, then it's a corner tile (since we excluded middle tile above)
   */
  const positionDiff = Math.abs(row - col);
  if (positionDiff % 2 !== 0) {
    return SIDE_TILE;
  } else {
    return CORNER_TILE;
  }
}

export default gameLogic;
