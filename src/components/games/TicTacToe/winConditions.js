import * as CONSTANT from './Constants';

const {
  GAME_SIZE, EMPTY_STATE, MIDDLE_TILE, SIDE_TILE, CORNER_TILE,
} = CONSTANT;

const winConditions = {
  /**
   * checkMiddleTile will checkRow, checkCol, checkDiagonal
   * @param {Number} row
   * @param {Number} col
   * @param {2D Array} boardData
   */
  checkMiddleTile: (row, col, boardData) => {
    if (checkRow(row, boardData)) {
      return true;
    }

    if (checkColumn(col, boardData)) {
      return true;
    }

    if (checkDiagonal(row, col, boardData, MIDDLE_TILE)) {
      return true;
    }

    return false;
  },
};

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

/**
 * check diagonal will check which diagonals to check for
 * then it will one of two diagonal checks.
 * @param {Number} row
 * @param {Number} col
 * @param {2D Array} boardData
 * @param {String} tileType
 */
function checkDiagonal(row, col, boardData, tileType) {
  // if it's the middle tile, you check both diagonals
  if (tileType === MIDDLE_TILE) {
    if (checkDiagonalTopLeftToBottomRight(boardData)) {
      return true;
    } else if (checkDiagonalBottomLeftToTopRight(boardData)) {
      return true;
    } else {
      return false;
    }
  }

  // if the difference is 0, then you know you're on top left or bottom right corner
  const diff = Number(row) - Number(col);
  if (diff === 0) {
    return checkDiagonalTopLeftToBottomRight(boardData);
  } else {
    return checkDiagonalBottomLeftToTopRight(boardData);
  }
}

function checkDiagonalTopLeftToBottomRight(boardData) {}

function checkDiagonalBottomLeftToTopRight(boardData) {}

export default winConditions;
