let step = 0.01;
let amt = 0.5;
let valfadeIn = 255;
let valfadeOut = 0;
let blinkTimer = 1;
// let zoomInVal = 10;
// let zoomOutVal = 64;

//use frameCount % 100  for better result

function setup() {
  p5Canvas = createCanvas(300, 300);
  // textSize(64);
  // textAlign(CENTER, CENTER);
}

function draw() {
  background(24);
  zoomOut();
  //zoomIn();
  //blink(); 
  //fadeIn();
  //fadeOut();
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

function blink(){
  blinkTimer++;
  if(blinkTimer>50)
  {
    fadeIn();
  }
  if(blinkTimer<50)
  {
    fadeOut();
  }  
  blinkTimer%=100;
}

// function wipeIn(){

// }

function zoomIn(){
  textSize(10 + Math.pow(frameCount, 1.2));
  textAlign(CENTER, CENTER);
  fill(237,34,93);
  text("p5.js", 0.5 * width, 0.5 * height);
  if (frameCount>50) {
    noLoop();
  }
  //zoomInVal++;
}

function zoomOut(){
  textSize(128 - Math.pow(frameCount, 1.25));
  textAlign(CENTER, CENTER);
  fill(237,34,93);
  text("p5.js", 0.5 * width, 0.5 * height);
  if (frameCount>50) {
    noLoop();
  }
  //zoomInVal++;
}