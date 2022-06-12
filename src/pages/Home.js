import React, { useState } from 'react';

import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        setExercises={setExercises} />
      <Exercises
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        setExercises={setExercises} />
    </Box>
  )
}

export default Home