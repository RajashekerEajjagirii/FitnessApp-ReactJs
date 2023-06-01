import React, { useEffect, useState } from 'react';
import { Box,Button,Typography,TextField,Stack } from '@mui/material';
import { fetchData,exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {

    const[search,setSearch]=useState('');
    // const[exercises,setExercises]=useState([]);
    const[bodyParts,setBodyParts]=useState([]);

    useEffect(()=>{
        const fetchExercisesData= async ()=>{
            const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
            
        }
        fetchExercisesData();
    },[]);

    const handleSearch=async()=>{
        console.log(search);
        if(search){
            const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
            // console.log(exerciseData);
            
            const SearchedExercises=exerciseData.filter(
                (exercise)=>exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('');
            // console.log(SearchedExercises);
            setExercises(SearchedExercises);
            // console.log(exercises);
        }
    }

    return (
        <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
            <Typography fontWeight={700} 
            sx={{fontSize:{lg:'40px',xs:'30px'}}} mb='50px' mt='50px' textAlign='center'>
                Awesome Exercises You <br/>
                Should Know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField height='76px' value={search} placeholder='Search Exercises By BodyPart or Equipment Names '
                 onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} type='text' 
                 sx={{input:{fontWeight:'700',border:'none',borderRadius:'4px'},width:{lg:'800px',xs:'370px'},backgroundColor:'#fff',borderRadius:'40px'}}>
                </TextField>
                <Button className='search-btn'
                sx={{bgcolor:'#ff2625',color:'#fff',textTransform:'none',
                width:{lg:'175px',xs:'80px'},fontSize:{lg:'20px',xs:'14px'}, height:'56px',position:'absolute',right:'0'}}
                onClick={handleSearch}>
                    Search
                </Button>

            </Box>

            <Box sx={{position:'relative',width:'100%',p:'20px'}}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
            </Box>
        </Stack>
    );
};

export default SearchExercises;