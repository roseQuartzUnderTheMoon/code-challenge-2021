document.addEventListener("DOMContentLoaded", allWorkAndNoPlayisNoFunAtAll, false);

var myMessage = ['H', 'e', 'l', 'l', 'o', ' ','W', 'o', 'r', 'l', 'd']; //mentioned in commentary 1 in README.md
var i = 0, mySound, text;

function allWorkAndNoPlayisNoFunAtAll() {
	console.log("Get to Play!");

	mySound = document.getElementById("bling");
	text = document.getElementById("hello_world"); //mentioned in commentary 2

	for (var letter of myMessage) {
		text.innerHTML += letter; //mentioned in commentary 3
	}

  text.onclick = function play() { //mentioned in commentary 4
  mySound.play();
  }
}
