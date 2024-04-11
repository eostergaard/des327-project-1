var x = 60;            // x coordinate
var y = 420;           // y coordinate
var bodyHeight = 110;  // Body height
var neckHeight = 140;  // Neck height
var radius = 45;
var ny = y - bodyHeight - neckHeight - radius;  // Neck Y

function setup() {
  createCanvas(500, 500);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);

  // Neck
  stroke(102);
  line(x+3, y-bodyHeight, x+3, ny); 
  line(x+13, y-bodyHeight, x+13, ny); 
  line(x+33, y-bodyHeight, x+33, ny); 

  // Antennae
  line(x+55, ny, x-18, ny-43);
  line(x+55, ny, x+84, ny-19);
  line(x+33, ny, x+90, ny+15);

  // Body
  noStroke();
  fill(102, 0, 0);
  ellipse(x, y-33, 33, 33);
  fill(80,0, 0);
  rect(x-45, y-bodyHeight, 90, bodyHeight-33);
  fill(102, 0, 0);
  rect(x-45, y-bodyHeight+17, 90, 6);

  // Head
  fill(100, 0, 0);
  ellipse(x+12, ny, radius, radius); 
  fill(0, 200, 0);
  ellipse(x+24, ny-6, 14, 14);
  fill(100, 0, 0);
  ellipse(x+24, ny-6, 3, 3);
  fill(0, 150, 0);
  ellipse(x, ny-8, 5, 5);
  ellipse(x+30, ny-26, 4, 4);
  ellipse(x+41, ny+6, 3, 3);
}