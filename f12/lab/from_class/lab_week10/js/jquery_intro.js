// document is also an object that the browser makes available
// jQuery allows us to get a special representation of the document,
// and then wait until the document is "ready" to be manipulated
// We do this by first calling the jQuery function and passing it the document...
// ...and then specifying a function that should be executed when
// the document "ready" event occurs

jQuery(document).on('ready', function() {

	console.log('Our document is ready');
	
	// If we call the jQuery function and pass it a string of text,
	// it will treat the text like a CSS selector and return a
	// representation of all the HTML elements in the document
	// that match the selector.
	// In this case, we use jQuery to find all <a> elements
	// that have a class "click-me", and store the result in a variable
	// we named my_link.
	var my_link = jQuery('a.click-me');

	// We can read the length property of the my_lnik jQuery object
	// to find out how many elements were actually found that satisfied
	// the selector we used
	if (my_link.length > 0) {
		// if the length is greater than zero, we found somethng
		
		// Once again, we use jQuery's on function on my_link,
		// to specify a function that should be automatically
		// executed when a 'click' event occurs on the HTML
		// element(s) represented by my_link. We could define
		// our event handler function on the fly (like we've
		// done for the document ready event, or we could refer
		// to a function we've already defined by its name). The
		// handleLinkClick function is actually defined further down
		// in this file.
		my_link.on('click', handleLinkClick);
	
	} else {
		console.log("did'nt find anything");
	}
});

function handleLinkClick() {
	console.log('Link clicked!');
	// Let's get a jQuery object that represents the HTML
	// elements in the document that have the class 'main-text'
	var text = jQuery('.main-text');

	// see http://docs.jquery.com/Effects/fadeIn
	text.fadeIn();
}

// not that we reach this point before the
// document ready function actually gets run
console.log('end of js file');
