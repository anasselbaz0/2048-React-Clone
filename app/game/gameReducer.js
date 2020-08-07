import { RESET_GRID, SET_GRID_SIZE, SET_SIZE } from './gameActions';
import { resetGrid } from './gameFunctions';

const initialSize = 4;
const initialGridValue = resetGrid(initialSize);

const initialState = {
  gridSize: initialSize,
  gridValue: initialGridValue,
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
