import React from 'react';
import { Box,Typography,Stack } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetExercises,equipmentExercises}) => {
    console.log(targetExercises);
    return (
        <Box sx={{mt:{lg:'100px',xs:'50px'}}}>
            <Typography variant='h3' mb={10}>
                Similar <span style={{color:'#ff2625'}}>Target Muscle</span> Exercises
                
                <Stack direction='row' sx={{p:'2',position:'relative',mt:'90px'}}>
                    {targetExercises.length ? <HorizontalScrollbar data={targetExercises}/> : <Loader/>}
                </Stack>
            </Typography>

            <Typography variant='h3' mb={5}>
                Similar <span style={{color:'#ff2625'}}>Equipment</span> Exercises
                <Stack direction='row' sx={{p:'2',position:'relative',mt:'90px'}}>
                    {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
                </Stack>
            </Typography>
        </Box>
    );
};

export default SimilarExercises;