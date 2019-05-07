import * as CONSTANT from './Constants';

const {
  GAME_SIZE, EMPTY_STATE, MIDDLE_TILE, SIDE_TILE, CORNER_TILE,
} = CONSTANT;

const gameLogic = {
  /**
   * resetBoardData returns a blank board.
   * Uses a double for loop to create a 2d array of EMPTY_STATE
   * @returns 2D Array
   */
  resetBoardData: () => {
    const blankBoard = [];
    for (let i = 0; i < GAME_SIZE; i += 1) {
      const boardRow = [];
      for (let j = 0; j < GAME_SIZE; j += 1) {
        boardRow.push(EMPTY_STATE);
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
    switch (tilePosition) {
    case MIDDLE_TILE:
      isMatchComplete = checkMiddleTile(row, col, boardData);
      break;
    default:
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

/**
 * checkMiddleTile will checkRow, checkCol, checkDiagonal
 * @param {Number} row
 * @param {Number} col
 * @param {2D Array} boardData
 */
function checkMiddleTile(row, col, boardData) {
  if (checkRow(row, boardData)) {
    return true;
  }
  if (checkColumn(col, boardData)) {
    return true;
  }
}

/**
 * checkRow will check the entire row to see if it's a match
 * only needs to check for one row
 * @param {Number} row
 * @param {2D Array} boardData
 */
function checkRow(row, boardData) {
  const rowToCheck = boardData[row];
  const firstTileToCheck = rowToCheck[0];
  for (let i = 1; i < GAME_SIZE; i += 1) {
    if (firstTileToCheck !== rowToCheck[i]) {
      return false;
    }
  }
  return true;
}

/**
 * checkColumn will check the entire column to see if it's a match
 * only needs to check for one column
 * @param {Number} col
 * @param {2D Array} boardData
 */
function checkColumn(col, boardData) {
  const firstTileToCheck = boardData[0][col];
  for (let i = 1; i < GAME_SIZE; i += 1) {
    if (firstTileToCheck !== boardData[i][col]) {
      return false;
    }
  }
  return true;
}

export default gameLogic;
