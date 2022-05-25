class Game {
    constructor() {
        this.board =  new Board();
        this.playerX = new Player('X');
        this.playerO = new Player('O');
        this.turns = 0;
        this.status = '';
    }


    playTurn(event) {
        if (this.status !== '') return;

        let cell = event.target.id;
        let player = this.turns % 2 === 0 ? this.playerX : this.playerO;
        let pos = player.getMove(cell);
    
        if (this.board.isValid(pos)) {
            this.processMove(player, pos);
            this.turns++;
        }        
    }

    drawMove(player, pos) {
        let elemId = `cell_${pos[0]}_${pos[1]}`;
        let elem = document.getElementById(elemId);
        elem.classList.add(player.name);
    }

    setWinner(player) {
        document.getElementById("result").innerText =`Winner: ${player}`;
        this.status =  player === 'None' ? 'tie' : 'won';
    }

    setEndGame(player) {
        this.setWinner(player) 
        this.newBtnEnabled(true);
        this.cancelBtnEnabled(false);
    }

    processMove(player, pos) {
        this.board.mark(player.mark, pos);
        this.drawMove(player, pos);

        if (this.board.isWinner(player.mark)) {
            this.setEndGame(player.mark);
            return;
        }
        
        if (this.board.isEndGame()) this.setEndGame('None');
        
    }

    giveUp() {
        if (this.status !== '') return;

        let player = this.turns % 2 === 0 ? 'O' : 'X';
        this.setEndGame(player);   
        this.status = 'giveUp';
    }

    newBtnEnabled(value) {
        document.getElementById("newBtn").disabled = !value;  
    }

    cancelBtnEnabled(value) {
        document.getElementById("cancelBtn").disabled = !value;  
    }
    
}