// @flow
// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React from 'react'; // , { PropTypes } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import FuelSavingsApp from '../components/FuelSavingsApp/FuelSavingsApp';
import Solvers from './Solvers';
// import * as FuelSavingsActions from '../actions/fuelSavingsActions';

class App extends React.Component {
  render() {
    // const { actions } = this.props;

    return (
      <Solvers />
      // <FuelSavingsApp fuelSavingsAppState={fuelSavingsAppState} actions={actions} />
    );
  }
}

/*
App.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavingsAppState: PropTypes.object.isRequired
};
*/

function mapStateToProps(state) {
  return {
    // fuelSavingsAppState: state.fuelSavingsAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(FuelSavingsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
