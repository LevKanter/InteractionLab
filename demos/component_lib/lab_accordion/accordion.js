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

$(document).ready(function() {
	// setup all ".accordion" elements,
	// by passing each one to our function, accordion():
	$(".accordion").each(function() {
		accordion($(this));
	});
});