import React from 'react';
import sleep from '../../../Images/sleep.jpg'
import './NotFound.css'


const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Developer is Sleeping</h2>
            <img className='w-100 ' src={sleep} alt="" />
        </div>
    );
};

export default NotFound;