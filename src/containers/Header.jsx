import { Container, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { MyPaper } from '../components'


export default function HeaderContainer() {
  return (
    <Container maxWidth="sm">
      <MyPaper>
        <Typography
          sx={{ textTransform: "uppercase", fontWeight: 800 }}
          children="Luyện gõ tiếng Việt"
        />
      </MyPaper>
    </Container>
  )
}