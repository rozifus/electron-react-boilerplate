
import React, { Component, PropTypes } from 'react';

const style = {
  text: {
    textAnchor: "middle",
    alignmentBaseline: "middle",
    dominantBaseline: "middle",
    verticalAlign: "baseline",
    fontSize: "0.4em",
    color: "#cccccc"
  }
}

const ClockLabels = ({ring}) => {

  return (
    <g>
      {ring.map((coord, idx) => {
        return (
          <text key={idx} x={coord[0]} y={coord[1]} style={style.text} >
            {idx}
          </text>)
      })}
    </g>
  )

}

export default ClockLabels
