(function(stylesheets) {

	jQuery(document).ready(function($) {

		var active_style, controls, handle_btn_click, navigate;

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

		navigate = function(forward) {
			var buttons, active, target;
			
			buttons = controls.find(".btn");
			active = buttons.filter(".active");
			if (active.length) {
				target = active[forward ? "next" : "prev"]();
			}
			if (!target || !target.length) {
				target = buttons[forward ? "first" : "last"]();
			}

			target.click();
			
		}
		
		$("head").append("<link rel='stylesheet' href='css/style_switcher.css'>");
		
		controls.hide().appendTo("body").css({ 
			right: "-100%"
			//right: 0
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

			// left or right or up or down
			if (e.which == 37 || e.which == 39 || e.which == 38 || e.which == 40) {
				e.preventDefault();
				navigate(e.which == 39 || e.which == 40);
			}

		});
		
	});

	//console.log(stylesheets);

}( zen_garden ));