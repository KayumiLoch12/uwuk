const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var throwThing;
var chain;
var ground;
var rblock;
var yblock,yblock2;
var oblock,Oblock2,oblock3;
var Gblock,Gblock2,Gblock3,Gblock4;
var Bblock,Bblock2,Bblock3,Bblock4,Bblock5;
var Pblock,Pblock2,Pblock3,Pblock4,pblock5,Pblock6;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 900);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    rblock = new Red_block(440,130,20,40);
    ground = new Ground(430,410,200,10)
    Pblock = new purple(388,400,20,40);
    Pblock2 = new purple(408,400,20,40);
    Pblock3 = new purple(428,400,20,40);
    Pblock4 = new purple(448,400,20,40);
    pblock5 = new purple(468,400,20,40);
    Pblock6 = new purple(488,400,20,40);

    Bblock = new blue(390,340,20,40);
    Bblock2 = new blue(410,340,20,40);
    Bblock3 =new blue(430,340,20,40);
    Bblock4 =new blue(450,340,20,40);
    Bblock5 =new blue(470,340,20,40);

    Gblock = new green(410,310,20,40);
    Gblock2= new green(430,310,20,40);
    Gblock3= new green(450,310,20,40);
    Gblock4= new green(470,310,20,40);

    oblock = new orange(410,250,20,40);
    Oblock2 = new orange(430,250,20,40);
    oblock3 = new orange(450,250,20,40);

    yblock = new Yellow(420,180,20,40)
    yblock2 = new Yellow(440,180,20,40)

    
    throwThing = new ThrowThing(600,500,40,40);
    chain = new Chain(throwThing.body, {x: 900, y: 305})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  rblock.display();
  ground.display();
  Pblock.display();
  Pblock2.display();
  Pblock3.display();
  Pblock4.display();
  pblock5.display();
  Pblock6.display();

  Bblock.display();
  Bblock2.display();
  Bblock3.display();
  Bblock4.display();
  Bblock5.display();

  Gblock.display();
  Gblock2.display();
  Gblock3.display();
  Gblock4.display();

  oblock.display();
  Oblock2.display();
  oblock3.display();

  yblock.display();
  yblock2.display();
  
  throwThing.display();
  chain.display();
  

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(throwThing.body, {x: mouseX, y: mouseY})
  }
  
  function mouseReleased(){
  chain.fly();
  }
  function keyPressed(){
    if(keyCode == 32){
      chain.attach(throwThing.body)
   
    }   
   
   }