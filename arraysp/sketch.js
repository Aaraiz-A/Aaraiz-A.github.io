// Arrays Project
// Aaraiz Afridi

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theBall = [];
let player;
const ENEMY_DIAMETER = 25;
let enemyCount = 0;
let enemySpawnDelay = 5000;
let lastEnemySpawn = 0;
let score1 = 0;
let starttime;
let state;
let lives = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  maincharactercharacteristics();
  enemycharacteristics();
  starttime = millis();
  state = "Game is on"
}

function draw() {
  if (state === "Game is on") {
    background(0, 150, 255);
    displaytime();
    displaylives();
    displaymaincharacter();
    maincharactermovement();
    displayenemy();
    moveenemy();
    enemybouncesoffwallandotherthings();
    enemiesspawnrandomly();
    checkifitcollides();
    timerscorestuff();
  }
  else if (state === "Game Over") {
    fill("black");
    textSize(42);
    textAlign(CENTER, CENTER);
    text("You Lost All Your Lives! Your Time Was " + score1, width/2, height/2);
  }
}

function maincharactercharacteristics() {
  player = {
    x: width/2,
    y: height/2,
    diameter: 50,
    dx: 5,
    dy: 5,
  };
}

function displaymaincharacter() {
  circle(player.x, player.y  - player.diameter/2, player.diameter);
}

function maincharactermovement() {
  if (keyIsDown(87)) { //w
    player.y -= player.dy;
  }
  if (keyIsDown(83)) { //s
    player.y += player.dy;
  }
  if (keyIsDown(68)) { //d
    player.x += player.dx;
  }
  if (keyIsDown(65)) { //a
    player.x -= player.dx;
  }

  // border control
  if (player.x < 0) {
    player.x = width;
  }
  else if (player.x > width) {
    player.x = 0;
  }
  if (player.y < 0) {
    player.y = height;
  }
  else if (player.y > height) {
    player.y = 0;
  }
}

function enemycharacteristics() {
  if (enemyCount < 15) {
    let enemy = {
      x2: random(width - ENEMY_DIAMETER),
      y2: random(height - ENEMY_DIAMETER),
      diameter2: ENEMY_DIAMETER,
      dx2: 5,
      dy2: 5,
      speedofenemy: 0,
      maxenemyspeed: 25,
    };
    theBall.push(enemy);
    enemyCount = enemyCount + 1;
  }
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

function enemybouncesoffwallandotherthings() {
  for (let enemy of theBall) {
    if (enemy.x2 + enemy.diameter2/2 >= width || enemy.x2 - enemy.diameter2/2 <= 0) {
      enemy.speedofenemy = enemy.speedofenemy + 1;
      if (enemy.speedofenemy < enemy.maxenemyspeed) {
        enemy.dx2 = enemy.dx2 * -1.05;
      }
      else {
        enemy.dx2 = enemy.dx2 * -1;
      }
    }
    if (enemy.y2 + enemy.diameter2/2 >= height || enemy.y2 - enemy.diameter2/2 <= 0) {
      enemy.speedofenemy = enemy.speedofenemy + 1;
      if (enemy.speedofenemy < enemy.maxenemyspeed) {
        enemy.dy2 = enemy.dy2 * -1.05;
      }
      else {
        enemy.dy2 = enemy.dy2 * -1;
      }
    }
  }
}

function checkifitcollides() {
  for (let enemy of theBall) {
    if (enemy.diameter && player.diameter) {
      let collision = dist(player.x, player.y, player.diameter/2, enemy.x2, enemy.y2, enemy.diameter/2) < (player.diameter + enemy.diameter2) / 2;

      if (collision) {
        lives = lives - 1;
        if (lives === 0) {
          state = "Game Over";
        }
        break;
      }
    }
  }
}

function displaytime() {
  textSize(15);
  text("Time: " + score1 + " sec", width - width/1.005, height - height/1.05) 
}

function enemiesspawnrandomly() {
  if (millis() - lastEnemySpawn >= enemySpawnDelay) {
    enemycharacteristics();
    lastEnemySpawn = millis();
  }
}

function timerscorestuff() {
  if (millis() - starttime >= 1000) {
    score1 = score1 + 1;
    starttime = millis();
  }
}

function displaylives() {
  textSize(15);
  text("Lives Remaining: " + lives, width - width/1.005, height - height/1.10)
}

//CHECK