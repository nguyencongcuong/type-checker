import { Container, Box, Stack, Typography } from '@mui/material'
import React from 'react'


export default function HeaderContainer() {
  return (
    <Container maxWidth="sm" sx={{ background: "#3f7a89", borderRadius: "0 0 20px 20px", color: "white", p: 4}}>
      <Stack direction="row" justifyContent="center">
        <Typography
          sx={{textTransform: "uppercase", fontWeight: 800}}
          children="Luyện gõ tiếng Việt"
        />
      </Stack>
    </Container>
  )
}