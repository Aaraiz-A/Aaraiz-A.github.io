// Sierpinksi Triangle

let initialTriangle = [
  {x: 600, y: 20},
  {x: 100, y: 650},
  {x: 1100, y: 650}
];

let theDepth = 0;
let theColors = ["black", "red", "blue", "yellow", "brown", "purple", "orange", "green"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinksi(initialTriangle, theDepth);
}

function mousePressed() {
  if (theDepth < 7) {
    theDepth++;
  }
}

function sierpinksi(points, depth) {
  fill(theColors[depth]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  if (depth > 0) {
    //draw the lower left triangle
    sierpinksi([midpoint(points[0], points[1]), midpoint(points[1], points[2]), points[1]], depth - 1);

    //draw the upper triangle
    sierpinksi([midpoint(points[0], points[1]), midpoint(points[0], points[2]), points[0]], depth - 1);

    //draw the lower right triangle
    sierpinksi([midpoint(points[0], points[2]), midpoint(points[1], points[2]), points[2]], depth - 1);
  }
}

function midpoint(point1, point2) {
  let newx = (point1.x + point2.x) / 2;
  let newy = (point1.y + point2.y) / 2;
  return {x: newx, y: newy};
}