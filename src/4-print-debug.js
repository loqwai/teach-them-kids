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
	red = mouseX
	green = mouseY
	background(red, blue, green)
	print(red, green, blue)
}
