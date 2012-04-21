(function(window, app, $) {
	
	var $win = $(window),
	    $body = $("body");
	
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
	
	function filterURL(url) {
		return url
			.replace(/^\//,'')
			.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
			.replace(/\/$/,'');
	}
	
	$(function() {
		var $c, $s, $page, currentPath;
		
		$c = $(".body .content");
		$s = $(".body .sidebar");
		
		if ($c.length && $s.length && !$body.hasClass("home")) {
			generateTOC($c, $s);
			if (!isTouch()) {
				positionSidebar($s);
			}
		}
		
		$page = $("html, body");
		currentPath = filterURL(window.location.pathname);
		
		$("a[href*=#]").each(function() {
			var path, $t;
			path = filterURL(this.pathname) || currentPath;
			
			if (path === currentPath &&
			    (this.hostname === window.location.hostname || !this.hostname) && 
				this.hash.replace(/#/,'')) {
				
				$t = $(this.hash);
				if ($t.length) {
					$(this).click(function(e) {
						e.preventDefault();
						$page.animate({ scrollTop: $t.offset().top }, 300, function() {
							window.location.hash = $t.attr("id");
						});
					});
				}
					
			}
		});
		
	});
	
//-----------------------------------------------------
	
	window.lab = app;
	
}(this, {}, this.jQuery));