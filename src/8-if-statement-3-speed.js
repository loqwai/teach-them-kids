var badGuyX;
var badGuyY;
var badGuySpeed;
function setup() {
	createCanvas(windowWidth, windowHeight);
	badGuyX = windowWidth;
	badGuyY = windowHeight / 2;
  badGuySpeed = 5;
}

function draw() {
	background(30, 115, 190);

	if ( abs(badGuyX - mouseX) < 10 && abs(badGuyY - mouseY) < 10) {
		background(255, 0, 0);
	}

	if(badGuyY > mouseY) {
		badGuyY = badGuyY - badGuySpeed;
	} else {
		badGuyY = badGuyY + badGuySpeed;
	}

	if(badGuyX > mouseX) {
		badGuyX = badGuyX - badGuySpeed;
	} else {
		badGuyX = badGuyX + badGuySpeed;
	}

	fill(255, 255, 255);
	ellipse(mouseX, mouseY, 15);

	fill(0, 0, 0);
	ellipse(badGuyX, badGuyY, 15);

}
