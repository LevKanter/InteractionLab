<?php

add_theme_support("post-thumbnails");

function lab_js_init() {
	if (!is_admin()) {
		wp_deregister_script("jquery");
		wp_enqueue_script("jquery", "http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js",
			array(), NULL, true);
	}
}
add_action("init", "lab_js_init");

function lab_site_url($atts) {
	return get_bloginfo("url");
}
add_shortcode("base_url", "lab_site_url");

function remove_generator_tag() { 
	return "";
}
add_filter("the_generator", "remove_generator_tag", 1);

?>