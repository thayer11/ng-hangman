angular.module('hangmanApp', [])
  .controller('HangmanController', HangmanController);

  HangmanController.$inject = ["$scope"]
  function HangmanController($scope){
  		$scope.game = new HangmanGame("elephant");

  	this.oneLetterGuess = function(letter){
  		if(letter.length === 1){
  			$scope.game.guess(letter);
  			$scope.game.input = ' ';
  		}
  	};
  }


