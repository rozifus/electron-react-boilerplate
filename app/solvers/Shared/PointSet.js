
import React, { Component, PropTypes } from 'react';
import Graph from './Graph';
import PointRing from './PointRing';
import ClockLabels from './ClockLabels';
import { BuildPointsToStep, DiscretizePoints } from './Algorithm';

const PointSet = (props) => {

  const { points } = props
 
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

  return React.children.map(props.children, function(child) {
    return React.addons.cloneWithProps(child, {
      points: points
    })
  });

}

export default PointSet 
