import { SET_GRID_SIZE } from './gameActions';

const initialGridValue = [
  [0,0,8],
  [2,2,4],
  [0,2,0]
];

const initialState = {
  gridSize: 3,
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
    default: {
      return state;
    }
  }
}
