// Aaraiz Afridi
// Interactive Scene Project
// Computer Science 30
// Extra for experts: I made the diameter relative to the mouse wheel. Meaning players can now control the size of their circle by moving their mouse wheel
// you will have 10 seconds to complete the game


// Defining Variables at the top
let x;
let y;
let diameter;
let score1;
let state;
let timer;
let state2;


//setting up the code, assigning values
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  diameter = 100;
  x = random(width - diameter);
  y = random(height - diameter);
  score1 = 0;
  state = "start game";
  state2 = "on";
}

// compilation of all functions
function draw() {
  console.log(state ,  state2);
  // if (state === "challenge" && state2 === "on") {

  if (state === "start game") {
    background("black");
    start();
  }
  else if (state === "challenge") {
    background(220);
    timecountdown();
    scoretext();
    circle1();
    circle2();
    circle3();
    circle4();
    crosshairs();
  }
  else if (state === "game over") {
    background("black");
    gameover();
  }
}

// drawing the target, and how the target is made up of different circles
function circle1() {
  stroke("black");
  fill("red");
  circle(x, y, diameter);
}

function circle2() {
  noStroke();
  fill("white");
  circle(x, y, diameter/1.3);
}

function circle3() {
  noStroke();
  fill("red");
  circle(x, y, diameter/2);
}

function circle4() {
  noStroke();
  fill("white");
  circle(x, y, diameter/4);
}

// depending on where the target is clicked, you gain a certain amount of points
function mouseClicked() {
  if (dist(mouseX, mouseY, x, y) <= 50 && dist(mouseX, mouseY, x, y) > 38.5) {
    score1 = score1 + 1;
    x = random(width - diameter);
    y = random(height - diameter);
  }
  if (dist(mouseX, mouseY, x, y) <= 38.5 && dist(mouseX, mouseY, x, y) > 25) {
    score1 = score1 + 2;
    x = random(width - diameter);
    y = random(height - diameter);
  }
  if (dist(mouseX, mouseY, x, y,) <= 25 && dist(mouseX, mouseY, x, y) > 12.5) {
    score1 = score1 + 3;
    x = random(width - diameter);
    y = random(height - diameter);
  }
  if (dist(mouseX, mouseY, x, y) <= 12.5) {
    score1 = score1 + 5;
    x = random(width - diameter);
    y = random(height - diameter);
  }
  if (state === "start game") {
    state = "challenge";
  }
}

// displays the score
function scoretext() {
  fill("black");
  textSize(15);
  text("Score: " + score1, width - 60, height - (height - height/20));
}

// displays cross hairs so u can aim properly
function crosshairs() {
  fill(0);
  rect(mouseX, mouseY + 4, 1, 4);
  rect(mouseX, mouseY - 7, 1, 4);
  rect(mouseX + 4, mouseY, 4, 1);
  rect(mouseX - 7,mouseY, 4, 1);
}

// if you press r, your score resets (if you want extra challenge or want to prank your friend)
function keyPressed() {
  if (key === "r") {
    score1 = 0;
  }
}

// start screen
function start() {
  fill("white");
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Click The Mouse To Start The Game!", width/2, height/2);
}

// a timer in the game, makes game more competitive
function timecountdown() {
  if (state === "challenge" && state2 === "on") {
    timer = millis();
    state2 = "off";
  }
  if (millis() > timer + 10000 && state2 === "off") {
    state = "game over";
  }
}

// game over screen
function gameover() {
  fill("white");
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Time is over! Your score was " + score1, width/2, height/2);
}

// diameter of target changes depending on how you scroll
function mouseWheel(event) {
  diameter += event.delta;
}