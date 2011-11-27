<?php
	
	// When the client sends a request to this script, 
	// the $_REQUEST global object will contain any data
	// that was sent with the request. In this case,
	// we will look at the username and password that was sent.
	// If they are invalid, we will output a response of "false",
	// otherwise, we will start a user session and output "true"

	// Only allow access to this script via an XmlHttpRequest (ajax)
	if (strtolower($_SERVER["HTTP_X_REQUESTED_WITH"]) != "xmlhttprequest") {
		exit("Don't access this page directly");
	}
	 
	// sleep(n) for n seconds to simulate some server latency:
	sleep(2);
	
	$verified = false;
	
	// Let's check the username and password (this is, of course,
	// a very contrived example -- in real life, we would probably
	// want to be connecting to a database and creating a 
	// more sophisticated session for the user...):
	
	if (isset($_REQUEST["username"]) && isset($_REQUEST["password"])) {
		
		// In PHP, an "associate array" is similar to a Javascript objects,
		// in that it holds key-value mappings.
		// Here we declare an associate array that maps usernames to other
		// associative arrays that contain info for that particular user:
		$usermap = array(
			"lev" => array(
				"name" => "Lev Kanter",
				"password" => "password"
			),
			"peter" => array(
				"name" => "Peter Kim",
				"password" => "password"
			)
		);
		
		if ($usermap[$_REQUEST["username"]]) {
			$verified = ($usermap[$_REQUEST["username"]]["password"] == $_REQUEST["password"]);
		}
		
	}
	
	if ($verified) {
		// don't worry too much about the session stuff,
		// but basically we we can initialize a "session"
		// and populate the $_SESSION global object,
		// which we will access in page.php
		session_start();
		$_SESSION["loggedIn"] = true;
		$_SESSION["name"] = $usermap[$_REQUEST["username"]]["name"];
		exit("true");
	}
	
	exit("false");
?>