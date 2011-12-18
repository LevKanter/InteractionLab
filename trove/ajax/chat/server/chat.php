<?php
	
	define("DB_HOST", "127.0.0.1:8889");
	define("DB_USER", "root");
	define("DB_PASS", "root");
	
	$con = mysql_connect(DB_HOST, DB_USER, DB_PASS);
	if (!$con) {
		die(mysql_error());
	}
	
	mysql_select_db("lab", $con);
	
	$sql = "CREATE TABLE messages
	(
		message_id INT(11) NOT NULL AUTO_INCREMENT,
		PRIMARY KEY(message_id)
	)";
	mysql_query($sql, $con);
		
?>