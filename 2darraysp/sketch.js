// 2D Arrays Project
// Aaraiz Afridi

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let cellSize;
const GRID_SIZE = 10;
const pcols = 9;
const prows = 4;
let startButtonCharacteristics;
let startButtonTextCharacteristics;
let state = "title screen";

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }

  grid = generateRandomGrid(prows, pcols);
    

  cellSize = height/grid.length;
}

function draw() {
  if (state === "title screen") {
    background(0, 48, 73);
    titleText();
    startButton();
    changeColorOfStartButton();
    displayStartButton();
    startButtonText();
    displayStartButtonText();
  }
  else if (state === "periodic table") {
    background(0, 48, 73);
    displayGrid();
  }
}

// MAKING THE GRID 48-81
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

function titleText() {
  textAlign(CENTER);
  textFont("Trebuchet MS");
  fill(253, 240, 213);
  textSize(40);
  text("Periodic Table: Transition Metals!", width/2, height/2);
}

function startButton() {
  startButtonCharacteristics = {
    x2: width/2,
    y2: height/1.6,
    wid: 250,
    hei: 60,
    r: 255,
    g: 183,
    b: 3,
  }; 
}

function displayStartButton() {
  rectMode(CENTER);
  strokeWeight(4);
  fill(startButtonCharacteristics.r, startButtonCharacteristics.g, startButtonCharacteristics.b);
  rect(startButtonCharacteristics.x2, startButtonCharacteristics.y2, startButtonCharacteristics.wid, startButtonCharacteristics.hei);
}

function startButtonText() {
  startButtonTextCharacteristics = {
    x3: width/2,
    y3: height/1.55,
    r2: 2,
    g2: 1,
    b2: 3,
  };
}

function displayStartButtonText() {
  textAlign(CENTER);
  textFont("Trebuchet MS");
  fill(startButtonTextCharacteristics.r2, startButtonTextCharacteristics.g2, startButtonTextCharacteristics.b2);
  text("Let's Go!", startButtonTextCharacteristics.x3, startButtonTextCharacteristics.y3);
}

function mousePressed() {
  if (mouseX < startButtonCharacteristics.x2 + 125 && mouseX > startButtonCharacteristics.x2 - 125 && (mouseY > startButtonCharacteristics.y2 - 30 && mouseY < startButtonCharacteristics.y2 + 30)) {
    state = "periodic table";
  }
}

function changeColorOfStartButton() {
  if (mouseX < startButtonCharacteristics.x2 + 125 && mouseX > startButtonCharacteristics.x2 - 125 && (mouseY > startButtonCharacteristics.y2 - 30 && mouseY < startButtonCharacteristics.y2 + 30)) {
    startButtonCharacteristics.r = 255;
    startButtonCharacteristics.g = 255;
    startButtonCharacteristics.b = 255;
  }
}

