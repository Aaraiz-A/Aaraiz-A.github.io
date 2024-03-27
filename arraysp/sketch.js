// Arrays Project
// Aaraiz Afridi

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theBall = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  maincharactercharacteristics();
}



function draw() {
  background(0, 150, 255);
  // maincharactercharacteristics();
  displaymaincharacter();
  maincharactermoves();
  // maincharactermoveswithnoise();
  bordercontrol();
}

function maincharactercharacteristics() {
  let ball = {
    x: width/2,
    y: height/2,
    diameter: 50,
    dx: 5,
    dy: 5,
  };
  theBall.push(ball);
}

function displaymaincharacter() {
  for (let ball of theBall) {
    fill(ball.r, ball.g, ball.b);
    circle(ball.x, ball.y  - ball.diameter/2, ball.diameter);
  }
}

function maincharactermoves() {
  for (let ball of theBall) {
    if (keyIsDown(87)) { //w
      ball.y -= ball.dy;
    }
    if (keyIsDown(83)) { //s
      ball.y += ball.dy;
    }
    if (keyIsDown(68)) { //d
      ball.x += ball.dx;
    }
    if (keyIsDown(65)) { //a
      ball.x -= ball.dx;
    }
  }
}

function bordercontrol() {
  for (let ball of theBall) {
    if (ball.x < 0) {
      ball.x = width;
    }
    else if (ball.x > width) {
      ball.x = 0;
    }
  
    if (ball.y < 0) {
      ball.y = height;
    }
    else if (ball.y > height) {
      ball.y = 0;
    }
  }
}

function enemycharacteristics() {
  
}
