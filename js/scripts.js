//global variables

var location1 = 3
var location2 = 4
var location3 = 5

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready, steady, fire! (Give me number from 0 to 6)");

	if (guess < 0 || guess > 6 ) {
		alert("Wrong number of cell");
	} else {
			guesses = guesses + 1;

			if (guess == location1 || location2 || location3  ) {
				hits = hits + 1;
				alert("Hit!");
		
				if (hits == 3) {
					isSunk == true;
					alert("zatopiony");
				}
			}
}