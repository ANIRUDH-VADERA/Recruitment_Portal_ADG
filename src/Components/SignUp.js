/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import back_img from "../images/back_img.svg";

function SignUp() {
  const navigate = useNavigate();
  const [isOtp, setIsOtp] = useState(0);

  const handleClick = () => {
    setIsOtp(1);
  };

  return (
    <div>
      {isOtp ? (
        <div className="otp_page">
          <div className="left">
            <img alt="background" src={back_img} />
          </div>
          <div className="right">
            <div className="main_form">
              <h1 className="heading">Verify your Account</h1>
              <p className="para">
                Check your VIT Mail Inbox or Spam Folder for the OTP
              </p>
              <form className="form">
                <label htmlFor="fname">OTP</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter the name"
                />
                <p className="bottom">
                  Didn’t recieve OTP?{" "}
                  <span className="resendOTP" onClick={() => {}}>
                    {" "}
                    Resend OTP{" "}
                  </span>
                </p>
              </form>
              <button
                className="btn1"
                onClick={() => {
                  navigate("/aboutyou");
                }}
              >
                Verify OTP
              </button>
              <p
                className="tosignup"
                onClick={() => {
                  setIsOtp(0);
                }}
              >
                Go Back
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="signup_page">
          <div className="left">
            <img alt="background" src={back_img} />
          </div>
          <div className="right">
            <div className="main_form">
              <h1 className="heading">Create an Account</h1>
              <p className="para">Personal information / Contact Details</p>
              <form className="form">
                <label htmlFor="fname">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter the name"
                />
                <label htmlFor="lname">Registration Number</label>
                <input
                  type="text"
                  id="reg"
                  name="reg_no"
                  placeholder="Enter the Reg Number"
                />
                <label htmlFor="lname">VIT Email ID</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter the VIT Email ID"
                />
                <label htmlFor="lname">Phone Number</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  placeholder="Enter the Ph Number with Country Code"
                />
              </form>
              <button
                className="btn1"
                onClick={() => {
                  handleClick();
                }}
              >
                Create an Account
              </button>
              <p className="bottom">
                Already Have an Account?{" "}
                <span
                  className="tologin"
                  onClick={() => {
                    navigate("/Login");
                  }}
                >
                  {" "}
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
