let step = 0.01;
let amt = 0.5;
let valfadeIn = 255;
let valfadeOut = 0;

function setup() {
  p5Canvas = createCanvas(300, 300);
  textSize(64);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(24); 
  //fadeIn();
  fadeOut();
}

function fadeIn(){
  noStroke();
  valfadeIn = lerp(valfadeIn, 0, 0.025);
  fill(237,34,93, valfadeIn);
  text("p5.js", 0.5 * width, 0.50 * height);
}

function fadeOut(){
  noStroke();
  valfadeOut = lerp(valfadeOut, 255, 0.009);
  fill(237,34,93,valfadeOut);
  text("p5.js", 0.5 * width, 0.50 * height);
}