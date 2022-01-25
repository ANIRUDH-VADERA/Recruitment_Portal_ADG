import React from 'react';
import './TextArea.css';
function TextArea(props) {
    return (
        <>
        <textarea className="textarea input" placeholder="Enter your text here..." onChange={(e) => { props.change(e) }}></textarea>
        </>
  )
}

export default TextArea;
