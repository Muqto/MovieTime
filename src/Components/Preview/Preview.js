import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import './Preview.scss'
import "react-multi-carousel/lib/styles.css";
import movie1 from '../../Images/beast.jpg'
import movie2 from '../../Images/bt.jpg'
import movie3 from '../../Images/top\ gun.jpg'
import movie4 from '../../Images/spider-man.jpg'
import movie5 from '../../Images/incre.jpg'
import movie6 from '../../Images/fnf.jpg'
import movie7 from '../../Images/batman.jpg'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '1',
  [theme.breakpoints.up('lg')]: {
    fontSize: '3.5rem',
  },
  '@media (max-width:1404px)': {
    fontSize: '3rem',
  },
  '@media (max-width:1070px)': {
    fontSize: '2.5rem',
  },
  
};


const images = [
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
  movie6,
  movie7,
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function Example() {
  const valid = useMediaQuery('(max-width:691px)')
  return (
    <div className='preview-container'>
    <ThemeProvider theme={theme}>
      <Typography className='preview-head-text' variant='h1' fontFamily={`poppins`} fontWeight='600'>We have countless amount of movies that fit your taste</Typography>
    </ThemeProvider> 
      <Carousel 
      containerClass='carousel'
      responsive={responsive}
      centerMode ={!valid}
      autoPlaySpeed={1000}
      infinite = {true}

      >
        {images.map((image,index) => {
          return (
              <img key={index} src={image} />
          )
        } )}
      </Carousel>
    </div>
  )
}
