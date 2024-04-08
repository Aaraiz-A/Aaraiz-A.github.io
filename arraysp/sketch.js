// Arrays Project
// Aaraiz Afridi

// Additional notes:
// awsd to control the character
// I did not put a max speed for the player on purpose because I want to encourage different playstyles

// Extra for Experts:
// I use functions that were not talked about before in class, such as frameRate() (I figured out how to round it to two decimal places), textFont(), const 
// Also it took me some time to figure out how to add acceleration/physics to the main character

// defining the global variables on top
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

// setting up the game
function setup() {
  createCanvas(windowWidth, windowHeight);
  maincharactercharacteristics();
  enemycharacteristics();
  starttime = millis();
  state = "Game is on";
}

// every function is in the draw loop (nice and neat)
function draw() {
  if (state === "Game is on") { //the game is running
    background(0, 150, 255);
    displaytime();
    displaylives();
    displayframerate();
    displaymaincharacter();
    maincharactermovement();
    displayenemy();
    moveenemy();
    checkifitcollides();
    enemybouncesoffwallandotherthings();
    enemiesspawnrandomly();
    timerscorestuff();
  }
  else if (state === "Game Over") { // game over screen 
    fill("black");
    textSize(42);
    textAlign(CENTER, CENTER);
    text("You Lost All Your Lives! Your Time Was " + score1 + " seconds", width/2, height/2);
  }
}

// dictates what characteristics the main character has 
function maincharactercharacteristics() {
  player = {
    x: width/2,
    y: height/2,
    diameter: 50,
    vy: 0,
    dx: 5,
    ax: 0.5,
    vx: 0,
  };
}

// displays the main character
function displaymaincharacter() {
  fill("white");
  circle(player.x, player.y  - player.diameter/2, player.diameter);
}

// this function includes how the character moves throughout the game
function maincharactermovement() {
  // the character moves around by pressing awsd
  if (keyIsDown(87)) { //w
    player.vy -= player.ax;
  }
  if (keyIsDown(83)) { //s
    player.vy += player.ax;
  }
  if (keyIsDown(68)) { //d
    player.dx += player.ax;
  }
  if (keyIsDown(65)) { //a
    player.dx -= player.ax;
  }

  // makes sure that the main character has friction 
  if (player.dx > 0) {
    player.dx -= 0.1;
  } 
  else if (player.dx < 0) {
    player.dx += 0.1;
  }
  
  if (player.vy > 0) {
    player.vy -= 0.1;
  } 
  else if (player.vy < 0) {
    player.vy += 0.1;
  }


  // makes sure that the main character wraps around the screen everytime it goes off screen
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
  
  // moves the player
  player.x += player.dx;
  player.y += player.vy;
}

// what characteristics the enemy will have
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

// how the enemy will look
function displayenemy() {
  for (let enemy of theBall) {
    fill("red");
    circle(enemy.x2, enemy.y2, enemy.diameter2);
  }
}

// how the enemy will move
function moveenemy() {
  for (let enemy of theBall) {
    enemy.x2 += enemy.dx2;
    enemy.y2 += enemy.dy2;
  }
}

// when the enemy hits the border, it will bounce off the wall which will increase its speed (unless it is already at maximum speed)
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

// checks if the main character is hitting the enemy. If true, then it will remove a life. Also, if the player hits an enemy, the enemy will disappear.
function checkifitcollides() {
  for (let i = 0; i < theBall.length; i++) {
    let enemy = theBall[i];
    let d = dist(player.x, player.y, enemy.x2, enemy.y2);
    if (d < player.diameter/2 + enemy.diameter2/2) {
      // if the main character and the enemy are hitting each other, then remove the enemy
      enemy.remove = true;
      lives = lives - 1; //main character loses a life
      if (lives < 0){
        state = "Game Over";
      }
    }
    if (theBall[i].remove) {
      theBall.splice(i, 1); //enemies that are supposed to be removed will be removed from the array
      enemyCount = enemyCount - 1; 
    }
  }
}

// displays how much time has passed
function displaytime() {
  fill("black");
  textSize(20);
  textFont("Courier New");
  text("Time: " + score1 + " sec", width - width/1.005, height - height/1.05);
}

// dictates the frequency of adding enemies
function enemiesspawnrandomly() {
  if (millis() - lastEnemySpawn >= enemySpawnDelay) {
    enemycharacteristics();
    lastEnemySpawn = millis();
  }
}

// the mechanics behind the timer
function timerscorestuff() {
  if (millis() - starttime >= 1000) {
    score1 = score1 + 1;
    starttime = millis();
  }
}

// displays how many lives you have left 
function displaylives() {
  fill("black");
  textSize(20);
  textFont("Courier New");
  text("Lives Remaining: " + lives, width - width/1.005, height - height/1.10);
}

// displays the frame rate
function displayframerate() {
  let fps = frameRate();
  fill("black");
  textSize(20);
  textFont("Courier New");
  text(fps.toFixed(2) + " FPS", width - width/1.005, height - height/1.15 );
}