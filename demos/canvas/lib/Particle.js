(function(window, $, PVector) {
	
	function Particle (options) {
		
		var me, o;
		
		me = this;
		o = $.extend({
			update: $.noop
		}, options);
		
		function init () {
			me.mass = 1;
			me.pos = new PVector();
			me.vel = new PVector();
			me.acc = new PVector();
			me.drag = new PVector();
			me.maxVel = -1;
			me.maxAcc = -1;
			me.lifeSpan = -1;
			me.dead = false;
			me.age = 0;
		}
		
		this.update = function () {
			if (! this.dead) {
				
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
				
				o.update(this);
				
				this.age += 1;
				if (this.lifeSpan > 0) {
					this.dead = this.age >= this.lifeSpan;
				}
			}
			return this;
		};
		
		this.repel = function (sPos, sRadius, strength) {
			var v, d;
			v = PVector.sub(this.pos, sPos);
			d = v.mag();
			if (sRadius > 0 && d < sRadius) {
				v.normalize();
				this.acc.add(PVector.div(PVector.mult(v, strength*(1 - (d/sRadius))), this.mass));
			}
			return this;
		};
		
		this.attract = function (sPos, sRadius, strength) {
			return this.repel(sPos, sRadius, -1*strength);
		};
		
		this.applyForce = function (v) {
			this.acc.add(PVector.div(v, this.mass));
			return this;
		};
		
		init();
	}
	
	function ParticleSystem (options) {
		
		var me, o, particles, capacity;
		
		me = this;
		o = $.extend({
			capacity: -1,
			overflow: $.noop
		}, options);
		
		function init () {
			capacity = o.capacity;
			me.flush();
		}
		
		this.update = function () {
			particles = $.map(particles, function(p, i) {
				p.update();
				return p.dead ? null : p;
			});
			return this;
		};
		
		this.add = function (p) {
			if (! p instanceof Particle) {
				return this;
			}
			if (capacity > 0 && particles.length > capacity) {
				o.overflow(p);
			} else {
				particles.push(p);
			}
			return this;
		};
		
		this.get = function (index) {
			return typeof index === "number" && particles[index] ? 
				particles[index] : false;
		};
		
		this.size = function () {
			return particles.length;
		};
		
		this.flush = function () {
			particles = [];
			return this;
		};
		
		init();
	}

//------------------------------------------------------------------------------

	window.Particle = function (options) {
		return new Particle(options);
	};
	
	window.ParticleSystem = function (options) {
		return new ParticleSystem(options);
	};
	
}(this, this.jQuery, this.PVector));