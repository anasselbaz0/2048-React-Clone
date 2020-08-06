import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '../../components/Grid/Grid';
import SizeChanger from '../../components/SizeChanger/SizeChanger';

function mapStateToProps(state) {
  return {};
}

const styles = {

}

class HomePage extends Component {
  render() {
    return (
      <div>
        <SizeChanger/>
        <Grid/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(HomePage);
