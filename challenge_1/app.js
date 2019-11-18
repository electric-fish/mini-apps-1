var BOARD_LENGTH = 3;
var STATE_EMPTY = 0;
var STATE_X = 1;
var STATE_O = 2;
var STATE_TIE = 3;

var board = [[0, 0, 0],
             [0, 0, 0],
             [0, 0, 0]];

var lastMove = false;
var winner = STATE_EMPTY;
var boardActive = true;

const loadBoard = () => {
  for (var i = 0; i < BOARD_LENGTH; i++) {
    for (var j = 0; j < BOARD_LENGTH; j++) {
      var squareId = i + '-' + j;
      switch (board[i][j]) {
        case STATE_EMPTY:
          document.getElementById(squareId).innerHTML = "";
          break;
        case STATE_X:
          document.getElementById(squareId).innerHTML = "x";
          break;
        case STATE_O:
          document.getElementById(squareId).innerHTML = "o";
          break;
        default:
          break;
      }
    }
  }

  switch (winner) {
    case STATE_EMPTY:
      document.getElementById('status').innerHTML = "Status: In Progess...";
      break;
    case STATE_X:
      document.getElementById('status').innerHTML = "Status: X Wins!";
      break;
    case STATE_O:
      document.getElementById('status').innerHTML = "Status: O Wins!";
      break;
    case STATE_TIE:
      document.getElementById('status').innerHTML = "Status: Tie :|";
      break;
    default:
      break;
  }
}

const checkTie = () => {
    var count = 0;
    for (var i = 0; i < BOARD_LENGTH; i++) {
      for (var j = 0; j < BOARD_LENGTH; j++) {
        if (board[i][j] === STATE_X || board[i][j] === STATE_O) {
          count++;
        }
      }
    }
    if (count === BOARD_LENGTH * BOARD_LENGTH) {
      winner = STATE_TIE;
      boardActive = false;
    }
}

const checkRow = (x) => {
  var countX = 0;
  var countO = 0;

  // count row
  for (var i = 0; i < BOARD_LENGTH; i++) {
    if (board[x][i] === STATE_X) {
      countX++;
    } else if (board[x][i] === STATE_O) {
      countO++;
    }
  }

  // return result (0 for empty, 1 for X wins, 2 for Y wins)
  if (countX === BOARD_LENGTH) {
    return STATE_X;
  } else if (countO === BOARD_LENGTH) {
    return STATE_O;
  } else {
    return STATE_EMPTY;
  }
}

const checkRows = () => {
  for (var i = 0; i < BOARD_LENGTH; i++) {
    if (checkRow(i) !== STATE_EMPTY){
      winner = checkRow(i);
      boardActive = false;
    }
  }
}

const checkColumn = (y) => {
  var countX = 0;
  var countO = 0;

  // count column
  for (var i = 0; i < BOARD_LENGTH; i++) {
    if (board[i][y] === STATE_X) {
      countX++;
    } else if (board[i][y] === STATE_O) {
      countO++;
    }
  }

  // return result (0 for empty, 1 for X wins, 2 for Y wins)
  if (countX === BOARD_LENGTH) {
    return STATE_X;
  } else if (countO === BOARD_LENGTH) {
    return STATE_O;
  } else {
    return STATE_EMPTY;
  }
}

const checkColumns = () => {
  for (var i = 0; i < BOARD_LENGTH; i++) {
    if (checkColumn(i) !== STATE_EMPTY){
      winner = checkColumn(i);
      boardActive = false;
    }
  }
}

const checkMajorDiagonal = () => {
  var countX = 0;
  var countO = 0;
  for (var i = 0, j = 0; i < BOARD_LENGTH; i++, j++) {
    if (board[i][j] === STATE_X) {
      countX++;
    } else if (board[i][j] === STATE_O) {
      countO++;
    }
  }
  if (countX === BOARD_LENGTH) {
    winner = STATE_X;
    boardActive = false;
  } else if (countO === BOARD_LENGTH) {
    winner = STATE_O;
    boardActive = false;
  }
}

const checkMinorDiagonal = () => {
  var countX = 0;
  var countO = 0;
  for (var i = 0, j = BOARD_LENGTH - 1; i < BOARD_LENGTH; i++, j--) {
    if (board[i][j] === STATE_X) {
      countX++;
    } else if (board[i][j] === STATE_O) {
      countO++;
    }
  }
  if (countX === BOARD_LENGTH) {
    winner = STATE_X;
    boardActive = false;
  } else if (countO === BOARD_LENGTH) {
    winner = STATE_O;
    boardActive = false;
  }
}

const checkDiagonals = () => {
  checkMajorDiagonal();
  checkMinorDiagonal();
}

const checkWinner = () => {
  if(boardActive) {
    checkRows();
    checkColumns();
    checkDiagonals();
    checkTie();
  }
}

const resetBoard = () => {
  boardActive = true;
  lastMove = false;
  winner = STATE_EMPTY;
  for (var i = 0; i < BOARD_LENGTH; i++) {
    for (var j = 0; j < BOARD_LENGTH; j++) {
      board[i][j] = 0;
    }
  }
  loadBoard();
}

const clickBoard = (x, y) => {
  if (boardActive) {
    switch (board[x][y]) {
      case STATE_EMPTY:
        board[x][y] = lastMove ? STATE_O : STATE_X;
        lastMove = !lastMove;
        break;
      default:
        break;
    }
    checkWinner();
    loadBoard();
  }
}