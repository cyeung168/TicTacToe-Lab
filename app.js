window.addEventListener("load", function () {
var trackPlayer = "X"; 

var squares = document.getElementsByClassName("square");
		for (var i = 0; i < squares.length; i++) {
			 squares[i].addEventListener("click", clickSquare);
		}

	function clickSquare() {
	 	console.log("This square is clicked"); // ---> Check to see that square is being clicked.
	}
	
});
