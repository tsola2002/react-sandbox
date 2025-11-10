import React from 'react'
import {  Grid,  Paper, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


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

      <Grid container spacing={2}>
        <Grid size={4}>
          <Paper
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              bgcolor: "yellow",
            }}
          >
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Nav Item 1" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Nav Item 2" />
                </ListItemButton>
              </ListItem>
                        <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Nav Item 3" />
                </ListItemButton>
              </ListItem>
                        <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Nav Item 4" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          </Paper>
        </Grid>

        <Grid size={4}>
          <Paper
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              bgcolor: "red",
            }}
          >
          Main Content 1
          </Paper>
        </Grid>

        <Grid size={4}>
          <Paper
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              bgcolor: "pink",
            }}
          >
          Main Content 2
          </Paper>
        </Grid>

      
      </Grid>

      <Paper
        sx={{
          p: 2,
          textAlign: "center",
          fontWeight: "bold",
          bgcolor: "orange",
          width: "100vw",
          ml: -2, // cancel out the parent padding
        }}
      >
        FOOTER
      </Paper>
    </Box>
  )
}

export default Layout