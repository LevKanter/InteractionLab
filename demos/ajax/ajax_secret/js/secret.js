/* 
// ===============
// = AJAX BASICS =
// ===============
I recommend enabling your Firebug console 
(and make sure the option "Show XMLHttpRequests" is checked on).

Ajax refers to a way, using Javascript, to communicate with a server,
without reloading the page.
The general idea is that you generate a "request" and send it off
to the server at a given URL. The server, in turn, processes the request 
and returns a "response" back, which you can than in turn process and do stuff with.
While you don't need to use jQuery to do any of this, jQuery provides some functions 
to make ajax a little easier.

We have already seen how functions can be passed to jQuery .ready() .bind(),
to be invoked later once certain events occur (functions like these are
often referred to as "callbacks").
With ajax, we'll want to define callbacks that handle server responses.

but first...
QUICK CRASH COURSE: JAVASCRIPT OBJECTS 101

In Javascript, objects are maps of unique keys to values.
A new object can be declared with {curly brackets}

var myObject = {};
myObject.someKey = "value"; // adds the key someKey to myObject, and assigns it to "value"

Alternatively, the key-value pairs can be included when initially declaring the object:

var myObject = {
	someKey: "value", //(multiple key-value pairs are seperated by commas)
	anotherKey: 10
};
console.log(myObject.anotherKey); // prints 10 to the console

IMPORTANT:
Object keys can be changed, added, and removed:

myObject.anotherKey = myObject.anotherKey + 5;
console.log(myObject.anotherKey); // prints 15 to the console

myObject.aNewKey = "something new";

delete myObject.someKey;
console.log(myObject.someKey); // prints undefined to the console

The values that an object's key maps to can be any Javascript value:
strings, numbers, booleans, arrays, objects, functions

myObject.fn = function() {
	console.log("I'm a function attached to myObject");
};

In Javascript, a function is a value just like any other a value.
It can be assigned to a variable, passed as an argument to another function, and
stored in an object.

console.log(typeof myObject.fn); // prints "function" to the console
                                 // typeof is a built-in operator in Javascript

var myFn = myObject.fn; // notice there are no (parenthesis) after myObject.fn

A function is invoked by writing opening and closing parenthesis after its name:
myFn(); // prints "I'm a function attached to myObject" to the console

 NOTE: objects can also be created with "constructor" functions, 
inherit stuff from other objects, and more --> but this is a topic for another day...
*/

// We'll use a single object to group all of our components:
var app = {};

// For organization and convenience sake, 
// let's store the URLs for our ajax requests in an object:
app.urls = {
	auth: "server/authenticate.php",
	logout: "server/logout.php",
	secretPage: "server/page.php"
};

// app.loginPanel() takes two arguments:
// container -- a jQuery object representing the element that contains the login panel
// callback -- a function, to be executed upon successful login
app.loginPanel = function(container, callback) {
	var panel, spinner, fields, effects;

	panel = container.find(".panel");
	
	// we will display a "spinner" while our login ajax request is pending: 
	spinner = $("<div class='spinner'><img src='images/spinner.gif'></div>");
	spinner.hide().appendTo(panel);
	
	fields = {
		username: panel.find("#username"),
		password: panel.find("#password")
	};
	
	// (Animate.css class names)
	effects = {
		error: "wobble"
	};

	function authenticate() {
		var username, password, ajaxParams, ajaxCallback;
		
		// What are the username and password values?
		// To be safe, we use $.trim to cut away 
		// any leading or trailing whitespace:
		username = $.trim(fields.username.val());
		password = $.trim(fields.password.val());
		
		// Perhaps it would be good to validate the data,
		// before sending it off to the server...
		//if (username.length == 0 || password.length == 0) {
		//		return;
		//}
		
		// we will pass $.ajax() a single object
		// with its keys specifying a bunch of paramaters:
		// (we could, of course, declare this object on the fly --
		// doing it this way for now to highlight what's going on) 
		ajaxParams = {
			url: app.urls.auth,
			type: "POST",
			dataType: "text"
		};
		
		// the data object contains the data we will send to the server
		// as part of our request:
		ajaxParams.data = {
			username: username,
			password: password
		};
		
		// our ajaxCallback function will be invoked 
		// only once the ajax request successfully 
		// receives a response from the server
		// when jQuery invokes this function, it will pass
		// it three arguments:
		// the data returned by the server,
		// formatted according to the dataType (specified in the ajaxParams)
		// a status string, generally will say "success" for a successful request
		// the request object that jQuery uses under the hood
		// to actually generate the HTTP request
		ajaxCallback = function(data, textStatus, jqXHR) {
			
			console.info("RESPONSE RECEIVED!!!");
			console.log(data);
			console.log(textStatus);
			console.log(jqXHR);
			
			spinner.hide();
			
			if (data == "true") {
				// we've successfully authenticated:
				container.remove();
				callback();
			} else {
				// incorrect username or password: :(
				panel.addClass(effects.error);
			}
		};
		
		ajaxParams.success = ajaxCallback;
		
		// kickoff the ajax request
		$.ajax(ajaxParams);
		
		// now we can continue to do stuff,
		// remember, our ajaxCallback may not have
		// actually been executed yet...
		
		spinner.show();
		panel.removeClass(effects.error);
	}
	
	// Let's just attach some event handlers:

	panel.find("#btn-login").bind("click", function(event) {
		event.preventDefault();
		authenticate();
	});
	
	// catch the keypress event that from both inputs
	// (because it will "bubble up" to the panel):
	panel.bind("keypress", function(event) {
		if (event.which == 13) {
			// ENTER pressed:
			authenticate();
		}
	});
};

$(document).ready(function() {
	app.loginPanel($("#login"), function() {
		
		$.ajax({
			url: app.urls.secretPage,
			type: "GET",
			dataType: "html",
			success: function(data, textStatus, jqXHR) {
				
				console.info("RESPONSE RECEIVED!!!");
				console.log(data);
				console.log(textStatus);
				console.log(jqXHR);
				
				$(data).hide().appendTo($("#secretPage")).fadeIn(3000);
			}
		});
		
		$("<a id='btn-logout' class='btn'>Logout</a>").click(function(event) {
			event.preventDefault();
			$.ajax({
				url: app.urls.logout,
				type: "POST",
				dataType: "text",
				success: function(data, textStatus, jqXHR) {
					if (data == "true") {
						window.location.reload();
					}
				}
			});
		}).appendTo("body");
		
		document.title = "TOP SECRET";
	});
});