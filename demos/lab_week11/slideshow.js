$(document).ready(function() {
	
	// jQuery representation of all slides
	var slides = $(".slideshow .slide");
	
	// ========
	// = Next =
	// ========
	$("#next").bind("click", function(event) {
		// prevent the default event behavior
		event.preventDefault();
		
		// find the slide that has the "active" class
		var active = slides.filter(".active");
		
		// find our target slide by getting the next sibling element of the active slide
		var target = active.next();
		
		// we need to make sure that our target element actually exists,
		// if we were already on the last side, there would be no actual next sibling
		// we can determine this by checking the length property of the jQuery object
		// that we got back when we called next()
		
		if (target.length == 0) {
			// if there was no next element, let's just reset our target slide to be the first slide
			target = slides.first();
		}
		
		// move the "active" class from the active slide to the target slide
		active.removeClass("active");
		target.addClass("active");
	});
	
	// ============
	// = Previous =
	// ============
	$("#prev").bind("click", function(event) {
		event.preventDefault();
		
		var active = slides.filter(".active");
		
		var target = active.prev();
		
		if (target.length == 0) {
			target = slides.last();
		}
		
		active.removeClass("active");
		target.addClass("active");
	});
	
});