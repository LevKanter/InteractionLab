// initial approach
// there is nothing deeply bad about this implentation,
// but there is room for improvement --> specifically,
// not how we store all the sibling section bodies for
// EACH individual section, rather than only ever
// storing them once
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
		// we use the jQuery function, $.data()
		// to cache a reference to the section's
		// corresponding body:		
		$.data(this, "body", s.find(".body"));
		
		s.find(".head a").click(function(e) {
			e.preventDefault();
			sections.each(function(j) {
				$.data(this, "body")[i == j ? "slideToggle" : "slideUp"](options.speed);
			});
		});
	});
}

// let's make our oAccordion function part of the jQuery object
// prototype, so that we can simply call it on any jQuery instance directly
// (this is commonly referred to in jQuery-speak as a "plugin")
$.prototype.oAccordion = function(options) {
	return this.each(function() {
		oAccordion($(this), options);
	});
};

// let's inhance our oAccordion plugin by providing default "options"
$.prototype.oAccordionX = function(options) {
	// we use the jQuery function, $.extend(),
	// to merge the passed in "options" object
	// into an object that represents the default values
	var o = $.extend({
		speed: "normal"
	}, options);
	return $(this).oAccordion(o);
};

$(document).ready(function() {
	$(".accordion").oAccordionX({
		speed: 100
	});
});