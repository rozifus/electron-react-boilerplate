
import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import LeftNav from 'material-ui/lib/left-nav';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import IconNavigationClose from 
       'material-ui/lib/svg-icons/navigation/close';
import SolverTemplate from './SolverTemplate';


const style = {
  outer: {
    height: "100%"
  }
}

const SolverMenu = (props) => {

  const { open, closeFunc, solvers, setSolverFunc } = props;

  return (
    <LeftNav width={300} open={open}>
      <AppBar title="Algorithms"
              iconElementLeft={
                <IconButton onTouchTap={closeFunc}>
                  <IconNavigationClose />
                </IconButton>
              } />
      {solvers.map((s) => {
        return(
          <MenuItem key={s.id}
                    onTouchTap={setSolverFunc.bind(this, s.id)}>
            {s.title}
          </MenuItem>
        )
      })}
    </LeftNav>
  )

}

export default SolverMenu

