
import React, { Component, PropTypes } from 'react';
import Section from './Section';

const Layer = (props) => {

  const { points, data } = props;
  const layerNumber = props.key;

  return (
    <g>
      <Section data={data.green} points={points} stroke="#34CB3F" fill="none" strokeWidth="0.2" />
      <Section data={data.red} points={points} stroke="#D8231A" fill="none" strokeWidth="0.2" />
      <Section data={data.blue} points={points} stroke="#2C6CDC" fill="none" strokeWidth="0.15" />
      <Section data={data.grey} points={points} stroke="#9CA7BB" fill="none" strokeWidth="0.15" />
    </g>
  );

};

export default Layer;
