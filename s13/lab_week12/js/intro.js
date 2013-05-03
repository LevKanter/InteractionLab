
// This is Javascript

//-----------------------------
// different types of variables
//-----------------------------

// Number
var x = 10;

// String
var s = "Hello";

// Boolean
var b = false;

// Function
var my_function = function(a, b) {
    return a + b;
};

var my_a = 6;
var my_b = 7;

var result = my_function(my_a, my_b);
// result == 13

result = my_function(4, 5);
// result == 9

result = my_function(6, 'hello');
// result == "6hello"

// built-in typeof function
typeof(result);
// == string

// Object
var o = {
    x: 10,
    y: 5,
    some_message: "hey there",
    nested_object: {
        f: function() {

        }
    }
};

o.x;
// == 10
o.y;
// == 5
o.some_message;
// == "hey there"

o.some_message = "goodbye";
o.some_message;
// == "goodbye"

o.nested_object.f();

// The console object
// (built-in to the browser)
// View > Developer > Javascript console
console.log("Hello");

console.log(o.some_message);

var say_something = function(something) {
    console.log(something);
    console.log(something);
    console.log(something);
};

say_something('sup');
