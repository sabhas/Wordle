import React from "react"

type ModalProps = {
  isCorrect: boolean
  solution: string
  turn: number
}

export default function Modal({ isCorrect, solution, turn }: ModalProps) {
  return (
    <div className="modal">
      {isCorrect && (
        <div className="message">
          <h1>You Win!</h1>
          <p>You found the solution in {turn} guesses 😊)</p>
        </div>
      )}
      {!isCorrect && (
        <div className="message">
          <h1>Never mind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time )</p>
        </div>
      )}
    </div>
  )
}
