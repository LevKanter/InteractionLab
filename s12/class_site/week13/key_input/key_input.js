
// to receive events when the user is typing
// when an event is triggered, jQuery always passes an argument
// to the handler function that's an object that holds info
// about the event (for details, see http://api.jquery.com/category/events/event-object/)

// Here, we look at the "which" property of the event object to determine
// which key was pressed (every key can be identified by a unique "key code"):
// for a table of key codes, see http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
function onTextboxKeydown(event) {
	console.log("a key is down!");
	console.log(event.which);
	console.log("--------------");

	var displaybox = $("#displaybox");

	displaybox.html("<p>Pressed a key with 'key code': <span class='keycode' of: >"+ event.which +"</span></p>");
}

$(document).on("ready", function() {

	var textbox = $("#textbox");
	//textbox.focus();

	// Associate a "keydown" event "handler" with the input element
	textbox.on("keydown", onTextboxKeydown);

});