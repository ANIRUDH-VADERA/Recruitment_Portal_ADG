/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./DomainPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Domain from "./Domain";

function DomainPage() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("Technical");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Navbar navbar={1} />
      <div className="domain_page">
        <div className="main_form">
          <h1 className="heading">Choose a Domain</h1>
          <p className="para">Select a domain and Start Test for Round 1</p>
          <div className="domains">
            <Domain
              handleChange={handleChange}
              selectedValue={selectedValue}
              heading="Technical"
              para="5 Questions . 12 mins . Subjective Type"
            />
            <Domain
              handleChange={handleChange}
              selectedValue={selectedValue}
              heading="Design"
              para="5 Questions . 12 mins . Subjective Type"
            />
            <Domain
              handleChange={handleChange}
              selectedValue={selectedValue}
              heading="Management"
              para="5 Questions . 12 mins . Subjective Type"
            />
          </div>
          <button
            className="btn1"
            onClick={() => {
              navigate("/aboutyou");
            }}
          >
            Start Test
          </button>
        </div>
      </div>
    </>
  );
}

export default DomainPage;
