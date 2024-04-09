// 2D Grid

// if you are hardcoding a level, I would use something like this

// let grid = [[1, 0, 0, 1],
//             [0, 1, 0, 1],
//             [1, 1, 0, 0],
//             [1, 0, 1, 1],
//             [0, 0, 0, 1],
//             [0, 0, 1, 1],
//             [0, 1, 0, 1],
//             [0, 0, 0, 1]];

// if randomizing the grid, do this:
let grid;
let cellsize;
const GRID_SIZE = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = generaterandomgrid(GRID_SIZE, GRID_SIZE);
  // this is dumb and we should check if this is the right size
  cellsize = height/grid.length;
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  if (key === "r") {
    grid = generaterandomgrid(GRID_SIZE, GRID_SIZE);
  }
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x ++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else {
        fill("white");
      }
      square(x * cellsize, y * cellsize, cellsize);
    }
  }
}

function generaterandomgrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      // half the time be a 1 and the other half be a 0
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function mouseClicked() {
  
}