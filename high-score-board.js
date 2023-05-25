// Create a function createScoreBoard that creates an object that serves as a high score board. The keys of this object will be the names of the players, the values will be their scores. For testing purposes, you want to directly include one entry in the object. This initial entry should consist of The Best Ever as player name and 1000000 as score.
function createScoreBoard() {
    const obj = {
      'The Best Ever': 1000000
    }
    return obj
  }

//   To add a player to the high score board, define the function addPlayer. It accepts 3 parameters:

// The first parameter is an existing score board object.
// The second parameter is the name of a player as a string.
// The third parameter is the score as a number.
// The function returns the same score board object that was passed in after adding the new player.

// addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373);
// // => {'Dave Thomas': 0, 'José Valim': 486373}

function addPlayer(scoreBoard, player, score) {
    return scoreBoard[player,score]
}
