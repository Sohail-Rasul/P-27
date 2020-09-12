
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var base;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(400,350,20);
	bob2=new Bob(420,350,20);
	bob3=new Bob(440,350,20);
	bob4=new Bob(380,350,20);
	bob5=new Bob(360,350,20);
	base=new Base(400,150,250,40);
	rope1=new Rope(bob1,{x:450,y:150});
	rope2=new Rope(bob2,{x:450,y:150});
	rope3=new Rope(bob3,{x:500,y:150});
	rope4=new Rope(bob4,{x:550,y:150});
	rope5=new Rope(bob5,{x:600,y:150});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 base.display();
 rope1.display();
}



