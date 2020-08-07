export function resetGrid(gridSize) {
  let newGrid = [];
  const x1 = Math.floor(Math.random() * (gridSize-1));
  const y1 = Math.floor(Math.random() * (gridSize-1));
  let x2=0, y2=0;
  do {
    x2 = Math.floor(Math.random() * (gridSize-1));
    y2 = Math.floor(Math.random() * (gridSize-1));
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
