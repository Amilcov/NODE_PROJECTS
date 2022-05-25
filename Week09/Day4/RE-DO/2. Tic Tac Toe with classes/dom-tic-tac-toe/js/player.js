class Player {
    constructor(mark) {
      this.mark = mark;
      this.name = `player${mark}`
    }

    getMove(cell) {
        let pos  = cell.split('_');
        let x = pos[1];
        let y = pos[2]
       return [x, y];
    }
    
}