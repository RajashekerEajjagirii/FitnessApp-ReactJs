import React from 'react';
import {Stack,Typography } from '@mui/material';
import DumbellIcon from '../assets/icons/gym.png'

const BodyPart = ({item,bodyPart,setBodyPart}) => {
    return (
        <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-card'
        sx={{
            borderTop: bodyPart===item ? '4px solid #ff2625' : '',
            backgroundColor:'#fff',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'47px'
            }}
            onClick={()=>{
                setBodyPart(item);
                window.scrollTo({top:1800,left:100,behavior:'smooth'});
            }}
             
            // bodyPart===item ? {
            //     borderTop:'4px solid #ff2625',
            //     backgroundColor:'#fff',
            //     borderBottomLeftRadius:'20px',
            //     width:'270px',
            //     height:'280px',
            //     cursor:'pointer',
            //     gap:'47px'
            // } : {
            //     backgroundColor:'#fff',
            //     borderBottomLeftRadius:'20px',
            //     width:'270px',
            //     height:'280px',
            //     cursor:'pointer',
            //     gap:'47px'
            // }
            
        >
            <img src={DumbellIcon} alt='dumbell' style={{width:'40px',height:'40px'}} />
            <Typography fontSize='24px' fontWeight='bold' textTransform='capitalize' color='#3A1212'> 
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;