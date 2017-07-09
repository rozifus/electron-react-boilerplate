
import React, { Component, PropTypes } from 'react';

import { grey400 } from 'material-ui/lib/styles/colors';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import AvReplay from 'material-ui/lib/svg-icons/av/replay';
import Paper from 'material-ui/lib/paper';

import StepListItems from './StepListItems';

const style = {
  outer: {
    float: "left",
    width: "40%",
    height: "100%"
  },
  appbar: {
    backgroundColor: grey400 
  }
}

class StepList extends Component {

  getIconButton() {
    return (<IconButton onClick={this.props.navBack}><AvReplay /></IconButton>)
  }
  
  getTitle() {
    const { steps, stepId, peakStep } = this.props;
    //const answer = steps[steps.length - 1][1];
    
    const answer = "?"
    const shownAnswer = peakStep === steps.length - 1 ? answer : "?";
    return `gcd( ${steps[0][0]} , ${steps[0][1]} ) = ${shownAnswer}`;
  }

  render() { 

    return (
      <Paper style={style.outer} zDepth={1} >
        <AppBar title={this.props.title}
                style={style.appbar}
                iconElementLeft={this.getIconButton()} />
        <StepListItems {...this.props} />
      </Paper> 
    );
  }

}

export default StepList
