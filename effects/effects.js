let step = 0.01;
let amt = 0.5;
let valfadeIn = 255;
let valfadeOut = 0;
let blinkTimer = 1;

// let zoomInVal = 10;
// let zoomOutVal = 64;

//use frameCount % 100  for better result

function setup() {
  //p5Canvas = createCanvas(1300, 300);
  p5Canvas = createCanvas(500, 300);
  //frameRate(1);\
  frameRate(40);
  //p5Canvas = createCanvas(300, 300,WEBGL);
  //normalMaterial();
  textSize(64);
  //textAlign(CENTER, CENTER);
}

function draw() {
  background(24);

  let sqr = new square(255, width / 2, height / 2, 70);

  create(sqr);

  //drawGrid();

  //wipeOut(" p5.js", 300, 2.5);

  //wipeIn(" p5.js", 300, 2.5);

  //let flowerObj = new flower([204, 101, 192, 127]);
  //fadeIn(flowerObj);

  //writing(" writing the text", 0,0, width / 100, height / 1.75, 100);

  //typeWriter(" p5.js", 0, width / 100, height / 1.75, 100);

  //zoomOut();

  //zoomIn();

  //blink();

  // fadeIn();

  //fadeOut();
}

function fadeIn() {
  noStroke();
  valfadeIn = lerp(valfadeIn, 0, 0.025);
  fill(237, 34, 93, valfadeIn);
  text("p5.js", 0.5 * width, 0.5 * height);
}

function fadeOut() {
  noStroke();
  valfadeOut = lerp(valfadeOut, 255, 0.009);
  fill(237, 34, 93, valfadeOut);
  text("p5.js", 0.5 * width, 0.5 * height);
}

function blink() {
  blinkTimer++;
  if (blinkTimer > 50) {
    fadeIn();
  }
  if (blinkTimer < 50) {
    fadeOut();
  }
  blinkTimer %= 100;
}

// function wipeIn(){

// }

function zoomIn() {
  textSize(10 + Math.pow(frameCount, 1.2));
  textAlign(CENTER, CENTER);
  fill(237, 34, 93);
  text("p5.js", 0.5 * width, 0.5 * height);
  if (frameCount > 50) {
    noLoop();
  }
  //zoomInVal++;
}

function zoomOut() {
  textSize(128 - Math.pow(frameCount, 1.25));
  textAlign(CENTER, CENTER);
  fill(237, 34, 93);
  text("p5.js", 0.5 * width, 0.5 * height);
  if (frameCount > 50) {
    noLoop();
  }
  //zoomInVal++;
}

function typeWriter(sentence, n, x, y, speed) {
  fill(237, 34, 93);
  textSize(98);
  noStroke();
  if (n < sentence.length) {
    text(sentence.substring(0, n + 1), x, y);
    n++;
    setTimeout(function () {
      typeWriter(sentence, n, x, y, speed);
    }, speed);
    noLoop();
  }
}

function writing(sentence, n, shift, x, y, speed) {
  fill(237, 34, 93);
  textSize(68);
  noStroke();
  if (n < sentence.length) {
    //text(sentence.substring(0, n), x+n, y);

    text(sentence.substring(n, n + 1), x + shift, y);
    shift += textWidth(sentence.substring(n, n + 1));
    fill(237, 34, 93, 80);
    text(sentence.substring(n + 1, n + 2), x + shift, y);
    //text(sentence.substring(n, n + 1), x, y);
    n++;
    setTimeout(function () {
      writing(sentence, n, shift, x, y, speed);
    }, speed);
    noLoop();
  }
}

class flower {
  constructor(fillColor) {
    this.fillColor = fillColor;
  }
  show() {
    fill(this.fillColor);
    noStroke();
    translate(width / 2, height / 2);
    for (let i = 0; i < 10; i++) {
      ellipse(0, 30, 20, 80);
      rotate(PI / 5);
    }
  }
}

class square {
  constructor(fillColor, x, y, side) {
    this.fillColor = fillColor;
    this.x = x;
    this.y = y;
    this.side = side;
  }
}

function create(obj, n) {
  stroke(obj.fillColor);
  noFill();
  beginShape();
  vertex(obj.x, obj.y); //center default

  let i = frameCount;
  if (frameCount < 4 * obj.side) {
    if (frameCount > 0 && frameCount < obj.side) {
      for (let i = frameCount; i > 0; i--) {
        vertex(obj.x + i, obj.y);
      }
    }

    if (frameCount > obj.side && frameCount < 2 * obj.side) {
      vertex(obj.x + obj.side, obj.y);

      for (let i = frameCount % obj.side; i > 0; i--) {
        vertex(obj.x + obj.side, obj.y + i);
      }
    }
    if (frameCount > 2 * obj.side && frameCount < 3 * obj.side) {
      vertex(obj.x + obj.side, obj.y);
      vertex(obj.x + obj.side, obj.y + obj.side);

      for (let i = frameCount % obj.side; i > 0; i--) {
        vertex(obj.x + obj.side- i, obj.y + obj.side );
      }
    }
    if (frameCount > 3 * obj.side) {
      vertex(obj.x + obj.side, obj.y);
      vertex(obj.x + obj.side, obj.y + obj.side);
      vertex(obj.x, obj.y + obj.side);

      for (let i = frameCount % obj.side; i > 0; i--) {
        vertex(obj.x, obj.y + obj.side - i);
      }
    }
  }
    if(frameCount >= 4 * obj.side) {
      vertex(obj.x + obj.side, obj.y);
      vertex(obj.x + obj.side, obj.y + obj.side);
      vertex(obj.x, obj.y + obj.side);
      vertex(obj.x, obj.y);
    }

    // if(frameCount>2*obj.side ){
    //   for (let i = frameCount; i>0; i--) {
    //     vertex(obj.x-frameCount+obj.side,obj.y+obj.side);
    //   }
    // }
    // if(frameCount>3*obj.side ){
    //   for (let i = frameCount; i>0; i--) {
    //     vertex(obj.x,obj.y-frameCount);
    //   }
    // }
    
  

  //vertex(width/2,height/2);
  endShape();
}

function fadeIn(a) {
  a.fillColor[3] = a.fillColor[3] - Math.pow(frameCount, 1.25);
  a.show();
}

function wipeIn(data, duration, speed) {
  fill(237, 34, 93);
  textSize(98);
  noStroke();
  text(data, -300 + speed * frameCount, height / 2);
  if (frameCount > duration / speed) {
    noLoop();
  }
}

function wipeOut(data, duration, speed) {
  fill(237, 34, 93);
  textSize(98);
  noStroke();
  text(data, speed * frameCount, height / 2);
  if (frameCount > duration / speed) {
    noLoop();
  }
}

function drawGrid() {
  stroke(0, 100, 200, 150);
  fill(120);
  for (var x = -2 * width; x < 2 * width; x += 40) {
    line(x, -2 * height, x, 2 * height);
    //text(x, x+1, 12);
  }
  for (var y = -2 * height; y < 2 * height; y += 40) {
    line(-2 * width, y, 2 * width, y);
    //text(y, 1, y+12);
  }
}
