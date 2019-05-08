import React, { useEffect, useState } from 'react';
import gameLogic from './gameLogic';
import Tile from './Tile';
import '../../../styles/css/tic-tac-toe.css';

const { checkIfMatchComplete, resetBoardData } = gameLogic;

/**
 * TicTacToe main component
 */
function TicTacToe() {
  const [boardData, setBoardData] = useState([[]]);
  const [playerTurn, setPlayerTurn] = useState(1);

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
        boardRow.push(<Tile key={`${j}-${i}-tile`} tileData={tileData} onSelectTile={onSelectTile} row={i} col={j} />);
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
  function changeTile(row, col) {
    const newBoardData = boardData.slice();
    let newState;
    let nextTurn;
    if (playerTurn === 1) {
      newState = 1;
      nextTurn = 2;
    } else {
      newState = 2;
      nextTurn = 1;
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
  function onSelectTile(row, col) {
    const { newBoardData, nextTurn } = changeTile(row, col);
    setBoardData(newBoardData);

    const isMatchComplete = checkIfMatchComplete(row, col, boardData);
    if (isMatchComplete) {
      console.log('win');
    }
    setPlayerTurn(nextTurn);
  }

  return (
    <div className="tic_tac_toe">
      <div className="board">{createBoard()}</div>
    </div>
  );
}

export default TicTacToe;
