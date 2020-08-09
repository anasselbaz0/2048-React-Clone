import { DOWN, LEFT, RIGHT, UP } from './gameActions';

class SwipeOperation {
  constructor(gridValue, scoreToAdd) {
    this.gridValue = gridValue;
    this.scoreToAdd = scoreToAdd;
  }
}

export function resetGrid(gridSize) {
  let newGrid = [];
  const x1 = Math.floor(Math.random() * (gridSize));
  const y1 = Math.floor(Math.random() * (gridSize));
  let x2 = 0, y2 = 0;
  do {
    x2 = Math.floor(Math.random() * (gridSize));
    y2 = Math.floor(Math.random() * (gridSize));
  } while (x1 === x2 && y1 === y2);
  for (let i = 0; i < gridSize; i++) {
    let row = [];
    for (let j = 0; j < gridSize; j++) {
      // if ((i === x1 && j === y1) || (i === x1 && j === y2)) {
      if ((i === x1 && j === y1) || (i === x2 && j === y2)) {
        const r = Math.floor(Math.random() * 10);
        r > 4 ? row.push(2) : row.push(4);
      } else {
        row.push(0);
      }
    }
    newGrid.push(row);
  }
  return newGrid;
}

function rotateMatrix(matrix, numberOfRotations = 1) {
  for (let r = 0; r < numberOfRotations; r++) {
    // reverse the rows
    matrix = matrix.reverse();
    // swap the symmetric elements
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < i; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }
  return matrix;
}

function add2Numbers(gridValue) {
  const gridSize = gridValue.length;
  let x1 = 0, y1 = 0;
  do {
    x1 = Math.floor(Math.random() * (gridSize));
    y1 = Math.floor(Math.random() * (gridSize));
  } while (gridValue[x1][y1] !== 0);
  const r = Math.floor(Math.random() * 10);
  r > 4 ? gridValue[x1][y1] = 2 : gridValue[x1][y1] = 4;
}

export function swipe(gridValue, direction) {
  let swipeOperation = new SwipeOperation([], 0);
  switch (direction) {
    case LEFT:
      gridValue = rotateMatrix(gridValue, 2);
      swipeOperation = swipeRight(gridValue);
      gridValue = rotateMatrix(swipeOperation.gridValue, 2);
      swipeOperation.gridValue = gridValue;
      break;
    case RIGHT:
      swipeOperation = swipeRight(gridValue);
      break;
    case UP:
      gridValue = rotateMatrix(gridValue, 1);
      swipeOperation = swipeRight(gridValue);
      gridValue = rotateMatrix(swipeOperation.gridValue, 3);
      swipeOperation.gridValue = gridValue;
      break;
    case DOWN:
      gridValue = rotateMatrix(gridValue, 3);
      swipeOperation = swipeRight(gridValue);
      gridValue = rotateMatrix(swipeOperation.gridValue, 1);
      swipeOperation.gridValue = gridValue;
      break;
    // TODO : Toast message: press an arrow
    default:
      console.log('press arrow');
  }
  add2Numbers(swipeOperation.gridValue);
  return swipeOperation;
}

function swipeRight(gridValue) {
  let swipeOperation = new SwipeOperation([], 0);
  const gridSize = gridValue.length;
  gridValue.map(row => {
    let outputRow = [];
    let rowWithoutGaps = row.filter(n => n !== 0);
    if (rowWithoutGaps.length === 0) {
      swipeOperation.gridValue.push(new Array(gridSize).fill(0));
    } else if (rowWithoutGaps.length === 1) {
      swipeOperation.gridValue.push(new Array(gridSize).fill(0));
      swipeOperation.gridValue[swipeOperation.gridValue.length - 1][gridSize - 1] = rowWithoutGaps[0];
    } else {
      while (rowWithoutGaps.length > 0) {
        if (rowWithoutGaps[0] === rowWithoutGaps[1]) {
          swipeOperation.scoreToAdd += rowWithoutGaps[0] + rowWithoutGaps[1];
          outputRow.push(rowWithoutGaps[0] + rowWithoutGaps[1]);
          rowWithoutGaps.shift();
          rowWithoutGaps.shift();
        } else {
          outputRow.push(rowWithoutGaps[0]);
          rowWithoutGaps.shift();
        }
      }
      outputRow = outputRow.reverse();
      let gap = gridSize - outputRow.length;
      if (gap > 0) {
        for (let j = 0; j < gap; j++) {
          outputRow.push(0);
        }
      }
      swipeOperation.gridValue.push(outputRow.reverse());
    }
  });
  return swipeOperation;
}
