//collision 2d demo

let hit = false;

function setup() {
  
}

function draw() {
  background(255);
  rect(200, 200, 100, 150);
  circle(mouseX, mouseY, 100);

  hit = collidePointRect(mouseX, mouseY, 200, 200, 100, 150);


  if (hit) {
    stroke("red");
  }
  else {
    stroke("black");
  }

  console.log("colliding?", hit);
}