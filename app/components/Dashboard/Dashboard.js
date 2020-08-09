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

}

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.dashboard}>


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
