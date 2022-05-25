class Board {
    constructor() {
        this.rows = 3;
        this.cols = 3;
        this.board = Array(3).fill(null).map(e=> Array(3).fill(''));
    }

    isValid(pos) {
        let x = pos[0];
        let y = pos[1];
        if (this.board[x][y] !== '') return false;
        return true; 
    }

    mark(player, pos) {
        let x = pos[0];
        let y = pos[1];
        this.board[x][y] = player;
    }

    isEndGame() {
        return (this.board.filter(e => e.join('').length < 3).length === 0);
    }

    isWinner(player) {
        let winner = this.isWinnerOnLine(player) || this.isWinnerOnCol(player) || this.isWinnerOnDiag(player);
        return winner;
    }

    isWinnerOnLine(player) {
        let playerOnLine = this.board.filter( e => e.join('') === player.repeat(this.rows));
        return playerOnLine.length ? true : false;
    }

    isWinnerOnCol(player) {
        for (let col = 0; col < this.cols; col++) {
            let playerOnCol= '';
            for (let row = 0; row < this.rows; row++) {
                if (playerOnCol += this.board[row][col]);
            }
            if (playerOnCol === player.repeat(this.rows)) return true;
        }
        return false;
    }

    isWinnerOnDiag(player) {
        let playerOnFirstDiag= '';
        let playerOnSecondDiag= '';
            for (let row = 0; row < this.rows; row++) {
                if (playerOnFirstDiag += this.board[row][row]);
                let col = this.rows - row - 1;
                if (playerOnSecondDiag += this.board[row][col]);
            }
            if (playerOnFirstDiag === player.repeat(this.rows) || playerOnSecondDiag === player.repeat(this.rows) ) return true;
        
        return false;
    }


} 
