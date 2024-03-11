let x;
let y;
let diameter;
let score1;
let state;
let timer;
let state2;



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
    timetext();
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

function scoretext() {
  fill("black");
  textSize(15);
  text("Score: " + score1, width - 60, height - (height - height/20));
}

function timetext() {
  fill("black");
  textSize(15);
  text("Time: " + timer, width - 60, height - (height - height/15));
}

function crosshairs() {
  fill(0);
  rect(mouseX, mouseY + 4, 1, 4);
  rect(mouseX, mouseY - 7, 1, 4);
  rect(mouseX + 4, mouseY, 4, 1);
  rect(mouseX - 7,mouseY, 4, 1);
}

function keyPressed() {
  if (key === "r") {
    score1 = 0;
  }
}

function start() {
  fill("white");
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Click The Mouse To Start The Game!", width/2, height/2);
}

function timecountdown() {
  if (state === "challenge" && state2 === "on") {
    timer = millis();
    state2 = "off";
  }
  if (millis() > timer + 10000 && state2 === "off") {
    state = "game over";
  }
}

function gameover() {
  fill("white");
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Time is over! Your score was " + score1, width/2, height/2);
}

function mouseWheel(event) {
  diameter += event.delta;
}