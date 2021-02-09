  var sc,mn,hr
var hrangle,mnangle,scangle;

var d;
function preload(){
d=loadSound("bnb.mp3")
}
function setup() {
  createCanvas(2400,2400);
 angleMode(DEGREES)
  
  d.play()





}

function draw() {
  background(0);

  hr = hour();
  mn= minute();
  sc = second();

  translate(900,400);
  rotate(-90);
 scangle=map(sc,0,60,0,360);
 mnangle=map(mn,0,60,0,360);
 hrangle=map(hr%12,0,12,0,360);

 

 push()
 rotate(scangle)
 stroke("green");
 strokeWeight(5);
 line(0,0,150,0);
 //stroke("green");
 //fill(0)
 //arc(0,0,300,300,0,scangle)
 pop();
 push()
 rotate(mnangle)
 stroke("red");
 strokeWeight(5);
 line(0,0,110,0);
 //stroke("red");
//fill()
 //arc(0,0,300,300,0,mnangle)
 pop();
 push()
 rotate(hrangle)
 stroke("blue");
 strokeWeight(5);
 line(0,0,85,0);
 //stroke("blue");
 //fill(0)
 //arc(0,0,300,300,0,hrangle)
 pop();

 stroke("white");
 strokeWeight(10)
 point(0,0)


 


  drawSprites();
}