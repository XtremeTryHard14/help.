var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;


var boy = [], boyImg; 
var dirtyBoy, dirtyBoyImg;
var mom, momImg;
var garbage,garbage1, garbageImg;
var street,streetImg;

function preload(){
  boyImg = loadImage("boy.png");
  dirtyBoyImg = loadImage("dirty_boy.png");
  momImg = loadImage("mom.png")
  garbageImg = loadImage("garbage.png")
  streetImg = loadImage("street.jpg")
}

function setup() {
  createCanvas(1000,1000);
  createSprite(400, 200, 50, 50);

  street = createSprite(1000,400)
  street.addImage(streetImg)
  street.scale = 3;

  boy = createSprite(100,500);
  boy.addImage(boyImg);
  boy.scale = 0.4;

  mom = createSprite(900,500)
  mom.addImage(momImg);

  garbage = createSprite(400,500);
  garbage.addImage(garbageImg)
  garbage.scale = 0.4
  

  garbage1 = createSprite(700,500);
  garbage1.addImage(garbageImg)
  garbage1.scale = 0.4
    
 
}

function draw() {
  background(255,255,255); 
  
  if(keyDown("RIGHT_ARROW")){
    boy.x = boy.x + 10;
  }

  if(keyDown("LEFT_ARROW")){
    boy.x = boy.x - 10;
  }

  if(keyDown("UP_ARROW")){
    boy.y = boy.y - 10;
  }

  if(keyDown("DOWN_ARROW")){
    boy.y = boy.y + 10;
  }

  
  
  drawSprites();
  
  if(boy.isTouching(mom)){
    textSize(30);
    text("You have reached mom without getting dirty",200,300)
    fill("black");
  }

  if(boy.isTouching(garbage,garbage1)){
    textSize(30);
    text("You have gotten dirty mom is mad",200,300)
    fill("black");
    boy.changeImage(dirtyBoyImg)
  }
}