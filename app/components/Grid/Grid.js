import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Cell from '../Cell/Cell';
import { swipe } from '../../game/gameFunctions';
import { DOWN, LEFT, RIGHT, setValue, UP } from '../../game/gameActions';

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
  },
};

class Grid extends Component {

  constructor(props) {
    super(props);
    document.addEventListener('keydown', (e) => {
      switch (e.code) {
        case "ArrowRight": {
          const newGridValue = swipe(this.props.gridValue, RIGHT);
          this.props.setValue(newGridValue);
          break;
        }
        case "ArrowLeft": {
          const newGridValue = swipe(this.props.gridValue, LEFT);
          this.props.setValue(newGridValue);
          break;
        }
        case "ArrowUp": {
          const newGridValue = swipe(this.props.gridValue, UP);
          this.props.setValue(newGridValue);
          break;
        }
        case "ArrowDown": {
          const newGridValue = swipe(this.props.gridValue, DOWN);
          this.props.setValue(newGridValue);
          break;
        }
      }
    });
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setValue: (value) => dispatch(setValue(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Grid));
