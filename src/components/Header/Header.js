import React from 'react';
import Navbar from '../Navbar/Navbar';


const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-3xl'>Save most of your money</h1>
            <p>By giving your money to me!!</p>
        </div>
    );
};

export default Header;