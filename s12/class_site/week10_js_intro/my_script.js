
	var saySomething = function(message, num) {
		
		//var i = 0;
		//console.log(i + 5); // 5
		
		for (var i = 0; i < num; i = i + 1) {
			console.log(message);
		}
		
		/*if (num > 1) {
			console.log(num);
		} else {
			console.log("this num is 1");
		}*/
	}
	
	saySomething("hey, Regina", 1);
	saySomething("now this is my message", 3);
	saySomething("and another message", 6);
	
	
	var add = function(a, b) {
		return a + b;
		console.log("you will never see this");
	};
	
	var x = add(10, 12);
	
	console.log(x);
	
	var obj = {
		x: 10,
		y: 15,
		message: "this is a string",
		logSomething: function(message) {
			console.log(message);
		}
	};
	
	obj.x = "hijacked the x property of obj";
	console.log( obj.x );
	
	obj.logSomething("hey Regina!!!!!!");
	



	/*function jQuery(someParamater) {
		var jqueryobj = {
			show: function() {
			
			},
			hide: function() {
			
			},
			length: 22
		};
		return jqueryobj;
	}*/


	








	//function() {
	//	console.log("this function has no name");
	//}






















// In this javascript file,
// we will define behaviors
// and associate them with
// elements in our HTML document

// console is an object that the browser makes available
// to the javascript environment. It has a function named "log"
// that we can call to print things to the Console
// Show the Console in Chrome by going to View > Develper > Developer Tools

console.log("start of the script!");



function repeatLog(message, nTimes) {
	if (typeof nTimes == "undefined") {
		nTimes = 5;
	}
	
	for (var i = 0; i < nTimes; i = i + 1) {
		console.log(message);
	}
}

repeatLog("Hello!");




function whenButtonClicked() {
	console.log("button clicked!");
	
	var box = jQuery(".box");
	console.log(box);
	
	if (box.length > 0) {
		
		if (box.hasClass("activated")) {
			box.removeClass("activated");
		} else {
			box.addClass("activated");
		}

		// we could actually just do that with the toggleClass function
		// box.toggleClass("activated");
	}
	
}

function whenDocReady() {
	console.log("document is ready!");
	
	var button = jQuery(".button");
	
	console.log("the button object's length is:");
	console.log(button.length);
	
	button.hide();
	
	
	console.log(button);

	if (button.length > 0) {
		console.log(button.length);
	} else {
		console.log("didn't find nuthin");
	}
	
	button.on("click", whenButtonClicked);
}

// document is also an object that the browser makes available
// jQuery allows us to get a special representation of the document,
// and then wait until the document is "ready" to be manipulated
// We do this by first calling the jQuery function and passing it the document...
var doc = jQuery(document);

// ...and then specifying a function that should be executed when
// the document is "ready"
doc.on("ready", whenDocReady);



console.log("end of the script");