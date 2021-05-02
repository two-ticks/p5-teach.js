p5.prototype.fadeIn = function (...args) {
  // TODO: implement this

  const alphaVal = 255;
  const speed = 30;
  if (!args[1]) {
    this.alphaVal = 255;
  }

  if (this.alphaVal > 0) {
    this.alphaVal = this.alphaVal - speed;
  }

  setTimeout(function () {
    fadeIn(args[0], alphaVal);
  }, 100);
  this.textSize(64);
  this.textAlign(CENTER, CENTER);
  this.background(150);
  this.fill(237, 34, 93, this.alphaVal);
  this.text(args[0], 0.5 * width, 0.5 * height);

  //text.fillColor[3] = text.fillColor[3] - Math.pow(frameCount, 1.25);
  //console.log("working");
  // return args[0];
};
