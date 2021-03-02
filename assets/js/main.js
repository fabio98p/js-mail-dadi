console.log("funzia");

//chiedo al utente di inserire la mail da verificare
var myMail = prompt("Give your mail");
console.log(myMail);
//dichiaro le mail nel arrey "list"
var list = ["gigio@mail.it", "tizio@mail.com", "caio@mail.org"];
console.log(list);
//assegno una variabile observer che serve per guardare e capire cosa accade 
var observer = false;
//inizio il for che controllera se la mail dell'utente è nella lista
for (i = 0; i < list.length; i++){
	if(list[i] == myMail){
		observer = true;
		i = list.length;
	}
}
//do il risultato del calcolo
if (observer){
	document.getElementById("result").innerHTML = "your mail is in the list"
}
else{
	document.getElementById("result").innerHTML = "your mail not is in the list"
}