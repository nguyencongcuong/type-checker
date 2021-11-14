import RefreshRounded from '@mui/icons-material/RefreshRounded';
import { Button, Container, Stack, Typography, TextareaAutosize, Alert, Box, List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { database } from "../fixtures/database"
import { randomIndex } from '../helpers/randomIndex'

export default function TypeCheckerContainer() {

  const [text, setText] = useState(database[randomIndex(0, database.length - 1)].text)
  const [typedText, setTypedText] = useState("")
  const [check, setCheck] = useState(false)

  const handleClick = () => {
    setText(database[randomIndex(0, database.length - 1)].text)
    setTypedText("")
  }

  useEffect(() => {
    text === typedText ? setCheck(true) : setCheck(false)
  }, [text, typedText])

  return (
    <Container maxWidth="sm" sx={{p:4}}>
      <Stack
        direction="column"
        spacing={2}
      >
        <Typography sx={{ fontSize: "1.2rem", textAlign: "justify" }}>{text}</Typography>
        <TextareaAutosize
          style={{
            fontFamily: "Roboto",
            fontSize: "1.2rem",
            padding: "1em",
            outline: "none",
            border: "3px solid #f4f6f3"
          }}
          value={typedText}
          placeholder="Gõ tại đây..."
          minRows="10"
          onChange={(e) => setTypedText(e.target.value)}
        />
        {

          !typedText ? <Alert severity="info">Hãy gõ lại chính xác từng ký tự trong câu trên.</Alert>
            : !check ? <Alert severity="error">Kết quả chưa trùng khớp.</Alert>
              : check && <Alert severity="success">Chúc mừng! Bạn đã gõ đúng rồi!</Alert>

        }
        <Button
          variant="outlined"
          startIcon={<RefreshRounded />}
          onClick={handleClick}
        >
          Thử 1 câu khác
        </Button>

        <Box sx={{ fontSize: "1.2rem", bgcolor: "#ffcc58", color: "white", borderRadius: "5px", p: 2 }}>
          <List>
            {
              [
                ["â", "aa"],
                ["ê", "ee"],
                ["đ", "dd"],
                ["ô", "oo"],
                ["ă", "aw"],
                ["ư", "uw"],
                ["sắc", "s"],
                ["huyền", "f"],
                ["nặng", "j"],
                ["hỏi", "r"],
                ["ngã", "x"]
              ].map((item, index) => <ListItem key={index}>{item[0] + " = " + item[1]}</ListItem>)
            }
          </List>
        </Box>
      </Stack>
    </Container>
  )
}