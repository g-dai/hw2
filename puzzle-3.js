//SF sky colours

background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(200,280), random(25,40), 100);
  ellipse(random(width), random(height), random(20, 40));
}
