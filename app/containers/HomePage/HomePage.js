import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '../../components/Grid/Grid';
import SizeChanger from '../../components/SizeChanger/SizeChanger';
import Dashboard from '../../components/Dashboard/Dashboard';

function mapStateToProps(state) {
  return {};
}

const styles = {

}

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <SizeChanger/>
        <Grid/>
        <Dashboard/>
      </React.Fragment>
    );
  }
}

export default (HomePage);
