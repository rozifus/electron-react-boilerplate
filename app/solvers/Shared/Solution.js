
import React, { Component, PropTypes } from 'react';

import StepList from './StepList';
import Visualization from './Visualization';


const style = {
  outer: {
    height: "100%"
  }
}

export default class Solution extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stepId: -1,
      peakStep: -1 
    }
    
    this.setStep = this.setStep.bind(this);
    this.incStep = this.incStep.bind(this);

  }

  setStep (s) { 
    let newPeak = Math.max( this.state.peakStep, s )
    this.setState({stepId: s, peakStep: newPeak });
  }

  incStep () {
    this.setStep( this.state.stepId + 1);
  }

  render () { 

    console.log(this.props.stepList);
    return (
      <div style={style.outer}>
        <this.props.stepList 
                  inputValues={this.props.inputValues}
                  steps={this.props.steps} 
                  stepItem={this.props.stepItem}
                  stepId={this.state.stepId}
                  peakStep={this.state.peakStep}
                  cbIncStep={this.incStep}
                  cbSetStep={this.setStep}
                  navBack={this.props.unconfigureFunc} />
        <Visualization inputValues={this.props.inputValues}
                       steps={this.props.steps} 
                       stepId={this.state.stepId}
                       graph={this.props.graph} />
      </div>
    );
  }

}


