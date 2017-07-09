
import React, { Component, PropTypes } from 'react';

import { Steps } from './Algorithm';
import Solution from '../Shared/Solution';
import EuclideanStepList from './EuclideanStepList';
import EuclideanStepItem from './EuclideanStepItem';
import EuclideanClock from './EuclideanClock';


export default class EuclideanSolution extends React.Component {

  constructor(props) {
    super(props);

  }

  render () { 

    const big   = this.props.inputValues.big;
    const small = this.props.inputValues.small;

    const steps = Steps(big, small);

    return <Solution steps={steps}
                     stepList={EuclideanStepList}
                     stepItem={EuclideanStepItem}
                     graph={EuclideanClock}
                     unconfigureFunc={this.props.unconfigureFunc} />;
  }

}


