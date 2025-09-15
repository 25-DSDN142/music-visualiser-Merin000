let snowflakes = [];
let flower = [];
let greenleave = [];
let autumnLeaves = []


// vocal, drum, bass, and other are volumes ranging from 0 to 100
let seasonLength = 1000; // longer seasons
let totalCycle = seasonLength * 4;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  textFont('Verdana'); 
  rectMode(CENTER);
  textSize(24);

  let cyclePos = counter % totalCycle;
  let seasonIndex = floor(cyclePos / seasonLength); // 0=Winter,1=Spring,2=Summer,3=Autumn
  let t = (cyclePos % seasonLength) / seasonLength; // 0 → 1 for transition

  // gradient colors for each season
  let topColors = [
    color(160, 200, 255), // winter top
    color(255, 170, 200), // spring top
    color(120, 200, 255), // summer top
    color(230, 150, 80)   // autumn top
  ];
  let bottomColors = [
    color(240, 250, 255), // winter bottom
    color(180, 250, 200), // spring bottom
    color(255, 220, 130), // summer bottom
    color(160, 60, 30)    // autumn bottom
  ];

  let nextIndex = (seasonIndex + 1) % 4;

  // smooth transition between current and next season
  let c1 = lerpColor(topColors[seasonIndex], topColors[nextIndex], t * 0.3); // slow subtle transition
  let c2 = lerpColor(bottomColors[seasonIndex], bottomColors[nextIndex], t* 0.3);

  setGradient(c1, c2);


  //if (seasonIndex === 1 || seasonIndex === 2) {
    drawSun( vocal);
 //}


  drawTree(); // tree in middle
  // Snow only in winter
  if (seasonIndex === 0) {
    drawSnow();
  }

  if (seasonIndex === 1){
    drawFlower();
 }

 if (seasonIndex === 2){
  drawGreenLeaves();
 }
 if (seasonIndex === 3){
  drawAutumnLeaves();
 }


// gradient background
function setGradient(c1, c2) {
  noFill();
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function drawSnow() {
  noStroke();
  fill(255, 255, 255, 200);

  for (let i = 0; i < 2; i++) {
    snowflakes.push({
      x: random(width),
      y: random(-20, 0),
      size: random(2, 6),
      speed: random(1, 3),
      sway: random(0.5, 2),
      offset: random(TWO_PI)
    });
  }

  for (let i = snowflakes.length - 1; i >= 0; i--) {
    let flake = snowflakes[i];
    if (flake.y > height) {
      snowflakes.splice(i, 1);
      continue;
    }
    let x = flake.x + sin(frameCount * 0.01 * flake.sway + flake.offset) * 5;
    ellipse(x, flake.y, flake.size);
    flake.y += flake.speed;
  }
}



function drawFlower() {
  noStroke();
  fill(255, 170, 200);

  for (let i = 0; i < 2; i++) {
    flower.push({
      x: random(width),
      y: random(-20, 0),
      size: random(2, 6),
      speed: random(1, 3),
      sway: random(0.5, 2),
      offset: random(TWO_PI)
    });
  }

  // draw the flower array, not snowflakes
  for (let i = flower.length - 1; i >= 0; i--) {
    let f = flower[i];
    if (f.y > height) {
      flower.splice(i, 1);
      continue;
    }
    let x = f.x + sin(frameCount * 0.01 * f.sway + f.offset) * 5;
    ellipse(x, f.y, f.size);
    f.y += f.speed;
  }
}

function drawGreenLeaves() {
  noStroke();
  fill(79, 121, 66);

  for (let i = 0; i < 2; i++) {
    greenleave.push({
      x: random(width),
      y: random(-20, 0),
      size: random(2, 6),
      speed: random(1, 3),
      sway: random(0.5, 2),
      offset: random(TWO_PI)
    });
  }

  // draw the greenleave array
  for (let i = greenleave.length - 1; i >= 0; i--) {
    let leaf = greenleave[i];
    if (leaf.y > height) {
      greenleave.splice(i, 1);
      continue;
    }
    let x = leaf.x + sin(frameCount * 0.01 * leaf.sway + leaf.offset) * 5;
    ellipse(x, leaf.y, leaf.size);
    leaf.y += leaf.speed;
  }
}


function drawAutumnLeaves() {
  noStroke();
  fill(255, 140, 0); // dark orange

  for (let i = 0; i < 2; i++) {
    autumnLeaves.push({
      x: random(width),
      y: random(-20, 0),
      size: random(2, 6),
      speed: random(1, 3),
      sway: random(0.5, 2),
      offset: random(TWO_PI)
    });
  }

  // draw the autumnLeaves array
  for (let i = autumnLeaves.length - 1; i >= 0; i--) {
    let leaf = autumnLeaves[i];
    if (leaf.y > height) {
      autumnLeaves.splice(i, 1);
      continue;
    }
    let x = leaf.x + sin(frameCount * 0.01 * leaf.sway + leaf.offset) * 5;
    ellipse(x, leaf.y, leaf.size);
    leaf.y += leaf.speed;
  }
}

// sun drawing
function drawSun( vocal) {
  push();
  translate(width / 2, height / 5.5);
  let sunSize = map(vocal, 0, 150, 100, 230);
  let glowSize = sunSize * map(vocal, 0, 100, 1.3, 1.8);

  noStroke();
  for (let i = 6; i > 0; i--) {
    fill(255, 220, 100, map(i, 0, 6, 40, 120));
    ellipse(0, 0, sunSize * (0.6 + i * 0.15));
  }
  for (let i = 3; i > 0; i--) {
    fill(255, 200, 50, 40 - i * 10);
    ellipse(0, 0, glowSize * (1 + i * 0.3));
  }
  pop();
}


// tree structure
function drawTree() {
  stroke(80, 42, 42);
  strokeWeight(18);
  line(width/2, height, width/2, height/2);

  strokeWeight(11);
  line(width/2, height*0.55, width/2 - 100, height*0.55 - 100);
  line(width/2, height*0.55, width/2 + 80, height*0.55 - 90);
  line(width/2, height*0.55, width/2 + 100, height*0.55 - 120);

  line(width/2, height*0.6, width/2 + 100, height*0.6 - 100);
  line(width/2, height*0.6, width/2 - 90, height*0.6 - 90);

  line(width/2 - 100, height*0.55 - 100, width/2 - 130, height*0.55 - 150);
  line(width/2 - 100, height*0.55 - 100, width/2 - 120, height*0.55 - 130);

  line(width/2 + 80, height*0.55 - 90, width/2 + 110, height*0.55 - 130);
  line(width/2 + 100, height*0.6 - 100, width/2 + 120, height*0.6 - 140);
  line(width/2 - 90, height*0.6 - 90, width/2 - 110, height*0.6 - 130);

  line(width/2 - 130, height*0.55 - 150, width/2 - 170, height*0.55 - 200);
  line(width/2 + 110, height*0.55 - 130, width/2 + 150, height*0.55 - 250);
  line(width/2 - 110, height*0.6 - 130, width/2 - 130, height*0.5 - 150);
  line(width/2 + 120, height*0.6 - 140, width/2 + 190, height*0.6 - 200);

  line(width/2, height/2, width/2 - 90, height/2 - 200);
  line(width/2, height/2, width/2 + 40, height/2 - 100);
  line(width/2, height/2, width/2 - 30, height/2 - 250);
  line(width/2, height/2, width/2 + 20, height/2 - 200);

  line(width/2 - 90, height/2 - 200, width/2 - 120, height/2 - 240);
  line(width/2 - 90, height/2 - 200, width/2 - 100, height/2 - 230);

  line(width/2 + 40, height/2 - 100, width/2 + 70, height/2 - 130);

  line(width/2 - 30, height/2 - 250, width/2 - 50, height/2 -120);

}



}