import React, { useState, useEffect } from "react"
import useWordle from "../hooks/useWordle"
import Grid from "./Grid"
import Keypad from "./Keypad"
import ResultModal from "./resultModal"

type WordleProps = {
  solution: string
}

export default function Wordle({ solution }: WordleProps) {
  const {
    currentGuess,
    guesses,
    turn,
    isCorrect,
    usedKeys,
    updateCurrentGuess,
  } = useWordle(solution)
  const [showResultModal, setShowResultModal] = useState(false)

  useEffect(() => {
    // handle keyup event
    const handleKeyup = ({ key }: KeyboardEvent) => updateCurrentGuess(key)

    window.addEventListener("keyup", handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowResultModal(true), 2000)
      window.removeEventListener("keyup", handleKeyup)
    }
    if (turn === 5) {
      setTimeout(() => setShowResultModal(true), 2000)
      window.removeEventListener("keyup", handleKeyup)
    }

    return () => window.removeEventListener("keyup", handleKeyup)
  }, [updateCurrentGuess, isCorrect, turn])

  const handleClick = (key: string) => updateCurrentGuess(key)

  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} handleClick={handleClick} />
      <ResultModal
        isCorrect={isCorrect}
        turn={turn}
        solution={solution}
        open={showResultModal}
      />
    </div>
  )
}
