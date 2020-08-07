import { RESET_GRID, SET_GRID_SIZE, SET_SIZE } from './gameActions';
import { resetGrid } from './gameFunctions';

const initialSize = 3;
const initialGridValue = resetGrid(initialSize);
const initialScore = 0;

const initialState = {
  gridSize: initialSize,
  gridValue: initialGridValue,
  score: initialScore,
};

export default function demandsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GRID_SIZE: {
      return {
        ...state,
        gridSize: action.payload,
      };
    }
    case RESET_GRID: {
      return {
        ...state,
        gridValue: resetGrid(state.gridSize),
      };
    }
    case SET_SIZE: {
      return {
        ...state,
        gridSize: action.payload,
        gridValue: resetGrid(action.payload),
      };
    }
    default: {
      return state;
    }
  }
}
