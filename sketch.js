function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(8);
  stroke("red");
  noFill();
  let scAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, scAngle);
  
  stroke("blue");
  let mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mnAngle);
  
  stroke("green");
  let hrAngle = map(hr % 12 , 0, 12, -90, 360);
  arc(0, 0, 260, 260, 0, hrAngle);

  push();
  rotate(scAngle);
  strokeWeight(7);
  stroke("red");
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  strokeWeight(5);
  stroke("blue");
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  strokeWeight(5);
  stroke("green");
  line(0,0,50,0);
  pop();

  stroke(255);
  point(0, 0);

  drawSprites();
}