import React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"

type ModalProps = {
  isCorrect: boolean
  solution: string
  turn: number
  open: boolean
}

export default function ResultModal({
  isCorrect,
  solution,
  turn,
  open,
}: ModalProps) {
  const handleClose = () => window.location.reload()

  return (
    <Modal open={open} onClose={handleClose} className="modal">
      <Box className="message">
        {isCorrect ? (
          <>
            <h1>You Win!</h1>
            <p>You found the solution in {turn} guesses 😊)</p>
          </>
        ) : (
          <>
            <h1>Never mind</h1>
            <p className="solution">{solution}</p>
            <p>Better luck next time )</p>
          </>
        )}
      </Box>
    </Modal>
  )
}
