import { TextareaAutosize } from '@mui/core'
import React from 'react'

export default function Typer({...props}) {
  return (
    <TextareaAutosize
      {...props}
      style={{
        background: "transparent",
        color: "white",
        fontFamily: "Roboto",
        outline: "none",
        border: "0",
        width: "100%",
      }}
      placeholder="Gõ tại đây..."
      minRows="10"
    />
  )
}