import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import React, { useState } from 'react'
import { TypeChecker } from '../components'
import { database } from "../fixtures/database"
import { randomIndex } from '../helpers/randomIndex'

export default function TypeCheckerContainer() {

  const [text, setText] = useState(database[randomIndex(0, database.length - 1)].text)

  return (
    <TypeChecker>
      <TypeChecker.Text children={text} />
      <TypeChecker.Button
        variant="outlined"
        startIcon={<RefreshRoundedIcon />}
        children="Thử viết một câu khác"
        onClick={() => setText(database[randomIndex(0, database.length - 1)].text)}
      />
      <TypeChecker.TextArea text={text} />
    </TypeChecker>
  )
}