import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Cell from '../Cell/Cell';
import { swipe } from '../../game/gameFunctions';
import { addScore, DOWN, LEFT, RIGHT, setValue, UP } from '../../game/gameActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          const swipeOperation = swipe(this.props.gridValue, RIGHT);
          this.props.setValue(swipeOperation.gridValue);
          this.addScoreToGame(swipeOperation.scoreToAdd);
          break;
        }
        case "ArrowLeft": {
          const swipeOperation = swipe(this.props.gridValue, LEFT);
          this.props.setValue(swipeOperation.gridValue);
          this.addScoreToGame(swipeOperation.scoreToAdd);
          break;
        }
        case "ArrowUp": {
          const swipeOperation = swipe(this.props.gridValue, UP);
          this.props.setValue(swipeOperation.gridValue);
          this.addScoreToGame(swipeOperation.scoreToAdd);
          break;
        }
        case "ArrowDown": {
          const swipeOperation = swipe(this.props.gridValue, DOWN);
          this.props.setValue(swipeOperation.gridValue);
          this.addScoreToGame(swipeOperation.scoreToAdd);
          break;
        }
        default: {
          toast.info('Press an Arrow !', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          break;
        }
      }
    });
  }

  addScoreToGame(scoreToAdd) {
    if (scoreToAdd > 0) {
      this.props.addScore(scoreToAdd);
    }
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
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
    addScore: (score) => dispatch(addScore(score)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Grid));
