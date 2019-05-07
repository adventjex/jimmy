import React, { useEffect, useState } from 'react';
import * as CONSTANTS from './Constants';
import gameLogic from './gameLogic';
import Tile from './Tile';
import '../../../styles/css/tic-tac-toe.css';

const { checkIfMatchComplete, resetBoardData } = gameLogic;
const {
  X_STATE, O_STATE, X_TURN, O_TURN,
} = CONSTANTS;

/**
 * TicTacToe main component
 */
function TicTacToe() {
  const [boardData, setBoardData] = useState([[]]);
  const [playerTurn, setPlayerTurn] = useState(X_TURN);

  useEffect(() => {
    const blankBoard = resetBoardData();
    setBoardData(blankBoard);
  }, []);

  /**
   * createBoard loops thru boardData to create a board of Tiles
   */
  function createBoard() {
    const boardView = [];
    for (let i = 0; i < boardData.length; i += 1) {
      const boardRow = [];
      for (let j = 0; j < boardData[i].length; j += 1) {
        const tileData = boardData[i][j];
        boardRow.push(<Tile key={`${j}-col`} tileData={tileData} continueTurn={continueTurn} row={i} col={j} />);
      }
      boardView.push(
        <div className="row" key={`${i}-row`}>
          {boardRow}
        </div>
      );
    }
    return <div>{boardView}</div>;
  }

  /**
   * Select tile based on row and col
   * Change turn after selecting the tile
   * @param {Number} row
   * @param {Number} col
   */
  function selectTile(row, col) {
    const newBoardData = boardData.slice();
    let newState;
    let nextTurn;
    if (playerTurn === X_TURN) {
      newState = X_STATE;
      nextTurn = O_TURN;
    } else {
      newState = O_STATE;
      nextTurn = X_TURN;
    }
    newBoardData[row][col] = newState;
    return {
      newBoardData,
      nextTurn,
    };
  }

  /**
   * Continue turn to select tile, check win, and change turns
   * @param {Number} row
   * @param {Number} col
   */
  function continueTurn(row, col) {
    const { newBoardData, nextTurn } = selectTile(row, col);
    setBoardData(newBoardData);

    const isMatchComplete = checkIfMatchComplete(row, col, boardData);
    setPlayerTurn(nextTurn);
  }

  return (
    <div className="tic_tac_toe">
      <div className="board">{createBoard(boardData)}</div>
    </div>
  );
}

export default TicTacToe;
