(function(stylesheets) {

	jQuery(document).ready(function($) {

		var active_style, controls, handle_btn_click;

		active_style = $("head #active-style");
		controls = $("<div class='controls'></div>");

		handle_btn_click = function(e) {
			var button = $(this);
			e.preventDefault();
			if (!button.hasClass("active")) {
				active_style.attr("href", button.attr("href"));
				button.addClass("active").siblings().removeClass("active");
			}
		};
		
		$("head").append("<link rel='stylesheet' href='css/style_switcher.css'>");
		
		controls.hide().appendTo("body").css({ 
			//right: "-100%"
			right: 0
		}).show();

		$.each(stylesheets, function(label, href) {
			$("<a href='"+ href +"' class='btn'>"+ label +"</a>").click(handle_btn_click).appendTo(controls);
		});
		
		$(document).keydown(function(e) {
			// "c"
			if (e.which == 67) {
				controls.animate({
					right: controls.css("right") === "0px" ? "-100%" : 0
				}, 200);
			}
		});
		
	});

	if (console && console.log) {
		console.log(stylesheets);
	}

}({
	Lev: "css/lev.css",
	Zeke: "css/zeke.css",
	Ian: "css/ian.css",
	Shem: "css/shem.css"	
}));