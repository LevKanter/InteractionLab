// document is also an object that the browser makes available
// jQuery allows us to get a special representation of the document,
// and then wait until the document is "ready" to be manipulated
// We do this by first calling the jQuery function and passing it the document...
// ...and then specifying a function that should be executed when
// the document "ready" event occurs

//$(document)



jQuery(document).on('ready', function() {

	console.log('Our document is ready');
	
	var button = jQuery('a.button');

	if (button.length > 0) {
		// if the length is greater than zero, we found somethng
		
		button.on('click', handleButtonClick);
	
	} else {
		console.log("did'nt find anything");
	}
});

function handleButtonClick(event) {
	console.log('Button clicked!');
	// Let's get a jQuery object that represents the HTML
	// elements in the document that have the class 'main-text'
	var thing = jQuery('.demo-thing');
	console.log(thing.length);

	//if (thing.hasClass('activated')) {
	//	thing.removeClass('activated');
	//} else {
	//	thing.addClass('activated');
	//}
	thing.toggleClass('activated');
	
	event.preventDefault();
}
