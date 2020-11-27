//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1;
var line2;
var line3;
var ground;
var paper1;
var garbage,garbageImg;
function preload()
{
	garbageImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

line1 = new Rect(600,670,200,20);
line2 = new Rect(500,660,20,200);
line3 = new Rect(700,660,20,200);
ground = new Ground(400,690,800,20)
paper1 = new Paper(200,660,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  ground.display();
  paper1.display();
  imageMode(CENTER);
  image(garbageImg,600,590,190,190);
  image.scale= 0.2;
  fill("red");
  text(mouseX+ ","+ mouseY,mouseX,mouseY);
}
function keyPressed(){
  if(keyCode === UP_ARROW){ 
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:90,y:-100});
  }
}

