import React from 'react';

const ExerciseDetails = ({exerciseTime}) => {
    return (
        <div>
            <h2>Exercise Details</h2>
            <h3>Exercise time:{exerciseTime.length}</h3>
        </div>
    );
};

export default ExerciseDetails;