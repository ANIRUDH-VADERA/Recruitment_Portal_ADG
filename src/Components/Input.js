import React from 'react';
import "./Input.css"

function Input(props) {
  return (
      <>
        <label for={props.heading}>{props.heading}</label>
        <input onChange={(e)=>{props.change(e)}} value={props.val} type="text" id={props.heading} name={props.heading} placeholder={props.placeholder} />
      </>
  );
}

export default Input;
