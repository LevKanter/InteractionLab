$(document).ready(function() {
	
	var brush;
	
	function resetBrush() {
		brush = {
			size: 10,
			color: "#ffffff"
		};
	}
	
	Sketch({
		selector: "canvas",
	
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
				
				this.ctx.beginPath();
				this.ctx.arc(this.mouseX, this.mouseY, brush.size, 0, 2*Math.PI, true);
				
				this.ctx.strokeStyle = brush.color;
				this.ctx.stroke();
			}
		},
		mousePressed: function() {
		
		},
		mouseReleased: function() {
			resetBrush();
		},
		keyDown: function (key) {
			
		}
	});
});
