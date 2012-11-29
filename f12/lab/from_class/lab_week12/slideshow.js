var docReadyHandler = function() {
	console.log('doc is ready');
	
	var mylinksSelector = '.toc a';
	var mylinks = $(mylinksSelector);
	
	mylinks.on('click', linkClickHandler);
};

function linkClickHandler(event) {
	
	event.preventDefault();

	var previousLink = $('.toc a.active');
	previousLink.removeClass('active');

	var previousSection = $('.content section.active');
	previousSection.removeClass('active');

	// Calling the jQuery function and passing it 
	// the keyword this, when inside an event handler,
	// will produce a jQuery object representing the
	// specific element associated with this occurance
	// of the event (in the case, the <a> that was clicked
	// on)  
	var currentLink = $(this);
	currentLink.addClass('active');
			
	var currentHref = currentLink.attr('href');
	//console.log(currentHref);

	var correspondingSection = $(currentHref);

	if (correspondingSection.length == 1) {
		correspondingSection.addClass('active');
	} else {
		console.log('Cannot find section corresponding to this link!');
	}
};

var doc = jQuery(document);
doc.on('ready', docReadyHandler);

	