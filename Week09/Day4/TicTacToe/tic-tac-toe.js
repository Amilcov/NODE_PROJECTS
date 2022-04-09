const n = 3;
let move = 0;
let endGame = false;
let isGameCancel = false;
let playedPositions = new Array(n).fill([]).map(e => new Array(3).fill(''));


window.onload = () => {
   const pTitle = document.createElement('p');
   pTitle.id = "headerWinner";
   pTitle.innerText = 'Winner: ';
   document.body.appendChild(pTitle);
   pTitle.className = "winner";

   const divContent = document.createElement('div');
   divContent.className = "content";
   document.body.appendChild(divContent);

   const divBoard = document.createElement('div');
   divBoard.id = "board";
   divContent.appendChild(divBoard);

 
   for(let i = 0; i < n; i++) {
       for(let j = 0; j < n; j++) {
          let button_elem = document.createElement("button");
          button_elem.className = "cell";
          button_elem.id = `cell_${i}${j}`;
          divBoard.appendChild(button_elem);

          const img = document.createElement('img');
          img.id = `img_${i}${j}`;
          button_elem.appendChild(img);
       }
   }
   
   const divControlBtn = document.createElement('div');
   divControlBtn.className = "controlBtn";
   divContent.appendChild(divControlBtn);

   const divBtnNew = document.createElement('button');
   divBtnNew.id = "btnNew";
   divBtnNew.innerText = "New Game";
   divBtnNew.disabled = true;
   divControlBtn.appendChild(divBtnNew);

   const btnCancel = document.createElement('button');
   btnCancel.id = "btnCancel";
   btnCancel.innerText = "GiveUp";
   btnCancel.disabled = false;
   divControlBtn.appendChild(btnCancel);


//addEventListener
divBoard.addEventListener('click', addHandlerBoard);
divControlBtn.addEventListener('click', addHandlerNewGame);

}


function addHandlerBoard(event) {
   if(event.target.nodeName === 'BUTTON') handlerClickOnBoard(event.target);
}

function addHandlerNewGame(event) {
   if(event.target.nodeName === 'BUTTON') handlerClickControlBtn(event.target);
}

function handlerClickOnBoard(cell) {
   let img = getImgCellPlayed(cell);
   if (positionWasNotPlayed(img) && !endGame) playerMove(img);  
}

function playerMove(img){
  playPosition(img);
  if (isGameEnd()) updateStatusBoard();
  move++;
}

function getImgCellPlayed(cell) {
    let imgCell = "#"+cell.id+' img';
    let img = document.querySelector(imgCell);
    return img;
}

function positionWasNotPlayed(elem) {
    return elem.src === '';
}

function playPosition(elem) {
    let imgMove = move % 2 === 0 ? "./img/player-x.svg" : "./img/player-o.svg";
    elem.src = imgMove;
   
    let row = elem.id.substr(4, 1); 
    let col = elem.id.substr(5, 1); 

    playedPositions[row][col] = move % 2  === 0 ? 'x' : 'o';
}

function isGameEnd(){
   return isWinMove() || isTie();
}

function winnerIs() {
    if (isGameCancel) return move % 2 === 1 ? 'X' :'0';
    if (isWinMove()) return move % 2 === 0 ? 'X' :'0';
    if (isTie()) return 'Tie';
    return '';
}

function isTie() {
    console.log(n)
    if (move === n * n - 1 ) {
        endGame = true;
        return true;
    }
    return false;
}

function isWinMove() {
     for(let i = 0; i < n; i++) {
        if (checkRow(i)) {endGame = true; return true}
        if (checkCol(i)) {endGame = true; return true}
    }

   return checkDiagonal();
 }

function checkRow(row){
    let player = move % 2 === 0 ? 'x' : 'o';
    return playedPositions[row].filter(x => x === player).length === n;
}

function checkCol(col) {
    let player = move % 2 === 0 ? 'x' : 'o';
    for(let row = 0; row < n; row++) {
        if (playedPositions[row][col] !== player ) return false;
    }

    return true;
}

function checkDiagonal () {
    return check1stDiagonal() || check2stDiagonal();
}
function check1stDiagonal() {
    let player = move % 2 === 0 ? 'x' : 'o';
    for(let i = 0; i < n; i++) {
        if (playedPositions[i][i] !== player) return false;
    }
    endGame = true;
    return true;
}

function check2stDiagonal() {
    let player = move % 2 === 0 ? 'x' : 'o';
    for(let i = 0; i < n; i++) {
        if (playedPositions[n - 1 - i][i] !== player) return false;
    }

    endGame = true;
    return true;
}


function updateStatusBoard() {
    updateHeader();
    updateControlButton();
}

function updateHeader() {
    document.getElementById("headerWinner").innerText = 'Winner: '+ winnerIs();
}

function updateControlButton() {
    document.getElementById("btnNew").disabled = !(endGame || isGameCancel);
    document.getElementById("btnCancel").disabled = isGameCancel || endGame;
}


function handlerClickControlBtn(btn) {

   if (btn.id === 'btnCancel') {
        isGameCancel = true;
        endGame = true;
        move = 0;
      
   } else {
       isGameCancel = false;
       move = 0; 
       endGame = false;
       cleanBoard();
   }   
   
    updateControlButton();
    updateHeader();
}


function cleanBoard() {
    let imgs = document.querySelectorAll('#board button img')
    imgs.forEach( e => e.removeAttribute('src'));
    playedPositions = new Array(n).fill([]).map(e => new Array(3).fill(''));
}

