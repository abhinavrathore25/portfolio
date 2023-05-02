import React from 'react';
import './styles/Navbar.css';
import ABHINAV_RATHORE_RESUME from '../resources/resume.pdf';

const Navbar = ({ setAboutModal }) => {
    return (
        <div className='navbar'>
            <div className='linkContainer'>
                <a href='#home'>Home</a>

                <a href='/#' onClick={() => setAboutModal(true)}>Contact</a>

                <a href='#workPage'>Work</a>

                <a href={ABHINAV_RATHORE_RESUME} download='abhinav'>
                    <button className='resume'>Resume</button>
                </a>
            </div>
        </div>
    )
}

export default Navbar;