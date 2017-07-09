
import React, { Component, PropTypes } from 'react';
import Section from './Section';
import Lines from './Lines';

const Layer = (props) => {

  const { points, data } = props;
  const layerNumber = props.key;

  return (
    <g>
      <Lines data={data.orange} points={points} stroke="orange" fill="none" strokeWidth="0.2" />
      <Lines data={data.red} points={points} stroke="red" fill="none" strokeWidth="0.2" />
    </g>
  );

};

export default Layer;
