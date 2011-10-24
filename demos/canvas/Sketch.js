(function(window, $) {
	
	var debug = (window.console && window.console.log) ? window.console.log : $.noop;
	
	// remove "px" from a string representing a css pixel dimension
	// and cast as a Number (i.e. trimpx("10px") returns 10)
	function trimpx (s) {
		return Number(s.substring(0, s.length - 2));
	}
	
	function Sketch (options) {
		var S, o, loopTimer, cache;
	
		S = this;
		o = $.extend({
			
			// config
			selector: null,
			
			looping: true,
			frameRate: 1000/60,
			graphicsMode: "2d",
			
			// callbacks
			setup: $.noop,
			update: $.noop,
			draw: $.noop,
			
			mousePressed: $.noop,
			mouseReleased: $.noop,
			keyPressed: $.noop,
			windowResized: $.noop
			
		}, options);
		cache = {};
	
		function init () {
			var $c;
			
			if (o.selector instanceof $) {
				$c = o.selector;
			} else if (typeof o.selector === "string") {
				$c = $(o.selector);
			} else {
				debug("Missing required option: selector");
				return false;
			}
			
			// if the element we have is not actually a canvas,
			// we look for a canvas contained by the element
			if ($c.length && $c[0].nodeName.toLowerCase() !== "canvas") {
				$c = $("canvas", $c);
			}

			if (! $c.length) {
				debug("Missing required <canvas> element");
				return false;
				
			// if we've selected more than one canvas,
			// take the first one
			} else {
				$c = $c.first();
			}

			if (! $c[0].getContext instanceof Function) {
				debug("<canvas> drawing is not supported by this environment");
				return false;
			}
			
			S.ctx = $c[0].getContext(o.graphicsMode);
			if (! S.ctx) {
				debug("graphics context unavailable:");
				debug(o.graphicsMode);
				return false;
			}
			
			cache.padX = trimpx($c.css("border-left-width")) + trimpx($c.css("padding-left"));
			cache.padY = trimpx($c.css("border-top-width")) + trimpx($c.css("padding-top"));
			
			function setDimensions (w, h) {
				S.width = w;
				S.height = h;

				// make sure the canvas has width and height attributes
				// that correspond to its width and height as specified
				// by its css
				$c[0].width = S.width;
				$c[0].height = S.height;
			}
			
			setDimensions($c.width(), $c.height());
			
			// ui & events
			
			$(window).bind("resize", function () {
				var w, h;
				w = $c.width();
				h = $c.height();
				if (w !== S.width || h !== S.height) {
					setDimensions(w, h);
				}
				o.windowResized(S);
			});
			
			$(window.document).bind("keypress", function (e) {
				o.keyPressed(S, e.keyCode || e.which);
			});
		
			S.mouseX = 0,
			S.mouseY = 0,
			S.pmouseX = 0,
			S.pmouseY = 0,
			S.mousePressed = false;
		
			$c.bind("mousemove", function (e) {
				
				S.pmouseX = S.mouseX;
				S.pmouseY = S.mouseY;
				S.mouseX = e.pageX - (this.offsetLeft + cache.padX);
				S.mouseY = e.pageY - (this.offsetTop + cache.padY);

			}).bind("mousedown", function () {
			
				S.mousePressed = true;
				o.mousePressed(S);
			
			}).bind("mouseup", function () {
			
				S.mousePressed = false;
				o.mouseReleased(S);
			});
			
			// start & loop
			
			o.setup(S);
			S.setLooping(o.looping);
		}
	
		function loop () {
			o.update(S);
			o.draw(S);
			loopTimer = window.setTimeout(loop, o.frameRate);
		}
	
		S.setLooping = function (on) {
			if (on) {
				loop();
			} else if (loopTimer) {
				window.clearTimeout(loopTimer);
				loopTimer = null;
			}
			return S;
		};
		
		S.setCtxProps = function (props) {
			$.each(props, function (k, v) {
				S.ctx[k] = v;
			});
			return S;
		};
	
		init();
	}
	
	window.Sketch = function (options) {
		return new Sketch(options);
	};

}(this, this.jQuery));