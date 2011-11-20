<?php

	sleep(3);

	if (isset($_POST["username"]) && isset($_POST["password"])) {
		
		if ($_POST["username"] == "lev") {
			if ($_POST["password"] == "password") {
				exit("true");
			}
		}
	}
	
	exit("false");
	
?>