var btn_red;
var btn_green;
var btn_blue

var r = 0;
var g = 0;
var b = 0;

function red_bg(){
  r = 250;
  g = 0;
  b=0
}
function green_bg(){
  g=250
  r=0
  b=0
}
function blue_bg(){
b=250
g=0
r=0
}


function setup() {
  createCanvas(400, 400);  
  btn_red = createButton("red");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg)

  btn_green = createButton("green");
  btn_green.position(200,50);
  btn_green.mousePressed(green_bg);
  btn_blue = createButton("blue")
  btn_blue.position(150, 100)
  btn_blue.mousePressed(blue_bg)
  
}

function draw() {
  background(r,g,b);
  
}

