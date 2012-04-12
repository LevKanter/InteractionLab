// This is javascript!!!

//console.log("hello class!");

//console.log();

var n = 10;


function customLog(message, nTimes) {

	if (typeof nTimes == "undefined") {
		nTimes = 5;
	}
	
	for (var i = 0; i < nTimes; i = i + 1) {
		console.log(message);
	}
	
}

customLog("passing a string");

