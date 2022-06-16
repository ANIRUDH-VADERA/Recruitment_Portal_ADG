/* eslint-disable camelcase */
import React from "react";
import adg_logo from "../images/adg_logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img alt="Adg_Logo" src={adg_logo} />
    </div>
  );
}

export default Navbar;
