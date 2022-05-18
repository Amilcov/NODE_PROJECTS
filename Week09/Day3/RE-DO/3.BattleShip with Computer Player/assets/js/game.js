
class BattleshipGame {

  constructor(playerUser, playerComputer, numRows, numCols, numShips) {
    this.playerUser = playerUser;
    this.playerComputer = playerComputer;
    this.boardUser = new Board(numRows, numCols, numShips, 'user');
    this.boardComputer = new Board(numRows, numCols, numShips, 'computer');
    this.turns = 0; 
    
    this.displayBoard();
  }

  playTurn(event) {
    if (this.turn < 0) return;

    let board;
    let row_col;
    let move;
  
    if (this.turns % 2 === 0) {
       row_col = event.target.getAttribute('id').substr('fieldUser_'.length);
       move = row_col.split('_').map(e => parseInt(e));
       board = this.boardUser;
    } else {
       move = event;
       board =this.boardComputer;
    } 

    this.processMove(move, board);
    if (this.turns !== -1) this.turns++;
    if (this.turns % 2 === 1 && this.turns !== -1)  window.game.playerComputer.getMove(this.playTurn.bind(this), this.boardComputer.grid);
  }

  displayBoard() {
    this.boardUser.display();
    this.boardComputer.display();
    this.displayScore();
   }

  mark(move, board) {
    let [row, col] = move;
    let elem = (this.turns % 2 == 0 ? `fieldUser_` : `fieldComputer_`) +`${row}_${col}`;
    let classMark = board.grid[row][col] === 'H' ? 'hit' : 'miss';
    document.getElementById(`${elem}`).classList.add(classMark);
  }


  displayScore() {
    this.boardUser.displayScore();
    this.boardComputer.displayScore();
  }

  processMove(move, board) {          
    console.log('You click move', move);

    if (board.isValidMove(move)) {
        board.attack(move);
        this.mark(move, board);
        this.displayScore();
  
        if (board.isGameOver()) {       
            let isWon = board.count() === 0;
            let player = this.turns % 2 === 0 ? this.playerUser : this.playerComputer;
            player.processGameOver(isWon);
            this.turn = -1;
            Array.from(document.getElementsByClassName('fieldActive')).forEach(elem => {
              elem.removeEventListener('click', game.playTurn)
            }
              );
           
        } 

    }
  }
  
}
