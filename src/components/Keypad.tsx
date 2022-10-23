import React from "react"

const qwerty = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
const asd = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter"]
const zxc = ["z", "x", "c", "v", "b", "n", "m", "Backspace"]

type KeypadProps = {
  usedKeys: { [key: string]: string }
  handleClick: (key: string) => void
}

export default function Keypad({ usedKeys, handleClick }: KeypadProps) {
  return (
    <div className="keypad">
      {[qwerty, asd, zxc].map((keys) => (
        <Row keys={keys} usedKeys={usedKeys} handleClick={handleClick} />
      ))}
    </div>
  )
}

type RowProps = {
  keys: string[]
  usedKeys: { [key: string]: string }
  handleClick: (key: string) => void
}

const Row = ({ keys, usedKeys, handleClick }: RowProps) => {
  return (
    <div className="row">
      {keys.map((letter) => {
        const color = usedKeys[letter]
        return (
          <div
            key={letter}
            className={`key ${color}`}
            onClick={() => handleClick(letter)}
          >
            {letter}
          </div>
        )
      })}
    </div>
  )
}
