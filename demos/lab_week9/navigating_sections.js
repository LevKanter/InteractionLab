
jQuery(document).ready(function() {
	
	var linkElements = jQuery(".toc a");
	
	linkElements.bind("click", function() {
		
		var currentLink = $(this);
		var myHref = currentLink.attr("href");
		
		var content = jQuery(myHref);
		
		content.show();
		content.siblings().hide();
		
	});
	
});
