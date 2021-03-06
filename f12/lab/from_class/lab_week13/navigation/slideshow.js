
var RIGHT_ARROW_KEY = 39;


// declaring mylinks variable up here
// so that it can be later referred to
// from within any of our functions.
// Variables are not accessible outside of
// a function they are declared in.
// Notice we haven't assigned mylinks yet.
// We will set it to be equal to something
// later in this code.
var mylinks;

function activateSection(linkToActivate) {
	var previousLink = $('.toc a.active');
	previousLink.removeClass('active');

	var previousSection = $('.main section.active');
	previousSection.removeClass('active');

	linkToActivate.addClass('active');
	var currentHref = linkToActivate.attr('href');
	//console.log(currentHref);

	var correspondingSection = $(currentHref);

	if (correspondingSection.length == 1) {
		correspondingSection.addClass('active');
	} else {
		console.log('Cannot find section corresponding to this link!');
	}
}

function linkClickHandler(event) {
	event.preventDefault();

	var currentLink = $(this);
	activateSection(currentLink);
}

function nextClickHandler(event) {
	event.preventDefault();
	next();
}

function next() {
	var currentActive = $('.toc a.active');
	var currentParent = currentActive.parent();
	var nextParent = currentParent.next();
	if (nextParent.length < 1) {
		activateFirstLink(); 
	} else {
		var nextParentsChild = nextParent.find('a');
		activateSection(nextParentsChild);
	}
}

function activateFirstLink() {
	var firstLink = mylinks.first();
	//var firstLink = mylinks.eq(0);

	//firstLink.trigger('click');	
	activateSection(firstLink);
	
	// If we wanted the last one instead of the first...
	//var lastLink = myLinks.last();
	//var lastLink = myLinks.eq(myLinks.length - 1);
}

// passing $() a function is a shortcut for
// jQuery(document).on('ready', function() {...});
$(function() {
	console.log('doc is ready');
	
	var mylinksSelector = '.toc a';
	mylinks = jQuery(mylinksSelector);
	
	if (mylinks.length > 0) {
		mylinks.on('click', linkClickHandler);
		
		var nextButton = $('.next-button');
		// .click() function shorthand for
		//nextButton.on('click', nextClickHandler);
		nextButton.click(nextClickHandler);

		activateFirstLink();
	}
	
	var keyInputReceiver = $(document);
	keyInputReceiver.on('keydown', function(event) {
		event.preventDefault();
		if (event.which == RIGHT_ARROW_KEY) {
			next();
		}
	});
	
	
	
	
	
	
	
	
	
	
});
