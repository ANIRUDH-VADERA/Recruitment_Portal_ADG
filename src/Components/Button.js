import React from 'react';
import "./Button.css"

function Button(props) {
  return  (
  <button className={props.class} onClick={()=>props.ClickFunction()} >{props.heading}</button>
  );
}

export default Button;
