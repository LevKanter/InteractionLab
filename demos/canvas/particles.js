(function(window, $) {

	var particles,
	    anchors,
	    gspacing,
	    gw,
	    gh,
	    r,
	    c,
	    energy;
	
	function randomColor() {
		return '#'+(random()*0xFFFFFF<<0).toString(16);
	}
	
	function random() {
		if (arguments.length === 0) {
			return window.Math.random();
		}
		if (arguments.length === 1) {
			return window.Math.random()*arguments[0];
		}
		return window.Math.random()*(arguments[1] - arguments[0]) + arguments[0];
	}
	
	function resetEnergy() {
		energy = 1;
	}

	$(document).ready(function() {
		
		Sketch({
			selector: "canvas",
		
			setup: function() {
				var i, j, p;
				
				gspacing = 20;
				gw = Math.floor(this.width/gspacing);
				gh = Math.floor(this.height/gspacing);
				r = 9;
			
				particles = [];
				anchors = [];
			
				for (i = 0; i < gw; i += 1) {
					for (j = 0; j < gh; j += 1) {
						p = Particle();
						p.drag.set(0.8, 0.8);
						p.pos.set(i*gspacing + r, j*gspacing + r);
					
						particles.push(p);
						anchors.push(new PVector(p.pos.x, p.pos.y));
					}
				}
				
				resetEnergy();
				
				this.ctx.globalAlpha = 0.4;
				c = randomColor();
			},
			update: function() {
				var i;
				
				for (i = 0; i < particles.length; i += 1) {
					particles[i].update();
					if (this.mousePressed) {
						particles[i].repel(new PVector(this.mouseX, this.mouseY), 100, energy);
					}
					particles[i].applyForce(PVector.div(PVector.sub(anchors[i], particles[i].pos), energy));
				}
				
				if (this.mousePressed) {
					energy += 30;
				}
			},
			draw: function() {
				var i;
				
				this.ctx.clearRect(0, 0, this.width, this.height);
				
				for (i = 0; i < particles.length; i += 1) {
					this.ctx.fillStyle = c;// "#79775f";// "#00aacc";
					this.ctx.beginPath();
					this.ctx.save();
					this.ctx.translate(particles[i].pos.x, particles[i].pos.y);
					this.ctx.arc(0, 0, 2*r, 0, 2*Math.PI, true);
					this.ctx.restore();
					this.ctx.closePath();
					this.ctx.fill();
				}
			},
			mousePressed: function() {
				
			},
			mouseReleased: function() {
				resetEnergy();
			},
			keyDown: function (key) {
				
			}
		});
	});

}(this, this.jQuery));