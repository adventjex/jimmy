import React, { useEffect, useState } from 'react';
import Utility from './Utility';

const { resetBoardData } = Utility;

function TicTacToe() {
  const [boardData, setBoardData] = useState([]);
  useEffect(() => {
    const blankBoard = resetBoardData();
    setBoardData(blankBoard);
  }, []);

  function createBoard() {
    return (
      <p>{boardData}</p>
    );
  }

  return (
    <div className="tic_tac_toe">
      {createBoard()}
    </div>
  );
}

export default TicTacToe;
