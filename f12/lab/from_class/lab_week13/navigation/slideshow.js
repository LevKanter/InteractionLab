var mylinks;

function activateSection(linkToActivate) {
	var previousLink = $('.toc a.active');
	previousLink.removeClass('active');

	$('.content section.active').removeClass('active').slideUp();

	linkToActivate.addClass('active');

	var currentHref = linkToActivate.attr('href');
	//console.log(currentHref);

	var correspondingSection = $(currentHref);

	if (correspondingSection.length == 1) {
		correspondingSection.addClass('active');
		correspondingSection.slideDown();
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
		
	//var lastLink = myLinks.last();
	//var lastLink = myLinks.eq(myLinks.length - 1);
}


$(function() {
	console.log('doc is ready');
	
	var mylinksSelector = '.toc a';
	mylinks = jQuery(mylinksSelector);
	
	if (mylinks.length > 0) {
		
		mylinks.on('click', linkClickHandler);
		
		activateFirstLink();
		
		var nextButton = $('.next-button');
		//nextButton.on('click', nextClickHandler);
		nextButton.click(nextClickHandler);
		
		var input = $('input');
		console.log(input.attr('value'));
		
		input.on('keypress', function(event) {
			var currentInput = $(this);
			var val = currentInput.attr('value');
			console.log(typeof val);
			
			var paragraph = $('<p>'+ val +'</p>');
			$('body').prepend(paragraph);
		});
		
	}
});





















