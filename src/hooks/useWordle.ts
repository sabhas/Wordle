import { useState } from "react"

export interface FormattedGuess {
  key: string
  color: string
}

const useWordle = (solution: string) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState<FormattedGuess[][]>([...Array(5)]) // each guess is an array
  const [history, setHistory] = useState<string[]>([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    const solutionArray: Array<string | null> = [...solution]
    const formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" }
    })

    // find any green letters
    formattedGuess.forEach((l, i) => {
      if (solution[i] === l.key) {
        l.color = "green"
        solutionArray[i] = null
      }
    })

    // find any yellow letters
    formattedGuess.forEach((l) => {
      if (l.color !== "green" && solutionArray.includes(l.key)) {
        l.color = "yellow"
        solutionArray[solutionArray.indexOf(l.key)] = null
      }
    })

    return formattedGuess
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess: FormattedGuess[]) => {
    if (currentGuess === solution) {
      setIsCorrect(true)
    }
    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess]
    })
    setTurn((prevTurn) => {
      return prevTurn + 1
    })
    setCurrentGuess("")
  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }: KeyboardEvent) => {
    if (key === "Enter") {
      if (turn === 5) {
        console.log("you used all your guesses!")
        return
      }
      if (history.includes(currentGuess)) {
        console.log("you already tried that word.")
        return
      }
      if (currentGuess.length !== 5) {
        console.log("word must be 5 chars.")
        return
      }
      const formatted = formatGuess()
      addNewGuess(formatted)
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1))
      return
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key)
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle
