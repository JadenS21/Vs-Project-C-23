var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redThing1,redThing2,redThing3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(500, 500);
    rectMode(CENTER);
    
    engine = Engine.create();
    world = engine.world;
    
	Engine.run(engine);
    
	packageSprite=createSprite(width/2, 90, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
    
	groundSprite=createSprite(width/2, height-35, width,20);
	groundSprite.shapeColor=color(255)
    
	var packageBody_options ={
        restitution: 3,
        isStatic: false
    }
    
    packageBody = Bodies.circle(250,200,20, packageBody_options);
    World.add(world,packageBody);
    
	var ground_options ={
        isStatic: true
    }
    
    ground = Bodies.rectangle(400,280,200,100,ground_options);
    World.add(world,ground);
    
    
    var redThing1_options ={
        isStatic: true
    }
    
    redThing1 = Bodies.rectangle(250,500,200,20,redThing1_options)
    redThing1.shapeColor("red");
    
    var redThing2_options ={
        isStatic: true
    }
    
    redThing2 = Bodies.rectangle(230,500,20,100,redThing2_options)
    redThing2.shapeColor("red");
    
    var redThing3_options ={
        isStatic: true
    }
    
    redThing3 = Bodies.rectangle(280,500,20,100,redThing3_options)
    redThing3.shapeColor("red");
    
}


function draw() {
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  background(0);
  
  Engine.update(engine);
  
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y
  
  ellipseMode(RADIUS);
  ellipse(packageBody.position.x, packageBody.position.y, 20, 20);

  drawSprites();
}