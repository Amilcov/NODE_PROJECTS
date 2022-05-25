
window.onload = () => {
    let newBtn = document.getElementById("newBtn");
    newBtn.addEventListener('click', newGame);
    newBtn.click(); 
}

      
function newGame() {
   clearBoard();
   clearResult();
   playGame();
}

function clearBoard() {
    let cells = Array.from(document.querySelectorAll('#board button'));
    cells.forEach(e => e.classList.remove('playerO'));
    cells.forEach(e => e.classList.remove('playerX'));
}

function clearResult() {
    document.getElementById("result").innerText = 'Winner:';
}

function playGame() {  
    game = new Game();
    addClickEventToBoard(game);
    addClickEventToCancelBtn(game);
    newBtnEnabled(false);  
    cancelBtnEnabled(true);  
}

function addClickEventToBoard(game) {
    let cells = Array.from(document.querySelectorAll('#board button'));
    cells.forEach(e => e.addEventListener('click', game.playTurn.bind(game)));
}

function addClickEventToCancelBtn(game) {
    let cancelBtn = document.getElementById("cancelBtn");
    cancelBtn.addEventListener('click', game.giveUp.bind(game));
}


function newBtnEnabled(value) {
    document.getElementById("newBtn").setAttribute('disabled', !value);
}

function cancelBtnEnabled(value) {
    document.getElementById("cancelBtn").disabled = !value;
}

