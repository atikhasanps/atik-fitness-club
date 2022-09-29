import React, { useEffect, useState } from 'react';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Header from '../Header/Header';
import Myself from '../Myself/Myself';
import Workout from '../Workout/Workout';

import './Fitness.css';
const Fitness = () => {
    const[workouts, setWorkouts] = useState([]);

    useEffect(()=>{
        fetch('workouts.json')
        .then(res=>res.json())
        .then(data=> setWorkouts(data))
    },[]);

    const handleAddToList =()=>{
        console.log('click');
    }

    return (
        <div className='fitnesses'>
            <div className="workout">
                <Header></Header>
                <h2>Select today’s exercise</h2>
                <div className='fitness'>
                {
                    workouts.map(workout=><Workout
                    workout={workout}
                    handleAddToList ={handleAddToList}
                    ></Workout>)
                }
                </div>
            </div>
            <div className="workout-calculation">
        
        <Myself></Myself>
        <ExerciseDetails></ExerciseDetails>
            </div>
        </div>
    );
};

export default Fitness;