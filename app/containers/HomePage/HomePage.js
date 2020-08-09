import React, { Component } from 'react';
import Grid from '../../components/Grid/Grid';
import Dashboard from '../../components/Dashboard/Dashboard';
import Scorer from '../../components/Scorer/Scorer';
import withStyles from '@material-ui/core/styles/withStyles';
import SizeChanger from '../../components/SizeChanger/SizeChanger';
import Button from '@material-ui/core/Button';
import { RESET_GRID } from '../../game/gameActions';
import { connect } from 'react-redux';

const styles = {
  between: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    width: '40vh',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: '3rem'
  },
  button: {
    backgroundColor: '#ffe565',
    padding: '1rem 2rem',
    fontSize: '1rem',
    fontWeight: 800,
    letterSpacing: '2px',
  }
};

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.between}>
          <span className={classes.title}> 2048 </span>
          <Scorer/>
        </div>
        <div className={classes.between}>
          <SizeChanger/>
          <Button className={classes.button} onClick={this.reset}>
            new game
          </Button>
        </div>
        <Grid/>
        <Dashboard/>
      </React.Fragment>
    );
  }

  reset = () => {
    this.props.resetGrid();
  }

}

const mapDispatchToProps = dispatch => {
  return {
    resetGrid: () => dispatch({ type: RESET_GRID }),
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(HomePage));
