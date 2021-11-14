import React, { useState } from 'react'
import { Paper, Stack, Box } from "@mui/material"

export default function MyPaper({ children, icon, bgcolor = "white", color="black", ...props }) {

  return (
    <Paper
      {...props}
      elevation={1}
      sx={{ 
        bgcolor: bgcolor, 
        color: color, 
        p: 4, 
        mb: 2,
        opacity: 0.8,
        transition: "all 1s ease-in-out",
        "&:hover": {
          opacity: 1
        }
      }}
    >
      <Box 
        children={icon} 
        sx={{ 
          cursor: "pointer",
          textAlign: "right",
          mb: 2,
        }}
      />
      <Box children={children} />
    </Paper>
  )
}