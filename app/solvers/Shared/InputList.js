
import React, { Component, PropTypes } from 'react';

import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

import { grey400 } from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import ContentCreate from 
       'material-ui/lib/svg-icons/content/create';
import List from 'material-ui/lib/lists/list';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';

const style = {
  outer: {
    float: "left",
    width: "40%",
    height: "100%"
  },
  appbar: {
    backgroundColor: grey400 
  },
  form: {
    paddingLeft: "1em",
    paddingRight: "1em"
  }
}

const InputList = (props) => {

  const { inputs, valid, onValid, onInvalid, onSolve} = props

  return (
    <Paper style={style.outer} zDepth={1} >
      <AppBar title="Inputs"
              style={style.appbar}
              iconElementLeft={
                <IconButton>
                  <ContentCreate />
                </IconButton>
              } />
      <Formsy.Form style={style.form}
                   onValid={onValid}
                   onInvalid={onInvalid}
                   onValidSubmit={onSolve}>
        {inputs.map((input,idx) => {
          return (<FormsyText {...input} 
                              key={input.name} required />)
        })}
        <br />
        <br />
        <RaisedButton type="submit" disabled={!props.valid}>
          Solve
        </RaisedButton>
      </Formsy.Form>
    </Paper> 
  );

}

InputList.defaultProps = {
  canSubmit: true 
}

export default InputList 
