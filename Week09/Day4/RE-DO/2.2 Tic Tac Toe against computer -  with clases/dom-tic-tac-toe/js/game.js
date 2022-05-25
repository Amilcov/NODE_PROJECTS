class Game {
    constructor() {
        this.board =  new Board();
        this.computePlayTurn =  parseInt(Math.random() * 10) % 2 === 0 ?  0 : 1;
        this.playerX = new Player( this.computePlayTurn % 2 === 0 ? 'computer' : 'human', 'X');
        this.playerO = new Player( this.computePlayTurn % 2 === 1 ? 'computer' : 'human','O');
        this.turns = 0;
        this.status = '';
        this.info();
    }

   info() {
       console.log( this.computePlayTurn);
       let msg = this.computePlayTurn % 2 === 0 ? 'Computer starts 1st playing X. Human Player is 2nd playing O' : 'Human Player starts 1st playing X. Computer is 2nd playing O';
       document.getElementById('info').innerText = 'Random players order: '+ msg;
       if (!this.computePlayTurn) this.playTurn();
   }

    playTurn(event) {
        if (this.status !== '') return;

        let player = this.turns % 2 === 0 ? this.playerX : this.playerO;
        let pos;

         if (this.turns % 2 ===  this.computePlayTurn ) {
              pos = player.getMoveRandom(this.board.board);
         }  else {
            let cell = event.target.id;
            pos = player.getMove(cell);
         }
        
     
        if (this.board.isValid(pos)) {
            this.processMove(player, pos);
            this.turns++;
        }  

        if (this.turns % 2 === this.computePlayTurn ) { 
           this.playTurn();
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