$(function() {

	var $tabs = $(".tabs");

	$tabs.find("> li > a").click(function(e) {
		var $tab = $(this);
		var href = $tab.attr("href");
		var $panel = $(href);
		if ($panel.length == 1) {
			e.preventDefault();
			$tab.parent().addClass("active").siblings().removeClass("active");
			$panel.show().siblings().hide();
			window.location.hash = href.split("-").join("_");
		}
	});

	if (window.location.hash) {
		$tabs.find("a[href="+ window.location.hash.split("_").join("-") +"]").click();
	} else {
		$tabs.find("> li.active > a:eq(0)").click();
	}

});