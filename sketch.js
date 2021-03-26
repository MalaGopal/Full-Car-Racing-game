var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var CarsAtEnd = 0;
var passedFinish;
var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;
var goldImg,silverImg,bronzeImg;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  goldImg = loadImage("images/gold_medal.png")
  silverImg = loadImage("images/silver_medal.png");
  bronzeImg = loadImage("images/bronze_medal.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(CarsAtEnd === 4){
    game.update(2);
  }

  if(gameState === 2 && CarsAtEnd === 4){
    game.displayRanks();
    game.end();
  }
}
