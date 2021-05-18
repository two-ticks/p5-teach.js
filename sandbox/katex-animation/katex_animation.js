let currentIndex = 0;
let tex;
let katexScript ="\\huge \\color{#542FFF}a,^2,+,b,^2,+,2,a,b,=,(,a,+,b,),^2";
//   " F , = ,\\Huge G, \\frac{m_{1}\\cdot{m_{2}}}{r^{2}}, \n";
let parts = katexScript.split(",");
let content = "";
function setup() {
  createCanvas(600, 400);
  frameRate(10); //speed 
  tex = createP();
  tex.position(width / 5, height / 3);
}
function draw() {
  background(50);
  content += parts[currentIndex];
  katex.render(content, tex.elt);
  currentIndex++;
  if (currentIndex >= parts.length) {
    currentIndex = 0;
    content = "";
  }
}
