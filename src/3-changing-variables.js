var red
var blue
var green

function setup() {
  red = 30
  blue = 115
  green = 190
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  blue = blue + 1
	background(red, blue, green)
}
