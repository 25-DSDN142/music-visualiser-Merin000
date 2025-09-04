
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(137, 207, 240);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
  let seasonLength = 500; // how many frames each season lasts (tweak this)
  let totalCycle = seasonLength * 4;
  let cyclePos = counter % totalCycle;

  let season;
  if (cyclePos < seasonLength) {
    season = "winter";
  } else if (cyclePos < seasonLength * 2) {
    season = "spring";
  } else if (cyclePos < seasonLength * 3) {
    season = "summer";
  } else {
    season = "autumn";
  }

  // Draw background gradient for each season
  if (season === "winter") {
    // icy blue → snowy white
    setGradient(color(160, 200, 255), color(240, 250, 255));
  } else if (season === "spring") {
    // pink blossom → light green
    setGradient(color(255, 170, 200), color(180, 250, 200));
  } else if (season === "summer") {
    // sky blue → warm golden
    setGradient(color(120, 200, 255), color(255, 220, 130));
  } else if (season === "autumn") {
    // orange → deep red-brown
    setGradient(color(230, 150, 80), color(160, 60, 30));
  }
}

// helper: vertical gradient background
function setGradient(c1, c2) {
  noFill();
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }


}
  
  