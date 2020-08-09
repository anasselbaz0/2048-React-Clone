import React, { Component } from 'react';
import Grid from '../../components/Grid/Grid';
import Dashboard from '../../components/Dashboard/Dashboard';
import Scorer from '../../components/Scorer/Scorer';
import { swipe } from '../../game/gameFunctions';
import { RIGHT } from '../../game/gameActions';

class HomePage extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <React.Fragment>
        <Scorer/>
        <Grid/>
        <Dashboard/>
      </React.Fragment>
    );
  }
}

export default (HomePage);
