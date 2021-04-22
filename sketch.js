
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground
var tree,treeImg
var stone
var boy,boyImg
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10

var launcher
var launcherForce =100


function preload()
{
	boyImg= loadImage("boy.png")
	treeImg = loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,15)



	stone = new Stone(100,540,50)

	boy = createSprite(150,610,50,50)
	boy.addImage(boyImg)
	boy.scale = 0.1

	mango1 = new Mango(500,300,50,50)
	mango2 = new Mango(590,310,50,50)
	mango3 = new Mango(510,360,50,50)
	mango4 = new Mango(600,250,50,50)
	mango5 = new Mango(700,390,50,50)
	mango6 = new Mango(650,330,50,50)
	mango7 = new Mango(730,310,50,50)
	mango8 = new Mango(700,270,50,50)
	mango9 = new Mango(750,380,50,50)
	mango10 = new Mango(580,370,50,50)

	launcher= new Launcher(stone.body,{x:100,y:540})

	tree = createSprite(600,440,1,1)
	tree.addImage(treeImg)
	tree.scale = 0.4

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  ground.display()

  stone.display()



  launcher.display()


  drawSprites();

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);


 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
	launcher.fly()
	
}

function keyPressed()
{

	if(keyCode === 32)
	{
	  Matter.Body.setPosition(stone.body,{x:100,y:540})	
	  launcher.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r){
	  Matter.Body.setStatic(lmango.body, false);
	}
  
  }


