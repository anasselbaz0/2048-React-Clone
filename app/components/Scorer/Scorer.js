import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = {
  score: {
    padding: '10px 30px',
    backgroundColor: '#ffe565',
    textAlign: 'center',
  }
}

class Scorer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.score}>SCORE <br/> {this.props.score} </div>;
  }

}

const mapStateToProps = (state) => {
  return {
    score: state.game.score,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Scorer));
