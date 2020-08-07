import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import { RESET_GRID, resetGrid } from '../../game/gameActions';
import SizeChanger from '../SizeChanger/SizeChanger';


const styles = {
  dashboard: {
    // width: '80%',
    maxWidth: '700px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '3f51b5aa',
    padding: '10px',
  },
  button: {
    backgroundColor: '#ffe92f',
    padding: '1rem 2rem',
    color: '#747474',
    fontSize: '1rem',
    fontWeight: 800,
    letterSpacing: '2px',
    margin: '2rem',
  }
}

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.dashboard}>
        <Button className={classes.button} onClick={this.reset}>
          new game
        </Button>
        <SizeChanger/>
      </div>
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

export default connect(null, mapDispatchToProps)(withStyles(styles)(Dashboard));
