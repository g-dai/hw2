background(255);
colorMode(RGB);

fill("red");
noStroke();
rect(30, 30, 90, 90);
rect(80, 280, 100, 55);

fill("yellow");
rect(5,200,25,50);
rect(120,5,70,55);

fill(52,130,185);
rect(190, 5, 70, 25);
rect(120,120,140,160);
rect(5,250,75,30);

fill("black");
rect(190,30, 70, 32);
rect(220, 280, 40,30);
rect(260,150,40,132);
rect(30,200,50,50);
rect(80,250,40,30);

stroke("black");
noFill();
strokeWeight(1);
rect(0,0,339,339);
rect(5,5,329,329);
rect(10,10,319,319);

function horizontal(a,b,x,y) {
  line(a,b-5,x,y-5);
  line(a,b,x,y);
  line(a,b+5,x,y+5);
}

function vertical(a,b,x,y) {
  line(a-5,b,x-5,y);
  line(a,b,x,y);
  line(a+5,b,x+5,y);
}

horizontal(1,30,400,30);
horizontal(120, 60, 190, 60);
horizontal(30,120,260,120);
horizontal(260,150, 340, 150);
horizontal(0, 180, 30, 180);
horizontal(0, 200, 120, 200);
horizontal(0, 250, 120, 250);
horizontal(0, 280, 340, 280);
horizontal(180, 310, 260, 310);

vertical(30,30,30,250);
vertical(50,0,50,30);
vertical(80, 250, 80, 340)
vertical(120,0,120,280);
vertical(155, 60, 155, 120);
vertical(180, 280, 180, 340);
vertical(190, 0, 190, 120);
vertical(260, 0, 260, 340);
vertical(300,150, 300, 280);
