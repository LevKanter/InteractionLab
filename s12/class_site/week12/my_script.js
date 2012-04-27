function move(isNext) {
	var activeSlide = $(".slideshow .active");
	var destinationSlide;
	
	if (isNext) {
		destinationSlide = activeSlide.next();
	} else {
		destinationSlide = activeSlide.prev();
	}
	
	var targetSlide;
	
	if (destinationSlide.length > 0) {
		
		targetSlide = destinationSlide;
		
	} else {
		
		if (isNext) {
			
			var firstSlide = $(".content section").first();
			targetSlide = firstSlide;
			
		} else {
			
			var lastSlide = $(".content section").last();
			targetSlide = lastSlide;
		}
	}
		
	activeSlide.removeClass("active").fadeOut();
	//activeSlide.fadeOut();
	
	targetSlide.addClass("active").fadeIn();
}
	
function nextButtonClicked() {
	console.log("click!!");
	move(true);
	
	var next = $(this);
	
	var top = next.css("top");
	top = top.substring(0, top.length - 2)*1.0;
	
	console.log(top);
	
	next.animate({
		top: top + 20
	});
	
}

function prevButtonClicked() {
	console.log("click!!");
	move(false);
}


function setupSlideshow() {
	
	var nextBtn = $(".next");
	
	console.log("We found this many next buttons: ");
	console.log( nextBtn.length );
	
	nextBtn.on("click", nextButtonClicked);
			
	var prevBtn = $(".prev");
	prevBtn.on("click", prevButtonClicked);
	
}

// document "ready" event handler:
// We use this to kickoff all our main code
$(document).ready(function() {
	console.log("The document is ready!!");
	setupSlideshow();
});