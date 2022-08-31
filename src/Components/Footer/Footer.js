import React from 'react'
import './Footer.scss'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Typography } from '@mui/material';

export default function Footer() {
    
  return (
    <div className='footer-container'>
        <div className='socials'>
            <TwitterIcon className='social-icon' />
            <InstagramIcon className='social-icon' />
            <FacebookIcon className='social-icon' />
            <EmailIcon className='social-icon' />
        </div>
        <div className='footer-text'>
            <CopyrightIcon /> <Typography variant='h6' fontFamily={`poppins`} > 2022 MovieTime</Typography>
        </div>
    </div>
  )
}
