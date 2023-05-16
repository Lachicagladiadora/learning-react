import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) => {
    // we review all winning combinations
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (
        boardToCheck[a] &&  // [0] -> X u O
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
        ) {
          return boardToCheck[0] // X u O
        }
    }
    // if there is no winner
    return null 
  }


  export const checkEndGame = (newBoard) => {
    // We check if there is a tie
    // if there are no empty spaces
    // in the board
    return newBoard.every((square) => square !== null)
  }