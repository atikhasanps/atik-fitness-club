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
                    <h2 className='info-name'>Ashraf Atik</h2>
                    <p className='info-address'>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className="body">
                <div>
                    <h2 className='body-info' >75kg</h2>
                    <p className='weight'>Weight</p>
                </div>
                <div>
                <h2 className='body-info'>5.5</h2>
                    <p className='weight'>Height</p>
                </div>
                <div>
                <h2 className='body-info'>25yrs</h2>
                    <p className='weight' >Age</p>
                    
                </div>
            </div>

            
            <h2 className='break-title'>Add A Break</h2>
            <div className='breaktime'>
                <div><button onClick={handleAddABreak} className='time'>10s</button></div>
                <div><button onClick={handleAddABreak} className='time'>20s</button></div>
                <div><button onClick={handleAddABreak} className='time'>30s</button></div>
                <div><button onClick={handleAddABreak} className='time'>40s</button></div>
                <div><button onClick={handleAddABreak} className='time'>50s</button></div>
                
            </div>


            <h2 className='details'>Exercise Details</h2>
            <h3 className='details-input'>Exercise time: {Time}minutes</h3>
            <h3 className='details-input'>Break time: {breaktime}</h3>

            <button onClick={notify} className="btn-toast">Activity Completed</button>
            <ToastContainer />
            
        </div>
    );
};

export default ExerciseDetails;