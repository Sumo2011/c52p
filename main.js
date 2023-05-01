var PLAY = 1;
var END = 0;

var gameState = PLAY;
var ai

var player1,track
var ES,ESIMG
var cc


var finish_line
var VS
var carIMG,trackIMG
var road,roadIMG
var cc,ccIMG
var score
//main characters

function preload(){
 carIMG=loadImage("vroom.png")
 roadIMG=loadImage("lollol.png")
ESIMG=loadImage("uu.png")
trackIMG=loadImage("uwu.png")

 VS=loadSound("vs.mp3")
ai=loadImage("l.png")
 ccIMG=loadImage("vroom.png")

//resources
}
;

//gametates
function setup(){

     canvas=createCanvas(900,400)
 
    player1=createSprite(400,300,20,20)
    player1.scale=0.1
    
   
    player1.addImage(carIMG)
     track=createSprite(width/2,height/2,900,392)
     track.addImage(trackIMG)
     track.depth=0
     road=createSprite(width/2,height/2,900,400)
     road.addImage(roadIMG)
     road.depth=0
     ES=createSprite(width/2,height/2,900,392)
     ES.addImage(ESIMG)
     ccg=createGroup()
    
}

function draw(){
    background("white")
   


   
     if(gameState=PLAY){
   

      ES.visible=false

    road.y=road.y+5

        if(keyDown("left_arrow")){
      player1.x = player1.x - 3;
   
   
  }
  if(keyDown("right_arrow")){

        player1.x = player1.x + 3;

  }
  spawnCARS()
     
    
  

  if(road.y>300){
     road.y = 150
    }
     
    if(player1.isTouching(ccg )){
      
gameState=END
    }
  
  }
  
  
   
 if(gameState===END){


     road.visible=false
     track.visible=false
  ES.visible=true
ccg.setVelocityYEach(0)
ccg.destroyEach()
player1.visible=false
    

 }
  
drawSprites()
}




function spawnCARS(){
  if (frameCount % 60 === 0) {
    cc = createSprite(600,100,40,10)
   cc.x = Math.round(random(350,639))
   cc.y=Math.round(random(0,1000))
   cc.addImage(ai)
   cc.scale = 0.1
   cc.velocityY = -3
   

   cc.lifetime = 134
   
  
   cc.depth = player1.depth;
   player1.depth = cc.depth + 1
   
   
  ccg.add(cc)
}
}
//function to spwan opponents
//made by sumedh k