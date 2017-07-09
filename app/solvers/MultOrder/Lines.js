
import React, { Component, PropTypes } from 'react';

// discrete lines data  [[1, 2], [2, 3], [5,7]]
// 2x continuous line data [[2, 5, 3, 7], [5, 6, 7, 10]]

const Lines = (props) => {

  const { points, data, stroke } = props;

  const discretePath = function () {
    return data.map(p => { 
      return points[p].map((i, idx) => {
        return idx == 0 ? `M${i[0]},${i[1]}` :  `L${i[0]},${i[1]}`
      }).join(' ');
    }).join(' ');
  };

  return (
    <path d={buildPath()} stroke={stroke} fill="none" strokeWidth="0.5" />
  );

};

export default Lines;
