var currentPlayer = "X";
var won = false;
var hrz = false;
var vert = false;
var diaglr = false;
var diagrl = false;
var count = 0;
var cX = 0;
var cO = 0;
var cD = 0;
//alert(cX);


function loadedPage() {
    document.getElementById("countX").innerHTML = "X: " + cX;
    document.getElementById("countD").innerHTML = "DRAW: " + cD;
    document.getElementById("countO").innerHTML = "O: " + cO;

}

function place(box) {
    if(box.innerText != "" || won) return;
    box.innerText = currentPlayer;
    checkGameBoard();
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
    document.getElementById("playerName").innerText = "Player " + currentPlayer;
    count++;
}

function checkGameBoard() {
    for (var i = 0; i <= 2; i++) {
        checkWinner(document.getElementById(i + "_0").innerText, document.getElementById(i + "_1").innerText, document.getElementById(i + "_2").innerText, "h");
        checkWinner(document.getElementById("0_" + i).innerText, document.getElementById("1_" + i).innerText, document.getElementById("2_" + i).innerText, "v");            
        if(won && hrz) {
            var a = i + "_0";
            var b = i + "_1";
            var c = i + "_2";
            changeBackgroundWin(a, b, c);
            break;
        }
        if(won && vert) {
            var a = "0_" + i;
            var b = "1_" + i;
            var c = "2_" + i;
            changeBackgroundWin(a, b, c);
            break;
        }
    }
    checkWinner(document.getElementById("0_0").innerText, document.getElementById("1_1").innerText, document.getElementById("2_2").innerText, "dlr");
    
    checkWinner(document.getElementById("0_2").innerText, document.getElementById("1_1").innerText, document.getElementById("2_0").innerText, "drl");
    
    if (won) {
        if (diaglr) {
            changeBackgroundWin("0_0", "1_1", "2_2");
        } else if (diagrl) {
            changeBackgroundWin("0_2", "1_1", "2_0");
        }
    }
}

function checkWinner(a, b, c, d) {
    if(a != "" && a == b && a == c) {
        document.getElementById("resultDisplay").innerHTML = "RESULT: " + currentPlayer + " WINS!";
        if(currentPlayer == "X") {
            cX++;
        } else cO++;
//        alert("Winner is " + currentPlayer + "!");
        won = true;
        if (d == "h") hrz = true;
        if (d == "v") vert = true;
        if (d == "dlr") diaglr = true;
        if (d == "drl") diagrl = true;
    }
    if (count == 8 && won == false) {
        document.getElementById("resultDisplay").innerHTML = "RESULT: DRAW";
        cD++;
//        alert("DRAW!");
        won = true;
    }
    
    loadedPage();
}

function changeBackgroundWin(a, b, c) {
    document.getElementById(a).style.backgroundColor = "red";
    document.getElementById(b).style.backgroundColor = "red";
    document.getElementById(c).style.backgroundColor = "red";
}

function resetBoard() {
//    currentPlayer = "X";
    won = false;
    hrz = false;
    vert = false;
    diaglr = false;
    diagrl = false;
    count = 0;
    document.getElementById("resultDisplay").innerHTML = "RESULT:";
    document.getElementById("playerName").innerText = "Player " + currentPlayer;
    for (var i = 0; i <= 2; i++) {
        for (var x = 0; x <= 2; x++) {
            document.getElementById(x+"_"+i).innerHTML = "";
            document.getElementById(x+"_"+i).style.backgroundColor = "white";
        }
    }
    
}