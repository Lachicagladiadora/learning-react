
// import './App.css'

import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square.jsx"
import { TURNS} from "./constants.js"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/winnerModal.jsx"

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  ) 
  // console.log(board)

  const [turn, setTurn] = useState(TURNS.X)
  // null: there is no winner / false: there is a tie 
  // const   [state, setState] = useState(null) 

  const [winner, setWinner] = useState(null)

  

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    // setTurn(TURNS.O) 
    setWinner(null)
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
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      // alert(`the winner is ${newWinner}`)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)  // A tie
    }
  }

  return (
    <main className="board">
      <h1>MICHI</h1>
      <button onClick={resetGame}>Reset Game</button>
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

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )
}

export default App
