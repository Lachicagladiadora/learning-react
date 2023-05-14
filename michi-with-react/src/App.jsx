
// import './App.css'

import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o',
}



const Square = ({ children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
  [0,1,2],
]

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  ) 
  console.log(board)

  const [turn, setTurn] = useState(TURNS.X)
  // null: there is no winner / false: there is a tie 
  const [state, setState] = useState(null) 

  const checkWinner = (boardToCheck) => {
    // we review all winning combinations
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (boardToCheck[a] &&  // [0] -> X u O
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[b] === boardToCheck[c]
        ) {
          return boardToCheck[0] // X u O
        }
    }
    // if there is no winner
    return null 
  }

  const updateBoard = (index) => {
    //  If (you already have something written in that position) ? we do not update : we update
    if (board[index] || winner) return
    // update dashboard
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // change the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // We check if there is a winner
    const newWinner = checkWinner(newBoard)
    if (winner) {
      setWinner(newWinner)
    }
  }

  return (
    <main className="board">
      <h1>MICHI</h1>
      <section className="game">
        {
          board.map((_,index) => {
            return (
              // <div className="cell" key={index}>
              //   <span className="cell_content">
              //     {index}
              //   </span>
              // </div>
              <Square
                key={index} 
                index={index} 
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected = {turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected = {turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
