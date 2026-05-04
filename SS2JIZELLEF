// name: Jizelle F
// concept: i'm exploring digital botany. i want to see if i can make
// code feel alive. this first sketch is just a basic starting point using 
// simple shapes to map out a flower and some ground vibes.

function setup() {
  // making the canvas big enough but not full screen
  createCanvas(600, 700);
  background(240, 238, 220); // kinda like a paper/cream color
  noLoop(); // it's a static drawing so no need to loop
}

function draw() {
  // the "ground" or soil area
  // using a thick stroke for a textured look
  stroke(40, 30, 20);
  strokeWeight(8);
  fill(80, 60, 50);
  rect(-10, 550, 620, 160); // primitive 1: rectangle
  
  // the stem
  stroke(45, 85, 45);
  strokeWeight(12);
  line(300, 550, 300, 300); // primitive 2: line
  
  // some abstract leaves
  strokeWeight(2);
  fill(100, 150, 100);
  ellipse(260, 450, 80, 30); // primitive 3: ellipse
  ellipse(340, 420, 70, 25);
  
  // the flower petals
  // i'm overlapping ellipses to make a bloom
  stroke(200, 50, 50);
  strokeWeight(4);
  fill(255, 100, 120, 200); // added some transparency
  
  // petal cluster
  ellipse(300, 250, 60, 120);
  ellipse(300, 250, 120, 60);
  
  // the center of the flower
  noStroke();
  fill(255, 210, 0);
  circle(300, 250, 40); // primitive 4: circle
  
  // random "pollen" dots for variation in stroke/fill
  stroke(255, 200, 0);
  strokeWeight(10);
  point(250, 200);
  point(360, 180);
  point(280, 120);
}
