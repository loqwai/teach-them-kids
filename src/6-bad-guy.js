var badGuyX;
function setup() {
  createCanvas(windowWidth, windowHeight);
	badGuyX = windowWidth;
}

function draw() {
	background(30,115,190);
	fill(255,255,255);
	ellipse(mouseX, mouseY, 15);

	fill(0,0,0);
	ellipse(badGuyX, windowHeight/2, 15);
	badGuyX = badGuyX - 1;
}
