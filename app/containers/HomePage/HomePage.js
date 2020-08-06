import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class HomePage extends Component {
  render() {
    return (
      <div>
        HomePage
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(HomePage);
