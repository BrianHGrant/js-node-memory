function Game() {
  var gameState = 8000000000000;
  var shuffledGame = "8aabbccddeeff";
}

Game.prototype.guess = function(guessSquare) {
  if(gameState.toString().charAt(guessSquare) === "0") {
    gameState += Math.pow(10, 12 - guessSquare);
    var gameStateString = gameState.toString();
    var revealedGuesses = gameStateString.replace(/[^1]/, "").length;
    if (revealedGuesses === 2) {
      var guess1 = gameStateString.indexOf("1");
      var guess2 = gameStateString.indexOf("1", guess1 + 1);
      if (shuffledGame.charAt(guess1) === shuffledGame.charAt(guess2)) {
        gameState = gameState + Math.pow(10, guess1) + Math.Pow(10, guess2);
      } else {
        gameState = gameState - Math.pow(10, guess1) - Math.Pow(10, guess2);
      }

    }

  }
};
