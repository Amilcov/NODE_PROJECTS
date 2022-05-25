class Player {
    constructor(type, mark) {
      this.type = type;
      this.mark = mark;
      this.name = `player${mark}`
    }

    getMove(cell) {
        let pos  = cell.split('_');
        let x = pos[1];
        let y = pos[2]
       return [x, y];
    }

    getMoveRandom(board){
      let freePositions = [];

      
      board.forEach((row, idxRow) => {
             row.forEach((e, idxCol) => { 
                  if (e === '') freePositions.push([idxRow, idxCol])
              })
        });
      
     let randomIdx = parseInt( Math.random() * freePositions.length);
     console.log(freePositions[randomIdx]);
     return freePositions[randomIdx];
    };
    
}