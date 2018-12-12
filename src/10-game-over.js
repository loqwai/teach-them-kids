var badGuySpeed
var badGuys = []
var badGuyCount
var gameOver
function setup() {
	createCanvas(windowWidth, windowHeight)
  badGuyCount = 20
  gameOver = false

  for(i = 0; i < badGuyCount; i++) {
    var badGuy = {}
    badGuy.x = windowWidth
    badGuy.y = random(0, windowHeight)
    badGuy.speed = random(1, 10)
    badGuys.push(badGuy)
  }

}

function draw() {

  if(gameOver) {
    background(255,0,0)
    return
  }

	background(30, 115, 190)
	for(i = 0; i < badGuyCount; i++) {

    var badGuyX = badGuys[i].x
    var badGuyY = badGuys[i].y
    var badGuySpeed = badGuys[i].speed

    if ( abs(badGuyX - mouseX) < 10 && abs(badGuyY - mouseY) < 10) {
      gameOver = true
    }

    if(badGuyY > mouseY) {
      badGuyY = badGuyY - badGuySpeed
    } else {
      badGuyY = badGuyY + badGuySpeed
    }

    if(badGuyX > mouseX) {
      badGuyX = badGuyX - badGuySpeed
    } else {
      badGuyX = badGuyX + badGuySpeed
    }

    fill(255, 255, 255)
    ellipse(mouseX, mouseY, 15)

    fill(0, 0, 0)
    ellipse(badGuyX, badGuyY, 15)

    badGuys[i].x = badGuyX
    badGuys[i].y = badGuyY
  }

}
