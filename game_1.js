alert("Welcome to the TIC TAC TOE GAME")
var scores = {
    player_1: 0,
    player_2: 0,

}
let bbq = 1;
function fungame_1() {
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    var b5 = document.getElementById("b5").value;
    var b6 = document.getElementById("b6").value;
    var b7 = document.getElementById("b7").value;
    var b8 = document.getElementById("b8").value;
    var b9 = document.getElementById("b9").value;
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById("b1").style.backgroundColor = "green";
        document.getElementById("b2").style.backgroundColor = "green";
        document.getElementById("b3").style.backgroundColor = "green";
        document.getElementById('print').innerHTML = "Player X won";

        if (document.getElementById('print').innerHTML === "Player X won") {
            document.getElementById("Sc3").innerHTML = ++scores.player_1;
            console.log(scores.player_1);

        }


        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById("b1").style.backgroundColor = "green";
        document.getElementById("b4").style.backgroundColor = "green";
        document.getElementById("b7").style.backgroundColor = "green";
        document.getElementById('print').innerHTML = "Player X won";
        if (document.getElementById('print').innerHTML === "Player X won") {
            document.getElementById("Sc3").innerHTML = ++scores.player_1;
            console.log(scores.player_1);

        }
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById("b1").style.backgroundColor = "green";
        document.getElementById("b5").style.backgroundColor = "green";
        document.getElementById("b9").style.backgroundColor = "green";
        document.getElementById('print').innerHTML = "Player X won";
        if (document.getElementById('print').innerHTML === "Player X won") {

            document.getElementById("Sc3").innerHTML = ++scores.player_1;
            console.log(scores.player_1);

        }
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b7").disabled = true;
        window.alert('Player X won');

    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById("b3").style.backgroundColor = "green";
        document.getElementById("b6").style.backgroundColor = "green";
        document.getElementById("b9").style.backgroundColor = "green";
        document.getElementById('print').innerHTML = "Player X won";
        if (document.getElementById('print').innerHTML === "Player X won") {

            document.getElementById("Sc3").innerHTML = ++scores.player_1;
            console.log(scores.player_1);

        }
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b7").disabled = true;
        window.alert('Player X won');

    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById("b3").style.backgroundColor = "green";
        document.getElementById("b5").style.backgroundColor = "green";
        document.getElementById("b7").style.backgroundColor = "green";
        document.getElementById('print').innerHTML = "Player X won";
        if (document.getElementById('print').innerHTML === "Player X won") {
            document.getElementById("Sc3").innerHTML = ++scores.player_1;
            console.log(scores.player_1);

        }
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');

    }
    else if ((b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById("b7").style.backgroundColor = "green";
        document.getElementById("b8").style.backgroundColor = "green";
        document.getElementById("b9").style.backgroundColor = "green";
        document.getElementById('print').innerHTML = "Player X won";
        if (document.getElementById('print').innerHTML === "Player X won") {
            document.getElementById("Sc3").innerHTML = ++scores.player_1;
            console.log(scores.player_1);

        }
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        window.alert('Player X won');

    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById("b4").style.backgroundColor = "green";
        document.getElementById("b5").style.backgroundColor = "green";
        document.getElementById("b6").style.backgroundColor = "green";
        document.getElementById('print').innerHTML = "Player X won";
        if (document.getElementById('print').innerHTML === "Player X won") {
            document.getElementById("Sc3").innerHTML = ++scores.player_1;
            console.log(scores.player_1);

        }
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');

    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById("b2").style.backgroundColor = "green";
        document.getElementById("b5").style.backgroundColor = "green";
        document.getElementById("b8").style.backgroundColor = "green";
        document.getElementById('print').innerHTML = "Player X won";
        if (document.getElementById('print').innerHTML === "Player X won") {
            document.getElementById("Sc3").innerHTML = ++scores.player_1;
            console.log(scores.player_1);

        }
        document.getElementById("b7").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');

    }

    // checking of player 1 done & now check for player 2
    else if ((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O') && (b3 == 'O' || b3 == 'o')) {
        document.getElementById("b1").style.backgroundColor = "blue";
        document.getElementById("b2").style.backgroundColor = "blue";
        document.getElementById("b3").style.backgroundColor = "blue";
        document.getElementById('print').innerHTML = "Player O won";
        if (document.getElementById('print').innerHTML === "Player O won") {
            document.getElementById("Sc4").innerHTML = ++scores.player_2;
            console.log(scores.player_2);

        }
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player O won');


    }
    else if ((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O')) {
        document.getElementById("b1").style.backgroundColor = "blue";
        document.getElementById("b4").style.backgroundColor = "blue";
        document.getElementById("b7").style.backgroundColor = "blue";
        document.getElementById('print').innerHTML = "Player O won";
        if (document.getElementById('print').innerHTML === "Player O won") {
            document.getElementById("Sc4").innerHTML = ++scores.player_2;
            console.log(scores.player_2);
        }

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player O won');
    }
    else if ((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O') && (b9 == 'o' || b9 == 'O')) {
        document.getElementById("b1").style.backgroundColor = "blue";
        document.getElementById("b5").style.backgroundColor = "blue";
        document.getElementById("b9").style.backgroundColor = "blue";
        document.getElementById('print').innerHTML = "Player O won";
        if (document.getElementById('print').innerHTML === "Player O won") {
            document.getElementById("Sc4").innerHTML = ++scores.player_2;
            console.log(scores.player_2);
        }
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b7").disabled = true;
        window.alert('Player O won');

    }
    else if ((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O') && (b9 == 'o' || b9 == 'O')) {
        document.getElementById("b6").style.backgroundColor = "blue";
        document.getElementById("b9").style.backgroundColor = "blue";
        document.getElementById("b3").style.backgroundColor = "blue";
        document.getElementById('print').innerHTML = "Player O won";
        if (document.getElementById('print').innerHTML === "Player O won") {
            document.getElementById("Sc4").innerHTML = ++scores.player_2;
            console.log(scores.player_2);
        }
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b7").disabled = true;
        window.alert('Player O won');

    }
    else if ((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 == 'O') && (b7 == 'o' || b7 == 'O')) {
        document.getElementById("b7").style.backgroundColor = "blue";
        document.getElementById("b5").style.backgroundColor = "blue";
        document.getElementById("b3").style.backgroundColor = "blue";
        document.getElementById('print').innerHTML = "Player O won";
        if (document.getElementById('print').innerHTML === "Player O won") {
            document.getElementById("Sc4").innerHTML = ++scores.player_2;
            console.log(scores.player_2);
        }
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player O won');

    }
    else if ((b8 == 'o' || b8 == 'O') && (b9 == 'o' || b9 == 'O') && (b7 == 'o' || b7 == 'O')) {
        document.getElementById("b8").style.backgroundColor = "blue";
        document.getElementById("b9").style.backgroundColor = "blue";
        document.getElementById("b7").style.backgroundColor = "blue";
        document.getElementById('print').innerHTML = "Player O won";
        if (document.getElementById('print').innerHTML === "Player O won") {
            document.getElementById("Sc4").innerHTML = ++scores.player_2;
            console.log(scores.player_2);
        }
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        window.alert('Player O won');

    }
    else if ((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O') && (b6 == 'o' || b6 == 'O')) {
        document.getElementById("b6").style.backgroundColor = "blue";
        document.getElementById("b5").style.backgroundColor = "blue";
        document.getElementById("b4").style.backgroundColor = "blue";
        document.getElementById('print').innerHTML = "Player O won";
        if (document.getElementById('print').innerHTML === "Player O won") {
            document.getElementById("Sc4").innerHTML = ++scores.player_2;
            console.log(scores.player_2);
        }
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player O won');

    }
    else if ((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O') && (b8 == 'o' || b8 == 'O')) {
        document.getElementById("b2").style.backgroundColor = "blue";
        document.getElementById("b5").style.backgroundColor = "blue";
        document.getElementById("b8").style.backgroundColor = "blue";
        document.getElementById('print').innerHTML = "Player O won";
        if (document.getElementById('print').innerHTML === "Player O won") {
            document.getElementById("Sc4").innerHTML = ++scores.player_2;
            console.log(scores.player_2);
        }
        document.getElementById("b7").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player O won');
    }


    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
            b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        document.getElementById('print').innerHTML = "Match Tied";
        if (document.getElementById('print').innerHTML = "Match Tied") {

            document.getElementById("Sc3").innerHTML=scores.player_1+0;
            document.getElementById("Sc4").innerHTML=scores.player_2+0;
        }
        window.alert('Match Tied');

    }
    else {

        // Here, Printing the turn of respective players
        if (bbq == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "Player O Turn";
        }
    }

}

// to reset
function fungame_2() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';




}

function g_1() {

    if (bbq == 1) {
        document.getElementById("b1").value = "X"
        document.getElementById("b1").disabled = true;
        bbq = 0;
    } else {
        document.getElementById("b1").value = "O"
        document.getElementById("b1").disabled = true;
        bbq = 1;
    }
}
function g_2() {

    if (bbq == 1) {
        document.getElementById("b2").value = "X"
        document.getElementById("b2").disabled = true;
        bbq = 0;
    } else {
        document.getElementById("b2").value = "O"
        document.getElementById("b2").disabled = true;
        bbq = 1;
    }
}
function g_3() {

    if (bbq == 1) {
        document.getElementById("b3").value = "X"
        document.getElementById("b3").disabled = true;
        bbq = 0;
    } else {
        document.getElementById("b3").value = "O"
        document.getElementById("b3").disabled = true;
        bbq = 1;
    }
}
function g_4() {

    if (bbq == 1) {
        document.getElementById("b4").value = "X"
        document.getElementById("b4").disabled = true;
        bbq = 0;
    } else {
        document.getElementById("b4").value = "O"
        document.getElementById("b4").disabled = true;
        bbq = 1;
    }
}
function g_5() {

    if (bbq == 1) {
        document.getElementById("b5").value = "X"
        document.getElementById("b5").disabled = true;
        bbq = 0;
    } else {
        document.getElementById("b5").value = "O"
        document.getElementById("b5").disabled = true;
        bbq = 1;
    }
}
function g_6() {

    if (bbq == 1) {
        document.getElementById("b6").value = "X"
        document.getElementById("b6").disabled = true;
        bbq = 0;
    } else {
        document.getElementById("b6").value = "O"
        document.getElementById("b6").disabled = true;
        bbq = 1;
    }
}
function g_7() {

    if (bbq == 1) {
        document.getElementById("b7").value = "X"
        document.getElementById("b7").disabled = true;
        bbq = 0;
    } else {
        document.getElementById("b7").value = "O"
        document.getElementById("b7").disabled = true;
        bbq = 1;
    }
}
function g_8() {

    if (bbq == 1) {
        document.getElementById("b8").value = "X"
        document.getElementById("b8").disabled = true;
        bbq = 0;
    } else {
        document.getElementById("b8").value = "O"
        document.getElementById("b8").disabled = true;
        bbq = 1;
    }
}
function g_9() {

    if (bbq == 1) {
        document.getElementById("b9").value = "X"
        document.getElementById("b9").disabled = true;
        bbq = 0;
    } else {
        document.getElementById("b9").value = "O"
        document.getElementById("b9").disabled = true;
        bbq = 1;
    }
}

function fungame_3() {

    if (((document.getElementById("b1") && document.getElementById("b2") && document.getElementById("b3") && document.getElementById("b4") && document.getElementById("b5") && document.getElementById("b6") && document.getElementById("b7") && document.getElementById("b8") && document.getElementById("b9"))).value == "X" || "O") {
        document.getElementById("b1").disabled = false;
        document.getElementById("b1").value = " ";
        document.getElementById("b2").disabled = false;
        document.getElementById("b2").value = " ";
        document.getElementById("b3").disabled = false;
        document.getElementById("b3").value = " ";
        document.getElementById("b4").disabled = false;
        document.getElementById("b4").value = " ";
        document.getElementById("b5").disabled = false;
        document.getElementById("b5").value = " ";
        document.getElementById("b6").disabled = false;
        document.getElementById("b6").value = " ";
        document.getElementById("b7").disabled = false;
        document.getElementById("b7").value = " ";
        document.getElementById("b8").disabled = false;
        document.getElementById("b8").value = " ";
        document.getElementById("b9").disabled = false;
        document.getElementById("b9").value = " ";


    }
    document.getElementById("b1").style.backgroundColor = "white";
    document.getElementById("b2").style.backgroundColor = "white";
    document.getElementById("b3").style.backgroundColor = "white";
    document.getElementById("b4").style.backgroundColor = "white";
    document.getElementById("b5").style.backgroundColor = "white";
    document.getElementById("b6").style.backgroundColor = "white";
    document.getElementById("b7").style.backgroundColor = "white";
    document.getElementById("b8").style.backgroundColor = "white";
    document.getElementById("b9").style.backgroundColor = "white";



  document.getElementById("Sc3").innerHTML=scores.player_1+0;
  document.getElementById("Sc4").innerHTML=scores.player_2+0;
  





}


