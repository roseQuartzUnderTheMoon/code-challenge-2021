document.addEventListener("DOMContentLoaded", allWorkAndNoPlayisNoFunAtAll, false);

var myMessage = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']; //see change 1 in README.md
var text, mySound;

function allWorkAndNoPlayisNoFunAtAll() {
	changes(); //see change 2
	console.log("Get to Play!");

	mySound = document.getElementById("bling");
	text = document.getElementById("hello_world") //see change 4

	for (var letter of myMessage) { //see change 5
		text.innerHTML += letter;
	}

	text.onclick = function play() { //see change 6
		mySound.play();
		text.style.color = "pink";
		text.style.background = "green"; 
	}
}

function changes() { //see change 3
	var cont = document.getElementById("content");
	cont.style.color = "white";
	cont.style.textAlign = "center";
	cont.className = "visible";
	document.getElementById("meat").style.textAlign = "center";
	var heading = document.getElementsByClassName("header");
	heading[0].style.textAlign = "center";
}