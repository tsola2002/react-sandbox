import React from 'react'
import { Box, Grid, Paper, Typography } from "@mui/material";

function Layout() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Paper
        sx={{
          p: 2,
          textAlign: "center",
          fontWeight: "bold",
          bgcolor: "primary.light",
          width: "100vw",
          ml: -2, // cancel out the parent padding
        }}
      >
        HEADER
      </Paper>
    </Box>
  )
}

export default Layout