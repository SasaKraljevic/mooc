var tiles = document.getElementsByClassName('tile');
var buttons = document.getElementsByClassName('button');
/*document.getElementById("pcTurn").style.display='none';
document.getElementById("userTurn").style.display='none';
*/
var square = [0,0,0,0,0,0,0,0,0];
var playingGame = true;

var user = false;
var computer = true;

var userValue = -1;
var computerValue = 1;
/*
function choosePlayer(player) {
    if (player.id != 'playerX') {
      COMPUTER = false;
      COMPUTERVALUE = -1;
      USER = true;
      USERVALUE = 1;
      computerPlay();

    }
}
*/


function chooseX() {
  //resetGame();
  user = false;
  computer = true;
  userValue = -1;
  computerValue = 1;
  //computerPlay();
}

function chooseY() {

  computerPlay();
}

var winPositions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
/*
function showButton(){
  document.getElementById("pcTurn").style.display='block';
}
*/
function resetGame() {
  document.getElementsByClassName('message')[0].innerHTML = "";
  for(var x = 0; x < 9; x++) {
    tiles[x].style.background = "#1c3e4a";
    tiles[x].innerHTML = "<i class='fa fa-free-code-camp fa-3x' aria-hidden='true'></i>";
    square[x] = 0;
  }
  /*for(var x = 0; x < 2; x++) {
    buttons[x].style.width = "32vh";
    buttons[x].style.margin = "0.5vh";
    buttons[x].style.opacity = "1";
  }*/
  playingGame = true;
} // end of resetGame();

function makeMove(clickedElement) {
  if(!playingGame) {  // if game is over
    return;
  }

  for(var x = 0; x < 9; x++) {
    if(tiles[x] == clickedElement && square[x] == 0) { // if place is not taken
      play(x, user);
      computerPlay();
    }
  }
} // end of makeMove();

function play(index, player) {
  if(!playingGame) {
    return;
  }
  if(square[index] == 0) {
    /*buttons[0].style.width = "0";
    buttons[0].style.margin = "0";
    buttons[0].style.opacity = "0";
    buttons[1].style.width = "32vh";
*/
    if(player == user) {
      //tiles[index].style.background = "#22f";
      tiles[index].innerHTML = "<i class='fa fa-times fa-3x' aria-hidden='true'></i>";
      square[index] = userValue;
    }
    else{
      //tiles[index].style.background = "#f22";
      tiles[index].innerHTML = "<i class='fa fa-circle-o fa-3x' aria-hidden='true'></i>";
      //square[index] = COMPUTER;
      square[index] = computerValue;
    }
    if(isThereWinner(square, player)) {
      playingGame = false; // game over
      var message = document.getElementsByClassName('message');
      message[0].innerHTML = "Player " + tiles[index].innerHTML + " wins";

      setTimeout(function() { resetGame(); }, 3000);
    }
  }
} // end of play()

function isThereWinner(board, player) {

  var value;
  if(player == user) {
    value = userValue;
  }
  else {
  value = computerValue;
  }
  //var value = player == USER ? USERVALUE : COMPUTERVALUE;
  for(var x = 0; x < 8; x++) {
    var winner = true;

    for(var y = 0; y < 3; y++) {
      if(board[winPositions[x][y]] != value) {
        winner = false;
        break;
      }
    }
    if(winner) {
      return true;
    }
  }
  return false;
} // end of isThereWinner();

function checkBoard(board) { // check if board is full
  for(var x = 0; x < 9; x++) {
    if(board[x] == 0) {
      return false;
    }
  }
  return true;
} // end of checkBoard()

////////////////////////////////////////////////////
function computerPlay() {
  computerTurn(square, 0, computer);
}
function computerPlayX() {
  computerTurnX(square, 0, user);
}
function computerTurn(board, depth, player) {
  if(isThereWinner(board, !player)) {
    return -10 + depth;
  }

  if(checkBoard(board)) {
    return 0;
  }

  var value;
  if(player == user) {
    value = userValue;
  }
  else {
    value = computerValue;
  }

  //var value = player == USER ? USERVALUE : COMPUTERVALUE;
  var max = -Infinity;
  var index = 0;

  for(var x = 0; x < 9; x++) { // check all board tiles
    if(board[x] == 0) { // if tile is empty?
      var newBoard = board.slice(); // make a new board
      newBoard[x] = value;
      var move = -computerTurn(newBoard, depth+1, !player);
      if (move > max) {
        max = move;
        index = x;
      }
    }

  }
  if(depth == 0) {
    play(index, computer);
  }
//resetGame();
  return max;
} // end of computerTurn();
