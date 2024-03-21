// Arrays Project
// Aaraiz Afridi

// Extra for Experts:
// - describe what you did to take this project "above and beyond"



// ur wong buddy
let x;
let y;
let diameter;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2;
  y = windowHeight/2;
  diameter = 100;
}

function draw() {
  background(220);
  theCircle();
}

function theCircle() {
  circle(x, y, diameter);
}
