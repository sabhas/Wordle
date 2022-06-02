import { useEffect, useState } from "react"
import { WORDS } from "./words"

function App() {
  const [solution, setSolution] = useState<string>()

  useEffect(() => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)]
    setSolution(randomWord)
  }, [])

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <div>Solution is: {solution}</div>}
    </div>
  )
}

export default App
