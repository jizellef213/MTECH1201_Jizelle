/*
  Name: Jizelle F
  Title: Nebula Pulse
  Theme: Digital Ecosystems

  Instructions: 
    - Move the mouse to guide the pulse.
    - Press any key to clear the canvas and reset the ecosystem.
    - Click the mouse to change the pulse's core color.
*/

// 1. Two declared variables
let pulseSize = 0;
let coreHue = 200;

function setup() {
  // Making it responsive to the window size
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
}

function draw() {
  // Semi transparent background creates a "trail" effect
  background(0, 0, 0, 5);

  // 2. Use of system variables (mouseX, mouseY)
  // 3. Use of arithmetic operators (mouseX / 2)
  let targetX = mouseX;
  let targetY = mouseY;
  let dynamicWeight = (mouseX / width) * 5;

  // 4. Value increasing/decreasing over time
  // The pulse grows and resets using the modulo operator
  pulseSize = (pulseSize + 2) % 300;

  noFill();
  strokeWeight(dynamicWeight);
  
  // Drawing the organic "pulse"
  stroke(coreHue, 80, 100, 50);
  ellipse(targetX, targetY, pulseSize, pulseSize);
  
  stroke((coreHue + 40) % 360, 70, 90, 30);
  rectMode(CENTER);
  rect(targetX, targetY, pulseSize * 0.5, pulseSize * 0.5);
}

// 5. Event functions
function mousePressed() {
  // Changes the theme color when the user clicks
  coreHue = random(0, 360);
}

function keyPressed() {
  // Clears the "ecosystem" when a key is pressed
  background(0);
}

// Adjusts the canvas if the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
    

 