
p5.prototype.fadeIn = function (text_arg) {
  textSize(64);
  textAlign(CENTER, CENTER);
  fill(237, 34, 93);
  let text = text(text_arg, 0.5 * width, 0.5 * height);
  text.fillColor[3] = text.fillColor[3] - Math.pow(frameCount, 1.25);
  return "hello";
};