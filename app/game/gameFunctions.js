import { RIGHT } from './gameActions';

export function resetGrid(gridSize) {
  let newGrid = [];
  const x1 = Math.floor(Math.random() * (gridSize));
  const y1 = Math.floor(Math.random() * (gridSize));
  let x2=0, y2=0;
  do {
    x2 = Math.floor(Math.random() * (gridSize)) ;
    y2 = Math.floor(Math.random() * (gridSize));
  } while (x1===x2 && y1===y2);
  for (let i = 0; i < gridSize; i++) {
    let row = [];
    for (let j = 0; j < gridSize; j++) {
      if ((i === x1 && j === y1) || (i === x2 && j === y2)) {
        const r = Math.floor(Math.random() * 10);
        r > 4 ? row.push(2) : row.push(4);
      }
      else {
        row.push(0);
      }
    }
    newGrid.push(row);
  }
  return newGrid;
}






export function swipe(gridValue, direction) {
  let newGridValue = [];
  switch(direction) {
    case RIGHT: {
      gridValue.map(row => {
        if(row.max === 0) newGridValue.push([0,0,0,0]);
        else newGridValue.push([4,4,4,4]);
      })
      break;
    }
  }
  return newGridValue;
}
