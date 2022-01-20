/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./Aboutyourself.css";
import { useNavigate } from "react-router-dom";
import back_img from "../images/back_img.svg";
import Input from "./Inputs/Input";

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="about_page">
      <div className="left">
        <img alt="background" src={back_img} />
      </div>
      <div className="right">
        <div className="main_form">
          <h1 className="heading">Tell us about yourself</h1>
          <p className="para">Almost Done! Help Us Know you Better</p>
          <form className="form">
            <label htmlFor="fname">Bio</label>
            <Input placeholder="Enter the name" />
            <label htmlFor="fname">
              Github Profile <span className="optional">(Optional)</span>{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter the name"
            />
            <label htmlFor="fname">
              Portfolio Link <span className="optional">(Optional)</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter the name"
            />
          </form>
          <button
            className="btn1"
            onClick={() => {
              navigate("/aboutyou");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
