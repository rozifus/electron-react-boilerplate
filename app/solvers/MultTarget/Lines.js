
import React, { Component, PropTypes } from 'react';

// discrete lines data  [[1, 2], [2, 3], [5,7]]
// 2x continuous line data [[2, 5, 3, 7], [5, 6, 7, 10]]

const Lines = (props) => {

  const { points, data, stroke } = props;


  const buildPath = function () {
    const res = data.map(p => { 
      return p.map((i, idx) => {
        return idx == 0 ? `M${points[i][0]},${points[i][1]}` :  
                          `L${points[i][0]},${points[i][1]}`
      }).join(' ');
    }).join(' ');
    console.log(res);
    return res;
  };

  return (
    <path d={buildPath()} stroke={stroke} fill="none" strokeWidth="0.5" />
  );

};

export default Lines;
