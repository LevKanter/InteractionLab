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
		
		// what the user typed is represented by the "value" attribute
		// of the input, so let's get that:
		var userAnswer = input.attr("value");
		
		if (response) {
			// if the "response" variable is currently defined,
			// we've already added an element representing our
			// response to the page, so let's remove it so that
			// we don't keep stacking up all the responses to
			// any of the user's previous attempts:
			response.remove();
		}
		
		// check if the user answer is correct or not --
		// we call .toLowerCase() to convert the user's
		// answer to all lowercase, so that our simple
		// check is not case sensitive
		// (NOTE: this is not a sophisticated way to match the answer):
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
	
	// bind a keydown event "handler" to the input element,
	// to receive events when the user is typing
	// when an event is triggered, jQuery always passes an argument
	// to the handler function that's an object that holds info
	// about the event (for details, see http://api.jquery.com/category/events/event-object/)
	
	// Here, we look at the "which" property of the event object to determine
	// which key was pressed (every key can be identified by a unique "key code"):
	// for a table of key codes, see http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
	input.bind("keydown", function(event) {
		// the enter key's code value is 13
		// if the key that was pressed is the enter key...
		if (event.which == 13) {
			processSubmit();
		}
	});

//close our jQuery(document).ready(function() {	
});