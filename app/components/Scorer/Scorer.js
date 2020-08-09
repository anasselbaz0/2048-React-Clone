import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = {
  scorer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    color: '#555555',
    fontSize: '1rem',
    fontWeight: 800,
    letterSpacing: '2px',
    margin: '2rem'
  },
  score: {
    padding: '10px 30px',
    backgroundColor: '#ffe565',
    marginLeft: '10px'
  }
}

class Scorer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.scorer}>
        SCORE : <span className={classes.score}> {this.props.score} </span>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    score: state.game.score,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Scorer));
