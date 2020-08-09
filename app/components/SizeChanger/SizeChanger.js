import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { setSize } from '../../game/gameActions';

const styles = {
  sizeChanger: {
    display: 'flex',
    justifyContent: 'center',
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
        <Button onClick={() => this.props.setSize(3)}>3x3</Button>
        <Button onClick={() => this.props.setSize(4)}>4x4</Button>
      </ButtonGroup>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    setSize: (size) => dispatch(setSize(size))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(SizeChanger));
