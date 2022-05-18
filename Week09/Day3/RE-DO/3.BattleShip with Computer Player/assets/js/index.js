
document.addEventListener('DOMContentLoaded', () => {
 
    const title = '<h2 class="center">BattleShip  &#128755;  Game</h2>';
    document.body.innerHTML += title;

   
    drawUserIntrface();
    document.getElementById('btnGenerate').click();
})