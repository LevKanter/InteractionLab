var page_link_click_handler = function(event) {
    event.preventDefault();

    var the_link = $(this);
    activate_page_from_link(the_link);
};

var activate_page_from_link = function(target_link) {
    var target_page_selector = target_link.attr('href');
    var target_page = $(target_page_selector);

    if (target_page.length == 1) {
        target_link.addClass('active');
        var other_links = target_link.parent().siblings().find('a');
        other_links.removeClass('active');

        target_page.addClass('active');
        var other_pages = target_page.siblings();
        other_pages.removeClass('active');
    }
};

$(function() {

    var page_links = $('.page-nav a');
    page_links.on('click', page_link_click_handler);

    var first_page_link = page_links.first();
    activate_page_from_link(first_page_link);
});