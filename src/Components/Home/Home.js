import React from 'react'
import {Button, Grid, Typography} from '@mui/material'
import './Home.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '1',
  [theme.breakpoints.up('lg')]: {
    fontSize: '6rem',
  },
  '@media (max-width:1404px)': {
    fontSize: '4.5rem',
  },
  '@media (max-width:1070px)': {
    fontSize: '3.5rem',
  },
  
};
theme.typography.h5 = {
  fontSize: '1',
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  },
  '@media (max-width:1200px)': {
    fontSize: '2rem',
  },
  '@media (max-width:770px)': {
    fontSize: '1.3rem',
  },
  
};
export default function Home() {
  return (
    <div className='home-container'>
      <div className='content'>
      <Grid container>
        <Grid item xs={12}>
        <ThemeProvider theme={theme}>
          <Typography fontFamily={`poppins`} fontWeight='600' className='text' variant='h1' >Movies suited perfectly for you!</Typography>
        </ThemeProvider>
        </Grid>
        <Grid item xs={12}>
          <Typography fontFamily={`poppins`} fontWeight='200' className='text' variant='body1' >Looking for a movie to watch? Get started with MovieTime!</Typography>
        </Grid>
        <Grid item xs={12}>
          <div className='home-button-container'>
            <Button className='get-started' variant='contained'>
            <ThemeProvider theme={theme}>
             <Typography variant='h5' fontFamily={`poppins`} fontWeight={700} style={{color: '#050710'}}>Get Started</Typography>
            </ThemeProvider>
            </Button>
          </div>
        </Grid>

      </Grid>
      </div>
      <div className='bg'>

      </div>
    </div>
  )
}
