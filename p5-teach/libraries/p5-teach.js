let To = 2;
let W = 1300;
//var scale = 2;
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

let sine = []

function setup() {
  createCanvas(710, 400,WEBGL);

  frameRate(1);
  camera(900, -300, -600, 0, 0, 0, 0, 1, 0);
  

  ft = createGraphics(1710, 400);
  push();
  ft.translate(width/2+15,100);
  ft.noFill();
  ft.stroke(255, 0, 0);
  ft.beginShape();
  ft.strokeWeight(2);
  ft.scale(0.75);
  for (let x = -3.50; x <= 0.50; x += 0.01) {
    ft.vertex(x_scale * x, y_scale * func(x));
  }
  ft.endShape();
  pop();
  push();
  for (let i = 1; i <= 13; i += 2) {
    
    sine[i] = createGraphics(1710, 400);
    sine[i].translate(width/2+15,100);
    sine[i].noFill();
    sine[i].stroke(0,255,0,255);
    sine[i].beginShape();
    sine[i].strokeWeight(2);
    sine[i].scale(0.75);
    for (let x = -3.50; x <= 0.50; x += 0.01) {
      sine[i].vertex(x_scale * x, y_scale * sin(i*PI*x)/i);
    }
    sine[i].endShape();
  }
  pop();

}

function draw() {
  background(50, 20, 150);

  orbitControl();
  //camera(0, frameCount, 700, 0, 0, 0, 0, 1, 0);
  //perspective(PI / 3.0 , width / height, 0.1, 500);
  fill(237, 34, 93);
  noStroke();

  //sinc

  push();
  normalMaterial();
  fill(197, 140, 133,10);
  plane(width/1.5, height/3);
  rotateY(PI/2);
  translate(width/2,0,width/2);
  plane(width/1.5, height/3);
  pop();
  //function plot 
  image(ft, -width/2, -height/4, 710, 400, 0, 0, 500,500);
  
  for (let i = 1; i <= 13; i += 2){
    push();
    translate(0,0,-(10*i*frameCount));
    image(sine[i], -width/2, -height/4, 710, 400, 0, 0, 500,500);
    pop();
  }
  
}


function func(x) {
  // Write your function here
  if (x != 0) {
    return (sin(PI*x) / 1) + (sin(3*PI*x) / 3) + (sin(5*PI*x) / 5)+ (sin(7*PI*x) / 7)+ (sin(9*PI*x) / 9)+ (sin(11*PI*x) / 11)+(sin(13*PI*x) / 13);
  } else {
    return 1;
  }
}

