// Arrays Project
// Aaraiz Afridi

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theBall = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  maincharactercharacteristics();
  displaymaincharacter();
  keyPressed();
}

function maincharactercharacteristics() {
  let ball = {
    x: width/2,
    y: height,
    diameter: 50,
    dx: 5,
    dy: 5,
  };
  theBall.push(ball);
}

function displaymaincharacter() {
  for (let ball of theBall) {
    circle(ball.x, ball.y  - ball.diameter/2, ball.diameter);
  }
}

// function maincharactermoves() {
//   for (let ball of theBall) {
//     if (keyPressed(87)) { //w
//       ball.y += noise(theBall.dy) * height;
//     }
//     if (keyPressed(83)) { //s
//       ball.y -= ball.dy;
//     }
//     if (keyIsDown(68)) { //d
//       ball.x -= ball.dx;
//     }
//     if (keyIsDown(65)) { //a
//       ball.x += ball.dx;
//     }
//   }
// }

function keyPressed() {
  for (let ball of theBall) {
    if (key === "w") { //w
      ball.y += ball.dy;
    }
    if (key === "s") { //s
      ball.y -= ball.dy;
    }
    if (key === "d") { //d
      ball.x -= ball.dx;
    }
    if (key === "a") { //a
      ball.x += ball.dx;
    }
  }
}