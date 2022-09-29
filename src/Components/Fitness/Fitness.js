import React, { useEffect, useState } from 'react';

import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Header from '../Header/Header';

import Workout from '../Workout/Workout';

import './Fitness.css';
const Fitness = () => {
    const[workouts, setWorkouts] = useState([]);
    const[exerciseTime, setExerciseTime] =useState([]);

    useEffect(()=>{
        fetch('workouts.json')
        .then(res=>res.json())
        .then(data=> setWorkouts(data))
    },[]);

    const handleAddToList =(workout)=>{
        
        const newExerciseTime =[...exerciseTime, workout]
        setExerciseTime(newExerciseTime);
    }

    return (
        <div className='fitnesses'>
            <div className="workout">
                <Header></Header>
                <h2 className='select-title'>Select today’s exercise</h2>
                <div className='fitness'>
                {
                    workouts.map(workout=><Workout
                    key={workout.id}
                    workout={workout}
                    handleAddToList ={handleAddToList}
                    ></Workout>)
                }
                </div>
            </div>
            <div className="workout-calculation">
                 
        
                 <ExerciseDetails exerciseTime={exerciseTime}>

                     
                 </ExerciseDetails>
                {/* <Addbreak></Addbreak> */}
        
            </div>
        </div>
    );
};

export default Fitness;