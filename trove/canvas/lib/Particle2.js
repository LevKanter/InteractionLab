	
	var Particle = function (options) {

		this.mass = 1;
		this.pos = new PVector();
		this.vel = new PVector();
		this.acc = new PVector();
		this.drag = new PVector();
		this.maxVel = -1;
		this.maxAcc = -1;

		this.options = $.extend({
			on_update: $.noop
		}, options);
	};
	Particle.prototype = {
		update: function () {
			this.acc.div(this.mass);
			this.acc.sub(PVector.mult(this.vel, this.drag));
			if (this.maxAcc > 0) {
				this.acc.limit(this.maxAcc);
			}
			this.vel.add(this.acc);
			if (this.maxVel > 0) {
				this.vel.limit(this.maxVel);
			}
			this.pos.add(this.vel);
			this.acc.mult(0);
			this.options.on_update.apply(this);
		},
		repel: function (pos, radius, strength) {
			var v, d;
			v = PVector.sub(this.pos, pos);
			d = v.mag();
			if (radius > 0 && d < radius) {
				v.normalize();
				this.acc.add(PVector.div(PVector.mult(v, strength*(1 - (d/radius))), this.mass));
			}
		},
		attract: function (pos, radius, strength) {
			this.repel(pos, radius, -1*strength);	
		},
		applyForce: function (v) {
			this.acc.add(PVector.div(v, this.mass));
		}
	};

	var ParticleSystem = function (options) {
		
		thi.options = $.extend({
			capacity: -1,
			overflow: $.noop
		});

		this.capacity = o.capacity;
		this.particles = [];
	};
	ParticleSystem.prototype = {
		update: function () {
			var i;
			for (i = 0; i < this.particles.length; i += 1) {
				this.particles[i].update();
			}
		},
		add: function (p) {
			if (p instanceof Particle) {
				if (this.capacity > 0 && this.particles.length > this.capacity) {
					this.options.overflow.apply(this, [p]);
				} else {
					this.particles.push(p);
				}
			}	
		},
		get: function (index) {
			return typeof index === "number" && this.particles[index] ? 
				this.particles[index] : false;
		},
		size: function () {
			return this.particles.length;	
		},
		flush: function () {
			var i;
			for (i = 0; i < this.particles.length; i += 1) {
				
			}
			this.particles = [];
		}	
	};
	