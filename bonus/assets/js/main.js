//richiesta da parte dell'utente di inserire il numero di dadi da tirare e di quante faccioe vuole il dado
var numberPlayer1 = prompt("Inserisci quanti dadi deve tirare il plyer 1", "1");
var dicePlayer1 = prompt("Inserisci di quante faccie sia il dado del player 1", "6");
//inizializzo l'arrey e la variabile che fara la somma
var allDicePlayer1 = []
var sumDicePlayer1 = 0
//creo un for che faccia un numero di cicli pari alle volte che si vuole tirare il dado
for (var i = 0; i < numberPlayer1; i++) {
	//il seguente comando creera un numero random compreso tra le faccie del dado e lo inserira nel arrey
	allDicePlayer1.push(Math.floor((Math.random() * dicePlayer1)+1));
	//calcola prendendo il valore random e lo soma a se stesso per tutti i cicli
	sumDicePlayer1 += allDicePlayer1[i]
}
//stampa l'arrey per rendere visibile il risultato di ogni dado e stampa il risultato
document.getElementById("allDicePlayer1").innerHTML = allDicePlayer1
document.getElementById("sumDicePlayer1").innerHTML = sumDicePlayer1

//richiesta da parte dell'utente di inserire il numero di dadi da tirare e di quante faccioe vuole il dado
var numberPlayer2 = prompt("Inserisci quanti dadi deve tirare il plyer 2", "1");
var dicePlayer2 = prompt("Inserisci di quante faccie sia il dado del player 2", "6");
//inizializzo l'arrey e la variabile che fara la somma
var allDicePlayer2 = []
var sumDicePlayer2 = 0

for (var i = 0; i < numberPlayer2; i++) {
	//il seguente comando creera un numero random compreso tra le faccie del dado e lo inserira nel arrey

	allDicePlayer2.push(Math.floor((Math.random() * dicePlayer2)+1));
	//calcola prendendo il valore random e lo soma a se stesso per tutti i cicli
	sumDicePlayer2 += allDicePlayer2[i]
}
//stampa l'arrey per rendere visibile il risultato di ogni dado e stampa il risultato
document.getElementById("allDicePlayer2").innerHTML = allDicePlayer2
document.getElementById("sumDicePlayer2").innerHTML = sumDicePlayer2

//tramite il totale di entrambi i riti di dadi decide chi è il vincitore
if(sumDicePlayer1 > sumDicePlayer2){
	document.getElementById("result").innerHTML = "Il player1 ha vinto"
}
else if(sumDicePlayer1 < sumDicePlayer2){
	document.getElementById("result").innerHTML = "Il player2 ha vinto"
}
else{
	document.getElementById("result").innerHTML = "I giocatori hanno pareggiato"
}