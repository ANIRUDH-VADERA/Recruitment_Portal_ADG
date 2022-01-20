import React from 'react';
import "./Login.css"
import back_img from "../images/back_img.svg"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login() {
  
  const [isOtp ,setIsOtp] = useState(0);

  function handleClick() {
    setIsOtp(1);
  }
  
  const navigate = useNavigate();

  return (  
    <>
    {isOtp ? 
    <div className='otp_page_login'>
      <div className="left">
        <div className="main_form">
              <h1 className="heading">One Time Password</h1>
              <p className='para'>Check your VIT Mail Inbox or Spam Folder for the OTP</p>
              <form className="form">
                  <label for="fname">OTP</label>
                  <input type="text" id="name" name="name" placeholder="Enter the name" />
                  <p className="bottom">Didn’t recieve OTP?  <span className="resendOTP" onClick={()=>{}}> Resend OTP </span></p>
              </form>
              <button className="btn1" onClick={()=>{navigate("/aboutyou")}} >Verify OTP</button>
              <p className="tosignup"  onClick={()=>{setIsOtp(0)}}>Go Back</p>
          </div>
      </div>
      <div className="right">
        <img alt="background" src={back_img}/>
      </div>
  </div>        
    :
    <div className='login_page'>
      <div className="left">
        <div className="main_form">
              <h1 className="heading">Login</h1>
              <p className='para'>Login with your VIT Registration Number</p>
              <form className="form">
                  <label for="fname">Registration Number</label>
                  <input type="text" id="name" name="name" placeholder="Enter your Registration Number. Eg: 20BCE0001" />
              </form>
              <button className="btn1" onClick={()=>{handleClick()}} >Login with OTP</button>
              <p className="bottom">Don’t have an account? <span className="tosignup" onClick={()=>{navigate("/SignUp")}}>  Create One</span></p>
          </div>
      </div>
      <div className="right">
        <img alt="background" src={back_img}/>
      </div>
    </div>
    }
    </>
  );
}

export default Login;
