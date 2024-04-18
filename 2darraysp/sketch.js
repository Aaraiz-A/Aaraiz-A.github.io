// 2D Arrays Project
// Aaraiz Afridi

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let cellSize;
const GRID_SIZE = 10;
const pcols = 4;
const prows = 9;
let startButtonCharacteristics;
let startButtonTextCharacteristics;
let state = "title screen";

function setup() {
  //make the canvas the largest square that you can...
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  
  //if randomizing the grid, do this:
  grid = generateRandomGrid(pcols, prows);
    
  //this is dumb -- should check if this is the right size!
  cellSize = height/grid.length;
}

function draw() {
  if (state === "title screen") {
    background(0, 48, 73);
    titleText();
    startButton();
    mousePressed();
  }
  else if (state === "periodic table") {
    background(220);
    displayGrid();
  }
}

// PERIODIC TABLE ELEMENTS
function toggleCell(x, y) {
  // make sure the cell you're toggling is in the grid...
  if (x < GRID_SIZE && y < GRID_SIZE &&
      x >= 0 && y >= 0) {
    //toggle the color of the cell
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else {
      grid[y][x] = 0;
    }
  }
}


function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      //half the time, be a 1. Other half, be a 0.
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

function generateEmptyGrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function titleText() {
  textAlign(CENTER);
  textFont("Trebuchet MS");
  fill(253, 240, 213);
  textSize(40);
  text("EPIC Periodic Table: Transition Metals!", width/2, height/2);
}

function mousePressed() {
  
}

function startButton() {
  startButtonCharacteristics = {
    x: width/2,
    y: height/1.6,
    wid: 250,
    hei: 60,
    r: 255,
    g: 183,
    b: 3,
    text("Let's Go!", width/2, height/1.55);
  }; 
}

function startButtonText() {
  startButtonTextCharacteristics = {
    r2: 253,
    g2: 183,
    b2: 3,
    wid2: width/2,
    hei2: height/1.55,
  };
}

function displayStartButton() {
  for (let sbc of startButtonCharacteristics) {
    rectMode(CENTER);
    noStroke();
    fill(sbc.r, sbc.g, sbc.b);
    rect(sbc.x, sbc.y, sbc.wid, sbc.hei);
  }
}

function displayStartButtonText() {
  for (let sbtc of startButtonTextCharacteristics) {
    
  }
}