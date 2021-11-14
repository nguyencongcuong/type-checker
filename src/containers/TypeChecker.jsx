import RefreshRounded from '@mui/icons-material/RefreshRounded';
import { Button, Container, Stack, Typography, TextareaAutosize, Alert, Box, List, ListItem } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { database } from "../fixtures/database"
import { randomIndex } from '../helpers/randomIndex'
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

import { MyPaper } from "../components"

export default function TypeCheckerContainer() {

  const [text, setText] = useState(database[randomIndex(0, database.length - 1)].text)
  const [typedText, setTypedText] = useState("")
  const [check, setCheck] = useState(false)

  const inputEl = useRef(null)

  const handleClick = () => {
    setText(database[randomIndex(0, database.length - 1)].text)
    setTypedText("")
    inputEl.current.focus()
  }

  useEffect(() => {
    text === typedText ? setCheck(true) : setCheck(false)
  }, [text, typedText])

  return (
    <Container maxWidth="sm">

      <MyPaper
        bgcolor="#689f38"
        color="white"
        children={text}
        icon={<RefreshRounded onClick={handleClick} />}
      />
      <MyPaper
        bgcolor="#0097a7"
        color="white"
        icon={<CreateRoundedIcon />}
      >
        <TextareaAutosize
          style={{
            background: "transparent",
            color: "white",
            fontFamily: "Roboto",
            outline: "none",
            border: "0",
            width: "100%",
          }}
          value={typedText}
          placeholder="Gõ tại đây..."
          minRows="10"
          onChange={(e) => setTypedText(e.target.value)}
          ref={inputEl}
        />

        {

          !typedText ? <Alert severity="info">Gõ lại chính xác từng ký tự trong câu trên.</Alert>
            : !check ? <Alert severity="error">KẾT QUẢ: Chưa trùng khớp!</Alert>
              : check && <Alert severity="success">KẾT QUẢ: Trùng khớp!</Alert>

        }

      </MyPaper>

      <MyPaper
        bgcolor="#ffc107"
        color="black"
        icon={<StickyNote2RoundedIcon />}
      >
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
      </MyPaper>

    </Container>
  )
}