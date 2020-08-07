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
  tableData: {
    width: '25%',
    height: '25%',
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
                <tr>
                  {row.map(cell => (
                    <td className={classes.tableData}><Cell value={cell}/></td>
                  ))}
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
