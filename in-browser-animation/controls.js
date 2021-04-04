
function progressbar(progress_var) {
  push();  
  rect(0.05 * width, 0.9 * height, 0.9 * width, 10);
  let progress = map(progress_var, 1.5, max_value, 0.05 * width, 0.95 * width, true);
  fill(237,34,93);
  bx = progress;
  by = 0.8925 * height;
  rect(bx, by, 20, 20);
  play_pause(play);
  pop();
}

function play_pause(play){
    fill(60);
    ellipse(0.025 * width, 0.905 * height, 40, 40);
    fill(237,34,93);
    if(!play){
        triangle(
            0.0205 * width, 0.905 * height+10,
            0.020 * width+20, 0.905 * height,
            0.0205 * width, 0.905 * height-10
          );
    }
    else
    {
        rect(0.01815 * width, 0.890 * height, 20, 20);
    }

}

function mousePressed() {
    // Check if mouse is inside the button
    let d = dist(mouseX, mouseY, 0.025 * width, 0.905 * height);
    if (d < 20) {
        play = ~play;
    }

    if (
        mouseX > bx - 20 &&
        mouseX < bx + 20 &&
        mouseY > by - 20 &&
        mouseY < by + 20
      )
      {
        overProgress = true;
      }
      xOffset = mouseX - bx;
  }
  function mouseDragged() {
    if (overProgress) {
      T = map(mouseX - xOffset,  0.05 * width, 0.95 * width,0, max_value-0.1, true); ;
    }
  }
  
  function mouseReleased() {
    overProgress = false;
  }