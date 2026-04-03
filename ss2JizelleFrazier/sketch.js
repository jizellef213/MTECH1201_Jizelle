function setup() {
//Requirement: Canvas size between 500 and 1920
  createCanvas(600, 600);
}

function draw() {
  background(10,10,25); // deep space blue

// 1. Primitive lines (planetary orbits)
stroke(100); // grey color for orbits
strokeWeight (1);
noFill();
line(0,300,600,300); // a horizontal path/orbit
line(300,0,300,600); // a vertical path orbit

//2. Primitive Ellipses (The Planets)
//The Sun
fill(255,200,0); //bright yellow
noStroke();
ellipse(300,300,80,80);

//Planet 1
fill(100,150,255); // Light blue
stroke(255); // white outline
strokeWeight(3);
ellipse(150,300,40,40);

//Planet 2 
fill(200,50,50); //Red
noStroke();
ellipse(450,300,25,25);

//Primitive Rectangles (a space station)
fill(150); // metallic grey
stroke(0);
strokeWeight(1);
rect(290,450,20,60); // A vertical structure
}
