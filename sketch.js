const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
var a,b,c;

function preload() {
   dustbinImg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	

	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	//dustbinObj=new dustbin(1200,650);
	a=new A (1200,500,20,150);
	b=new B (1000,500,20,150);
	c=new C (1110,600,150,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  

}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  //dustbinObj.display();
a.display();
b.display();
c.display();
  
  
 image(dustbinImg,980,410,240,250)

 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  	}
}