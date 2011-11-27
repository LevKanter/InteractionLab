<?php
	
	// Only allow access to this script via an XmlHttpRequest (ajax)
	if (strtolower($_SERVER["HTTP_X_REQUESTED_WITH"]) != "xmlhttprequest") {
		exit("Don't access this page directly");
	}
	
	// don't worry too much about the session stuff,
	// but basically we just call this so that we can access stuff
	// inside the $_SESSION global object, which we populated in authenticate.php
	session_start();
	
	// sleep(n) for n seconds to simulate some server latency:
	sleep(2);
	
	if (!$_SESSION["loggedIn"]) {
		exit("THIS IS TOP SECRET!");
	}
	
?>

<img src="images/top_secret.gif">
<h1>Welcome, <?php echo $_SESSION["name"]; ?></h1>
<div class="body">
	<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
</div>