
import React, { Component, PropTypes } from 'react';

import SolutionBase from '../Shared/Solution';

import { Pairs } from './Algorithm';
import MultTargetStepItem from './MultTargetStepItem';
import MultTargetClock from './MultTargetClock';
import StepList from './StepList';


export default class Solution extends React.Component {

  constructor(props) {
    super(props);

  }

  render () { 

    const target  = this.props.inputValues.target;
    const modulus = this.props.inputValues.modulus;

    console.log(target, modulus);
    const pairs = Pairs(target, modulus);
    console.log(pairs);

    return <SolutionBase inputValues={this.props.inputValues}
                         steps={pairs}
                         stepItem={MultTargetStepItem}
                         stepList={StepList}
                         graph={MultTargetClock}
                         unconfigureFunc={this.props.unconfigureFunc} />;
  }

}


