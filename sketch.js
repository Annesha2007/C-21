var canvas;
var music;
var b1, b2, b3, b4
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    b1 = createSprite(0,580,360,30)
    b1.shapeColor = "blue"

    b2 = createSprite(295,580,200,30)
    b2.shapeColor = "yellow"

    b3 = createSprite(515,580,200,30)
    b3.shapeColor = "pink"

    b4 = createSprite(740,580,220,30)
    b4.shapeColor = "green"

    ball = createSprite(random(20, 750),100, 40, 40)
    ball.shapeColor= "white"
    ball.velocityX= 4;
    ball.velocityY= 9;
 
    }

function draw() {
    background("grey");
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(b1.isTouching(ball)&& ball.bounceOff(b1)){
        ball.shapeColor = "blue";
        music.play() 
    }
    if(b2.isTouching(ball) ){
        ball.shapeColor = "yellow";
        music.stop() 
        ball.velocityX=0
        ball.velocityY=0
        
    }
    if(b3.isTouching(ball)&& ball.bounceOff(b3)){
        ball.shapeColor = "pink"; 
    }
    if(b4.isTouching(ball)&& ball.bounceOff(b4)){
        ball.shapeColor = "green";
    }
       drawSprites()
    }
    