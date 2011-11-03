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
		return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
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
		
			setup: function(S) {
				var i, j, p;
				
				gspacing = 20;
				gw = Math.floor(S.width/gspacing);
				gh = Math.floor(S.height/gspacing);
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
				
				S.ctx.globalAlpha = 0.4;
				//c = randomColor();
			},
			update: function(S) {
				var i;
				
				for (i = 0; i < particles.length; i += 1) {
					particles[i].update();
					if (S.mousePressed) {
						particles[i].repel(new PVector(S.mouseX, S.mouseY), 100, energy);
					}
					particles[i].applyForce(PVector.div(PVector.sub(anchors[i], particles[i].pos), energy));
				}
				
				if (S.mousePressed) {
					energy += 30;
				}
			},
			draw: function(S) {
				var i;
				
				S.ctx.clearRect(0, 0, S.width, S.height);
				
				for (i = 0; i < particles.length; i += 1) {
					S.ctx.fillStyle = "#79775f";// "#00aacc";
					S.ctx.beginPath();
					S.ctx.save();
					S.ctx.translate(particles[i].pos.x, particles[i].pos.y);
					S.ctx.arc(0, 0, 2*r, 0, 2*Math.PI, true);
					S.ctx.restore();
					S.ctx.closePath();
					S.ctx.fill();
				}
			},
			mousePressed: function(S) {
				
			},
			mouseReleased: function() {
				resetEnergy();
			},
			keyDown: function () {
			
			}
		});
	});

}(this, this.jQuery));