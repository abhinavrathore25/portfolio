import React from 'react';
import './styles/Navbar.css';
import ABHINAV_RATHORE_RESUME from '../resources/resume.pdf';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='linkContainer'>
                <a href='/#'>Home</a>
                <a href='/#'>Contact</a>
                <a href='/#'>Work</a>
                <a href={ABHINAV_RATHORE_RESUME} download='abhinav'><button>Resume</button></a>
            </div>
        </div>
    )
}

export default Navbar;