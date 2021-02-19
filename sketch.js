
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var stone;
var world,boy;
var rope;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1130,170,30);
	mango3=new mango(1050,80,30);
	mango4=new mango(1000,150,30);
	mango5=new mango(970,200,30);
	mango6=new mango(1050,200,30);
	mango7=new mango(1190,210,30);
	mango8=new mango(910,200,30);
	stone=new Stone(240,410,30);

	rope=new Rope(stone.body,{x:240,y:410});


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {


  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone.display();

  rope.display();
  
  groundObject.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

  text("Press 'space' to get a second chance to play!",60,30);

}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.fly();
}

function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position;
	stoneBodyPosition=stone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,
		mangoBodyPosition.x,mangoBodyPosition.y);

		if (distance<=mango.r+stone.r){
			Matter.Body.setStatic(mango.body.false);
		}
}

function keyPressed() {
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:240,y:410})
		launcherObject.attach(stone.body);
	}
}
