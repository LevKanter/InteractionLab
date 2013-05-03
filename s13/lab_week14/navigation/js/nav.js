
var link_click_handler = function(event) {
    console.log('link clicked');
    console.log(event);

    event.preventDefault();

    var the_link = $(this);

    activate_section(the_link);
};

var activate_section = function(the_link) {
    the_link.addClass('active');

    var other_links = the_link.parent().siblings().find('a').removeClass('active');

    var href = the_link.attr('href');
    console.log(href);

    var corresponding_section = $(href);
    corresponding_section.show();

    var other_sections = corresponding_section.siblings();
    console.log(other_sections.length);
    other_sections.hide();
};


$(function() {

    var link_selector = 'nav a';
    var links = $(link_selector);

    links.on('click', link_click_handler);

    var first_link = links.eq(0);

    activate_section(first_link);
});