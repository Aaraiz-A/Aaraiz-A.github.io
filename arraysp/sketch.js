// Arrays Project
// Aaraiz Afridi

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theBall = [];
const ENEMY_DIAMETER = 25;


function setup() {
  createCanvas(windowWidth, windowHeight);
  maincharactercharacteristics();
  enemycharacteristics();
}



function draw() {
  background(0, 150, 255);
  displaymaincharacter();
  maincharactermoves();
  bordercontrol();
  displayenemy();
  moveenemy();
  enemybouncesoffwall();
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
  let enemy = {
    x2: random(width - ENEMY_DIAMETER),
    y2: random(height - ENEMY_DIAMETER),
    diameter2: ENEMY_DIAMETER,
    dx2: 5,
    dy2: 5,
    speedofenemy: 0,
  };
  theBall.push(enemy);
}

function displayenemy() {
  for (let enemy of theBall) {
    circle(enemy.x2, enemy.y2, enemy.diameter2);
  }
}

function moveenemy() {
  for (let enemy of theBall) {
    enemy.x2 += enemy.dx2;
    enemy.y2 += enemy.dy2;
  }
}

function enemybouncesoffwall() {
  for (let enemy of theBall) {
    if (enemy.x2 + enemy.diameter2/2 >= width || enemy.x2 - enemy.diameter2/2 <= 0) {
      enemy.dx2 = enemy.dx2 * -1.2;
      enemy.speedofenemy = enemy.speedofenemy + 1;
    }
    if (enemy.y2 + enemy.diameter2/2 >= height || enemy.y2 - enemy.diameter2/2 <= 0) {
      enemy.dy2 = enemy.dy2 * -1.2;
      enemy.speedofenemy = enemy.speedofenemy + 1;
    }

  }
}


// let x;
// let y;
// let dx;
// let dy;
// let radius = 30;
// let r = 0;
// let g = 255;
// let b = 0;

// function setup() {
//   createCanvas(300, 300);
//   x = width / 2;
//   y = height / 2;
//   dx = random(-5, 5);
//   dy = random(-5, 5);
//   changeCircleColour();
//   noStroke();
// }

// function draw() {
//   background(220);

//   drawCircle();
//   moveCircle();
//   bounceOffWall();
// }

// function keyTyped() {
//   if (key === " ") {
//     dx = random(-5, 5);
//     dy = random(-5, 5);
//   }
//   if (key === "c") {
//     changeCircleColour ();
//   }
// }

// function drawCircle() {
//   //display circle
//   fill(r, g, b);
//   circle(x, y, radius * 2);
// }

// function moveCircle() {
//   //move circle
//   x += dx;
//   y += dy;
// }

// function bounceOffWall() {
//   //bounce if needed
//   if (x + radius >= width || x - radius <= 0) {
//     dx = -1 * dx;
//     changeCircleColour();
//   }
//   if (y + radius >= height || y - radius <= 0) {
//     dy = -1 * dy;
//     changeCircleColour();
//   }
// }

// function changeCircleColour() {
//   r = random(255);
//   g = random(255);
//   b = random(255);
// }
