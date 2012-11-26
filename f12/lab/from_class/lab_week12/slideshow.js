
	
	
	var doc = jQuery(document);
	
	var docReadyHandler = function() {
		console.log('doc is ready');
		
		var selector = '.toc a';
		var mylinks = $(selector);
		
		mylinks.on('click', linkClickHandler);
		
		var nextButton = $('.next-button');
		
		nextButton.on('click', function() {
		
		});
		
	};
	
	 function linkClickHandler(event) {
			
		//event.preventDefault();
		
		var previousElement = $('.toc a.active');
		previousElement.removeClass('active');
		
		var currentElement = jQuery(this);
		currentElement.addClass('active');
					
		var myHref = currentElement.attr('href');
		//console.log(myHref);
		
		
		var correspondingSection = $(myHref);
		var previousSection = $('.content section.active');
		if (previousSection.length == 1) {
			previousSection.removeClass('active');
		}
		
		if (correspondingSection.length == 1) {
			correspondingSection.addClass('active');
		}
	};
	
	doc.on('ready', docReadyHandler);
	
	