
import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';

const style = {
  float: "right",
  height: "100%",
  width: "60%"
}


const Visualization = (props) => {

  return (
    <div style={style} zDepth={0} >
      <props.graph {...props}  />
    </div>
  );

}

export default Visualization
