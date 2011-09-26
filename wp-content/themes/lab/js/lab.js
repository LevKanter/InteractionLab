(function(window, app, $) {
	
	var $win = $(window);
	
	function generateTOC($c, $s) {
		var $sections, $toc;
		
		$sections = $c.children("section");
		if (!$sections.length) {
			return false;
		}
		
		$toc = $("<ul class='toc'></ul>");
		
		$sections.each(function() {
			var $section, id;
			$section = $(this);
			id = $section.attr("id");
			
			if (id) {
				$toc.append("<li><a href='#"+ 
					id +"'>"+ 
					$section.children("h2").eq(0).text()+
					"</a></li>");
			}
		});
		
		if ($toc.children().length) {
			$toc.css({opacity: 0}).prependTo($s).animate({opacity: 1}, 2500);
		}
		
		return $toc;
	}
	
	function positionSidebar($s) {
		var threshold, update;
		
		update = function() {
			if ($win.scrollTop() > threshold) {
				$s.css({position: "fixed", top: 0});
			} else {
				$s.css({position: "", top: ""});
			}
		};
		
		threshold = $s.offset().top;
		
		$win.scroll(function() {
			update();
		});
		
		update();
	}
	
	function isTouch() {
		var is;
		try {
			document.createEvent("TouchEvent");
			is = true;
		} catch (err) {
			is = false;
		}
		return is;
	}
	
	$(function() {
		var $c, $s;
		
		$c = $(".body .content");
		$s = $(".body .sidebar");
		
		if ($c.length && $s.length) {
			generateTOC($c, $s);
			if (!isTouch()) {
				positionSidebar($s);
			}
		}
	});
	
//-----------------------------------------------------
	
	window.lab = app;
	
}(this, {}, this.jQuery));