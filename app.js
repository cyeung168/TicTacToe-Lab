window.addEventListener("load", function () {
var trackPlayer = "X"; 

var squares = document.getElementsByClassName("square");
		for (var i = 0; i < squares.length; i++) {
			 squares[i].addEventListener("click", clickSquare);
		}

	function clickSquare() {
	 	console.log("This square is clicked"); // ---> Check to see that square is being clicked.
	 	// event.target.style.backgroundColor = "gray"; // --> When square is clicked, change square to gray.
		
		if (event.target.innerHTML === "") {
			event.target.innerHTML = trackPlayer; // First condition is that event.target is defined as X
		} 
		if (trackPlayer === "X") {
			trackPlayer = "O"; // Second condition, if player is X, the trackPlayer will switch to O player
			event.target.style.backgroundColor = "gray"; // Also when clicked, turn background to gray with this value
		} 
		else {
			trackPlayer = "X"; // When player is O, the trackPlayer will switch to X 
			event.target.style.backgroundColor = "yellow"; // When O clicks, the background turns yellow
		}
	}
	
});
