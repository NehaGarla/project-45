var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ant,antimage
var forest,forestimage
var rock,rockimage
var pangolin,pangolinimage
var spyder,spyderimage
var webofspyder,webofspyderimage


function preload(){
antimage=loadImage("Ant.png")
forestimage=loadImage("forest.jpg")
pangolinimage=loadImage("pangolin.png")
rockimage=loadImage("rock.png")
spyderimage=loadImage("spyder.png")
webofspyderimage=loadImage("web of spyder.png")
}

function setup() {
  createCanvas(1000, 500);
  ant=createSprite(960,450,50,50)
 ant.addImage("ant",antimage)
 ant.scale=0.1

 rock=createSprite(10,450,50,50)
 rock.addImage("rock",rockimage)
 rock.scale=0.6

 spyder=createSprite(800,450,50,50)
 spyder.addImage("spyder",spyderimage)
 spyder.scale=0.2

 webofspyder=createSprite(800,450,50,50)
 webofspyder.addImage("webofspyder",webofspyderimage)
 webofspyder.scale=0.3

 pangolin=createSprite(400,450,50,50)
 pangolin.addImage("pangolin",pangolinimage)
 pangolin.scale=0.3

}

function draw() {
 background(forestimage)

  
  drawSprites();
}