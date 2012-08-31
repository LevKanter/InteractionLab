$(function() {

	var $tabs = $(".tabs");

	$tabs.find("> li > a").click(function(e) {
		e.preventDefault();
		var $tab = $(this);
		var href = $tab.attr("href");
		var $panel = $(href);
		$tab.parent().addClass("active").siblings().removeClass("active");
		$panel.show().siblings().hide();
		//window.location.hash = href;
		//window.scroll(0, 0);
	});

	if (window.location.hash) {
		$tabs.find("a[href="+ window.location.hash +"]").click();
	} else {
		$tabs.find("> li.active > a:eq(0)").click();
	}

});