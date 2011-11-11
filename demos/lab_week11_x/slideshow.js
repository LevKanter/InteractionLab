$(document).ready(function() {
	
	var slides, speed;
	
	slides = $(".slideshow .slide");
	speed = 3000; // milliseconds
	
	function next() {
		var active = slides.filter(".active");
		var target = active.next();
		if (target.length == 0) {
			target = slides.first();
		}
		active.removeClass("active");
		target.addClass("active");
	}
	
	function loop() {
		setTimeout(function() {
			next();
			loop();
		}, speed);
	}
	
	loop();
	
});