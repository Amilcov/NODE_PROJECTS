
class BattleshipGame {
  constructor(player, numRows, numCols, numShips) {
    this.player = player;
    this.board = new Board(numRows, numCols, numShips);
    this.turns = 0; 
    this.displayBoard();
    this.displayScore();
  }

  playTurn(event) {
    let row_col = event.target.getAttribute('id').substr('field_'.length);
    let move = row_col.split('_').map(e => parseInt(e));
    window.game.processMove(move);
  }

  displayBoard() {
    this.board.display();
   }

  mark(move) {
    let [row,col] = move;
    let elem = `field_${row}_${col}`;
    let classMark = window.game.board.grid[row][col] === 'H' ? 'hit' : 'miss';
    document.getElementById(`${elem}`).classList.add(classMark);
    document.getElementById(`${elem}`).innerText = '&#9973;';
  }

  displayScore() {
    let shipTotal = this.board.numShips;
    let shipHit = shipTotal -  this.board.count();
    document.getElementById("score").innerText = 'find: '+ shipHit + '/' + shipTotal;
  }

  processMove(move) {          
    console.log('You click move', move);
 
    if (window.game.board.isValidMove(move)) {
        window.game.board.attack(move);
        window.game.mark(move);
        window.game.displayScore() 
        this.turns++;

        if (window.game.board.isGameOver()) {       
            let isWon =  window.game.board.count() === 0;
            window.game.player.processGameOver(isWon);
          
            Array.from(document.getElementsByClassName('fieldActive')).forEach(elem => elem.removeEventListener('click', game.playTurn));
        } 

    }

    
  }
}
