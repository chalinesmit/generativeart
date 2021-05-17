let x2,y2 = 200;

var r1
var r2

var a1 = 0
var a2 = 0

var a1Inc
var a2Inc

var prevX
var prevY

function setup() {
  createCanvas(600, 600)
  angleMode(DEGREES)
  background(80)
  
  r1 = random(50,150)
  r2 = random(50,150)
  
  a1Inc = random(0.1,5)
  a2Inc = random(0.1,5)
}

function draw() {

  translate(width / 2, height / 2)
  stroke(225)
  
  for (var i = 0; i < 30; i++) {
    
  var r = map(sin(frameCount), -1, 1, 100, 800)
  var g = map(cos(frameCount), -1, 1, 100, 200)
  var b = map(sin(frameCount), -1, 1, 100, 200)
    
  var x1 = r1 * cos(a1)
  var y1 = r1 * sin(a1)
  
  var x2 = x1 + r2 * cos(a2)
  var y2 = y1 + r2 * sin(a2)
  
  stroke(r, g, b)
  
  line(prevX, prevY, x2, y2)
  
  prevX = x2
  prevY = y2
  
  a1 += a1Inc
  a2 += a2Inc
    
  } 
}

function mouseClicked() {
  a2 = Math.random() * 200;
 }

function mouseDragged() {
  a1 = Math.random() * 200;
 }