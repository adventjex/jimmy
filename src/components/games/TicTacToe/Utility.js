import * as CONSTANT from './Constants';

const { GAME_SIZE, EMPTY_STATE } = CONSTANT;

const utility = {
  resetBoardData: () => {
    const blankBoard = [];
    for (let i = 0; i < GAME_SIZE; i += 1) {
      const blankRow = [];
      for (let j = 0; j < GAME_SIZE; j += 1) {
        blankRow.push(EMPTY_STATE);
      }
      blankBoard.push(blankRow);
    }
    return blankBoard;
  },
};

export default utility;
