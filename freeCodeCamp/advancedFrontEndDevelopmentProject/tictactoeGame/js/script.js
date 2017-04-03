var tiles = document.getElementsByClassName('tile');
var buttons = document.getElementsByClassName('button');

var u_html = "<i class='fa fa-times fa-3x' aria-hidden='true'></i>";
var c_html = "<i class='fa fa-circle-o fa-3x' aria-hidden='true'></i>";

var square = [0,0,0,0,0,0,0,0,0];
//var playingGame = true;
var playingGame = false;

var USER = false;
var COMPUTER = true;

var USERVALUE = -1;
var COMPUTERVALUE = 1;

function chooseX() {
  playingGame = true;
  u_html;
  c_html;
  setTimeout(showUserTurn, 150);
}

function chooseO() {
  playingGame = true;
  c_html = "<i class='fa fa-times fa-3x' aria-hidden='true'></i>";
  u_html = "<i class='fa fa-circle-o fa-3x' aria-hidden='true'></i>";

  setTimeout(showCompTurn, 150);
  setTimeout(computerPlay, 1000);
}

function showUserTurn() {
  document.getElementById('compTurn').style.visibility = "hidden";
  document.getElementById('compTurn').classList.remove('active');
  document.getElementById('userTurn').style.visibility = "visible";
  document.getElementById('userTurn').classList.add('active');
}

function showCompTurn() {
  document.getElementById('userTurn').style.visibility = "hidden";
  document.getElementById('userTurn').classList.remove('active');
  document.getElementById('compTurn').style.visibility = "visible";
  document.getElementById('compTurn').classList.add('active');
}

function hideTurns() {
  document.getElementById('compTurn').style.visibility = "hidden";
  document.getElementById('compTurn').classList.remove('active');
  document.getElementById('userTurn').style.visibility = "hidden";
  document.getElementById('userTurn').classList.remove('active');
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

function resetGame() {
  document.getElementsByClassName('message')[0].innerHTML = "..";
  hideTurns();

  for(var x = 0; x < 9; x++) {
    tiles[x].style.background = "#1c3e4a";
    tiles[x].innerHTML = "<i class='fa fa-free-code-camp fa-3x' aria-hidden='true'></i>";
    square[x] = 0;
  }

  playingGame = true;
} // end of resetGame();

function makeMove(clickedElement) {

  if(!playingGame) {  // if game is over
    return;
  }

  for(var x = 0; x < 9; x++) {
    if(tiles[x] == clickedElement && square[x] == 0) { // if place is not taken
      play(x, USER);
      setTimeout(showCompTurn, 150);
      setTimeout(computerPlay, 1000);
    }
  }
} // end of makeMove();

function play(index, player) {
  setTimeout(showUserTurn, 150);
  if(!playingGame) {
    return;
  }
  if(square[index] == 0) {

    if(player == USER) {
      tiles[index].innerHTML = u_html;
      square[index] = USERVALUE;
    }
    else{
      tiles[index].innerHTML = c_html;
      square[index] = COMPUTER;
    }
    if(isThereWinner(square, player)) {
      playingGame = false; // game over
      var message = document.getElementsByClassName('message');
      message[0].innerHTML = "Player " + "<span class='winner'>" + tiles[index].innerHTML + "</span>" + " wins";

      setTimeout(function() { resetGame(); }, 3000);
    }
  }
} // end of play()

function isThereWinner(board, player) {

  var value;
  if(player == USER) {
    value = USERVALUE;
  }
  else {
  value = COMPUTERVALUE;
  }
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
  computerTurn(square, 0, COMPUTER);
}

function computerTurn(board, depth, player) {
  if(isThereWinner(board, !player)) {
    return -10 + depth;
  }

  if(checkBoard(board)) {
    return 0;
  }

  var value;
  if(player == USER) {
    value = USERVALUE;
  }
  else {
    value = COMPUTERVALUE;
  }
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
    play(index, COMPUTER);
  }
  return max;
} // end of computerTurn();
