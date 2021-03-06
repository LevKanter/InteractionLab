var isTransitioning = false;

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

	$(document).on("keydown", keydown);
}

function nextButtonClicked() {
	console.log("clicked next!!");
	move(true);
}

function prevButtonClicked() {
	console.log("clicked previous!!");
	move(false);
}

function keydown(e) {
	console.log("keydown!!");
	if (isTransitioning) {
		return;
	}
	if (e.which == 39) {
		move(true);
	} else if (e.which == 37) {
		move(false);
	}
}

// the bulk of the logic we use to move from slide to slide
// takes place in this function. We pass it a boolean parameter
// (i.e. true or false) to specify whether we want to move to the next
// slide or the previous one
function move(isNext) {
	// find the currently active slide,
	// then based on that find the target slide:

	isTransitioning = true;

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
	targetSlide.fadeIn("slow", function() {
		isTransitioning = false;
	});
}
