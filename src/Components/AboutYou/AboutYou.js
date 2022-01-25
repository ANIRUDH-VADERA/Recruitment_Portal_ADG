import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutYou.css";
import backImg from "../images/back_img.svg";
import Navbar from "../Navbar/Navbar";
import Button from "../Inputs/Button";

function SignUp() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar navbar={0} />
      <div className="about_page">
        <div className="left">
          <img alt="background" src={backImg} />
        </div>
        <div className="right">
          <div className="main_form">
            <h1 className="heading">Tell us about yourself</h1>
            <p className="para">Almost Done! Help Us Know you Better</p>
            <form className="form">
              {/* <label for="fname">Bio</label>
                    <input type="text" id="name" name="name" placeholder="Enter the name" />
                    <label for="fname">Github Profile <span className="optional">(Optional)</span> </label>
                    <input type="text" id="name" name="name" placeholder="Enter the name" />
                    <label for="fname">Portfolio Link <span className="optional">(Optional)</span></label>
                    <input type="text" id="name" name="name" placeholder="Enter the name" /> */}
            </form>
            <Button
              class="btn1"
              ClickFunction={() => {
                navigate("/domain");
              }}
              heading="Get Started"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
