
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
 
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  
  
  
   ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
  console.log(ground.x);
  
  

}


function draw() {
  background(180);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
 
  
    
   //scoring
   survivalTime = survivalTime +    Math.round(getFrameRate()/60);
  
   ground.visible=false;
  
  ground.velocityX = -(4 + 3* survivalTime/100)
  
  //jump when the space key is pressed
  if(keyDown("space")){
    monkey.velocityY=-12;
  }

  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8

  
  //stop trex from falling down
  monkey.collide(ground);
  
// calling the functions.
  
   banana1();
  
   obstacle1 ();
  
  
 drawSprites();
  
  
    text("survivalTime="+survivalTime, 250,50);
}
function banana1(){
  
  //write code here to spawn the clouds
  if (frameCount % 140 === 0) {
     banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(40,80));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.scale=0.1;
    return banana;
  }

}


function obstacle1(){
  
  //write code here to spawn the clouds
  if (frameCount % 180 === 0) {
  obstacle = createSprite(600,165,20,50);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX = -3;
  return obstacle;
  }
  
    

}


