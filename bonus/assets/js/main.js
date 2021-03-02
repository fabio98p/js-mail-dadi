var numberPlayer1 = prompt("Inserisci quanti dadi deve tirare il plyer 1", "1");
var dicePlayer1 = prompt("Inserisci che tipo di dado vuole tirare il player 1", "6");

var allDicePlayer1 = []
var sumDicePlayer1 = 0

for (var i = 0; i < numberPlayer1; i++) {
	allDicePlayer1.push(Math.floor((Math.random() * dicePlayer1)+1));
	sumDicePlayer1 += allDicePlayer1[i]
}

document.getElementById("allDicePlayer1").innerHTML = allDicePlayer1
document.getElementById("sumDicePlayer1").innerHTML = sumDicePlayer1


var numberPlayer2 = prompt("Inserisci quanti dadi deve tirare il plyer 2", "1");
var dicePlayer2 = prompt("Inserisci che tipo di dado vuole tirare il player 2", "6");

var allDicePlayer2 = []
var sumDicePlayer2 = 0

for (var i = 0; i < numberPlayer2; i++) {
	allDicePlayer2.push(Math.floor((Math.random() * dicePlayer2)+1));
	sumDicePlayer2 += allDicePlayer2[i]
}

document.getElementById("allDicePlayer2").innerHTML = allDicePlayer2
document.getElementById("sumDicePlayer2").innerHTML = sumDicePlayer2


if(sumDicePlayer1 > sumDicePlayer2){
	document.getElementById("result").innerHTML = "Il player1 ha vinto"
}
else if(sumDicePlayer1 < sumDicePlayer2){
	document.getElementById("result").innerHTML = "Il player2 ha vinto"
}
else{
	document.getElementById("result").innerHTML = "I giocatori hanno pareggiato"
}