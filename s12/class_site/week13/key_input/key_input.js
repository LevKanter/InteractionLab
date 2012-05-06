
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

	// we use jQuery's .html() function to update the inner html of an element:
	// see http://api.jquery.com/html/
	displaybox.html("<p>You pressed a key with <q>key code</q>: <span class='keycode' of: >"+ event.which +"</span></p>");
}

function onTextboxBlur() {
	console.log("blur!");
	var displaybox = $("#displaybox");
	displaybox.html("<p><q>Focus</q> on the text box and beginning typing&hellip;</p>");
}

$(document).on("ready", function() {

	var textbox = $("#textbox");
	//textbox.focus();

	// Associate a "keydown" event "handler" with the input element
	textbox.on("keydown", onTextboxKeydown);

	// Associate a "blur" event "handler" with the input element
	// The "blur" event occurs on the element when it loses focus
	textbox.on("blur", onTextboxBlur);

});