// $ is a shortcut to jQuery
// i.e. var $ = jQuery;


function setupNavigation() {
	
	var linkElements = $(".toc a");
	console.log("Number of link elements =");
	console.log(linkElements.length);
	
	linkElements.on("click", onLinkClick);
}

// click event handler:
function onLinkClick() {
	console.log("link clicked!");
	
	// inside of a jQuery event handler,
	// we can call jQuery with the keyword "this"
	// to get a jQuery object representing the
	// HTML element that actually initiated the event
	// in this case, the current <a> element that
	// was clicked on
	var currentLink = $(this);
	console.log("current link...");
	console.log(currentLink.length);
	
	// using jQuery's .attr() function, we can
	// determine the href attribute of the current link
	var href = currentLink.attr("href");
	console.log("href...");
	console.log(href);
	
	var correspondingSection = $(href);
	console.log("corresponding section length =");
	console.log(correspondingSection.length);
	
	correspondingSection.addClass("active");
	//correspondingSection.show();
	//correspondingSection.slideDown();
	
	// now that we've activating the corresponding section,
	// let's deactivate all the other sections.
	// Because of how we structured our HTML, all the sections
	// are "siblings" of each other. We can use jQuery's
	// .siblings() function to find the other sections, relative
	// to the corresponding section
	var otherSections = correspondingSection.siblings();
	otherSections.removeClass("active");
	//otherSections.hide();
	//otherSections.slideUp();

	//-----------------------------------------------------------
	// Now, let's also activate/deactivate the navigation
	// link elements themselves
	
	currentLink.addClass("active");
	
	// Because of how our HTML is currently structured,
	// the other links are NOT siblings of each other,
	// so we have to get a little fancier if we want to find them.
	// Note that jQuery functions can be chained together
	// Let's get the parent element of the current link (which,
	// in this case, will be an <li>), then let's get that parent's
	// siblings, then let's find all the <a> elememts that are inside
	// all of those siblings...
	var otherLinks = currentLink.parent().siblings().find("a");
	otherLinks.removeClass("active");
	
}

// document "ready" event handler:
// We use this to kickoff all our main code
$(document).ready(function() {
	console.log("The document is ready!!");
	setupNavigation();
});