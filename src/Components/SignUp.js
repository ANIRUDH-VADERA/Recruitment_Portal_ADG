import React from 'react';
import "./SignUp.css"
import back_img from "../images/back_img.svg"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar.js"
import Button from "./Button.js";
import Input from "./Input.js";

function SignUp() {
    const navigate = useNavigate();
    const [isOtp ,setIsOtp] = useState(0);

    const [name,setName] = useState("");
    const [reg_no,setReg_no] = useState("");
    const [email,setEmail] = useState("");
    const [ph,setPh] = useState("");

    const handleChange1 = (e) => {
        setName(e.target.value);
    }
    const handleChange2 = (e) => {
        setReg_no(e.target.value);
    }
    const handleChange3 = (e) => {
        setEmail(e.target.value);
    }
    const handleChange4 = (e) => {
        setPh(e.target.value);
    }

    const handleClick = ()=>{
        setIsOtp(1);
    }
    
    return (
    <>
    <Navbar navbar = {0} />
    {isOtp ? 
    <div className='otp_page'>
        <div className="left">
            <img alt="background" src={back_img}/>
        </div>
        <div className="right">
            <div className="main_form">
                <h1 className="heading">Verify your Account</h1>
                <p className='para'>Check your VIT Mail Inbox or Spam Folder for the OTP</p>
                <form className="form">
                    <label for="fname">OTP</label>
                    <input type="text" id="name" name="name" placeholder="Enter the name" />
                    <p className="bottom">Didn’t recieve OTP?  <span className="resendOTP" onClick={()=>{}}> Resend OTP </span></p>
                </form>
                <Button class="btn1" ClickFunction = {()=>{navigate("/aboutyou")}} heading = "Verify OTP" />
                <p className="tosignup"  onClick={()=>{setIsOtp(0)}}>Go Back</p>
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
                    <Input setnull = {setName} val={name} change={handleChange1} heading="Name" placeholder= "Enter the name" />
                    <Input setnull = {setReg_no} val={reg_no} change={handleChange2} heading="Registration Number" placeholder= "Enter the Reg Number" />
                    <Input setnull = {setEmail} val={email} change={handleChange3} heading="VIT Email ID" placeholder= "Enter the VIT Email ID" />
                    <Input setnull = {setPh} val={ph} change={handleChange4} heading="Phone Number" placeholder= "Enter the Ph Number with Country Code" />
                </form>
                <Button class="btn1" ClickFunction = {handleClick} heading = "Create an Account" />
                <p className="bottom">Already Have an Account?  <span className="tologin" onClick={()=>{navigate("/Login")}}>  Login</span></p>
            </div>
        </div>
    </div>
    }
    </>
  );
}

export default SignUp;
