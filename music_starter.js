
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(137, 207, 240);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;

   let circleSize = map(vocal, 0, 100, vocal, 255);
  
   noStroke();
   ellipse(200,300,circleSize);
   fill (255, 191, 0);

   let circleSize2 = map(bass,100,100,15,100);

   //ellipse(100,100,circleSize2);
   //fill(255, 191, 0);


    }
  
  