// defining our own function (which we can execute anytime we want after its defined)
// this function takes a jQuery "object" as a "parameter" --> which we're referring to as element
// (but element could be called anything we want) 
function reveal(element) {
	
	// fadeIn is a jQuery function ( http://api.jquery.com/fadeIn/ )
	// we can call it on a jQuery "object" to fade in the HTML element(s) associated with it
	
	element.fadeIn();
}

function toggle(element) {
	element.toggle(); // ( http://api.jquery.com/toggle/ )
} 


jQuery(document).ready(function() {
	// everything in here (our "ready" function) only gets executed once all the elements on the HTML page
	// are "ready"
	
	// print a message to the Firebug console (make sure it's enabled!)
	console.log("The elements are ready!!!");
	
	// $ can be used as a shortcut to the "jQuery" function, 
	// so jQuery("#box") is essentially equivalent to $("#box")
	
	var div = $("#box"); // store a jQuery object representing our <div id="box"> in variable named "div"
	var btn = $("a.button"); // store a jQuery object representing our <a class="button"> in a variable named "btn"
	
	// associate a user "click" EVENT with btn
	btn.bind("click", function(event) {
		
		// everything in here (our EVENT HANDLER) only gets executed whenever btn is clicked
		
		// since we know the btn represents an <a> element,
		// we can cancel the default behavior that occurs when clicking on a link
		// by calling the function preventDefault on the "object" that was passed as a "parameter" to our EVENT HANDLER function
		
		//event.preventDefault(); // ( http://api.jquery.com/event.preventDefault/ )
		
		// call our function, passing it our div as the "element" parameter
		
		//reveal(div);
		
		toggle(div);
		
	});
	
});