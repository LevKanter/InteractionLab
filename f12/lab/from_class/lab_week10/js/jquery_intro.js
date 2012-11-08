jQuery(document).on('ready', function() {

	console.log('doc is ready');
	
	var my_link = jQuery('a.click-me');

	if (my_link.length > 0) {
	
		my_link.on('click', function() {
			
		});
	
	} else {
		console.log("did'nt find anything");
	}
});

console.log('end of js file');






