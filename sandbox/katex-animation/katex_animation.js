let tex;

function setup() {
  createCanvas(600, 400);
  tex = createP();
}
function draw() {
  background(50);

  writeTex(
    "a,^2,+,b,^2,+,2,a,b,=,(,a,+,b,),^2",
    0,
    0,
    width / 100,
    height / 1.75,
    100
  );
  noLoop();
}

function writeTex(...args) {
  //arguments : tex, n, shift, x, y, speed
  //TODO: writeTex(): a function for KaTeX rendering

  const sentence = args[0];
  var n = args[1];
  var shift = args[2];
  const x = args[3];
  const y = args[4];
  const speed = args[5];
  const parts = sentence.split(","); //TODO : split with RegEx

  if (n < parts.length) {
    shift += parts[n].length + 2 * textWidth(parts[n]); //TODO : shift should reflect width of TeX element

    tex.position(x + shift, y);
    katex.render(parts[n], createP().position(x + shift, y).elt);

    n++;
    setTimeout(function () {
      writeTex(sentence, n, shift, x, y, speed);
    }, speed);
    noLoop();
  }
}
