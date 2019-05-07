import React, { useEffect, useState } from 'react';
import gameLogic from './gameLogic';

const { createBoard, resetBoardData } = gameLogic;

function TicTacToe() {
  const [boardData, setBoardData] = useState([[]]);

  useEffect(() => {
    const blankBoard = resetBoardData();
    setBoardData(blankBoard);
  }, []);

  return (
    <div className="tic_tac_toe">
      {createBoard(boardData)}
    </div>
  );
}

export default TicTacToe;
