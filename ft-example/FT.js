let To = 2;
let W = 1300;
var scale = 2;
let y_scale = 55;
let x_scale = 105;
let T = 1.5;
let T_p = 1;
let k = 10; //adjusment constant
let tex;
let cn;
let play = false;
let overProgress = false;
let xOffset = 0.0;
let max_value = 60;
let bx, by;

function setup() {
  createCanvas(710, 400,WEBGL);

  frameRate(6);

 
  ft = createGraphics(500,500);
  ft.noFill();
  ft.stroke(250, 20, 50);
  ft.beginShape();
  ft.strokeWeight(1.5);
  ft.scale(0.75);
  for (let x = -5.25; x <= 5.25; x += 0.01) {
    ft.vertex(x_scale * x, y_scale * func(x));
  }
  ft.endShape();

}

function draw() {
  background(50, 20, 150);

  orbitControl();

  fill(237, 34, 93);
  noStroke();

  //sinc

  
  
  push();
  normalMaterial();
  fill(197, 140, 133,50);
  //plane(width/2, height/3);
  pop();
  //function plot 
  image(ft, 0, 0, 710, 400, 0, 0, 500,500);

}


function func(x) {
  // Write your function here
  if (x != 0) {
    return (sin(PI*x) / 1) + (sin(3*PI*x) / 3) + (sin(5*PI*x) / 5)+ (sin(7*PI*x) / 7)+ (sin(9*PI*x) / 9)+ (sin(11*PI*x) / 11)+(sin(13*PI*x) / 13);
  } else {
    return 1;
  }
}

