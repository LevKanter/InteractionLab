<?php

	// we can sleep to simulate some server latency:
	sleep(2);

	if (isset($_REQUEST["action"])) {
		
		switch ($_REQUEST["action"]) {
			case "greet":
				if (isset($_REQUEST["name"])) {
					echo "Greetings, " . $_REQUEST["name"];
				}
		}
		
	} else {
		echo "I don't know what you want&hellip;";
	}
	
?>