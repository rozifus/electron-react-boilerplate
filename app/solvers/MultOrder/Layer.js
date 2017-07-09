
import React, { Component, PropTypes } from 'react';
import Section from './Section';

const Layer = (props) => {

  const { points, data } = props;
  const layerNumber = props.key;

  return (
    <g>
      <Section data={data.orange} points={points} stroke="orange" fill="none" strokeWidth="0.2" />
      <Section data={data.red} points={points} stroke="red" fill="none" strokeWidth="0.2" />
    </g>
  );

};

export default Layer;
