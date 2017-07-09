
import React, { Component, PropTypes } from 'react';

import StepItem from '../Shared/StepItem';
 
const EuclideanStepItem = (props) => {

  const { data, curStep, cbSetStep, index } = props;
  const selected = (curStep === index);

  const orange = "orange"
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
    let textColor = selected ? red : orange; 
    return ( 
      <p style={style.p}>
        <span style={{color: textColor}}>{data[0]}</span> * 
        <span style={{color: textColor}}> {data[1]}</span>
      </p>
    )
  }


  return (
    <StepItem selected={selected}
              index={index}
              cbTouchTap={cbSetStep} 
              primaryText={buildText()} />
  );

}

export default EuclideanStepItem 
