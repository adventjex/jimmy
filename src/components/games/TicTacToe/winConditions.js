import * as CONSTANT from './Constants';

const {
  GAME_SIZE, MIDDLE_TILE,
} = CONSTANT;

const winConditions = {
  /**
   * checkMiddleAndCornerTiles will checkRow, checkCol, checkDiagonal
   * if it's a corner tile, you only need to check one row, one column, one diagonal
   * if it's a middle tile, you need to check one row, one column, two diagonals
   * @param {Number} row
   * @param {Number} col
   * @param {Array} boardData
   * @param {String} tileType
   */
  checkMiddleAndCornerTiles: (row, col, boardData, tileType) => {
    if (
      checkRow(row, boardData) ||
      checkColumn(col, boardData) ||
      checkDiagonal(row, col, boardData, tileType)
    ) {
      return true;
    }
    return false;
  },

  /**
   * checkSideTile will checkRow, checkCol
   * if it's a side tile, you only need to check one row and one column
   * @param {Number} row
   * @param {Number} col
   * @param {Array} boardData
   */
  checkSideTile: (row, col, boardData) => {
    if (checkRow(row, boardData) || checkColumn(col, boardData)) {
      return true;
    }
    return false;
  },
};

/**
 * checkRow will check the entire row to see if it's a match
 * only needs to check for one row
 * @param {Number} row
 * @param {Array} boardData
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
 * @param {Array} boardData
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
    if (checkDiagonalTopLeftToBottomRight(boardData) || checkDiagonalBottomLeftToTopRight(boardData)) {
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

/**
 * Check from the top left corner diagonally to bottom right
 * @param {Array} boardData
 */
function checkDiagonalTopLeftToBottomRight(boardData) {
  const firstTileToCheck = boardData[0][0];
  for (let i = 1, j = 1; i < GAME_SIZE; i += 1, j += 1) {
    if (firstTileToCheck !== boardData[i][j]) {
      return false;
    }
    return true;
  }
}

/**
 * Check from the bottom left corner diagonally to top right
 * @param {Array} boardData
 */
function checkDiagonalBottomLeftToTopRight(boardData) {
  const lastRow = GAME_SIZE - 1;
  const firstTileToCheck = boardData[lastRow][0];
  for (let i = lastRow - 1, j = 1; i < GAME_SIZE; i -= 1, j += 1) {
    if (firstTileToCheck !== boardData[i][j]) {
      return false;
    }
    return true;
  }
}

export default winConditions;
