import React from 'react';
import './Myself.css';

const Myself = () => {
    return (
        <div>
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
        </div>
    );
};

export default Myself;