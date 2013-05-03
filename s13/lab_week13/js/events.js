/*$(document).ready(function() {

});*/

var my_ready_function = function() {
    console.log('Document is ready');

    var sections = $('div.content > div');
    var n_sections = sections.length;

    console.log(n_sections);

    if (n_sections < 1) {
        console.log("Hey you didn't find anything");
    } else {
        console.log("Found stuff");
    }

    var my_button = $('.trigger-button');

    var button_click_handler = function() {
        console.log('button clicked');
        console.log('---');
        sections.slideToggle(300);
    };

    my_button.on('click', button_click_handler);
};



jQuery(my_ready_function);

console.log('This will show up in the console first');