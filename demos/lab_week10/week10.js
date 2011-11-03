jQuery(document).ready(function() {
	
	// declaring all are variables up front 
	// (we will define them later in the code):
	var input, submit, answer, processSubmit, response;
	
	// let's store jQuery objects representing the elements
	// that we are going to be using:
	input = $("#answer"); // where the user types their answer
	submit = $("#submit"); // the submit button
	
	// let's also define the actual answer:
	answer = "stick";
	
	// the function that we will execute
	// each time the user submits their answer,
	// to determine if they are correct and respond accordingly:
	processSubmit = function() {
		
		var userAnswer = input.attr("value");
		
		if (response) {
			// if the "response" variable is currently defined,
			// we've already added an element representing our
			// response to the page, so let's remove it so that
			// we don't keep stacking up all the responses to
			// any of the user's previous attempts:
			response.remove();
		}
		
		// check if the user answer is correct or not
		// we call .toLowerCase() to convert the user's
		// answer to all lowercase, so that our simple
		// check is not case sensitive:
		if (userAnswer.toLowerCase() == answer) {
			// they're right
		
			response = $("<p>You are right</p>");
			
		} else {
			// they fail
			
			response = $("<p>FAIL!!!!!!!!</p>");
			response.addClass("fail");
		}
		
		response.addClass("response");
		
		// we can append one jQuery object into another,
		// so let's just add the response to the <body> element:
		$("body").append(response);
	};
	
	// bind a click event "handler" to the submit button:
	submit.bind("click", function() {
		processSubmit();
	});
	
	input.bind("keydown", function() {
		// determine which was pressed
		
	});
	
});
	