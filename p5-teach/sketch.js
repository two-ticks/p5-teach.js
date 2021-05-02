function setup() {
  createCanvas(600, 600);
  background(150);
}

function draw() {
  typeWriter("Hello! p5.js", 0, width / 100, height / 1.75, 250); //sentence, n, x, y, delay
  //fadeIn("p5");
  noLoop();
}
