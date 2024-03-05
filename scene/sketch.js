let x;
let y;
let radius;
let score1;


function setup() {
  createCanvas(1000, 500);
  noCursor();
  radius = 100;
  x = random(width - radius);
  y = random(height - radius);
  score1 = 0;
}

function draw() {
  background(220);
  scoretext();
  circle1();
  circle2();
  circle3();
  circle4();
  crosshairs();
  // targetsscore();
  // maketargetmove();
  // mouseWheel();
}

function circle1() {
  stroke("black");
  fill("red");
  circle(x, y, radius);
}

function circle2() {
  noStroke();
  fill("white");
  circle(x, y, radius/1.3);
}

function circle3() {
  noStroke();
  fill("red");
  circle(x, y, radius/2);
}

function circle4() {
  noStroke();
  fill("white");
  circle(x, y, radius/4);
}

function mouseClicked() {
  if (circle(x, y, radius)) {
    score1 = score1 + 1;
  }

}

// function maketargetmove() {
//   if (mouseClicked(circle1 || circle2 || circle3 || circle4)) {
//     x = random(width - radius);
//     y = random(height - radius);
//   }
// }

function scoretext() {
  fill("black");
  text("Score:" + score1, width - 50, height - 475);
}

function crosshairs() {
  fill(0);
  rect(mouseX, mouseY + 4, 1, 4);
  rect(mouseX, mouseY - 7, 1, 4);
  rect(mouseX + 4, mouseY, 4, 1);
  rect(mouseX - 7,mouseY, 4, 1);
}

// function mouseWheel(event) {
//   print(event.delta)
//   radius += event.delta;
// }