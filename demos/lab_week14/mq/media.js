












// a jQuery object representing the "window"
var $myWin;


function handleWindowResize() {
	console.log("Window resized!");
	console.log( $myWin.width() );
	console.log( $myWin.height() );
	
	
	var width = $myWin.width();
	

}





function handleWindowOrientation() {
	
	
	
	console.log(window.orientation);
	
	
	
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
	
	$myWin.bind("resize", handleWindowResize);

	$myWin.bind("orientationchange", handleWindowOrientation);
	
	
});













//touchstart
//touchmove