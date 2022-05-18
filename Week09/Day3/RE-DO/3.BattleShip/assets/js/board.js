class Board {
  constructor (numRows, numCols, numShips) {
      this.numRows = numRows;
      this.numCols = numCols;
      this.numShips = numShips;
      this.grid = this.populateGrid();
  }


  populateGrid() {
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
      let board = document.getElementById('board');
      let html = ''; 
      for(let i = -1; i < this.numRows; i++) {
          html += '<div>'
          
          for(let j = -1; j < this.numCols; j++) {
               if (i === -1 || j === -1) {
                    let number = i === -1 ? (j === -1 ? '' : j + 1): i + 1;
                    html += `<button class="field fieldInactive" id="field_${i}_${j}">${number}</button>`;
               } else {
                   html += `<button class="field fieldActive" id="field_${i}_${j}">${i}</button>`;
               }
          }
          html += '</div>'
      }

      board.innerHTML = html;
      let score = document.getElementById('board');
  }


  count() {
    let ships = 0;

    for(let i = 0; i < this.numRows; i++) {
        for(let j = 0; j < this.numCols; j++) {
          if (this.grid[i][j] === 'S') ships++;
        }
    }
 
    return ships;
  }

   isValidMove(pos) {    
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
    return this.count() === 0 ? true : false;
  }

  attack(pos) {
    let row = pos[0];
    let col = pos[1];
    if (this.grid[row][col] === '' ) this.grid[row][col] = 'M';
    if (this.grid[row][col] === 'S' ) this.grid[row][col] = 'H';
}

  
}
