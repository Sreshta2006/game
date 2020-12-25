var bgImg,mainImg,rawImg,speedImg
var bg,main
var raw,speed
var rawgroup,speedgroup,octopusgroup
var gameState="Play"
var octopus,octopusImg
var score=0
var wall;

function preload(){
    bgImg=loadImage("sea.png");
    mainImg=loadImage("main.png");
    rawImg=loadImage("raw.png");
    speedImg=loadImage("speed.png");
    octopusImg=loadImage("octopus.png")
  //  bg.velocityY=1+score/100
  }
function setup(){
createCanvas(500,900)

bg= createSprite(250,450)
bg.addImage(bgImg);
bg.scale=2

rawgroup= createGroup();
speedgroup= createGroup();

main=createSprite(250,800)
main.addImage(mainImg);
main.scale=0.07
//main.debug=true;
//main.setCollider("rectangle",0,0,60,120)


bg.velocityY=1


}
function draw(){
background("white")

if(gameState==="Play"){
  
if(bg.y>700){
    bg.y=600
}
if(keyDown(LEFT_ARROW)){
main.x=main.x-3
}
if(keyDown(RIGHT_ARROW)){
main.x=main.x+3
}
raw1();
speed1();

if(frameCount%1000===0){
  wall=createSprite(250,5,500,30);
  wall.velocityY=1
}



if(main.isTouching(rawgroup) || main.isTouching(speedgroup)){
  console.log("hi")
  gameState="End"
}
if(gameState==="End"){
  main.velocityX=0;
  bg.velocityY=0;
  wall.velocityY=0;
  reset();
}
}
drawSprites();
}                                  

function reset(){
gameState==="Play"
rawgroup.setLifetimeEach(-1)
speedgroup.setLifetimeEach(-1)
rawgroup.setVelocityEach(0)
speedgroup.setVelocityEach(0)

}


function raw1(){
  if(frameCount%500===0){
    raw=createSprite(100,5)
    raw.addImage(rawImg);
    raw.scale=0.08
    //raw.debug=true
    raw.velocityY=1
    raw.x=Math.round(random(50,450))
    rawgroup.add(raw)

  }
}
function speed1(){
  if(frameCount%700===0){
    speed=createSprite(100,5)
    speed.addImage(speedImg);
    speed.scale=0.09
    //speed.debug=true
    speed.velocityY=1
    speed.x=Math.round(random(50,450))
    speedgroup.add(speed)

  }
}


