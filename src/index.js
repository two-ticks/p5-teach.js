p5.prototype.drawGrid = function _drawGrid() {//function drawGrid()
  //TODO: add colors for grid 
  //TODO: textsize get affected by previous function
  this.stroke(0, 100, 200, 150);
  this.fill(120);
  for (let x = -2 * width; x < 2 * width; x += 40) {
    this.line(x, -2 * height, x, 2 * height);
  }
  for (let y = -2 * height; y < 2 * height; y += 40) {
    this.line(-2 * width, y, 2 * width, y);
  }
};

p5.prototype.fadeIn = function _fadeIn(...args) {
  // TODO: implement this

  const alphaVal = 255;
  const speed = 30;
  if (!args[1]) {
    this.alphaVal = 255;
  }

  if (this.alphaVal > 0) {
    this.alphaVal = this.alphaVal - this.speed;
  }

  setTimeout(function () {
    fadeIn(args[0], alphaVal);
  }, 100);

  this.textSize(64);
  this.textAlign(CENTER, CENTER);
  this.background(150);
  this.fill(237, 34, 93, this.alphaVal);
  this.text(args[0], 0.5 * width, 0.5 * height);
};

p5.prototype.typeWriter = function _typeWriter(...args) {
  //arguments : sentence, n, x, y, speed
  // TODO: implement this

  const sentence = args[0];
  let n = args[1];
  const x = args[2];
  const y = args[3];
  const speed = args[4];

  this.fill(237, 34, 93);
  this.textSize(98);
  this.noStroke();
  if (n < sentence.length) {
    text(sentence.substring(0, n + 1), x, y);
    n += 1;
    setTimeout(function () {
      typeWriter(sentence, n, x, y, speed);
    }, speed);
    this.noLoop();
  }
};

p5.prototype.writing = function _writing(...args) {//function writing(sentence, n, shift, x, y, speed)
  const sentence = args[0];
  let n = args[1];
  let shift = args[2]
  const x = args[3];
  const y = args[4];
  const speed = args[5];
  this.fill(237, 34, 93);
  this.textSize(68);
  this.noStroke();
  if (n < sentence.length) {
    //text(sentence.substring(0, n), x+n, y);

    this.text(sentence.substring(n, n + 1), x + shift, y);
    shift += textWidth(sentence.substring(n, n + 1));
    this.fill(237, 34, 93, 80);
    this.text(sentence.substring(n + 1, n + 2), x + shift, y);
    //text(sentence.substring(n, n + 1), x, y);
    n += 1;
    setTimeout(function () {
      writing(sentence, n, shift, x, y, speed);
    }, speed);
    this.noLoop();
  }
};
