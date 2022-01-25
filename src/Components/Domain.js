import React,{useState} from 'react';
import "./Domain.css"
import Radio from '@mui/material/Radio';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AssessmentIcon from '@mui/icons-material/Assessment';

function Domain(props) {

  return (
  <div className="domain_card">
    <div className="image1">
      {props.heading === "Technical" && <PrecisionManufacturingIcon style={{ fontSize: 60}}/>}
      {props.heading === "Design" && <ColorLensIcon style={{ fontSize: 60}}/>}
      {props.heading === "Management" && <AssessmentIcon style={{ fontSize: 60 }}/>}
    </div>
    <div className="info">
      <h1 className="heading">{props.heading}</h1>
      <p className="para">{props.para}</p>
    </div>
    <div className="checkbox">
      <Radio
          checked={props.selectedValue === props.heading}
          onChange={props.handleChange}
          value={props.heading}
          style = {{color :"white"}}
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
    </div>
  </div>
  );
}

export default Domain;
