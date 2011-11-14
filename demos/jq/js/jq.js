(function(window, app, $) {
	
	$(function() {
		var i;
		
		window.prettyPrint();
		
		app.runtime.demos = [];
		for (i = 0; i < app.demos.length; i += 1) {
			app.runtime.demos.push(app.demos[i](app));
		}
	});
	
}(this, this.JQ, this.jQuery));