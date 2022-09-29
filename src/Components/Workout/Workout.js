import React from 'react';
import './Workout.css';

const Workout = (props) => {
    
    const {name, img, time} = props.workout;
    
    return (
        <div className='workouts'>
            <img className='workout-img' src={img} alt=''/>
            <h2>{name}</h2>
            <p>Time required: {time}min</p>
            <button onClick={props.handleAddToList} className='btn-workout'>Add to list</button>
        </div>
    );
};

export default Workout;