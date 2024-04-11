function setup() {
    createCanvas(400, 400);
    rectMode(CENTER)
    
  
  
    // R, G & B values.
    fill(255, 204, 0);
    rect(200, 200, 100, 100);
    
    fill(0, 0, 0);
    rect(200, 150, 50, 5);
    let colorValue = 0;
function draw() {
  fill(colorValue);
  rect(25, 25, 50, 50);
  describe('black 50-by-50 rect turns white with mouse click/press.');
}
function mousePressed() {
  if (colorValue === 0) {
    colorValue = 255;
  } else {
    colorValue = 0;
  }
}
    
    fill(255, 0, 0);
    rect(180, 180, 20, 20);
    
    fill(255, 0, 0);
    rect(220, 180, 20, 20);
    
    fill(0, 200, 0);
    ellipse(200, 210, 20, 30)
    
    fill(0, 0, 0);
    rect(200, 240, 50, 5);
    
    fill(0, 0, 0);
    rect(180, 125, 5, 50);
    
    fill(0, 0, 0);
    rect(220, 125, 5, 50);
}
  