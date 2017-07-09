
import React, { Component, PropTypes } from 'react';

import { grey400 } from 'material-ui/lib/styles/colors';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import AvReplay from 'material-ui/lib/svg-icons/av/replay';
import Paper from 'material-ui/lib/paper';

import StepListBase from '../Shared/StepList';

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

  getTitle() {
    const { steps, stepId, peakStep } = this.props;
    const answer = steps[steps.length - 1][1];
    const shownAnswer = peakStep === steps.length - 1 ? answer : "?";
    return `gcd( ${steps[0][0]} , ${steps[0][1]} ) = ${shownAnswer}`;
  }

  render() { 

    return <StepListBase {...this.props} title={this.getTitle()} />;

  }

}

export default StepList
