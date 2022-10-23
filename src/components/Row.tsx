import React from "react"
import { FormattedGuess } from "../hooks/useWordle"

type RowProps = {
  guess?: FormattedGuess[]
  currentGuess?: string
}

export default function Row({ guess, currentGuess }: RowProps) {
  if (guess) {
    return (
      <div className="grid-row">
        {guess.map((l, i) => (
          <div key={i} className={`cell ${l.color}`}>
            {l.key}
          </div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    const letters = currentGuess.split("")

    return (
      <div className="grid-row">
        {letters.map((letter, i) => (
          <div key={i} className="cell filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i} className="cell"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid-row">
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
    </div>
  )
}
