// a jQuery object representing the "window"
var $myWin;


function handleWindowResize() {
	console.log("Window resized!");
	
	var width = $myWin.width();
	var height = $myWin.height();
	
	console.log(width);
	console.log(height);
}


function handleWindowOrientation() {
	console.log("Window orientation changed!");
	console.log(window.orientation);
	
	// get the absolute value of the current orientation:
	var orientation = Math.abs(window.orientation);
	
	if (orientation == 90) {
		// landscape
		alert("Landscape!");
	} else {
		// portrait
		alert("Portrait!");
	}
}


$(document).ready(function() {
	
	$myWin = $(window);
	
	// attach an event handler for when the "window" changes size:
	$myWin.bind("resize", handleWindowResize);
	
	// attach an event handler for when the "window" changes orientation
	// (this event can occur on phone and tablet devices):
	$myWin.bind("orientationchange", handleWindowOrientation);
});