<?php

add_theme_support("post-thumbnails");

define("LAB_JS_URL", get_bloginfo("template_url") ."/js");

function lab_js_init() {
	if (!is_admin()) {
		wp_deregister_script("jquery");
		wp_enqueue_script("jquery", "http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js",
			array(), NULL, true);
			
		wp_enqueue_script("lab", LAB_JS_URL ."/lab.js",
			array("jquery"), NULL, true);
	}
}
add_action("init", "lab_js_init");

function lab_base_url($atts) {
	return get_bloginfo("url");
}
add_shortcode("base_url", "lab_base_url");

function lab_template_url($atts) {
	return get_bloginfo("template_url");
}
add_shortcode("template_url", "lab_template_url");

function lab_post_url($atts) {
	extract(shortcode_atts(array(
		"id" => ""
	), $atts));
	
	if ($id) {
		return get_permalink($id);
	}
}
add_shortcode("post_url", "lab_post_url");

function remove_generator_tag() { 
	return "";
}
add_filter("the_generator", "remove_generator_tag", 1);

?>