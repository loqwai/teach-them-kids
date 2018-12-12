var badGuyX;
var badGuyY

function setup() {
	createCanvas(windowWidth, windowHeight);
	badGuyX = windowWidth;
	badGuyY = windowHeight / 2;
}

function draw() {
	background(30, 115, 190);

	if (badGuyX == mouseX) {
		background(255, 0, 0);
	}

	if(badGuyY > mouseY) {
		badGuyY = badGuyY - 1;
	} else {
		badGuyY = badGuyY + 1;
	}

	if(badGuyX > mouseX) {
		badGuyX = badGuyX - 1;
	} else {
		badGuyX = badGuyX + 1;
	}

	fill(255, 255, 255);
	ellipse(mouseX, mouseY, 15);

	fill(0, 0, 0);
	ellipse(badGuyX, badGuyY, 15);

}
