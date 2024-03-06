let x;
let y;
let radius;
let score1;


function setup() {
  createCanvas(windowWidth, windowHeight);
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
  mouseClicked();
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
  if (mouseX <= circle1() && mouseX >= circle2() && (mouseY <= circle1() && mouseY >= circle2())) {
    score1 = score1 + 1;
  }
  else if (mouseX < circle2() && mouseX >= circle3() && (mouseY < circle2() && mouseY >= circle3())) {
    score1 = score1 + 2;
  }
  else if (mouseX < circle3() && mouseX >= circle4() && (mouseY < circle3() && mouseY >= circle4())) {
    score1 = score1 + 3;
  }
  else if (mouseX < circle4() && mouseY < circle4()) {
    score1 = score1 + 5;
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
  text("Score: " + score1, width - 60, height - (height - height/20));
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