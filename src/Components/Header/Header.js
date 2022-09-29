import React from 'react';
import logo from '../../image/04012019-25.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='' />
            <h1>ATIK-FITNESS-CLUB</h1>
        </div>
    );
};

export default Header;