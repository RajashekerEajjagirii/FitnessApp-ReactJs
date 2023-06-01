import React from 'react';
import { Box,Typography,Button } from '@mui/material';
import HeroBannerImg from '../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <Box sx={{mt:{lg:'212px', xs:'70px'},ml:{xs:'50px'}}}>
            <Typography color='#FF2625' fontWeight='600' fontSize='26px' >
                Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}} mt='30px' mb='23px'>
                Sweat,Smile<br/> And Repeat
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb={4}>
                Check out the most effective Exercises
            </Typography>

            <Button variant="contained" color="error" sx={{backgroundColor:'#FF2625',padding:'10px'}}>
                Explore Exercises</Button>

            <img src={HeroBannerImg} alt='banner' className="hero-banner-img" />
            <Typography fontWeight={600} color='#FF2625' sx={{opacity:0.1,display:{lg:'block',xs:'block'}}} fontSize='150px'>
                Exercises
            </Typography>
        </Box>
    );
};

export default HeroBanner;