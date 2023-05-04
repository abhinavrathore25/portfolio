import React from 'react';
import './styles/AnimatedNumber.css';

const AnimatedNumber = ({ number }) => {
    return (
        <div className='numberContainer'>
            <div className='numberMask'>
            </div>
            <h1 className='number'>{number}</h1>
        </div>
    )
}

export default AnimatedNumber;