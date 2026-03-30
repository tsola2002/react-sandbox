import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './App.css'
import Button from '@mui/material/Button';

function App() {


  return (
    <>
      <h1>Material Design Web Page</h1>
      <Button variant="contained">Hello world</Button> 

      <h2>Container Layout</h2>  
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </>
  )
}

export default App
