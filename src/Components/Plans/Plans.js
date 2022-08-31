import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import './Plans.scss'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '1',
  [theme.breakpoints.up('lg')]: {
    fontSize: '5rem',
  },
  '@media (max-width:1404px)': {
    fontSize: '4.5rem',
  },
  '@media (max-width:1070px)': {
    fontSize: '3.5rem',
  },
  '@media (max-width:665px)': {
    fontSize: '2.5rem',
  },
  
};
export default function Plans() {
  return (
    <div className='plans-container'>
        <ThemeProvider theme={theme}>
          <Typography className='plans-header' variant='h1' fontFamily={`poppins`} fontWeight='600'>Plans suited for your entertainment!</Typography>
        </ThemeProvider>
        <div className='papers-container'>
        <Grid container alignItems='center' spacing={3}>
            <Grid item container lg={4} md={12} sm={12} xs={12} className='paper-grid' justifyContent='center'>
              <Paper elevation={9} className='paper'>
                <div className='card-content'>
                  <Typography fontFamily={`poppins`} className='card-title' fontWeight={`600`} fontSize='1.2rem'>Free</Typography>
                  <Typography fontFamily={`poppins`} className='card-aud' variant='body2'>For casual audience</Typography>
                  <Typography fontFamily={`poppins`} fontWeight='700' variant='h3' className='card-price'>$0</Typography>
                  <div className='card-benefits'>
                    <span className='card-benefit' ><CheckCircleRoundedIcon className='icon' /><Typography fontWeight={`600`} fontSize={`0.95rem`} fontFamily={`poppins`} className='card-benefit' >1 recommendation per week</Typography></span>
                    <span className='card-benefit' ><CheckCircleRoundedIcon className='icon' /><Typography fontWeight={`600`} fontSize={`0.95rem`} fontFamily={`poppins`} className='card-benefit' >Up to 20,000 movies</Typography></span>
                    <span className='card-benefit' ><CheckCircleRoundedIcon className='icon' /><Typography fontWeight={`600`} fontSize={`0.95rem`} fontFamily={`poppins`} className='card-benefit' >Automatic emails</Typography></span>
                  </div>
                  
                </div>
                <div className='button-container'>
                  <Button className='button' variant='contained'><Typography variant='body1' fontFamily={`Poppins`}>Sign Up</Typography></Button>
                </div>
              </Paper>
            </Grid>
            <Grid item container lg={4} md={12} sm={12} xs={12} className='paper-grid' justifyContent='center' >
              <Paper elevation={9} className='paper diamond-paper'>
              <div className='card-content'>
                  <Typography fontFamily={`poppins`} className='card-title' fontWeight={`600`} fontSize='1.2rem'>Diamond</Typography>
                  <Typography fontFamily={`poppins`} className='card-aud' variant='body2'>For film fanatics</Typography>
                  <div className='pricing'>
                  <Typography fontFamily={`poppins`} fontWeight='700' variant='h3' className='card-price2'>$10</Typography>
                  <Typography fontFamily={`poppins`} fontWeight='300'>/month</Typography>                
                  </div>
                  <div className='card-benefits'>
                    <span className='card-benefit' ><CheckCircleRoundedIcon className='icon' /><Typography fontWeight={`600`} fontSize={`0.95rem`} fontFamily={`poppins`} className='card-benefit' >unlimited recommendations</Typography></span>
                    <span className='card-benefit' ><CheckCircleRoundedIcon className='icon' /><Typography fontWeight={`600`} fontSize={`0.95rem`} fontFamily={`poppins`} className='card-benefit' >Up to 100,000 movies</Typography></span>
                    <span className='card-benefit' ><CheckCircleRoundedIcon className='icon' /><Typography fontWeight={`600`} fontSize={`0.95rem`} fontFamily={`poppins`} className='card-benefit' >Automatic emails</Typography></span>
                    <span className='card-benefit' ><CheckCircleRoundedIcon className='icon' /><Typography fontWeight={`600`} fontSize={`0.95rem`} fontFamily={`poppins`} className='card-benefit' >No ads</Typography></span>
                  </div>
                </div>
                <div className='button-container'>
                  <Button className='button' variant='contained'><Typography fontWeight={600} variant='body1' fontFamily={`Poppins`}>Sign Up</Typography></Button>
                </div>
              </Paper>
            </Grid>
            <Grid item container lg={4} md={12} sm={12} xs={12} className='paper-grid' justifyContent='center'>
              <Paper elevation={9} className='paper'>
              <div className='card-content'>
                  <Typography fontFamily={`poppins`} className='card-title' fontWeight={`600`} fontSize='1.2rem'>Gold</Typography>
                  <Typography fontFamily={`poppins`} className='card-aud' variant='body2'>For movie fans</Typography>
                  <div className='pricing'>
                  <Typography fontFamily={`poppins`} fontWeight='700' variant='h3' className='card-price2'>$5</Typography>
                  <Typography fontFamily={`poppins`} fontWeight='300'>/month</Typography>                
                  </div>
                  <div className='card-benefits'>
                    <span className='card-benefit' ><CheckCircleRoundedIcon className='icon' /><Typography fontWeight={`600`} fontSize={`0.95rem`} fontFamily={`poppins`} className='card-benefit' >5 recommendations per week</Typography></span>
                    <span className='card-benefit' ><CheckCircleRoundedIcon className='icon' /><Typography fontWeight={`600`} fontSize={`0.95rem`} fontFamily={`poppins`} className='card-benefit' >Up to 40,000 movies</Typography></span>
                    <span className='card-benefit' ><CheckCircleRoundedIcon className='icon' /><Typography fontWeight={`600`} fontSize={`0.95rem`} fontFamily={`poppins`} className='card-benefit' >Automatic emails</Typography></span>
                    <span className='card-benefit' ><CheckCircleRoundedIcon className='icon' /><Typography fontWeight={`600`} fontSize={`0.95rem`} fontFamily={`poppins`} className='card-benefit' >No ads</Typography></span>
                  </div>
                </div>
                <div className='button-container'>
                  <Button className='button' variant='contained'><Typography variant='body1' fontFamily={`Poppins`}>Sign Up</Typography></Button>
                </div>
              </Paper>
            </Grid>
            
        </Grid>
        </div>
    </div>
  )
}