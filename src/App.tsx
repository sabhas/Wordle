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
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App
