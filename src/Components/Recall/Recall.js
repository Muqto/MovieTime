import { Button, Typography } from '@mui/material'
import React from 'react'
import './Recall.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '1',
  [theme.breakpoints.up('lg')]: {
    fontSize: '6rem',
  },
  '@media (max-width:1450px)': {
    fontSize: '4.5rem',
  },
  '@media (max-width:1078px)': {
    fontSize: '4rem',
  },
  '@media (max-width:759px)': {
    fontSize: '3rem',
  },
  
};
theme.typography.h3 = {
  fontSize: '1',
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
  '@media (max-width:1200px)': {
    fontSize: '2.5rem',
  },
  '@media (max-width:759px)': {
    fontSize: '1.8rem',
  },
  '@media (max-width:658px)': {
    fontSize: '1.5rem',
  },
  
};
export default function Recall() {
  return (
    <div className='recall-container'>
    <ThemeProvider theme={theme}>
        <Typography variant='h1' fontFamily={`poppins`} fontWeight='700'>Find the movies that are right for you</Typography>
    </ThemeProvider>  
        <div className='recall-button-container'>
        <Button className='recall-button' variant='contained'>
        <ThemeProvider theme={theme}>
        <Typography variant='h3' fontFamily={`poppins`} >Get Started</Typography>
        </ThemeProvider>
        </Button>
        
        </div>
        
    </div>
  )
}
