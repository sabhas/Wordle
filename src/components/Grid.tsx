import React from "react"
import Row from "./Row"
import { FormattedGuess } from "../hooks/useWordle"

type GridProps = {
  guesses: FormattedGuess[][]
  currentGuess: string
  turn: number
}

export default function Grid({ guesses, currentGuess, turn }: GridProps) {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />
        }
        return <Row key={i} guess={g} />
      })}
    </div>
  )
}
