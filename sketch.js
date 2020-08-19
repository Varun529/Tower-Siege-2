const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, ball, box1, box2, box3, box4, box5, box6, box7, box8, box9, platform;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

	ground= new Ground(400,695,800,10);
	platform= new Ground(590, 540, 200, 10);
	ball= new Ball(450,600);
	box1= new Box(530, 535, 30, 40);
	box2= new Box(560, 535, 30, 40);
	box3= new Box(590, 535, 30, 40);
	box4= new Box(620, 535, 30, 40);
	box5= new Box(650, 535, 30, 40);
	box6= new Box(560, 495, 30, 40);
	box7= new Box(590, 495, 30, 40);
	box8= new Box(620, 495, 30, 40);
	box9= new Box(590, 455, 30, 40);

	//sling= new Sling(stone.body,{x:150, y:600}, -100, 0);
	sling = new Sling(ball.body,{x:300, y:500})
	//sling = new Sling();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  sling.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  platform.display();
  

  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
	   sling.attach(ball.body);
	}
}

