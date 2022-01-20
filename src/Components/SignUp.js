import React from 'react';
import "./SignUp.css"
import back_img from "../images/back_img.svg"
import {useState} from "react";

function SignUp() {
  
    const [isOtp ,setIsOtp] = useState(0);
    
    const handleClick = ()=>{
        setIsOtp(1);
    }
    
    return (
    
    <>
    {isOtp ? 
    <div className='otp_page'>
        <div className="left">
            <img alt="background" src={back_img}/>
        </div>
        <div className="right">
            <div className="main_form">
                <h1 className="heading">Create an Account</h1>
                <p className='para'>Personal information / Contact Details</p>
                <form className="form">
                    <label for="fname">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter the name" />
                    <label for="lname">Registration Number</label>
                    <input type="text" id="reg" name="reg_no" placeholder="Enter the Reg Number" />
                    <label for="lname">VIT Email ID</label>
                    <input type="text" id="email" name="email" placeholder="Enter the VIT Email ID" />
                    <label for="lname">Phone Number</label>
                    <input type="text" id="number" name="number" placeholder="Enter the Ph Number with Country Code" />
                </form>
                <button className="btn1" onClick={()=>{handleClick()}} >Create an Account</button>
                <p className="bottom">Already Have an Account?  <span className="tologin">  Login</span></p>
            </div>
        </div>
    </div>
    : 
    <div className='signup_page'>
        <div className="left">
            <img alt="background" src={back_img}/>
        </div>
        <div className="right">
            <div className="main_form">
                <h1 className="heading">Create an Account</h1>
                <p className='para'>Personal information / Contact Details</p>
                <form className="form">
                    <label for="fname">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter the name" />
                    <label for="lname">Registration Number</label>
                    <input type="text" id="reg" name="reg_no" placeholder="Enter the Reg Number" />
                    <label for="lname">VIT Email ID</label>
                    <input type="text" id="email" name="email" placeholder="Enter the VIT Email ID" />
                    <label for="lname">Phone Number</label>
                    <input type="text" id="number" name="number" placeholder="Enter the Ph Number with Country Code" />
                </form>
                <button className="btn1" onClick={()=>{handleClick()}} >Create an Account</button>
                <p className="bottom">Already Have an Account?  <span className="tologin">  Login</span></p>
            </div>
        </div>
    </div>
    }
    </>
  );
}

export default SignUp;
