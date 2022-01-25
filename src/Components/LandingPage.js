import React from 'react'
import "./LandingPage.css"
import Portal from "../images/Portal.svg"
import back_img from "../images/back_img.svg"
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar.js"

function LandingPage() {
    const navigate = useNavigate();
    
    return (
        <>
        <Navbar navbar = {0} />
        <div className='landing_page'>
            <div className="left">
                <div className="info">
                    <h1>ADG VIT</h1>
                    <p className="heading1">Recruitments</p>
                    <img src={Portal} alt = "Portal" className="portal_img" />
                    <p className="para">Tagline Goes Here, hopefully Marketing team delivers</p>
                    <button className="btn1" onClick={()=>{navigate("/SignUp")}} >Sign Up</button>
                    <button className="btn2" onClick={()=>{navigate("/Login")}}>Log In</button>
                </div>
            </div>
            <div className="right">
                <img alt="background" src={back_img}/>
            </div>
        </div>
        </>
    )
}

export default LandingPage
