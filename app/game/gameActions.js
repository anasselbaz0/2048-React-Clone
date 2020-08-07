export const SET_GRID_SIZE = 'SET_GRID_SIZE';
export const RESET_GRID = 'RESET_GRID';
export const SET_SIZE = 'SET_SIZE';

export const RIGHT = 'RIGHT';
export const LEFT = 'LEFT';
export const UP = 'UP';
export const DOWN = 'DOWN';

export const resetGrid = () => {
  return {
    type: RESET_GRID
  }
};

export const setSize = (size) => {
  return {
    type: SET_SIZE,
    payload: size
  }
};
