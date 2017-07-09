
import React, { Component, PropTypes } from 'react';
import Layer from './Layer';
import PointRing from '../Shared/PointRing';
import ClockLabels from './ClockLabels';
import GraphSVG from '../Shared/GraphSVG';
import { } from './Algorithm';

const EuclideanClock = (props) => {

  const { steps, stepId } = props
 
  const modulus = Math.max(steps[0][0], steps[0][1]);
  const graphRing = PointRing(modulus, 85);
  const labelRing = PointRing(modulus, 92);

  return (
    <GraphSVG>
      <ClockLabels ring={labelRing} />
      <Layer data={data} points={graphRing} />
    </GraphSVG>
  );

}

export default EuclideanClock 
