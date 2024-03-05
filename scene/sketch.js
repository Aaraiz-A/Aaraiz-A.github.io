let x;
let y;
let radius;
let score1;


function setup() {
  createCanvas(1000, 500);
  radius = 100;
  x = random(width - radius);
  y = random(height - radius);
  score1 = 0;
}

function draw() {
  scoretext();
  background(220);
  circle1();
  circle2();
  circle3();
  circle4();
  targetsscore();
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

function targetsscore() {
  if (mouseClicked(circle1)) {
    score1 = score1 + 1;
  }
  if (mouseClicked(circle2)) {
    score1 = score1 + 2;
  }
  if (mouseClicked(circle3)) {
    score1 = score1 + 3;
  }
  if (mouseClicked(circle4)) {
    score1 = score1 + 5;
  }

}

function scoretext() {
  fill("black");
  text("Score:" + score1, 350, 20)
}

