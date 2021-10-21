var virus, virusImg, germ,germ1, germ2, germ3,germ1Img, germ2Img, germ3Img, injection,injectionImg;
var gameOver, gameoverImg;
var bg, bgImg;
var score=0;
var PLAY=1;
var END=0;
var gameState=1;
var germ1G,germ2G, germ3G, injectionG;
var edges;


function preload(){
  virusImg=loadImage("virus.png")
  germ1Img=loadImage("germ1.jpg")
  germ2Img=loadImage("germ2.jpg")
  germ3Img=loadImage("germ3.jpg")
  gameoverImg=loadImage("gameOver.jpg")
  bgImg=loadImage("bg.jpg")   
  injectionImg=loadImage("injection.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  
  bg=createSprite(width/2,200)
  bg.addImage(bgImg);
  bg.scale=2
  bg.velocityY=4;

  virus=createSprite(width/2,height-50,20,20)
  virus.addImage(virusImg);
  virus.scale=0.1;
  
  germ1G= new Group();
  germ2G= new Group();
  germ3G= new Group();
  injectionG= new Group();

  gameOver=createSprite(200,300)
  gameOver.addImage(gameoverImg);
  gameOver.scale=0.5
  gameOver.visible=false

}

function draw() {
  
   if(gameState==PLAY){
     background(0)
     virus.x=World.mouseX;

     edges= createEdgeSprites();
     virus.collide(edges);

     if(bg.y>400){
       bg.y=height/2;
     }

     createGerm1()
     createGerm2()
     createGerm3()
     createInjection()

     if(germ1G.isTouching(virus)){
       germ1G.destroyEach();
       score=score+50;
     }
     else if (germ2G.isTouching(virus)){
      germ2G.destroyEach();
      score=score+100;
     }
     else if (germ3G.isTouching(virus)){
      germ3G.destroyEach();
      score=score+150;
     }
     else if(injectionG.isTouching(virus)){
       gameState=END;

       virus.x=width/2;
       virus.y=height/2;

       germ1G.destroyEach();
       germ2G.destroyEach();
       germ3G.destroyEach();
       injectionG.destroyEach();
       
       germ1G.setVelocityYEach(0);
       germ2G.setVelocityYEach(0);
       germ3G.setVelocityYEach(0);
       injectionG.setVelocityYEach(0);

       bg.velocityY=0

       gameOver.visible=true
       gameOver.y=height-200
       gameOver.x=width-700;
     }
   }
    drawSprites()
    textSize(20)
    fill(255);
    text("Score: "+score,width-150,30); 
}

function createGerm2(){
  if(World.frameCount % 200==0){

    var germ2=createSprite(Math.round(random(50,width-50),40,10,10))
    germ2.addImage(germ2Img)
    germ2.scale=0.5
    germ2.velocityY=5;
    germ2.lifetime=200;
    germ2G.add(germ2);
    }
}

function createGerm1(){
  if(World.frameCount % 320==0){

  var germ1=createSprite(Math.round(random(50,width-50),40,10,10))
  germ1.addImage(germ1Img)
  germ1.scale=0.5
  germ1.velocityY=5;
  germ1.lifetime=200;
  germ1G.add(germ1);
  }
}

function createGerm3(){
  if(World.frameCount % 410==0){

    var germ3=createSprite(Math.round(random(50,width-50),40,10,10))
    germ3.addImage(germ3Img)
    germ3.scale=0.5
    germ3.velocityY=5;
    germ3.lifetime=200;
    germ3G.add(germ3);
    }
}

function createInjection(){
  if(World.frameCount % 530==0){

    var injection=createSprite(Math.round(random(50,width-50),40,10,10))
    injection.addImage(injectionImg)
    injection.scale=0.5
    injection.velocityY=5;
    injection.lifetime=200;
    injectionG.add(injection);
    }
}

