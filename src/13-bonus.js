var badGuySpeed
var badGuys
var badGuyCount
var gameOver
var score

function setup() {
	createCanvas(windowWidth, windowHeight)
  badGuyCount = 20
  gameOver = false
	badGuys = []
  score = 0
  for(i = 0; i < badGuyCount; i++) {
    var badGuy = {}
    badGuy.x = windowWidth
    badGuy.y = random(0, windowHeight)
    badGuy.speed = random(1, 4)
    badGuys.push(badGuy)
  }

}

function draw() {
  if(gameOver) {
    background(255,0,0)
    fill(0,0,0)
    text("you scored: " + score, mouseX, mouseY)
    return
  }
	if (score % 100 == 0) {
		print('new baddie')
		badGuys.push({
			x: random(0, windowWidth),
			y: random(0, windowHeight),
			speed: random(5,7),
      r: random(0,255),
      g: random(0,255),
      b: random(0,255),
      size:random(10,20)
		})
	}

	background(30, 115, 190)
  fill(0,0,0)
  text("score: " + score, 10, 10)

  score = score + 1
	for(i = 0; i < badGuys.length; i++) {

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

    fill(badGuys[i].r || 0, badGuys[i].g || 0, badGuys[i].b || 0)
    ellipse(badGuyX, badGuyY, badGuys[i].size || 15)

    badGuys[i].x = badGuyX
    badGuys[i].y = badGuyY
  }

}

function mouseClicked() {
  setup()
}
