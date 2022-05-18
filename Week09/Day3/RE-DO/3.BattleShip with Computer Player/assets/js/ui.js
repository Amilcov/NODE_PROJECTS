function drawUserIntrface() {

    drawSettingArrea();
    
    const drawArea = document.createElement('div');
    drawArea.setAttribute('class', 'center');
    drawArea.setAttribute('id', 'drawArea');
    document.body.appendChild(drawArea);

    const userArea = document.createElement('div');
    userArea.setAttribute('class', 'center');
    userArea.setAttribute('id', 'userArea');
    drawArea.appendChild(userArea);
    userArea.innerHTML ='<p> User </p>'

    const computerArea = document.createElement('div');
    computerArea.setAttribute('class', 'center');
    computerArea.setAttribute('id', 'computerArea');
    drawArea.appendChild(computerArea);
    computerArea.innerHTML ='<p> Computer </p>';

    const drawEndGame = document.createElement('div');
    drawEndGame.setAttribute('class', 'center');
    drawEndGame.setAttribute('id', 'endGame');
    drawArea.appendChild(drawEndGame);
    drawEndGame.innerHTML = '<p> End Game </p><p> Winner: <span id="winner"> </span> &#127942;</p>';

    drawUserBoard();
    drawComputerBord();

}


function drawSettingArrea() {
    
    const divUser = document.createElement('div');
    divUser.setAttribute('class', 'center');
    document.body.appendChild(divUser);

    const rowsNo = `<label> 
                        <input type="number" class="center dimension" id ="rowsNo"  min="2" max="20" value="6">
                    </label>      
                    `;
    divUser.innerHTML += rowsNo;

    const colsNo = `<label> x
                        <input type="number" class="center dimension" id ="colsNo" min="2" max="20" value="6">
                    </label>      
                    `;
    divUser.innerHTML += colsNo;

    const buttonGenerate = document.createElement('button');
    buttonGenerate.innerText = 'Generate  ';
    buttonGenerate.setAttribute('id', 'btnGenerate');
    divUser.appendChild(buttonGenerate);

    buttonGenerate.addEventListener('click', generateBoard);
}
 

function drawUserBoard() {
    const divBoard = document.createElement('div');
    divBoard.setAttribute('class', 'center');
    divBoard.setAttribute('id', 'boardUser');
    userArea.appendChild(divBoard);


    const divInfo = document.createElement('div');
    divInfo.setAttribute('class', 'center');
    divInfo.setAttribute('id', 'infoUser');
    userArea.appendChild(divInfo);

    const info = `<p id="resultUser">Click on squares to find ships</p>
                  <p id="scoreUser"> find: </p> 
                 `
    divInfo.innerHTML += info;
}

function drawComputerBord() {
    const divBoard = document.createElement('div');
    divBoard.setAttribute('class', 'center');
    divBoard.setAttribute('id', 'boardComputer');
    computerArea.appendChild(divBoard);


    const divInfo = document.createElement('div');
    divInfo.setAttribute('class', 'center');
    divInfo.setAttribute('id', 'infoComputer');
    computerArea.appendChild(divInfo);

    const info = `<p id="resultComputer">Click on squares to find ships</p>
                  <p id="scoreComputer"> find: </p> 
                 `
    divInfo.innerHTML += info;
}




function generateBoard(){
    let rows = parseInt(document.getElementById('rowsNo').value);
    let cols = parseInt(document.getElementById('colsNo').value);
    let ships = parseInt(rows * cols * 0.35);

    let humanPlayer = new HumanPlayer();
    let computerPlayer = new ComputerPlayer();
    let game = new BattleshipGame(humanPlayer, computerPlayer, rows, cols, ships);
    window.game = game;



   Array.from(window.userArea.getElementsByClassName('fieldActive')).forEach(elem => elem.addEventListener('click', game.playTurn.bind(game)));
   setwWinner('');
}

function setwWinner(msg) {
    document.getElementById("winner").innerText = msg;
    let show = msg === '' ? 'hidden' :'visible'
    document.getElementById("endGame").style.visibility = show;
}