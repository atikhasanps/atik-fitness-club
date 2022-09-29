import React, { useState } from 'react';
import './Addbreak.css';
const Addbreak = (props) => {

   
    
    const handleAddABreak = (props) =>{
        console.log('click')
    }


    return (
        <div className='addbreak'>
            {/* <h2>Add A Break</h2>
            <div className='breaktime'>
                <diV><button onClick={props.handleAddABreak} className='time'>10s</button></diV>
                <diV><button className='time'>20s</button></diV>
                <diV><button className='time'>30s</button></diV>
                <diV><button className='time'>40s</button></diV>
                <diV><button className='time'>50s</button></diV>
                
            </div> */}
        </div>
    );
};

export default Addbreak;