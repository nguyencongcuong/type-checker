import React, {useState, useEffect} from 'react'
import { Container, Typography, TextareaAutosize, Alert, Button, Divider } from "@mui/material"


export default function TypeChecker({ children, ...props }) {
  return (
    <Container
      {...props}
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        p: 2
      }}
    >
      {children}
    </Container>
  )
}

TypeChecker.Text = function TypeCheckerText({ children, ...props }) {
  return (
    <>
      <Typography {...props}>{children}</Typography>
      <Divider />
    </>
  )
}

TypeChecker.Button = function TypeCheckerButton({ children, ...props }) {
  return <Button {...props} >{children}</Button>
}

TypeChecker.TextArea = function TypeCheckerTextArea({ text, ...props }) {
  
  const [typedText, setTypedText] = useState("")
  const [check, setCheck] = useState(false)

  useEffect(() => {
    text === typedText
    ? setCheck(true)
    : setCheck(false)
  }, [typedText, text])

  return (
    <>
    <TextareaAutosize 
      {...props} 
      style={{ 
        fontSize: "1.5rem", 
        border: "3px solid black", 
        outline: "none", 
        width: "100%" ,
        padding: "1em"
      }}
      minRows="10" 
      value={typedText}
      onChange={(e) => setTypedText(e.target.value)}
    />
    {
      !typedText ? <Alert severity="info">Gõ chữ nhé</Alert>
      : !check ? <Alert severity="error">Gõ chưa đúng</Alert>
      : check && <Alert severity="success">Gõ đúng rồi</Alert>
    }
    </>
  )
}
