
import React, { Component, PropTypes } from 'react';

import ListItem from 'material-ui/lib/lists/list-item';
import { grey100 } from 'material-ui/lib/styles/colors';

 
const StepItem = (props) => {

  const { selected, cbTouchTap, index, primaryText } = props;

  const grey = "lightgrey"
  const black = "black"

  const style = {
    listItem: {
      fontSize: "1.4em",
      lineHeight: "1em",
      borderBottom: "1px solid lightgrey",
      backgroundColor: selected ? grey100 : null
    }
  }

  return (
    <ListItem style={style.listItem}
              onTouchTap={cbTouchTap.bind(this, index)} 
              primaryText={primaryText} />
  );

}

export default StepItem 
