var canvas
var boy,boyImg
var obstacle
var gameState=0
var obstacleGroup

function preload(){
boyImg=loadImage("boy.png")
}
  

function setup(){
  canvas=createCanvas(500,500)
boy=createSprite(250,250,50,50)
boy.addImage("boy",boyImg)
boy.scale=0.3
boy.setCollider("circle",boy.x-200,boy.y-200,200)
obstacleGroup=new Group();
}
function draw(){
  background("white")
  drawSprites();
  
  
  var rand=Math.round(random(boy.x-250,boy.x+250))
  console.log(boy.x+rand)
  
  if(gameState===0){
    if(World.frameCount%30===0){
      obstacle=createSprite(rand,boy.y-200,40,40)
      obstacle.shapeColor="brown"
      obstacleGroup.add(obstacle)
    }
    movement();
    if(boy.isTouching(obstacleGroup)){
      gameState=1
    }  
  }
  if(gameState===1){
    textSize(30)
    fill("black")
    text("Game Over",boy.x,boy.y)
  }
}
function movement(){
  if(keyDown(UP_ARROW)){
    boy.y=boy.y-100
    camera.position.x=boy.x
    camera.position.y=boy.y
  }
  
  if(keyWentDown(LEFT_ARROW)){
    boy.x=boy.x-100
    camera.position.x=boy.x
    camera.position.y=boy.y
  }
  if(keyWentDown(RIGHT_ARROW)){
    boy.x=boy.x+100
    camera.position.x=boy.x
    camera.position.y=boy.y
  }
  
}

  