// document "ready" event handler:
// We use this to kickoff all our main code
$(document).ready(function() {
	console.log("The document is ready!!");

	// just some housekeeping,
	// lets ensure that the slide that has the "active" class
	// is showing when we first start the slideshow
	var firstActiveSlide = $(".slideshow .active");
	firstActiveSlide.show();

	setupSlideshow();

});

function setupSlideshow() {
	// find the next and previous buttons,
	// and associate them with event handlers
	
	var nextBtn = $(".slideshow .next");

	console.log("We found this many next buttons: ");
	console.log( nextBtn.length );
	nextBtn.on("click", nextButtonClicked); // attach event handler

	var prevBtn = $(".slideshow .prev");
	prevBtn.on("click", prevButtonClicked); // attach event handler
	

	// Typically, most events will "bubble", which means that they travel up
	// from the HTML element where they initially occurred, and visit each
	// parent element in order. For example, no matter what element you click on,
	// eventually the <body> element will also receive that click event.
	$("body").on("click", function() {
		console.log("body click");
	});

	// We can take advantage of event "bubbling" by attaching our keydown
	// event handler to the <body> element, instead of having to create an
	// <input> element and attaching our event handler to it directly.
	// This way, the user can press keys without having to ever focus on any <input>
	$("body").on("keydown", onKeydown);
}

function onKeydown(event) {
	console.log("a key is down!");
	console.log("keycode ==> " + event.which);


	// the "keycode" for the right arrow key is 39
	if (event.which == 39) {
		console.log("right arrow key!!!");
		move(true);
		
	// the "keycode" for the left arrow key is 37
	} else if (event.which == 37) {
		console.log("left arrow key!!!");
		move(false);
	}
}

function nextButtonClicked() {
	console.log("clicked next!!");
	move(true);
}

function prevButtonClicked() {
	console.log("clicked previous!!");
	move(false);
}

// the bulk of the logic we use to move from slide to slide
// takes place in this function. We pass it a boolean parameter
// (i.e. true or false) to specify whether we want to move to the next
// slide or the previous one
function move(isNext) {
	// find the currently active slide,
	// then based on that find the target slide:

	var activeSlide = $(".slideshow .active");

	var destinationSlide;
	
	if (isNext) {
		destinationSlide = activeSlide.next();
	} else {
		destinationSlide = activeSlide.prev();
	}
	
	var targetSlide;
	
	if (destinationSlide.length > 0) {
		targetSlide = destinationSlide;
	} else {
		// if we get to this else statement, we still
		// haven't found our target slide, which
		// logically means we're at the end of the slideshow
		// Based on whether we are moving in the next direction
		// or the previous direction, we loop back around to the
		// other end of the slideshow (the first or the last slide):

		if (isNext) {

			var firstSlide = $(".content section").first();
			targetSlide = firstSlide;
			
		} else {
			
			var lastSlide = $(".content section").last();
			targetSlide = lastSlide;
		}
	}
	
	// deactivate the currently active slide:
	activeSlide.removeClass("active");
	activeSlide.fadeOut("slow");
	
	// activate the target slide:
	targetSlide.addClass("active");
	targetSlide.fadeIn("slow");
}
