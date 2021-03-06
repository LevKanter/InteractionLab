<!doctype html>

<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head>
	<meta http-equiv="Content-Type" content="<?php bloginfo("html_type"); ?>; charset=<?php bloginfo("charset"); ?>"/>
	<title><?php bloginfo("name"); ?> <?php wp_title(); ?></title>
	<link rel="stylesheet" href="<?php bloginfo("stylesheet_url"); ?>" type="text/css"/>
	<link rel="shortcut icon" type="images/png" href="<?php bloginfo("template_url"); ?>/images/favicon.png"/>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	
	<div class="page">
		<div class="head">
			<h1>
				<a href="<?php bloginfo("url"); ?>"><?php bloginfo("name"); ?></a>
			</h1>
			<?php
				wp_page_menu(array(
					"menu_class" => "nav",
					"show_home" => "Stuff"
				));
			?>
		</div>
		<div class="body">
