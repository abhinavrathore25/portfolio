import React, { useState } from 'react';
import './styles/Navbar.css';
import ABHINAV_RATHORE_RESUME from '../resources/resume.pdf';

const Navbar = ({ setAboutModal }) => {
    const [hamburgerToggle, sethamburgerToggle] = useState('hideMenu');

    return (
        <div className='navbar'>
            <button className='hamburger' 
            onClick={() => {hamburgerToggle === 'hideMenu' ? sethamburgerToggle('showMenu') : sethamburgerToggle('hideMenu')}}>
                <i className="fa-solid fa-bars"></i>
            </button>

            <div className='linkContainer'>
                <a href='#home'>Home</a>

                <a href='/#' onClick={() => setAboutModal(true)}>Contact</a>

                <a href='#workPage'>Work</a>

                <a href={ABHINAV_RATHORE_RESUME} download='abhinav'>
                    <button className='resume'>Resume</button>
                </a>
            </div>

            <ul className={`navButtonsForMobile ${hamburgerToggle}`}>
                <li>
                    <a href='#home'>Home</a>
                </li>

                <li>
                    <a href='/#' onClick={() => setAboutModal(true)}>Contact</a>
                </li>

                <li>
                    <a href='#workPage'>Work</a>
                </li>

                <li>
                    <a href={ABHINAV_RATHORE_RESUME} download='abhinav'>
                        <button className='resume'>Resume</button>
                    </a>
                </li>

            </ul>

        </div>
    )
}

export default Navbar;