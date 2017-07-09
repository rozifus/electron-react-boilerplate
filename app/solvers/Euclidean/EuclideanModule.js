
import React, { Component, PropTypes } from 'react';
import Module from '../Shared/Module';
import EuclideanSolution from './EuclideanSolution';

const inputs = [
  {
    name: "big",
    type: "number",
    validations: "isInt",
    fullWidth: true,
    floatingLabelText: "First Number (m)"
  },
  {
    name: "small",
    type: "number",
    fullWidth: true,
    validations: "isInt",
    floatingLabelText: "Second Number (n)"
  }
]

export default class EuclideanModule extends Component {

  render () { 
    return <Module solution={EuclideanSolution} inputs={inputs}/>
  }

}

EuclideanModule.id = 'euclidean';
EuclideanModule.title = 'Euclidean Algorithm';


