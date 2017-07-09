
import React, { Component, PropTypes } from 'react';
import Dimensions from 'react-dimensions';

import { grey400 } from 'material-ui/lib/styles/colors';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const style = {
  outer: {
    overflow: "auto"
  },
  appbar: {
    backgroundColor: grey400 
  }
}

class StepListItems extends Component {

  getNextButton() {

    const { peakStep, steps, cbIncStep } = this.props;

    if (peakStep < steps.length - 1) {
      return (<ListItem onTouchTap={cbIncStep} primaryText="Next" />);
    } 
    return null;

  }

  render() {

    const { steps, stepId, peakStep, 
            cbSetStep, containerHeight } = this.props;

    return (
      <div style={style.outer}>
        <List style={{height: containerHeight - 64}}>
        {steps.map((data, idx) => {
          if (peakStep >= idx) {
            return <this.props.stepItem data={data} key={idx} index={idx} 
                             curStep={stepId} cbSetStep={cbSetStep} />
          }
          return null
        })}
        {this.getNextButton()}
        </List>
      </div>
    );
  }

}

export default Dimensions()(StepListItems)
