function drawUserIntrface() {

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

    const divBoard = document.createElement('div');
    divBoard.setAttribute('class', 'center');
    divBoard.setAttribute('id', 'board');
    document.body.appendChild(divBoard);


    const divInfo = document.createElement('div');
    divInfo.setAttribute('class', 'center');
    divInfo.setAttribute('id', 'info');
    document.body.appendChild(divInfo);

    const info = `<p id="result">Click on squares to find ships</p>
                  <p id="score"> find: </p> 
                 `
    divInfo.innerHTML += info;

        
    
    function generateBoard(){
        let rows = parseInt(document.getElementById('rowsNo').value);
        let cols = parseInt(document.getElementById('colsNo').value);
        let ships = parseInt(rows * cols * 0.35);

        let humanPlayer = new HumanPlayer();
        let game = new BattleshipGame(humanPlayer, rows, cols, ships);
        window.game = game;

        Array.from(divBoard.getElementsByClassName('fieldActive')).forEach(elem => elem.addEventListener('click', game.playTurn));
    }

}
