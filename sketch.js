//this are the variables taking some memory for the component required in the game.
var ball;
var start;
var edges;
var wall1;
var wall2;
var wall3;
var ground;
var gameBox1;
var gameBox2;
var gameBox3;
var gameBox4;

//this is the function preload for the loading the images and the animation for the game.
function preload() {
  groundImg = loadImage("g1.png");
  ballImg = loadImage("b1.png");
  startImg = loadImage("s1.png");
  bounce_sound = loadSound("j1.wav");
}

//this is the function setup for the instalation of the component required in the game. 
function setup() {

  //creating a canvas for the instalation of the game.
  createCanvas(880, 700);

  //this is the sprite for the background of the image.
  ground = createSprite(width / 2, height / 2);
  ground.addImage(groundImg);
  ground.scale = 1.7;

  //these are the gameBox for the game. 
  gameBox1 = createSprite(115, 695, 230, 20);
  gameBox1.shapeColor = "red";
  gameBox2 = createSprite(340, 695, 220, 20);
  gameBox2.shapeColor = "blue";
  gameBox3 = createSprite(560, 695, 220, 20);
  gameBox3.shapeColor = "green";
  gameBox4 = createSprite(780, 695, 220, 20);
  gameBox4.shapeColor = "yellow";

  //this are the wall in the game.
  wall1 = createSprite(880, 350, 1, 700);
  wall1.shapeColor = "red";
  wall2 = createSprite(0, 350, 1, 700);
  wall2.shapeColor = "black";
  wall3 = createSprite(440, 0, 880, 1);
  wall3.shapeColor = "green";

  //this is the ball for the game.
  ball = createSprite(250, 350, 20, 20);
  ball.shapeColor = "white";
  
  //this is the start button for the game
  start = createSprite(600, 350, 1, 1);
  start.addImage(startImg);

  //creating the edges for the game.
  edges = createEdgeSprites();

}

function draw() {
  background(220);
  //this is the funtion isbounce of the object in the game
  isBounce();
  //making start button for the displaying of the algorithm project
  if (mousePressedOver(start)) {
    ball.velocityY = 10;
    ball.velocityX = 4;
    start.visible = false;
  }
  //this is for drawing up the slides
  drawSprites();
}


