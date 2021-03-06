import { ADD_SCORE, GAME_OVER, RESET_GRID, SET_SIZE, SET_VALUE } from './gameActions';
import { resetGrid } from './gameFunctions';

const initialSize = 4;
const initialGridValue = resetGrid(initialSize);
const initialScore = 0;

const initialState = {
  gridSize: initialSize,
  gridValue: initialGridValue,
  score: initialScore,
  gameOver: false,
};

export default function demandsReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_GRID: {
      return {
        ...state,
        gridValue: resetGrid(state.gridSize),
        score: 0,
        gameOver: false,
      };
    }
    case GAME_OVER: {
      return {
        ...state,
        gameOver: true,
      };
    }
    case SET_SIZE: {
      return {
        ...state,
        gridSize: action.payload,
        gridValue: resetGrid(action.payload),
      };
    }
    case SET_VALUE: {
      return {
        ...state,
        gridValue: action.payload,
      };
    }
    case ADD_SCORE: {
      return {
        ...state,
        score: state.score + action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
