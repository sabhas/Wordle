import { useEffect, useState } from "react"
import { WORDS } from "./data"
import Wordle from "./components/Wordle"

function App() {
  const [solution, setSolution] = useState<string>()

  useEffect(() => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)]
    setSolution(randomWord)
  }, [])

  return (
    <div className="App">
      <h1>Wordle</h1>
      <h4>A fun game of guessing 5 lettered word in 5 turns</h4>
      {solution && <Wordle solution={solution} />}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Game Process</h3>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <li>each letter is checked to see if it matches to the solution</li>
          <li>
            each letter is assigned a color based on it's inclusion in the
            solution
          </li>
          <li>exact matches (correct position in the solution) are green</li>
          <li>
            partial matches (in the solution but not the correct position) are
            yellow
          </li>
          <li>none-matches (not in the solution at all) are grey</li>
          <li>the guess is added the grid with the correct colors</li>
          <li> the current guess moves to the next row</li>
          <li>the keypad letters are updated (colors)</li>
        </ul>
      </div>
    </div>
  )
}

export default App
