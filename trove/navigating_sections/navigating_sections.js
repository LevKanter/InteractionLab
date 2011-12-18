
// We need to pass a function to jQuery(document).ready
// then, jQuery will execute it as soon as it detects
// that our HTML page is "ready" (all the elements on the page
// have been initialized, so it's safe to manipulate them)

// Let's define the function:
function readyFn() {
	
	// store a jQuery object representing all our <a> elements found within .toc:
	var linkElements = jQuery(".toc a");
	
	// call .bind() on our <a> elements,
	// passing .bind() the type of the event we want to respond to (i.e. "click")
	// and a function that we want to be executed when that event occurs
	// (here we just define the function in place, without giving it a name):
	linkElements.bind("click", function() {
		
		// remember, linkElements represented all the links,
		// in the following line, we call jQuery(this) to determine
		// which one of the elements was actually clicked:
		var currentLink = $(this);
		
		// now, let's get the "href" attribute of the clicked-on <a>:
		var myHref = currentLink.attr("href");
		
		// we use the "href" as a selector to make another jQuery object
		// that represents the link's corresponding content panel
		var content = jQuery(myHref);
		
		// show the content:
		content.show();
		//content.slideDown();
		//content.fadeIn();
		//content.addClass("active");
		
		// we also want to hide all the other content panels.
		// since we structured our HTML so that all the content panel
		// elements are "siblings" -- we can get another jQuery object
		// representing just them by calling .siblings() on our current
		// content panel:
		var siblings = content.siblings();
		siblings.hide();
		//siblings.slideUp();
		//siblings.fadeOut();
		//siblings.removeClass("active");	
	});
}

// Now, let's call jQuery(document) and then call .ready()
// on the return value we get from jQuery(document):
jQuery(document).ready(readyFn);