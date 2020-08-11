import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Cell from '../Cell/Cell';
import { swipe, SwipeOperation } from '../../game/gameFunctions';
import { addScore, DOWN, gameOver, LEFT, RIGHT, setValue, UP } from '../../game/gameActions';
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
      let swipeOperation = new SwipeOperation();
      switch (e.code) {
        case 'ArrowRight': {
          swipeOperation = swipe(this.props.gridValue, RIGHT);
          break;
        }
        case 'ArrowLeft': {
          swipeOperation = swipe(this.props.gridValue, LEFT);
          break;
        }
        case 'ArrowUp': {
          swipeOperation = swipe(this.props.gridValue, UP);
          break;
        }
        case 'ArrowDown': {
          swipeOperation = swipe(this.props.gridValue, DOWN);
          break;
        }
        default: {
          toast.info('Press an Arrow !', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          break;
        }
      }
      if (swipeOperation.gameOver) {
        toast.error('GAME OVER !', {
          position: 'bottom-right',
          closeOnClick: true,
          draggable: true,
        });
        this.props.setGameOver();
      }
      this.props.setValue(swipeOperation.gridValue);
      this.addScoreToGame(swipeOperation.scoreToAdd);

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
    gameOver: state.game.gameOver,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setValue: (value) => dispatch(setValue(value)),
    addScore: (score) => dispatch(addScore(score)),
    setGameOver: () => dispatch(gameOver()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Grid));
