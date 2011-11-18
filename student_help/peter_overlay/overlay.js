$(document).ready(function(){
	var button, slideshow, slides, images, close, speed, autoSpeed, timer, left, right, looop;
	
	slideshow = $('.slideshow');
	button = $('.button img');
	slides = $('.slideshow .slide');
	images = $('.slide img');
	close = $('.close img');
	left = $('#left img');
	right = $('#right img');
	looop = $('#loop img');
	speed = 700;
	autoSpeed = 2000;
	
	function next() {
		var active = slides.filter(".active");
		var target = active.next();
		if (target.length == 0) {
			target = slides.first();
		}
		active.removeClass().addClass("slide");
		target.removeClass().addClass("active slide bounceInRight");
	}
	
	function prev() {
		var active = slides.filter(".active");
		var target = active.prev();
		if (target.length == 0) {
			target = slides.last();
		}
		active.removeClass().addClass("slide");
		target.removeClass().addClass("active slide bounceInLeft");
	}
	
	function loop() {
		timer = setTimeout(function() {
			next();
			loop();
		}, autoSpeed);
	}
	
	function defaultState() {
			slideshow.removeClass('active').removeClass('fadeIn');
			$('body').css('background-color', 'white');
			slides.removeClass('active');
			slides.first().addClass('active');
			right.show().removeClass('hinge');
			left.show().removeClass('hingeRight');
			clearTimeout(timer);
			autoSpeed = 2000;
			looop.css('cursor','pointer');
			looop.bind({
				'click':function() {
							loop();
							console.log('clicked');
							$(this).attr('src','images/loop.png');
							$(this).unbind('mouseleave').unbind('click').css('cursor','default');
							right.addClass('hinge');
							left.addClass('hingeRight');
						},
				'mouseenter':function() {
								$(this).attr('src','images/loop.png');
							},
				'mouseleave':function() {
								$(this).attr('src','images/loop_before.png');
							}
			});
	}
		
	button.bind({
		'click':function() {
					slideshow.addClass('active').addClass('fadeIn');/*.addClass('bounceInDown');*/
					$('body').css('background-color','#BDBDBD');
					looop.attr('src','images/loop_before.png');
				},
		'mouseenter':function() {
					$(this).attr('src','images/1_thumb.jpg');
				},
		'mouseleave':function() {
					$(this).attr('src','images/1_thumb_before.jpg');
				}
	});
	
	close.bind({
		'click':function() {
					defaultState();
				},
		'mouseenter':function() {
						$(this).attr('src','images/close3.png');
					},
		'mouseleave':function() {
						$(this).attr('src','images/close3_before.png');
					}
	});
	
	/*
	images.click(function(){
		next();
	});
	*/
	
	right.bind({
		'click':function() {next();},
		'mouseenter':function() {
						$(this).attr('src','images/right_arrow.png');
					},
		'mouseleave':function() {
						$(this).attr('src','images/right_arrow_before.png');
					}		
	});
	
	left.bind({
		'click':function() {prev();},
		'mouseenter':function() {
						$(this).attr('src','images/left_arrow.png');
					},
		'mouseleave':function() {
						$(this).attr('src','images/left_arrow_before.png');
					}		
	});
	
	looop.bind({
		'click':function() {
					loop();
					console.log('clicked');
					$(this).attr('src','images/loop.png');
					$(this).unbind('mouseleave').unbind('click').css('cursor','default');
					right.addClass('hinge');
					left.addClass('hingeRight');
				},
		'mouseenter':function() {
						$(this).attr('src','images/loop.png');
					},
		'mouseleave':function() {
						$(this).attr('src','images/loop_before.png');
					}
	});
	
	$('html').bind("keydown", function(event) {
		/*Left Key Pressed*/
		if (event.which == 37) {
			prev();
		};
		
		/*Right Key Pressed*/
		if (event.which == 39) {
			next();
		};
		
		/*ESC Key Pressed*/
		if(event.which == 27) {
			defaultState();
		};
	});
	
});
	