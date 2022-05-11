var Canvas;
var backgroundImg,player1,player2,player3,track;
var carrotImg,powerCoinImg,lifeImg;
var stone1,stone2;
var database,gameState;
var form,player,playerCount;
var allplayers , player1,player2,player3,carrot,powerCoin,stone1,stone2;
var players = [];

function preload(){
    backgroundImg= loadImage("./assets/background.png");
    player1 = loadAnimation("./assets/player1B.png","./assets/player1A.png");
    player2 = loadAnimation("./assets/player2B.png","./assets/player2A.png");
    player3 = loadAnimation("./assets/player3B.png","./assets/player3A.png");
    track = loadImage("./assets/track.png");
    carrotImg = loadImage("./assets/carrot.png");
    powerCoinImg = loadImage("./assets/goldCoin.png");
    lifeImg = loadImage("./assets/life.png");
    stone1 = loadImage("./assets/stone1.png");
    stone2 = loadImage("./assets/stone2.png");

}

function Setup(){
canvas = createCanvas(windowWidth,windowHeight);
database = firebase.database();
game = new Game();
game.getState();
game.start();


}

function draw(){
    background(backgroundImg);
    if (playerCount === 3) {
        game.update(1);
      }
    
      if (gameState === 1) {
        game.play();
      }
    
      if (gameState === 2) {
        game.showLeaderboard();
        game.end();
      }

   
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}