
import React, { Component, PropTypes } from 'react';
import InputList from './InputList';
//import InputDetails from './InputDetails';

const style = {
  outer: {
    height: "100%"
  }
}

export default class Input extends React.Component {

  constructor(props) {
    super(props);

    this.state = { valid: false };

    this.onValid = this.onValid.bind(this);
    this.onInvalid = this.onInvalid.bind(this);
    this.onSolve = this.onSolve.bind(this);
  }

  onValid() {
    this.setState({valid: true})
  }

  onInvalid() {
    this.setState({valid: false})
  }

  onSolve(data) {
    let numberData = {};
    Object.keys(data).map(key => {
      numberData[key] = Number(data[key])
    });
    this.props.configureFunc(numberData);
  }

  render () { 
    return (
      <div style={style.outer}>
        <InputList inputs={this.props.inputs} 
                   valid={this.state.valid}
                   onValid={this.onValid}
                   onInvalid={this.onInvalid}
                   onSolve={this.onSolve} />
      </div>
    );
  }

}


