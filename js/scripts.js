function Game() {
  this.gameState = 8000000000000;
  this.shuffledGame = "8aabbccddeeff";
}

Game.prototype.guess = function(guessSquare) {
  if(this.gameState.toString().charAt(guessSquare) === "0") {
    this.gameState += Math.pow(10, 12 - guessSquare);
    var gameStateString = this.gameState.toString();
    var revealedGuesses = gameStateString.replace(/[^1]/, "").length;
    if (revealedGuesses === 2) {
      var guess1 = gameStateString.indexOf("1");
      var guess2 = gameStateString.indexOf("1", guess1 + 1);
      if (shuffledGame.charAt(guess1) === shuffledGame.charAt(guess2)) {
        this.gameState = this.gameState + Math.pow(10, guess1) + Math.Pow(10, guess2);
      } else {
        this.gameState = this.gameState - Math.pow(10, guess1) - Math.Pow(10, guess2);
      }

    }

  }
};


var currentGame = new Game();

  var canvas = document.getElementById('game-board');
  var draw = canvas.getContext('2d');

  var drawGame = function(passedGame) {
    var imageToDraw = 1
    passedGameStateString = passedGame.gameState.toString();
    draw.clearRect(0,0, canvas.width, canvas.height);
    draw.fillStyle = "#000";
    draw.strokeStyle = "#fff";
    draw.font = "50px Arial";
    for(var x = 0; x < 4; x++) {
      for(var y = 0; y < 3; y++) {
        if (passedGameStateString.charAt(imageToDraw) === 0) {
          draw.fillRect(x*200, y*200, 200, 200)
          draw.strokeRect(x*200, y*200, 200, 200)
        } else {
          // draw.strokeText(passedGame.shuffledGame.charAt(imageToDraw), x*200, y*200);
        }
        imageToDraw ++;
      }
    }
  }

  var clickPlacer = function(x, y) {
    var clickValue = 1;
    clickValue += Math.floor(x / 200);
    clickValue += Math.floor((y / 200) * 4);
    currentGame.guess(clickValue);
    drawGame(currentGame);
  }

  var getPosition = function(event) {
    var x = event.x;
    var y = event.y;
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    clickPlacer(x, y);
  };

  drawGame(currentGame);
  canvas.addEventListener("mousedown", getPosition, false);
