
/* AN EXERCISE

1. Setup a ready event handler
2. Once ready, get a jQuery object representing a
	text input in the document
3. Associate a 'keydown' event handler with it
4. in the keydown handler, read the event.which property
	(on the event object that jQuery passes into the
	handler)
5. Log that property to the console.
*/

/*
$(document).on('ready', function() {
	var input = $('#my-input');
	
	input.on('keydown', function(event) {
		var keycode = event.which;
		console.log(keycode);
	});

});
*/

// When an event is triggered, jQuery always passes an argument
// to the handler function that's an "object" that holds info
// about the event (for details, see http://api.jquery.com/category/events/event-object/)

// Here, we look at the "which" property of the event object to determine
// which key was pressed (every key can be identified by a unique "key code"):
// for a table of key codes, see http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
function onTextboxKeydown(event) {

	console.log("a key is down!");
	console.log("keycode ==> " + event.which);

	var displaybox = $("#displaybox");

	// we can use jQuery's .html() function to update the inner html of an element:
	// see http://api.jquery.com/html/
	displaybox.html("<p>You pressed a key with <q>key code</q>: <span class='keycode' of: >"+ event.which +"</span></p>");
}

function onTextboxBlur() {
	console.log("blur!");
	var displaybox = $("#displaybox");
	displaybox.html("<p><q>Focus</q> on the text box and beginning typing&hellip;</p>");
}

$(document).on("ready", function() {

	var textbox = $("#my-input");

	// Associate a "keydown" event "handler" with the input element
	textbox.on("keydown", onTextboxKeydown);

	// Associate a "blur" event "handler" with the input element
	// The "blur" event occurs on the element when it loses focus
	textbox.on("blur", onTextboxBlur);

});


/*var originalValue;

jQuery(function() {
	
	var input = $('input[type=text]');
	
	if (input.length == 1) {
		console.log('got it!');
		
		originalValue = input.attr('value');
		
		input.on('focus', inputFocusHandler);
		input.on('blur', inputBlurHandler);
	}
	
});

function inputFocusHandler(event) {
	console.log('focus');
	var input = $(this);
	var value = input.attr('value');
	
	if (value == originalValue || value == '') {
		input.attr('value', originalValue);
		//input.addClass('placeholder-state');
		input.attr('value', '');
	}
	
	input.removeClass('placeholder-state');	
}

function inputBlurHandler(event) {
	console.log('blur');
	var input = $(this);
	var value = input.attr('value');
	
	if (value == originalValue || value == '') {
		input.attr('value', originalValue);
		input.addClass('placeholder-state');
	}
}*/
