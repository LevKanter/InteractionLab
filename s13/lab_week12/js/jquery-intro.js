 
// In order to start manipulating elements in our HTML document
// with Javascript, we must make sure they are initialized.
// We can do this using jQuery, by calling jQuery (which is a function)
// and passing it in our own function. Our function will then
// be automatically executed when the HTML document is ready
// to be manipulated. Notice that we can declare our function on
// the fly since we don't need to refer back to it later, rather
// than setting it to a named variable (i.e. var my_func = function() {...})

jQuery(function() {

    // Get a jQuery object representing all the <h1> elements in the document
    var h1_elements = jQuery("h1");

    // Removing and adding a class to the matched elements

    //h1_elements.removeClass("crazy");
    h1_elements.addClass("cool");

    // Get a jQuery object representing all the <p> elements in the document
    var p_elements = jQuery("p");
    p_elements.addClass("uncool");

    // jQuery objects' slideDown function
    p_elements.slideDown();

    console.log("We found: " + p_elements.length + " elements");

    if (p_elements.length > 0) {
        console.log("Found some paragraphs");
    } else {
        console.log("Nothing found");
    }
    
});