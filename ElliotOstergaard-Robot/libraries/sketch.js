function draw() {
  createCanvas(400, 400);
      rectMode(CENTER)
    
    
    fill(255, 204, 0);
      rect(200, 200, 100, 100);
      
      fill(0, 0, 0);
      rect(200, 150, 50, 5);
      
      
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
  
    if (mouseIsPressed === true) {
      rect(180, 180, 20, 20);
      rect(220, 180, 20, 20);
    } else {
      ellipse(200, 210, 20, 30);
      
    }
  }