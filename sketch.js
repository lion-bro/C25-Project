const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup(){
	var canvas = createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(150,320);

	ground = new Ground(600,390,1200,20);

	box1 = new Box(900,300,120,20);
}

function draw(){
	background("skyblue");
	Engine.update(engine);

	

	ground.display();

	box1.display();

	ball.display();
	
}

