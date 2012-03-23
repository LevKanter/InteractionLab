(function(window, $) {

	var DEBUG = true;
	
	var debug = (DEBUG && window.console && $.isFunction(window.console.log)) ? window.console.log : $.noop;
	var error = (DEBUG && window.console && $.isFunction(window.console.error)) ? window.console.error : $.noop;
	
	// requestAnim shim layer by Paul Irish
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	var requestAnimFrame = (function() {
		return  window.requestAnimationFrame       || 
		        window.webkitRequestAnimationFrame || 
		        window.mozRequestAnimationFrame    || 
		        window.oRequestAnimationFrame      || 
		        window.msRequestAnimationFrame     || 
		        function(/* function */ callback, /* DOMElement */ element) {
		        	window.setTimeout(callback, 1000 / 60);
		        };
	}());
	
	// remove "px" from a string representing a css pixel dimension
	// and cast as a Number (i.e. trimpx("10px") returns 10)
	function trimpx(s) {
		return Number(s.substring(0, s.length - 2));
	}
	
	function Sketch(options) {
		
		var S, o, $c, looping, cache, guid;
	
		S = this;
		o = $.extend({
			
			// config
			element: null, // required (selector or $ or DOM element)		
			graphicsMode: "2d",
			
			// callbacks
			setup: $.noop,
			update: $.noop,
			draw: $.noop,
			destroy: $.noop,
			
			mousePressed: $.noop,
			mouseReleased: $.noop,
			keyDown: $.noop,
			resized: $.noop,
			
			canvasUnsuported: $.noop
			
		}, options);
		cache = {};
		guid = "sketch_" + new Date().getTime();
	
		function init() {
			
			if (o.element instanceof $) {
				$c = o.element;
			} else if (typeof o.element === "string") {
				$c = $(o.element);
			} else if (HTMLElement && o.element instanceof HTMLElement) {
				$c = $(o.element);
			} else {
				debug("Missing or invalid required option: element");
				debug(o.element);
				return false;
			}
			
			// if the element we have is not actually a canvas,
			// we look for a canvas contained by the element
			if ($c.length && $c[0].nodeName.toLowerCase() !== "canvas") {
				$c = $c.find("canvas");
			}

			if (! $c.length) {
				debug("No <canvas> element");
				return false;
				
			// if we've selected more than one canvas,
			// take the first one and ignore the rest
			} else {
				$c = $c.first();
			}

			if (! $.isFunction($c[0].getContext)) {
				debug("<canvas> drawing is not supported by this environment");
				return o.canvasUnsuported.apply(S);
			}
			
			S.context = $c[0].getContext(o.graphicsMode);
			if (! S.context) {
				debug("%s graphics context unavailable", o.graphicsMode);
				return false;
			}
			
			cacheLayout();
			setDimensions($c.width(), $c.height());
			$c.attr("data-id", guid);
			
			// ui & events
			
			$(window).bind("resize."+guid, function () {
				var w, h;
				w = $c.width();
				h = $c.height();
				if (w !== S.width || h !== S.height) {
					setDimensions(w, h);
					o.resized.apply(S, [w, h]);
				}
			});
			
			$(window.document).bind("keydown."+guid, function (e) {
				o.keyDown.apply(S, [e.which]);
			});
		
			S.mouseX = 0;
			S.mouseY = 0;
			S.pmouseX = 0;
			S.pmouseY = 0;
			S.mousePressed = false;
		
			$c.bind("mousemove."+guid, function (e) {
				
				S.pmouseX = S.mouseX;
				S.pmouseY = S.mouseY;
				S.mouseX = e.pageX - (this.offsetLeft + cache.padX);
				S.mouseY = e.pageY - (this.offsetTop + cache.padY);

			}).bind("mousedown."+guid, function () {
			
				S.mousePressed = true;
				o.mousePressed.apply(S);
			
			}).bind("mouseup."+guid, function () {
			
				S.mousePressed = false;
				o.mouseReleased.apply(S);
			});
			
			// start & loop
			
			if (o.setup.apply(S) !== false) {
				S.setLooping(true);
			}
		}
		
		function cacheLayout() {
			cache.padX = trimpx($c.css("border-left-width")) + trimpx($c.css("padding-left"));
			cache.padY = trimpx($c.css("border-top-width")) + trimpx($c.css("padding-top"));
		}
		
		function setDimensions(w, h) {
			S.width = w;
			S.height = h;

			// make sure the canvas has width and height attributes
			// that correspond to its width and height as specified
			// by its css
			$c[0].width = S.width;
			$c[0].height = S.height;
		}
	
		function loop() {
			if (looping) {
				if (o.update.apply(S) === false) {
					S.setLooping(false);
				} else {
					o.draw.apply(S);
					requestAnimFrame(loop);
				}
			}
		}
		
		// start or stop the update-draw loop
		S.setLooping = function(on) {
			if (on === true) {
				if (!looping) {
					looping = true;
					loop();
				}
			} else if (on === false) {
				looping = false;
			}
			return S;
		};
		
		S.destroy = function() {
			$c.unbind("mousemove."+guid).unbind("mousedown."+guid).unbind("mouseup."+guid);
			$c.removeAttr("data-id");
			$(window).unbind("resize."+guid);
			$(window.document).unbind("keydown."+guid);
			S.setLooping(false);
			o.destroy.apply(S);
		};
	
		if (init() === false) {
			error("Sketch initialization fail");
		}
	}
	
	window.Sketch = function(options) {
		return new Sketch(options);
	};

}(this, this.jQuery));