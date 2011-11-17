<?php

	// we can sleep() to simulate some server latency:
	//sleep(2);

	if (isset($_REQUEST["action"])) {
		
		switch ($_REQUEST["action"]) {
			case "greet":
				if (isset($_REQUEST["name"])) {
					exit("Greetings, " . $_REQUEST["name"]);
				}
			case "smile":
				if (isset($_REQUEST["number"])) {
					for ($i = 0, $n = intval($_REQUEST["number"]); $i < $n; $i += 1) {
						echo ":-)";
					}
					exit();
				}
		}
		
	}
	
	exit("I don't know what you want&hellip;");
	
?>