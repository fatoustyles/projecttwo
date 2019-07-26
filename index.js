var player1 = "O";

// var board = [
//   [document.getElementById("11"), document.getElementById("12"), document.getElementById("13")], [document.getElementById("21"), document.getElementById("22"), document.getElementById("23")], [document.getElementById("31"), document.getElementById("32"), document.getElementById("33")]
//
// ];

var board = [["", "", ""], ["", "", ""], ["", "", ""]]
var x = 0;
var y = 0
for(x = 0; x < 3; x++){
  for (y = 0; y < 3; y++){
    board[x][y] = document.getElementById(`${x + 1}${y + 1}`);
  }
}

function checkcol(col){
  var x = 0;
  for(x = 0; x < 3; x++){
    if (board[x][col].innerText !== player1){
      return false;
    }
  }
  return true;
}


function checkrow(row){
  var x = 0;
  for(x = 0; x < 3; x++){
    if (board[x][row].innerText !== player1){
      return false;
    }
  }
  return true;
}


function checkdia(){
  var dia1 = board[0][0].innerHTML === player1 && board[1][1].innerHTML === player1 && board[2][2].innerHTML === player1;
  var dia2 = board[0][2].innerHTML === player1 && board[1][1].innerHTML === player1 && board[2][0].innerHTML === player1;
  return dia1 || dia2;
}

function checkwin(x){
  var i = 0;
  for(i = 0; i < 3; i++){
    if (checkcol(i) || checkrow(i)){
      return true;
    }
  }
  return checkdia();
}

function turn(){
  if (event.target.innerText === ""){
    event.target.innerText = player1;
    if(checkwin()){
      document.body.innerHTML = `<center id="winner">${player1} wins!</center>`;
    }
    else{
      player1 = player1 === "X" ? "O" : "X";
    }
  }
  else{
    alert("This space is taken!");
  }
}

//   if(player1 === "X"){
//     player1 = "O";
//   }
//   else{
//     player1 = "X";
//   }
