import React from 'react';
import './Footer.css'
const Footer = () => {

const today =new Date();
const year = today.getFullYear()

    return (
        <footer>
            <p className='copyright'>@Copyright reserved {year} </p>
        </footer>
    );
};

export default Footer;