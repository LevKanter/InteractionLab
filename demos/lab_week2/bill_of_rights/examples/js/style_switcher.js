
	var stylesheets = {
		Lev: "css/lev.css",
		Zeke: "css/zeke.css",
		Ian: "css/ian.css",
		Shem: "css/shem.css"
	};
	
	jQuery(document).ready(function($) {
	
		var activeStyle = $("#active-style");
		var controls = $("<div class='controls'></div>");
		var controlsStyle = $("<link rel='stylesheet' href='css/style_switcher.css'>");
		
		$("head").append(controlsStyle);
		
		controls.hide().appendTo("body").css({ 
			right: "-100%" 
		}).show();
		
		$.each(stylesheets, function(label, href) {
			var button = $("<a href='#' class='btn'>"+ label +"</a>");
			
			button.click(function(e) {
				e.preventDefault();
				activeStyle.attr("href", href);
				$(this).addClass("active").siblings().removeClass("active");
			});
			
			controls.append(button);
		});
		
		$(document).keydown(function(e) {
		
			// the "key code" for the letter "c" is 67
			
			if (e.keyCode && e.keyCode == 67) {
				controls.animate({
					right: controls.css("right") == "0px" ? "-100%" : 0
				}, 200);
			}
		});
		
	});