import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Cell from '../Cell/Cell';

const styles = {
  grid: {
    height: '40vh',
    width: '40vh',
    backgroundColor: '#e2e2e2',
    borderRadius: '5px',
    padding: '10px',
  },
  fullHW: {
    height: '100%',
    width: '100%',
  },
  row: {
    height: 'height'
  }
}

class Grid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.grid}>
        <table className={classes.fullHW}>
          <tbody>

            {
              this.props.gridValue.map(row => (
                <tr className={classes.row}>
                  <td><Cell value={row[0]}/></td>
                  <td><Cell value={row[1]}/></td>
                  <td><Cell value={row[2]}/></td>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gridSize: state.game.gridSize,
    gridValue: state.game.gridValue,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Grid));
