class HumanPlayer {

  processGameOver(isWon) {
    let msg = isWon ? 'Congrats! You won.' : 'Try again! You lose.';
    document.getElementById("resultUser").innerText = msg;
    setwWinner('You!');
  }

}