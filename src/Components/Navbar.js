import React from 'react'
import adg_logo from "../images/adg_logo.svg"
import './Navbar.css';

function Navbar(props) {
    return (
        <>
        {props.navbar ? 
        <div className="navbar">
            <img alt = "Adg_Logo" src = {adg_logo} />
            <div className="timer"></div>
            <div className="profile_image"></div>
        </div>
        : 
        <div className="navbar">
            <img alt = "Adg_Logo" src = {adg_logo} />
        </div>
        }
        </>
    )
}

export default Navbar
