import React from 'react';
import './Nav.css';

const image = "Netflix_Logo.jpg";
const Nav = () => {
    return (
        <div className = "nav">
            <img className = "nav_logo"
            src = {image} alt="Netflix Logo" />
        </div>
    )
    }

export default Nav;

