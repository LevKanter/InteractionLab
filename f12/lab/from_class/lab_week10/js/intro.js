// console is an object that the browser makes available
// to the javascript environment. It has a function named "log"
// that we can call to print things to the Console
// Show the Console in Chrome by going to View > Develper > Developer Tools
	

var hello = function(message) {
	console.log('Hello! ' + message);
};
	
hello('How are you?');
hello('Wassup.');
	
for (var i = 0; i < 50; i = i + 1) {
	hello('hey');
}
	
var num = 10;
var text = 'some text';
var result = number + text;

console.log(result);
console.log(typeof result);
	
var add = function(a, b) {
	var n = a + b;
	return n;
};

var x = add(5, 2);
console.log(x);
