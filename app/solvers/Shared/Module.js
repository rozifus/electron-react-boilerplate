
import React, { Component, PropTypes } from 'react';
import Input from './Input';

const style = {
  height: '100%'
}

export default class Module extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValues: this.getNulledInputs() 
    };

    this.configure = this.configure.bind(this);
    this.unconfigure = this.unconfigure.bind(this);
  }

  configure(newInputs) {
    let numberValues = {};
    Object.keys(newInputs).map( 
        k => { numberValues[k] = this.convertToInputType(k, newInputs[k]) }
    );
    this.setState({inputValues: numberValues});
  }

  unconfigure() {
    this.setState({inputValues: this.getNulledInputs()});
  }

  getInputByName(name) {
    for (let input of this.props.inputs) {
      if (input.name === name) {
        return input;
      }
    }
    return null;
  }

  convertToInputType(k,v) {
    const input = this.getInputByName(k);
    if (input === null) {
      console.log(`Unknown input for name: ${k}`)
    }
    switch (input.type) {
    case "number":
      return Number(v);
    default:
      console.log(`Unknown type ${input.type} for value ${v}`);
      break;
    }
    return null;
  }

  getNulledInputs() {
    let nulledInputs = {}
    this.props.inputs.map(input => nulledInputs[input.name] = null);
    return nulledInputs;
  }

  isConfigured() {
    return Object.keys(this.state.inputValues).reduce(
        (prevResult, k) => this.state.inputValues[k] !== null && prevResult
    );
  }

  render () { 

    let mode;
    if (this.isConfigured()) {
      mode = <this.props.solution inputValues={this.state.inputValues} 
                                  unconfigureFunc={this.unconfigure} />
    } else {
      mode = <Input inputs={this.props.inputs} 
                    configureFunc={this.configure} />
    }

    return (
      <div style={style}>
        {mode} 
      </div>
    );
  }

}


