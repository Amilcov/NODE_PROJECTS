class Board {
  constructor(numRows, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;
    this.grid = this.populateGrid();
  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    //return [['','','S'], ['S','', '']];
    let grid =  new Array(this.numRows).fill(null).map(e => new Array(this.numCols).fill(''));
    let ships = {};
  
    while (Object.keys(ships).length < this.numShips) {
          let posx = parseInt(Math.random() * this.numRows);
          let posy = parseInt(Math.random() * this.numCols);
          let ship = [posx, posy];

          if (!ships.hasOwnProperty(ship)) {
            grid[posx][posy] = 'S';
            ships[ship] = '';
          }

    }
    //console.table(grid);
    return grid;
  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
    let displayTable = this.grid.map(row => {
                                       return row.map(e => {
                                                  if(e === 'S') {
                                                      return '';
                                                  } else { 
                                                    return e;
                                                  }    
                                       })
                        })
    console.table(displayTable);
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
    let ships = 0;

    for(let i = 0; i < this.numRows; i++) {
        for(let j = 0; j < this.numCols; j++) {
          if (this.grid[i][j] === 'S') ships++;
        }
    }

    return ships;
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
    
    try {
  
      if (!Array.isArray( pos)) return false;
      if (pos.length !== 2) return false;

      let row = pos[0];
      let col = pos[1];
  
      if (row < 0 || col < 0 || row >= this.numRows || col >= this.numCols || !Number.isInteger(row) || !Number.isInteger(col)) return false;
      if (this.grid[row][col] !== '' && this.grid[row][col] !== 'S') return false;
  
    } catch(e) {
      return false;
    }

    return true;
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
    return this.count() === 0 ? true : false;
  }

  attack(pos) {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
    let row = pos[0];
    let col = pos[1];
    if (this.grid[row][col] === '' ) this.grid[row][col] = 'M';
    if (this.grid[row][col] === 'S' ) this.grid[row][col] = 'H';
}
}

module.exports = Board;
