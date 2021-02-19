var canvas;
var music;
var rect1,rect2,rect3,rect4;
var ball;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,400);
    rect1=createSprite(500,380,200,40);
rect1.shapeColor="blue"

rect2=createSprite(710,380,200,40);
rect2.shapeColor="red";

rect3=createSprite(290,380,200,40);
rect3.shapeColor="yellow";

rect4=createSprite(70,380,200,40);
rect4.shapeColor="green";

var ball=createSprite(290,50,30,30);
ball.shapeColor="white";
ball.velocityY=2;
ball.velocityX=2;
    //create 4 different surfaces
 //create box sprite and give velocity


}

function draw() {
    background(rgb(0));
    //create edgeSprite
bounceOff(rect1,ball);

   

drawSprites();
}

    //add condition to check if box touching surface and make it box
    if (rect1.isTouching(ball)&&ball.bounceOff(rect1)){
        ball.shapeColor="blue";
    }
        
    
    
    
    function bounceOff(ball,rect1){
      
        if (ball.x - rect1.x < rect1.width/2 + ball.width/2
      && rect1.x - ball.x < rect.width/2 + ball.width/2){
        ball.velocityX=ball.velocityX*(-1);
      }
      if( ball.y - rect1.y < rect1.height/2 + ball.height/2
          && rect1.y - ball.y < rect1.height/2 + ball.height/2) {
            ball.velocityY=ball.velocityY*(-1);
          }
      }
    
      function isTouching(ball,rect1){
      if (ball.x - rect1.x < rect1.width/2 + ball.width/2
        && rect1.x - ball.x < rect1.width/2 + ball.width/2
        && ball.y - rect1.y < rect1.height/2 + ball.height/2
        && rect1.y - ball.y < rect1.height/2 + ball.height/2) {
     
    }
}
    
    
    