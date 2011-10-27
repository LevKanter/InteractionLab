(function(window, $) {

    var
    app = {}, 

    frameRate = 1000/60, 
    looping = true, 

    canvas, 
    $c, 
    context,
	
	width, 
	height,
	
	mouseX = 0, 
	mouseY = 0, 
	pmouseX = 0, 
	pmouseY = 0, 
	mousePressed = false,
	
	    bg, // background color
	    fg; // foreground color
	
	function circle(x, y, r) {
		context.fillStyle = fg;
		context.beginPath();
		context.save();
		context.translate(x, y);
		context.arc(0, 0, r, 0, 2*Math.PI, true);
		context.restore();
		context.closePath();
		context.fill();
	}

	function cursor() {
		$c.css("cursor", "default");
	}

	function noCursor() {
		$c.css("cursor", "none");
	}

	function prepareCanvas(id) {

		var c = document.getElementById(id);
	
		if (!c) {
			// no element with the specified id
			return false;
		}

		if (typeof c.getContext !== "function") {
			// the browser does not support canvas
			return false;
		}
	
		canvas = c;

		context = canvas.getContext("2d");

		width = canvas.width;
		height = canvas.height;
		
		$c = $(canvas);

		$c
			.bind("mousemove", function(event) {

				pmouseX = mouseX;
				pmouseY = mouseY;
				mouseX = event.pageX - this.offsetLeft;
				mouseY = event.pageY - this.offsetTop;

			}).bind("mousedown", function() {

				mousePressed = true;
				mousePressedEvent();

			}).bind("mouseup", function() {

				mousePressed = false;
				mouseReleasedEvent();

			}).trigger("focus");
	
		return true;
	}
	
	function setup() {
		//noCursor();
		
		bg = "rgba(0, 150, 30, 1)";
		fg = "rgb(0, 0, 180)";
		
		context.fillStyle = bg;
		context.fillRect(0, 0, width, height);
	}

	function draw() {
		//context.clearRect(0, 0, width, height);
		
		if (mousePressed) {
			circle(mouseX, mouseY, 15);
		}
	}

	function mousePressedEvent() {
		console.info("mouse pressed!");
	}

	function mouseReleasedEvent() {
		console.info("mouse released!");
	}

	

	function loop() {
		draw();
		if (looping) {
			window.setTimeout(loop, frameRate);
		}
	}
	
	$(document).ready(function() {
		
		var id = "sketch";
		
		if ( prepareCanvas(id) ) {
			
			setup();
			loop();
			
			window.stop = function() {
				looping = false;
			};

			window.start = function() {
				looping = true;
				loop();
			};
			
		} else {
			console.warn("there was a problem initializing the canvas");
		}
	});

	window.app = app;
	
}(this, this.jQuery));





function export(obj) {
	var k;
	if (typeof obj === "object") {
		for (k in obj) {
			if (obj.hasOwnProperty(k)) {
				if (window[k] && console) {
					console.warn("overriding global: "+ k);
				}
				window[k] = obj[k];
			}
		}
	}
}

















