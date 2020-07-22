
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	ground1 = new ground(width/2,675,800,20)
  //Create the Bodies Here.
  ball = new paper(100,400,20,20);
	side1 = new dustbin(400,600,20,100);
	side2 = new dustbin(600,600,20,100);
	side3 = new dustbin(500,650,250,20);
	
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground1.display();
  ball.display();
  side1.display();
  side2.display();
  side3.display();
  
  drawSprites(); 
}
function keyPressed(){
  console.log("keyPressed event is called")
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x : 10,y : -25})
  }
}


