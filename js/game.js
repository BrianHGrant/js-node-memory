function Game() {
  var gameState = 8000000000000;
  var shuffledGame = "8aabbccddeeff";
}

Game.prototype.guess = function(guessSquare) {
  if(gameState.toString().charAt(guessSquare) === "0") {
    gameState += Math.pow(10, 12 - guessSquare);
  }
};
