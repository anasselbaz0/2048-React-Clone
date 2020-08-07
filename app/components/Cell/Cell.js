import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import clsx from 'clsx';

const styles = {
  cellContainer: {
    height: '100%',
    padding: '2px',
    cursor: 'cell',
    display: 'flex'
  },
  cell: {
    color: '#fff',
    borderRadius: '5px',
    flex: '1',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
  },
  v0: {
    border: '1px dotted gray'
  },
  v2: {
    backgroundColor: '#cb7c7c'
  },
  v4: {
    backgroundColor: '#efdd36'
  },
  v8: {
    backgroundColor: '#7ccb7d'
  },
  v16: {
    backgroundColor: '#4c69c1'
  },
  v32: {
    backgroundColor: '#9d7ccb'
  },
  v64: {
    backgroundColor: '#316a74'
  },
  v128: {
    backgroundColor: '#d13fdb'
  },
  v256: {
    backgroundColor: '#ff0000'
  },
}

class Cell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.cellContainer}>
        {this.props.value === 0 && <div className={clsx(classes.cell, classes.v0)}></div>}
        {this.props.value === 2 && <div className={clsx(classes.cell, classes.v2)}> {this.props.value} </div>}
        {this.props.value === 4 && <div className={clsx(classes.cell, classes.v4)}> {this.props.value} </div>}
        {this.props.value === 8 && <div className={clsx(classes.cell, classes.v8)}> {this.props.value} </div>}
        {this.props.value === 16 && <div className={clsx(classes.cell, classes.v16)}> {this.props.value} </div>}
        {this.props.value === 32 && <div className={clsx(classes.cell, classes.v32)}> {this.props.value} </div>}
        {this.props.value === 64 && <div className={clsx(classes.cell, classes.v64)}> {this.props.value} </div>}
        {this.props.value === 128 && <div className={clsx(classes.cell, classes.v128)}> {this.props.value} </div>}
        {this.props.value === 256 && <div className={clsx(classes.cell, classes.v256)}> {this.props.value} </div>}
      </div>
    );
  }
}

export default withStyles(styles)(Cell);
