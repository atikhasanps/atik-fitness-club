import React, { useEffect, useState } from 'react';
import { addToDb, getBreakTime } from '../Fakedb/fakedb';
import './ExerciseDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ExerciseDetails = ({exerciseTime}) => {

        let Time =0;
        for(const workout of exerciseTime){
            Time = Time + workout.time;
        }


    const [breaktime, setBreaktime] =useState([]);
    const handleAddABreak =(event)=>{
        const value =event.target.innerText;
        setBreaktime(value);
       addToDb(value)
    }
    
    useEffect(()=>{
        const breakTime = getBreakTime();
        console.log(breakTime)
    },[]);

    const notify = () => toast("Wow Activity Completed!");


    return (
        <div className='exerciseDetails'>

            <div className="address">
                <div className='image'><img className='address-img' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/></div>
                <div className='info'>
                    <h2>Ashraf Atik</h2>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className="body">
                <div>
                    <h2>75kg</h2>
                    <p>Weight</p>
                </div>
                <div>
                <h2>5.5</h2>
                    <p>Height</p>
                </div>
                <div>
                <h2>25yrs</h2>
                    <p>Age</p>
                </div>
            </div>

            
            <h2>Add A Break</h2>
            <div className='breaktime'>
                <div><button onClick={handleAddABreak} className='time'>10s</button></div>
                <div><button onClick={handleAddABreak} className='time'>20s</button></div>
                <div><button onClick={handleAddABreak} className='time'>30s</button></div>
                <div><button onClick={handleAddABreak} className='time'>40s</button></div>
                <div><button onClick={handleAddABreak} className='time'>50s</button></div>
                
            </div>


            <h2>Exercise Details</h2>
            <h3>Exercise time: {Time}minutes</h3>
            <h3>Break time: {breaktime}</h3>

            <button onClick={notify} className="btn-toast">Activity Completed</button>
            <ToastContainer />
            
        </div>
    );
};

export default ExerciseDetails;