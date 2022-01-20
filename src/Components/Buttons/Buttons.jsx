import React from "react";
import Button from "@mui/material/Button";
import "./Buttons.css";
function Buttons() {
  return (
    <div>
      <button type="button" className=" col py-5 px-40 text-lg text-white ">
        SIGN IN TO GOOGLE
      </button>
      <button
        type="button"
        className=" col-login py-5 px-52 text-lg text-white "
      >
        LOG IN
      </button>
    </div>
  );
}

export default Buttons;
