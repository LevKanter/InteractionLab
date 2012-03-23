$(document).ready(function() {
	
	var brush;
	
	function resetBrush() {
		brush = {
			size: 10,
			color: "#ffffff"
		};
	}
	
	Sketch({
		element: "canvas",
	
		setup: function() {
			resetBrush();
		},
		update: function() {
			if (this.mousePressed) {
				brush.size += Math.random();
			}
		},
		draw: function() {
			if (this.mousePressed) {
				
				this.context.beginPath();
				this.context.arc(this.mouseX, this.mouseY, brush.size, 0, 2*Math.PI, true);
				
				this.context.strokeStyle = brush.color;
				this.context.stroke();
			}
		},
		mousePressed: function() {
		
		},
		mouseReleased: function() {
			resetBrush();
		},
		keyDown: function (key) {
			
		},
		resized: function(w, h) {
			console.log(w);

		}
	});
});
