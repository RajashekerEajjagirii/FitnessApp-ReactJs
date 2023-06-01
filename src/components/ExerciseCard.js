import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stack,Typography, Button } from '@mui/material';

const ExerciseCard = ({exercise}) => {
    return (
        <Stack>
        <NavLink to={`/exercise/${exercise.id}`}  className='exercise-card'>
            <img src={exercise.gifUrl} alt='exercise.name' loading='lazy' />
            <Stack direction='row'>
                <Button sx={{ml:'21px', color:'#fff',background:'#f59542',fontSize:'14px',
                    borderRadius:'20px',textTransform:'capitalize'}}>
                    {exercise.bodyPart}
                </Button>
                
                <Button sx={{ml:'21px', color:'#fff',background:'#f542f5',fontSize:'14px',
                    borderRadius:'20px',textTransform:'capitalize'}}>
                    {exercise.target}
                </Button>

            </Stack>
            <Typography ml='21px' color='#000' fontWeight='bold' fontSize='20px'
               textTransform='capitalize' mt='11px' pb='10px'>
                {exercise.name}
            </Typography>
        </ NavLink>
        
        </Stack> 
    );
};

export default ExerciseCard;