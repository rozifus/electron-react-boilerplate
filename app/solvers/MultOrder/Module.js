
import React, { Component, PropTypes } from 'react';

import ModuleBase from '../Shared/Module';

import Solution from './Solution';

const inputs = [
  {
    name: "a",
    type: "number",
    fullWidth: true,
    validations: "isInt",
    floatingLabelText: "Number (a)"
  },
  {
    name: "modulus",
    type: "number",
    fullWidth: true,
    validations: "isInt",
    floatingLabelText: "Modulus (n)"
  }
]

export default class Module extends Component {

  render () { 
    return <ModuleBase solution={Solution} inputs={inputs}/>
  }

}

Module.id = 'mult-order';
Module.title = 'Multiplicative Order';


