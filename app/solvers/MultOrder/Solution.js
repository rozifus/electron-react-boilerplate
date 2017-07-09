
import React, { Component, PropTypes } from 'react';

import SolutionBase from '../Shared/Solution';

import { Steps } from './Algorithm';
import MultOrderStepItem from './MultOrderStepItem';
import MulOrderClock from './MultOrderClock';


export default class Solution extends React.Component {

  constructor(props) {
    super(props);

  }

  render () { 

    const a       = this.props.inputValues.a;
    const modulus = this.props.inputValues.modulus;

    const steps = Steps(a, modulus);
    console.log(steps);

    return <SolutionBase steps={steps}
                         stepItem={MultOrderStepItem}
                         graph={MultOrderClock}
                         unconfigureFunc={this.props.unconfigureFunc} />;
  }

}


