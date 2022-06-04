import React from "react"
import { Letters } from "../data"

type KeypadProps = {
  usedKeys: { [key: string]: string }
}

export default function Keypad({ usedKeys }: KeypadProps) {
  return (
    <div className="keypad">
      {Letters.map((letter) => {
        const color = usedKeys[letter]
        return (
          <div key={letter} className={color}>
            {letter}
          </div>
        )
      })}
    </div>
  )
}
