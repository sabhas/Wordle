import React from "react"

const qwerty = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
const asd = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
const zxc = ["z", "x", "c", "v", "b", "n", "m"]

type KeypadProps = {
  usedKeys: { [key: string]: string }
}

export default function Keypad({ usedKeys }: KeypadProps) {
  return (
    <div className="keypad">
      <div className="row">
        {qwerty.map((letter) => {
          const color = usedKeys[letter]
          return (
            <div key={letter} className={`item ${color}`}>
              {letter}
            </div>
          )
        })}
      </div>
      <div className="row">
        {asd.map((letter) => {
          const color = usedKeys[letter]
          return (
            <div key={letter} className={`item ${color}`}>
              {letter}
            </div>
          )
        })}
      </div>
      <div className="row">
        {zxc.map((letter) => {
          const color = usedKeys[letter]
          return (
            <div key={letter} className={`item ${color}`}>
              {letter}
            </div>
          )
        })}
      </div>
    </div>
  )
}
