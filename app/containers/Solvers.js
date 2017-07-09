
import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import IconButton from 'material-ui/lib/icon-button';
import IconViewModule from 
       'material-ui/lib/svg-icons/action/view-module';
import SolverTemplate from './SolverTemplate';
import SolverMenu from './SolverMenu';
import EuclideanSolver from '../solvers/Euclidean/EuclideanModule';
import MultTargetSolver from '../solvers/MultTarget/Module';


const solverList = [
  EuclideanSolver,
  MultTargetSolver
]

const style = {
  outer: {
    position: "absolute",
    left: "0px",
    right: "0px",
    top: "0px",
    // hack to fix navbar page displacement
    bottom: "64px"
  },
  inner: {
    height: "100%"
  }
}

export default class Solvers extends React.Component {

  constructor(props) {
    super(props); 

    this.state = {
      navOpen: false,
      solver: 'euclidean' 
    }

    this.setSolver = this.setSolver.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }  

  setSolver( solverId ) {
    this.setState({ solver: solverId,
                    navOpen: false });
  }

  openNav() {
    this.setState({ navOpen: true });
  }

  closeNav() {
    this.setState({ navOpen: false });
  }

  getCurrentSolver() {

    let solver;

    for(let s of solverList) {
      if (this.state.solver === s.id) {
        solver = s;
      }
    }

    if (solver == null) {
      console.log(`UNKNOWN MODULE: ${this.state.solverId}`);
    }

    return solver;

  }

  render() {
    let solver = this.getCurrentSolver();
    let solverFactory = React.createFactory(solver);

    return (
      <div style={style.outer}>
        <AppBar title={solver.title}
                iconElementLeft={
                  <IconButton onTouchTap={this.openNav}>
                    <IconViewModule />
                  </IconButton>
                } />
        <div style={style.inner}> 
          <SolverMenu open={this.state.navOpen}
                      solvers={solverList}
                      closeFunc={this.closeNav} 
                      setSolverFunc={this.setSolver}
                      />
          {solverFactory()}
        </div>
      </div>
    )

  }
}

