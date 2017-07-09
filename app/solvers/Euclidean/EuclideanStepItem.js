
import React, { Component, PropTypes } from 'react';

import StepItem from '../Shared/StepItem';
 
const EuclideanStepItem = (props) => {

  const { data, curStep, cbSetStep, index } = props;

  const green = "green"
  const blue = "blue"
  const red = "red"
  const grey = "lightgrey"
  const black = "black"

  const style = {
    p: {
      marginTop: "0.5em",
      marginBottom: "0.5em",
      color: (curStep < index) ? grey : black
    }
  }

  const buildText = () => {
    const bigColor = () => {
      if (curStep > index) { return black }
      if (curStep === index) { return blue }
      return grey;
    }
    const smallColor = () => {
      if (curStep > index + 1) { return black }
      if (curStep > index) { return blue }
      if (curStep === index) { return green } 
      return grey;
    }
    const remColor = () => {
      if (curStep > index + 2) { return black }
      if (curStep > index + 1) { return blue }
      if (curStep > index) { return green }
      if (curStep === index) { return red }
      return grey;
    }
    let text;
    if (data[3] !== 0) {
      text = (
        <p style={style.p}>
          <span style={{color: bigColor()}}>{data[0]}</span> =
          <span> {data[2]}</span> x
          <span style={{color: smallColor()}}> {data[1]}</span> +
          <span style={{color: remColor()}}> {data[3]}</span>
        </p>
      )
    } else {
      text = (
        <p style={style.p}>
          <span style={{color: bigColor()}}>{data[0]}</span> =
          <span> {data[2]}</span> x
          <span style={{color: smallColor()}}> {data[1]}</span>
        </p>
      )
    }
    return text; 
  }

  const selected = (curStep === index);

  return (
    <StepItem selected={selected}
              index={index}
              cbTouchTap={cbSetStep} 
              primaryText={buildText()} />
  );

}

export default EuclideanStepItem 
