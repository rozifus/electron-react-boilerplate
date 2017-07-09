
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

const ClockLabels = ({points, maxLabels}) => {

  const step = Math.ceil(points.length / maxLabels);
  console.log(points.length / maxLabels);
  const labels = points.map((coord, idx) => {
    if (idx % step == 0) {
      return { coord: coord, label: idx }
    }
  }).filter(item => item != null);

  return (
    <g>
      {labels.map((item, idx) => {
        return (
          <text key={idx} x={item.coord[0]} y={item.coord[1]} style={style.text} >
            {item.label}
          </text>)
      })}
    </g>
  )

}

ClockLabels.defaultProps = {
  maxLabels: 50
}


export default ClockLabels
