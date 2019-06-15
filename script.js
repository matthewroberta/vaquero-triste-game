// CLASES

class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = canvas.width;
    this.h = canvas.height;
    this.score = 1;
    
  }
    
  draw() {
    // for (var x = 0; x <= canvas.width; x += 60) {
    //   ctx.moveTo(0.5 + x + canvas.padding, canvas.padding);
    //   ctx.lineTo(0.5 + x + canvas.padding, canvas.height + canvas.padding);
    // }
  
    // for (var x = 0; x <= canvas.height; x += 60) {
    //   ctx.moveTo(canvas.padding, 0.5 + x + canvas.padding);
    //   ctx.lineTo(canvas.width + canvas.padding, 0.5 + x + canvas.padding);
    // }
    // ctx.strokeStyle = "grey";
    // ctx.stroke();

    // var vaqueroTriste = new Image();
    // vaqueroTriste.onload = function() {
    //   ctx.drawImage(vaqueroTriste, 500, 20, 104, 104);
    // };
    // vaqueroTriste.src = './images/vaquero-triste.png';
  
  }
}

class VaqueroTriste {
  constructor(x,y,w,h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = new Image();
  this.img.src = './images/vaquero-triste.png';
  }

  draw() {
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
  }
}

class Palomita {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = './images/palomita.png';
    this.img.onload = this.draw()
  }
  draw() {
    if(playerOneSolo.isCollecting === false) {
      ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
    }
  }
}

class Wine {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = './images/wine.png';
    this.img.onload = this.draw()
  }
  draw() {
    if(playerOneSolo.isCollecting === false) {
      ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
    }
  }
}

class Mota {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = './images/mota.png';
    this.img.onload = this.draw()
  }
  draw() {
    if(playerOneSolo.isCollecting === false) {
      ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
    }
  }
}

class DogFood {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = './images/dogfood.png';
    this.img.onload = this.draw()
  }
  draw() {
    // if(playerOneSolo.isCollecting === false) {
      ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
    // }
  }
}

class DogBone {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = './images/dogbone.png';
    this.img.onload = this.draw()
  }
  draw() {
    // if(playerOneSolo.isCollecting === false) {
      ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
    // }
  }
}

class TennisBall {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = './images/tennisball.png';
    this.img.onload = this.draw()
  }
  draw() {
    // if(playerOneSolo.isCollecting === false) {
      ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
    // }
  }
}

class PopcornBowl {
  constructor(x,y,w,h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = new Image();
    // if (score > 0) {
    //   this.img.src = './images/dogfood.png';
    // } else {
  this.img.src = './images/bowl-empty.png';
    // }
  }

  draw() {
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
  }
}

class PlayerOneSolo {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = './images/P1-solo.png';
    this.imgWithPalomita = new Image();
    this.imgWithPalomita.src = './images/P1-1-gift.png';
    this.isCollecting = false 
  }

  crashWith(palomita) {
    return (this.x < palomita.x + palomita.w) &&
      (this.x + this.w > palomita.x) &&
      (this.y < palomita.y + palomita.w) &&
      (this.y + this.w > palomita.y)
  }

  crashWith(wine) {
    return (this.x < wine.x + wine.w) &&
      (this.x + this.w > wine.x) &&
      (this.y < wine.y + wine.w) &&
      (this.y + this.w > wine.y)
  }

  crashWith(mota) {
    return (this.x < mota.x + mota.w) &&
      (this.x + this.w > mota.x) &&
      (this.y < mota.y + mota.w) &&
      (this.y + this.w > mota.y)
  }

  crashWith(dogFood) {
    return (this.x < dogFood.x + dogFood.w) &&
      (this.x + this.w > dogFood.x) &&
      (this.y < dogFood.y + dogFood.w) &&
      (this.y + this.w > dogFood.y)
  }

  crashWith(dogBone) {
    return (this.x < dogBone.x + dogBone.w) &&
      (this.x + this.w > dogBone.x) &&
      (this.y < dogBone.y + dogBone.w) &&
      (this.y + this.w > dogBone.y)
  }

  crashWith(tennisBall) {
    return (this.x < tennisBall.x + tennisBall.w) &&
      (this.x + this.w > tennisBall.x) &&
      (this.y < tennisBall.y + tennisBall.w) &&
      (this.y + this.w > tennisBall.y)
  }

  draw() {
    ctx.drawImage(this.isCollecting ? this.imgWithPalomita : this.img,this.x,this.y,this.w,this.h);
  }
}

// VARIABLES

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
  canvas.width = 611;
  canvas.height = 611;
  canvas.padding = 10;

var board = new Board()
var vaqueroTriste = new VaqueroTriste(500, 20, 104, 104)
var bowl = new PopcornBowl(436, 76, 52, 52);
var playerOneSolo = new PlayerOneSolo(16, 16, 52, 52);

// var xRandom = Array(16, 76, 136, 196, 256, 316, 376, 436);
// var yRandom = Array(16, 136, 196, 256, 316, 376, 436, 496, 556);


var xRandomPopcorn = Array(76, 136, 196, 256, 316, 376, 436);
var yRandomPopcorn = Array(16, 196,);
var xPopcorn = xRandomPopcorn[Math.floor(Math.random()*xRandomPopcorn.length)];
var yPopcorn = yRandomPopcorn[Math.floor(Math.random()*yRandomPopcorn.length)];

var xRandomWine = Array(16, 76, 136, 196, 256, 316, 376, 436, 496, 556);
var yRandomWine = Array(316, 376);
var xWine = xRandomWine[Math.floor(Math.random()*xRandomWine.length)];
var yWine = yRandomWine[Math.floor(Math.random()*yRandomWine.length)];

var xRandomMota = Array(16, 76, 136, 196, 256, 316, 376, 436, 496, 556);
var yRandomMota = Array(556, 556);
var xMota = xRandomMota[Math.floor(Math.random()*xRandomMota.length)];
var yMota = yRandomMota[Math.floor(Math.random()*yRandomMota.length)]

var xRandomTennisBall = Array(16, 76, 136, 196, 256, 316, 376,);
var yRandomTennisBall = Array(76, 76,);
var xTennisBall = xRandomTennisBall[Math.floor(Math.random()*xRandomTennisBall.length)];
var yTennisBall = yRandomTennisBall[Math.floor(Math.random()*yRandomTennisBall.length)];

var xRandomTennisBall2 = Array(16, 76, 136, 196, 256, 316, 376, 436, 496, 556);
var yRandomTennisBall2 = Array(136, 436,);
var xTennisBall2 = xRandomTennisBall2[Math.floor(Math.random()*xRandomTennisBall2.length)];
var yTennisBall2 = yRandomTennisBall2[Math.floor(Math.random()*yRandomTennisBall2.length)];

var xRandomDogFood = Array(16, 76, 136, 196, 256, 316, 376, 436, 496, 556);
var yRandomDogFood = Array(256, 256,);
var xDogFood = xRandomDogFood[Math.floor(Math.random()*xRandomDogFood.length)];
var yDogFood = yRandomDogFood[Math.floor(Math.random()*yRandomDogFood.length)];

var xRandomDogBone = Array(16, 76, 136, 196, 256, 316, 376, 436, 496, 556);
var yRandomDogBone = Array(496, 496,);
var xDogBone = xRandomDogBone[Math.floor(Math.random()*xRandomDogBone.length)];
var yDogBone = yRandomDogBone[Math.floor(Math.random()*yRandomDogBone.length)];

var xRandomDogBone2 = Array(16, 76, 136, 196, 256, 316, 376, 436, 496, 556);
var yRandomDogBone2 = Array(496, 496,);
var xDogBone2 = xRandomDogBone2[Math.floor(Math.random()*xRandomDogBone2.length)];
var yDogBone2 = yRandomDogBone2[Math.floor(Math.random()*yRandomDogBone2.length)];


var palomita = new Palomita(xPopcorn, yPopcorn, 52, 52);
var wine = new Wine(xWine, yWine, 52, 52);
var mota = new Mota(xMota, yMota, 52, 52);

var dogFood = new DogFood(xDogFood, yDogFood, 52, 52);
var dogBone = new DogBone(xDogBone, yDogBone, 52, 52);
var dogBone2 = new DogBone(xDogBone2, yDogBone2, 52, 52);

var tennisBall = new TennisBall(xTennisBall, yTennisBall, 52, 52);
var tennisBall2 = new TennisBall(xTennisBall2, yTennisBall2, 52, 52);

var score = 0;

// Time to start the game
var countdown = 37;
var id = null;


// FUNCTIONS

function addScore(e) {
  score = score + e;
}

function generatePalomita() {
  palomita.x = xRandomPopcorn[Math.floor(Math.random()*xRandomPopcorn.length)];
  palomita.y = yRandomPopcorn[Math.floor(Math.random()*yRandomPopcorn.length)];
}

function generateWine() {
  wine.x = xRandomWine[Math.floor(Math.random()*xRandomWine.length)];
  wine.y = yRandomWine[Math.floor(Math.random()*yRandomWine.length)];
}

function generateMota() {
  mota.x = xRandomMota[Math.floor(Math.random()*xRandomMota.length)];
  mota.y = yRandomMota[Math.floor(Math.random()*yRandomMota.length)];
}

function generateDogFood() {
  dogFood.x = xRandomDogFood[Math.floor(Math.random()*xRandomDogFood.length)];
  dogFood.y = yRandomDogFood[Math.floor(Math.random()*yRandomDogFood.length)];
  dogFood.draw();
}

function generateDogBone() {
  dogBone.x = xRandomDogBone[Math.floor(Math.random()*xRandomDogBone.length)];
  dogBone.y = yRandomDogBone[Math.floor(Math.random()*yRandomDogBone.length)];
  dogBone.draw();
}

function generateDogBone2() {
  dogBone2.x = xRandomDogBone2[Math.floor(Math.random()*xRandomDogBone2.length)];
  dogBone2.y = yRandomDogBone2[Math.floor(Math.random()*yRandomDogBone2.length)];
  dogBone2.draw();
}

function generateTennisBall() {
  tennisBall.x = xRandomTennisBall[Math.floor(Math.random()*xRandomTennisBall.length)];
  tennisBall.y = yRandomTennisBall[Math.floor(Math.random()*yRandomTennisBall.length)];
  tennisBall.draw();
}

function generateTennisBall2() {
  tennisBall2.x = xRandomTennisBall2[Math.floor(Math.random()*xRandomTennisBall2.length)];
  tennisBall2.y = yRandomTennisBall2[Math.floor(Math.random()*yRandomTennisBall2.length)];
  tennisBall2.draw();
}

function update() {
  if (playerOneSolo.crashWith(palomita)) {
    generatePalomita();
    playerOneSolo.isCollecting = true;
  }

  if (playerOneSolo.crashWith(wine)) {
    generateWine();
    addScore(1);
    playerOneSolo.isCollecting = true;
  }

  if (playerOneSolo.crashWith(mota)) {
    generateMota();
    addScore(2);
    playerOneSolo.isCollecting = true;
  }

  if (playerOneSolo.crashWith(bowl) && playerOneSolo.isCollecting) {
    playerOneSolo.isCollecting = false;
    addScore(3);
    generateDogFood();
    generateDogBone();
    generateDogBone2();
    generateTennisBall();
    generateTennisBall2();
  }

  if (playerOneSolo.crashWith(dogFood)) {
    countdown = countdown - 5;
    generateDogFood();
  }

  if (playerOneSolo.crashWith(dogBone)) {
    countdown = countdown - 5;
    generateDogBone();
  }

  if (playerOneSolo.crashWith(dogBone2)) {
    countdown = countdown - 5;
    generateDogBone2();
  }

  if (playerOneSolo.crashWith(tennisBall)) {
    countdown = countdown - 5;
    generateTennisBall();
  }

  if (playerOneSolo.crashWith(tennisBall2)) {
    countdown = countdown - 5;
    generateTennisBall2();
  }

    ctx.clearRect(0,0,1500,1700);
    vaqueroTriste.draw();
    board.draw();
    bowl.draw();
    playerOneSolo.draw();

    palomita.draw();
    wine.draw();
    mota.draw();

    dogFood.draw();
    dogBone.draw();
    dogBone2.draw();
    tennisBall.draw();
    tennisBall2.draw();

    //Draw the score and time remaining
    ctx.fillStyle = 'white';
    ctx.font = '14px Monospace';
    ctx.textAlign = 'left';
    ctx.fillText('Score: ' + score, 100, 25);
    ctx.fillText('Time: ' + countdown, 20, 25);

    //End the game or keep playing
    if (countdown <= 0) {
      endGame();
    } 
    // else {
    //   window.requestAnimationFrame(draw);
    // }
};

// Clear the canvas
function erase() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 611, 611);
}

// Show the game over screen
function endGame() {
	// Stop the countdown
  clearInterval(id);
  // Display the final score
  erase();
  ctx.fillStyle = '#000000';
  ctx.font = '24px Monospace';
  ctx.textAlign = 'center';

  ctx.fillText('Oh no! No matter how hard you tried,', canvas.width / 2, 100);
  ctx.fillText('the cowboy is still sad...', canvas.width / 2, 130);
  ctx.fillText('...so remember, kids: Choose a good', canvas.width / 2, 440);
  ctx.fillText('therapist over self-medication,', canvas.width / 2, 470);
  ctx.fillText('~ every ~ time!', canvas.width / 2, 500);
  ctx.fillText('Final Score: ' + score, canvas.width / 2, canvas.height / 2);

  ctx.drawImage('./images/vaquero-triste.png', 20, 20, 20, 20);
}



function start() {
  interval = setInterval(update, 1000/60)
  id = setInterval(function() {
    countdown--;
  }, 1000)
}




window.addEventListener('keydown', e => {
  // move up
  if(e.keyCode === 38 && playerOneSolo.y > 16) {
      playerOneSolo.y -= 60;
  }
  // move down
  if(e.keyCode === 40 && playerOneSolo.y < 556) {
    playerOneSolo.y += 60;
  }
  // move left
  if(e.keyCode === 37 && playerOneSolo.x > 16) {
    playerOneSolo.x -= 60;
  }
  // move right
  if(e.keyCode === 39 && playerOneSolo.x < 556) {
    playerOneSolo.x += 60;
  }
    // if(gameOver && e.keyCode === 32) {
    //   location.reload();
    // }
    // console.log(playerOneSolo);
});


// Start & End Game

start();
update();


// REFERENCE GAME: http://bencentra.com/2017-07-11-basic-html5-canvas-games.html









// function checkCollision() {
//   palomita.forEach(palomita => {
//       if(playerOneSolo.crashWith(palomita)) {
//           playerOneSolo.isCollecting = true;
//           // palomita = disappear // this is where I need to make palomita disappear
//       }
//   })
// }























// checkCollision();

      // function checkCollition() {
      //   obstacles.forEach(e => {
      //     if(player.crashWith(e)) {
      //       gameOver();
      //     }
      //   })
      // }




























// window.addEventListener('keydown', e => {
//   if(e.keyCode === 38 && playerOneSolo.y > 15) {
//       playerOneSolo.y -= 50;
//   }
//   if(gameOver && e.keyCode === 32) {
//     location.reload();
//   }
// });

// window.addEventListener('keydown', e => {
//   if(e.keyCode === 38 && playerOneSolo.y > 15) {
//       playerOneSolo.y -= 60;
//   }
//   if(e.keyCode === 40 && playerOneSolo.y > 15) {
//     playerOneSolo.y += 60;
//   }
//   if(e.keyCode === 37 && playerOneSolo.y > 15) {
//     playerOneSolo.x -= 60;
//   }
//   if(e.keyCode === 39 && playerOneSolo.y > 15) {
//     playerOneSolo.x += 60;
//   }
//     // if(gameOver && e.keyCode === 32) {
//     //   location.reload();
//     // }
// });

// // // var playerOneSolo = {
// // //   x: 16,
// // //   y: 16,
// // //   moveUp:    function() { this.y -= 60 },
// // //   moveDown:  function() { this.y += 60 },
// // //   moveLeft:  function() { this.x -= 60 },
// // //   moveRight: function() { this.x += 60 },

// document.onkeydown = function(e) {
//   switch (e.keyCode) {
//     case 38: playerOneSolo.moveUp();    console.log('up',    playerOneSolo); break;
//     case 40: playerOneSolo.moveDown();  console.log('down',  playerOneSolo); break;
//     case 37: playerOneSolo.moveLeft();  console.log('left',  playerOneSolo); break;
//     case 39: playerOneSolo.moveRight(); console.log('right', playerOneSolo); break;
//   }
//   update();
// }


// class Palomita {
//   constructor(x,y,w,h) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.img = new Image();
//     this.img.src = './images/palomita.png';
//   }
//   draw() {
//     ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
//   }

//   /// PUT THE CRASH WITH FUNCTION HERE
// }

// class PlayerOneSolo {
//   constructor(x,y,w,h) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.img = new Image();
//     this.img.src = './images/P1-solo.png';
//     this.imgWithPalomita = new Image();
//     this.imgWithPalomita.src = './images/P1-w-gift.png';
//     this.isCollecting = true ///So I need to do a conditional now for when the player crashes into the Palomita...
//   }
//   draw() {
//     ctx.drawImage(this.isCollecting ?  this.imgWithPalomita : this.img,this.x,this.y,this.w,this.h);
//   }
// }

// class PopcornBowl {
//   constructor(x,y,w,h) {
//   this.x = x;
//   this.y = y;
//   this.w = w;
//   this.h = h;
//   this.img = new Image();
//   this.img.src = './images/bowl-empty.png';
//   }

//   draw() {
//     ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
//   }
// }


// INSTANCES


// var palomita = new Palomita(50,50,50,50);
// var playerOneSolo = new PlayerOneSolo(100,50,50,50);
// var bowl = new PopcornBowl;



// INITIAL FUNCTIONS





















// // GAME AREA
// //// Draw Gameboard

// // var canvas = document.getElementById("canvas");
// // var ctx = canvas.getContext("2d");


// function drawBoard(){
//   // for (var x = 0; x <= bw; x += 60) {
//   //   ctx.moveTo(0.5 + x + p, p);
//   //   ctx.lineTo(0.5 + x + p, bh + p);
//   // }

//   // for (var x = 0; x <= bh; x += 60) {
//   //   ctx.moveTo(p, 0.5 + x + p);
//   //   ctx.lineTo(bw + p, 0.5 + x + p);
//   // }
//   // ctx.strokeStyle = "grey";
//   // ctx.stroke();

//   // // Draw cowboy in bed


// //   //// Draw bowl next to cowboy - empty state
//   var emptyBowl = new Image();
//   emptyBowl.onload = function() {
//     ctx.drawImage(emptyBowl, 435, 76, 52, 52);
//   };
//   emptyBowl.src = './images/bowl-empty.png';

// //   //// Draw a moving palomita on the board

// //   // var xRandom = Array(16, 76, 136, 196, 256, 316, 376, 436);
// //   // var yRandom = Array(16, 76, 136, 196, 256, 316, 376, 436, 496, 556);
// //   // var xPopcorn = xRandom[Math.floor(Math.random()*xRandom.length)];
// //   // var yPopcorn = yRandom[Math.floor(Math.random()*yRandom.length)];

// //   // var palomita = new Image();
// //   // palomita.onload = function() {
// //   //   ctx.drawImage(palomita, xPopcorn, yPopcorn, 52, 52);
// //   // };
// //   // palomita.src = './images/palomita.png';

// // //   palomita.draw()
// // //   playerOneSolo.draw()
// }

// drawBoard();




























// // // PLAYER 1

// // //// Draw Player 1 - Without Popcorn

// // // class playerOneSolo = {
// // //   constructor(x, y, w, h) {
// // //     this.x = x;
// // //     this.y = y;
// // //     this.w = w;
// // //     this.h = h;
// // //   }
// // //   draw() {
// // //         var img = new Image();
// // //         img.onload = function() { 
// // //           ctx.drawImage(img, playerOneSolo.x, playerOneSolo.y, 50, 50); 
// // //         }
// // //         img.src = './images/P1-solo.png';
// // //   }
// // //   crashWith(palomita) {
// // //       return (this.x < palomita.x + palomita.w) &&
// // //             (this.x + this.w > palomita.x) &&
// // //             (this.y < palomita.y + palomita.w) &&
// // //             (this.y + this.w > palomita.y)
// // //   }
// // // }

// // // var playerOneSolo = {
// // //   x: 16,
// // //   y: 16,
// // //   moveUp:    function() { this.y -= 60 },
// // //   moveDown:  function() { this.y += 60 },
// // //   moveLeft:  function() { this.x -= 60 },
// // //   moveRight: function() { this.x += 60 },
// // // }

// // // function draw(playerOneSolo) {
// // //   var img = new Image();
// // //   img.src = './images/P1-solo.png';
// // //   img.onload = function() { 
// // //      ctx.drawImage(img, playerOneSolo.x, playerOneSolo.y, 50, 50); 
// // //   }
// // // }


// // document.onkeydown = function(e) {
// //   switch (e.keyCode) {
// //     case 38: playerOneSolo.moveUp();    console.log('up',    playerOneSolo); break;
// //     case 40: playerOneSolo.moveDown();  console.log('down',  playerOneSolo); break;
// //     case 37: playerOneSolo.moveLeft();  console.log('left',  playerOneSolo); break;
// //     case 39: playerOneSolo.moveRight(); console.log('right', playerOneSolo); break;
// //   }
// //   updateCanvas();
// // }

// // /// Hitting sides of the board
// // function hitBottom () {
// //   var bottomSide = canvas.height - 63;
// //     if (playerOneSolo.y > bottomSide) {
// //       playerOneSolo.y = bottomSide;
// //       clearInterval(intervalId)
// //     }
// //   }

// // function hitTop () {
// //   var topSide = canvas.height - 604;
// //     if (playerOneSolo.y < topSide) {
// //       playerOneSolo.y = topSide;
// //       clearInterval(intervalId)
// //     }
// //   }

// // function hitLeft () {
// //   var leftSide = canvas.width - 604;
// //     if (playerOneSolo.x < leftSide) {
// //       playerOneSolo.x = leftSide;
// //       clearInterval(intervalId)
// //     }
// //   }

// // function hitRight () {
// //   var rightSide = canvas.width - 63;
// //     if (playerOneSolo.x > rightSide) {
// //       playerOneSolo.x = rightSide;
// //       clearInterval(intervalId)
// //     }
// //   }

// // // function popcornGrab () {
// // //   this.left   = function() { return this.x };
// // //   this.right  = function() { return (this.x + this.width) };
// // //   this.top    = function() { return this.y };
// // //   this.bottom = function() { return this.y + (this.height} };

// // //   this.crashWith = function(palomita) {
// // //     return !((this.bottom() < palomita.top())    ||
// // //              (this.top()    > palomita.bottom()) ||
// // //              (this.right()  < palomita.left())   ||
// // //              (this.left()   > palomita.right()))
// // // }

// // function updateCanvas() {
// //   ctx.clearRect(0,0,1500,1700);
// //   draw.board()
// //   draw.bowl()
// //   hitBottom()
// //   hitTop()
// //   hitLeft()
// //   hitRight()

// // }

// // updateCanvas()

// // //// Move Player 1





// // Draw Player 1 - WITH popcorn

// // var playerOneWithPalomita = new Image();
// // playerOneWithPalomita.onload = function() {
// //   ctx.drawImage(playerOneWithPalomita, 16, 196, 52, 52);
// // };
// // playerOneWithPalomita.src = './images/P1-w-gift.png';


// //// Draw Player 2 - Without Popcorn

// //// //// To do later - I want to get Player 1 working first

// //// Draw Player 2 - WITH popcorn

// //// //// To do later - I want to get Player 1 working first


// // SCORE KEEPING

// //// Put current round score above game

// //// Save highest score under each player


// // TIMER

// //// Put timer above game

// //// Reset timer after each game


// // MUSIC

// //// Add music to game (in general, just have it play in background)

// //// BONUS: Toggle music on/off

// //// BONUS: Restart music at start of


