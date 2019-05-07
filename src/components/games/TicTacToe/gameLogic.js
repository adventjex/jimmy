import React from 'react';
import * as CONSTANT from './Constants';

const { GAME_SIZE, EMPTY_STATE } = CONSTANT;

function getTileImage(tileData) {
  let tileImage;
  switch (tileData) {
  case EMPTY_STATE:
    tileImage = '*';
    break;
  default:
    tileImage = '*';
    break;
  }
  return tileImage;
}

const gameLogic = {
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

  createBoard: boardData => {
    const boardView = [];
    for (let i = 0; i < boardData.length; i += 1) {
      const boardRow = [];
      for (let j = 0; j < boardData[i].length; j += 1) {
        const tileData = boardData[i][j];
        const tileValue = getTileImage(tileData);
        boardRow.push(<div className="portrait-8" key={`${i}-${j}`}>{tileValue}</div>);
      }
      boardView.push(<div className="row" key={`${i}-row`}>{boardRow}</div>);
    }
    return <div>{boardView}</div>;
  },
};

export default gameLogic;
