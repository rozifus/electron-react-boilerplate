
import React, { Component, PropTypes } from 'react';
import Layer from './Layer';
import PointRing from '../Shared/PointRing';
import ClockLabels from './ClockLabels';
import GraphSVG from '../Shared/GraphSVG';
import { BuildPointsToStep, DiscretizePoints,
         FlattenSteps } from './Algorithm';

const EuclideanClock = (props) => {

  const { steps, stepId } = props
 
  const modulus = Math.max(steps[0][0], steps[0][1]);
  const graphRing = PointRing(modulus, 85);
  const labelRing = PointRing(modulus, 92);
  const buildLayers = BuildPointsToStep(steps, stepId);
  const layers = DiscretizePoints(buildLayers, steps);
  const flat = FlattenSteps(layers, steps, stepId);

  return (
    <GraphSVG>
      <ClockLabels ring={labelRing} />
      <Layer data={flat} points={graphRing} />
    </GraphSVG>
  );

}

export default EuclideanClock 
