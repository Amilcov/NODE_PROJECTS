const Board = require('./board.js');

class BattleshipGame {
  constructor(player, numRows, numCols, numShips) {
    // TODO: Set up constructor to store reference to the humanPlayer and
    // instantiate a new instance of the Board class and set it to this.board.
    // Remember to import your Board class.
    this.player = player;
    this.board = new Board(numRows, numCols, numShips);
    this.turns = 0; 
  }

  playTurn() {
    // TODO: Display the state of the game and ask for the users input.
    this.displayStatus();
    //---Adriana: Very Important!!! ---Context(object in witch fc will be excuted) of processMove will be set BattleShipGame class(otherwise sould be player) - console.log('0. this is',this);
    this.player.getMove(this.processMove.bind(this));
  }

  displayStatus() {
    // TODO: Display the current state of the game to the player.
    this.board.display();
  }

  processMove(move) {
    // TODO: Detemerine if the move is valid. If so, invoke the attack method on
    //     the board instance and increment this.turns by 1. If the game is over,
    //     display the final status of the game and end the game. If not, play
    //     another turn. If the move is invalid, ask the player to input a valid
    //     position and play another turn.
          
console.log('You introduced move', move);
 //console.log('game - this is', this);
 
     if (this.board.isValidMove(move)) {

           this.board.attack(move);
           this.turns++;

          if (this.board.isGameOver()) {
              this.board.display();
              
              let isWon = this.board.count() === 0;
              this.player.processGameOver(isWon);
          } else {
              this.playTurn();
          }
     
    } else {
      
          console.log('Not valid position! Enter a valid position.');
          this.playTurn();
     }

    
  }
}

//let game = new BattleshipGame(new HumanPlayer());
//game.processMove([1,2]);
//game.board.display()
//game.playTurn();


module.exports = BattleshipGame;
