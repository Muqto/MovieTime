import React from 'react'
import {Button, Grid, Typography} from '@mui/material'
import './Home.scss'
export default function Home() {
  return (
    <div className='home-container'>
      <div className='content'>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontFamily={`poppins`} fontWeight='600' className='text' variant='h2' >Movies suited perfectly for you!</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography fontFamily={`poppins`} fontWeight='100' className='text' variant='body1' >Looking for a movie to watch? Get started with MovieTime!</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button className='get-started' variant='contained'>
           <Typography>Get Started</Typography>
          </Button>
        </Grid>

      </Grid>
      </div>
      <div className='bg'>

      </div>
    </div>
  )
}
