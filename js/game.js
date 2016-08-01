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

exports.gameModule = Game;
