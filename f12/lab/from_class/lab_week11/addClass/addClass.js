// document is also an object that the browser makes available
// jQuery allows us to get a special representation of the document,
// and then wait until the document is "ready" to be manipulated
// We do this by first calling the jQuery function and passing it the document...
// ...and then specifying a function that should be executed when
// the document "ready" event occurs

// jQuery(document).on('ready', function() {})
// can be written in shorthand as:
// $(document).ready(function() {})

jQuery(document).on('ready', function() {

	console.log('Our document is ready');
	
	// Create and store a jQuery object representing
	// all <a> elements with the class 'button' that are
	// in the document
	var button = jQuery('a.button');

	if (button.length > 0) {
		// if the length is greater than zero, we found somethng
		
		// Associate a click event handler with our buttons
		button.on('click', handleButtonClick);
	
	} else {
		console.log("did'nt find anything");
	}
});

function handleButtonClick(event) {
	console.log('Button clicked!');
	// Let's create and store a jQuery object that represents the HTML
	// elements in the document that have the class 'main-text'
	var thing = jQuery('.demo-thing');
	//console.log(thing.length);

	//if (thing.hasClass('activated')) {
	//	thing.removeClass('activated');
	//} else {
	//	thing.addClass('activated');
	//}
	// The above if-else logic can be replaced
	// with the following call to the toggleClass function
	thing.toggleClass('activated');
	
	// Prevent the browser from executing any default behavior
	// in response to this event. For <a> elements, the default
	// behavior is to update the current url based on the element's
	// href attribute.
	// Note that event is the name of the first parameter passed
	// into this handleButtonClick function (jQuery will automatically
	// pass an 'event' object when it invokes event handler functions).
	event.preventDefault();
}

