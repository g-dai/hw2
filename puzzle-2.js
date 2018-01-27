//a

function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(170, 170, random(width), random(height));
}




//b

function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(random(width), random(height), 340, 0);
}




//challenge

function setup() {
  createCanvas(340, 340);
}

//lines are red if drawn in an area where x < 170, and blue if draw in an area if x >170)

function draw() {
  x = random(width)
	if (x < 170) {
    stroke('red')
  } else {
    stroke('blue')
  }
  line(random(width), random(height), random(width), random(height));
}
