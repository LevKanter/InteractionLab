jQuery(document).ready(function($) {
	
	var display, input;
	
	display = $("#mainframe .display");
	input = $("#mainframe input[type=text]");
	
	$("#dispatch").click(function() {
		
		$.ajax({
			url: "service.php",
			type: "GET",
			dataType: "text",
			data: {
				action: "greet",
				name: $.trim(input.val())
			},
			success: function(data, textStatus, jqXHR) {
				console.info("|------------- RESPONSE -------------|");
				console.log(data);
				console.log(textStatus);
				console.log(jqXHR);
				
				display.empty().append(data);
			}
		});
	});
	
});