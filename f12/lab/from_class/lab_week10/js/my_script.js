// In this javascript file,
// we will define behaviors
// and associate them with
// elements in our HTML document

// console is an object that the browser makes available
// to the javascript environment. It has a function named "log"
// that we can call to print things to the Console
// Show the Console in Chrome by going to View > Develper > Developer Tools

console.log("start of the script!");


// defining our own function...

var repeatLog = function(message, nTimes) {
	for (var i = 0; i < nTimes; i = i + 1) {
		console.log(message);
	}
};

// ... and then calling it
repeatLog("Hello!", 5);



function whenButtonClicked() {
	console.log("button clicked!");
	
	var box = jQuery(".box");
	
	box.addClass('activated');
}

function whenDocReady() {
	console.log("document is ready!");
	
	var button = jQuery(".button");
	
	button.on("click", whenButtonClicked);
}

// document is another object that the browser makes available
// jQuery allows us to get a special representation of the document,
// and then wait until the document is "ready" to be manipulated
// We do this by first calling the jQuery function and passing it the document...
var doc = jQuery(document);

// ...and then specifying a function that should be executed when
// the document is "ready"
doc.on("ready", whenDocReady);



console.log("end of the script");