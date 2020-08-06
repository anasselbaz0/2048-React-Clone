import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const styles = {
  sizeChanger: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
}

class SizeChanger extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <ButtonGroup color="primary" aria-label="outlined primary button group" className={classes.sizeChanger}>
        <Button>3x3</Button>
        <Button>4x4</Button>
        <Button>5x5</Button>
      </ButtonGroup>
    );
  }
}

export default withStyles(styles)(SizeChanger);
