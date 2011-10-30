(function(window, $) {

	var particles,
	    anchors,
	    gspacing,
	    gw,
	    gh,
	    r,
	    c;
	
	function randomColor() {
		return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	}
	
	function GUI(options) {
		
		var $gui, o;
		
		$gui = $(".gui");
		o = $.extend({
			pars: {}
		}, options);
		
		$gui.find("[data-param]").each(function() {
			
			var $control, par;
			
			$control = $(this);
			par = $control.attr("data-param");
			
			if (o.pars && o.pars[par]) {
				$control.bind("change", function() {
					o.pars[par] = $control.attr("value");
					console.log(o.pars[par]);
				});
			}
		});
	
	}

	$(document).ready(function() {
		
		GUI({
			pars: {
				r: r
			}
		});
		
		Sketch({
			selector: "canvas",
		
			setup: function(S) {
				var i, j, p;
				
				gspacing = 20;
				gw = Math.floor(S.width/gspacing);
				gh = Math.floor(S.height/gspacing);
			
				particles = [];
				anchors = [];
			
				for (i = 0; i < gw; i += 1) {
					for (j = 0; j < gh; j += 1) {
						p = Particle();
						p.drag.set(0.8, 0.8);
						p.pos.set(i*gspacing, j*gspacing);
					
						particles.push(p);
						anchors.push(new PVector(p.pos.x, p.pos.y));
					}
				}
				
				r = 9;
				
				S.ctx.globalAlpha = 0.4;
				c = randomColor();
			},
			update: function(S) {
				var i;
				
				for (i = 0; i < particles.length; i += 1) {
					particles[i].update();
					particles[i].repel(new PVector(S.mouseX, S.mouseY), 300, 16);
					particles[i].applyForce(PVector.div(PVector.sub(anchors[i], particles[i].pos), 125));
				}
			},
			draw: function(S) {
				var i;
				
				S.ctx.clearRect(0, 0, S.width, S.height);
				
				for (i = 0; i < particles.length; i += 1) {
					S.ctx.fillStyle = c;// "#00aacc";
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
		
			},
			keyPressed: function () {
			
			}
		});
	});

}(this, this.jQuery));