class ComputerPlayer {

  getMove(callback, grid) {
    let move = this.randomMove(grid);
    callback(move);
  }


  randomMove(grid){
    let validMoves = [];
    let randomIndex;

    for (let row = 0; row < grid.length; row++) {
      for(let col = 0; col < grid[row].length; col++) {
         if (grid[row][col] === '' || grid[row][col] === 'S') validMoves.push([row, col]);
      }
    }

    randomIndex = Math.floor(Math.random() * validMoves.length);
    return validMoves[randomIndex];
  }


  processGameOver(isWon) {
    let msg = isWon ? 'Congrats! You won.' : 'Try again! You lose.';
    document.getElementById("resultComputer").innerText = msg;
    setwWinner('Computer!');
  }


 

}