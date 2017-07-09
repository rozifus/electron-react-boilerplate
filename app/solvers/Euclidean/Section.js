
import React, { Component, PropTypes } from 'react';

const Section = (props) => {

  const { points, data, stroke } = props;

  const buildPath = function () {
    return data.map(p => { 
      const start = points[p[0]];
      const end   = points[p[1]];
      return `M${start[0]},${start[1]} L${end[0]},${end[1]}`;
    }).join(' ');
  };

  return (
    <path d={buildPath()} stroke={stroke} fill="none" strokeWidth="0.5" />
  );

};

export default Section;
