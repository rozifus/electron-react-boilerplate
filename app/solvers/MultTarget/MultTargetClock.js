
import React, { Component, PropTypes } from 'react';
import Layer from './Layer';
import PointRing from '../Shared/PointRing';
import ClockLabels from './ClockLabels';
import GraphSVG from '../Shared/GraphSVG';
import { } from './Algorithm';
import Lines from './Lines';

const EuclideanClock = (props) => {

  const { steps, stepId, inputValues } = props
 
  const modulus = inputValues.modulus;
  const graphRing = PointRing(modulus, 85);
  const labelRing = PointRing(modulus, 92);

  return (
    <GraphSVG>
      <ClockLabels points={labelRing} maxLabels={40} />
      <Lines data={steps} points={graphRing} stroke="red"/>
    </GraphSVG>
  );

}

export default EuclideanClock 
