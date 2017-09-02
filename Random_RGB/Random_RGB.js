var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(100,110);
}

function draw() {
  background(255);
  fill(r,g,b);
  rect(1,1,50,50);
  textSize(12);
  fill(0);
  text(r+", "+g+", "+b,1,64);
  text("Press any key to ", 1, 78);
  text("generate a new ",1,92);
  text("RGB value",1,106);
}
function keyPressed() {
  r = floor(random(255));
  g = floor(random(255));
  b = floor(random(255));
}