<!doctype html>

<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head>
	<meta http-equiv="Content-Type" content="<?php bloginfo("html_type"); ?>; charset=<?php bloginfo("charset"); ?>"/>
	<title><?php bloginfo("name"); ?> <?php wp_title(); ?></title>
	<link rel="stylesheet" href="<?php bloginfo("stylesheet_url"); ?>" type="text/css"/>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	
	<div class="page">
		<div class="head">
			<h1><a href="<?php bloginfo("url"); ?>"><?php bloginfo("name"); ?></a></h1>
			<div class="controls clearfix">
				<ul class="nav">
					<li><a href=" ">Stuff</a></li>
					<li><a href=" ">Resources</a></li>
					<li><a href=" ">Course Info</a></li>
				</ul>
			</div>
		</div>
		<div class="body">
