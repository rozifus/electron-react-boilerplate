
import React, { Component, PropTypes } from 'react';

const GraphSVG = (props) => {

  const style = {
    div: {
      width: "100%",
      height: "100%"
    },
    svg: {
      height: "100%",
      width: "100%"
    }
  }

  return (
    <div style={style.div}>
      <svg style={style.svg}
           width="100%" height="100%"
           viewBox="-100 -100 200 200"
           preserveAspectRatio="xMidYMid meet"
           xmlns="http://www.w3.org/2000/svg"
           version="1.1">
        {props.children}
      </svg>
    </div>
  );

}

export default GraphSVG 
