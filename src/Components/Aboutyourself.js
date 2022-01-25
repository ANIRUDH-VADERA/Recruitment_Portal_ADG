import React from 'react';
import "./Aboutyourself.css"
import back_img from "../images/back_img.svg"
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar.js"
import Button from "./Button.js";

function SignUp() {
    const navigate = useNavigate();

    return (
    <>
    <Navbar navbar = {0} />
    <div className='about_page'>
        <div className="left">
            <img alt="background" src={back_img}/>
        </div>
        <div className="right">
            <div className="main_form">
                <h1 className="heading">Tell us about yourself</h1>
                <p className='para'>Almost Done! Help Us Know you Better</p>
                <form className="form">
                    {/* <label for="fname">Bio</label>
                    <input type="text" id="name" name="name" placeholder="Enter the name" />
                    <label for="fname">Github Profile <span className="optional">(Optional)</span> </label>
                    <input type="text" id="name" name="name" placeholder="Enter the name" />
                    <label for="fname">Portfolio Link <span className="optional">(Optional)</span></label>
                    <input type="text" id="name" name="name" placeholder="Enter the name" /> */}
                </form>
                <Button class="btn1" ClickFunction = {()=>{navigate("/domain")}} heading = "Get Started" />
            </div>
        </div>
    </div>
    </>
  );
}

export default SignUp;
