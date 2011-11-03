function accordion(container) {

	var speed = 200;
	
	// setup each accordion section:
	container.children("section").each(function() {
		
		// for each section, we just store some variables
		// and generate an event handler:
	
		var section, // this section 
		    body, // this section's bodies
		    neighbors; // the bodies of this section's siblings
	
		section = $(this);
		body = section.find(".body");
		neighbors = section.siblings().find(".body");
	
		section.find(".head a").bind("click", function(event) {
			// prevent the browser from handling the default click event on the <a>:
			event.preventDefault();

			neighbors.slideUp(speed);
			body.slideToggle(speed);
		});
	
	});
}

// an alternate, slightly more compact approach,
// where we just store all the sections once in a
// variable, and then access individual sections
// by their index in the collection
function oAccordion(container, options) {
	var sections = container.children("section");
	sections.each(function(i) {
		var s = sections.eq(i);
		// we use the jQuery function, .data()
		// to cache a reference to the section's
		// corresponding body:
		s.data("body", s.find(".body"));
		s.find(".head a").click(function(e) {
			e.preventDefault();
			sections.each(function(j) {
				sections.eq(j).data("body")[i == j ? "slideToggle" : "slideUp"](options.speed);
			});
		});
	});
}

$.prototype.oAccordion = function(options) {
	return this.each(function() {
		oAccordion($(this), options);
	});
};

$(document).ready(function() {
	$(".accordion").oAccordion({
		speed: 100
	});
});