


$(document).ready(function() {

var userNumber = prompt("Pick a number between 1 and 100");
userNumber = parseInt(userNumber);
userNumber = +userNumber;

function fizzBuzzer (userNumber) { 

		for ( var i=1; i <= userNumber; i++) {

		if ( i % 3 === 0 && i % 5 === 0) {
			$(".list").append("<p>FizzBuzz</p>");
		}

		else if (i % 3 === 0) {
			$(".list").append("<p>Fizz</p>");
		}

		else if (i % 5 === 0) {
			$(".list").append("<p>Buzz</p>");
		}

		else {
			$(".list").append("<p>"+i+"</p>");
		}


		};

	};

fizzBuzzer(userNumber);

});






