<?php
/*
 * Template Name: Resources
 */

get_header();
?>
	<div class="colx2">
		
		<div class="sidebar">
			<ul class="toc">
				<li><a href="#tools">Software Tools</a></li>
				<li><a href="#intro-tutorials">Introductory Tutorials</a></li>
				<li><a href="#references">References</a></li>
				<li><a href="#libs">Libraries &amp; Frameworks</a></li>
				<li><a href="#playgrounds">Code Playgrounds</a></li>
				<li><a href="#publications">Publications</a></li>
				<li><a href="#inspiration">Inspiration</a></li>
			</ul>
		</div>
		
		<div class="content">
			<section class="resources" id="tools">
				<h2>Software Tools</h2>
				<p class="note">The following applications and plug-ins are industrial strength and free. Note that there are many other <a href="http://en.wikipedia.org/wiki/File_Transfer_Protocol"><abbr title="File Transfer Protocal">FTP</abbr></a> clients, text editors, etc, besides the ones listed here, and they all basically achieve the same stuff. If you prefer something that is not on this list, feel free to stick to that. The only exception is <a href="#tools-firebug">Firebug</a>, which is <strong>required</strong> for this class.</p>
				<ul>
					<li id="tools-firefox">
						<a href="http://www.mozilla.com/en-US/firefox/new/"><img class="icon" src="<?php bloginfo("template_url"); ?>/images/tools/firefox.png" alt="Firefox logo"/></a>
						<div class="info">
							<h3><a href="http://www.mozilla.com/en-US/firefox/new/">Firefox</a></h3>
							<p>Firefox will be our primary browser in this class because of its <em>add-on</em>, <a href="#tools-firebug">Firebug</a>.</p>
						</div>
					</li>
					<li id="tools-firebug">
						<a href="http://getfirebug.com"><img class="icon" src="<?php bloginfo("template_url"); ?>/images/tools/firebug.png" alt="Firebug logo"/></a>
						<div class="info">
							<h3><a href="http://getfirebug.com">Firebug</a></h3>
							<p><em>Add-on</em> for <a href="#tools-firefox">Firefox</a> that enables you to analyze and manipulate elements on a web page, directly in the browser. We will be using Firebug extensively both to understand how existing pages are structured, and to aid us in developing our own sites.</p>
						</div>
					</li>
					<!--<li id="tools-webdev">
						<a href="https://addons.mozilla.org/en-US/firefox/addon/web-developer/"><img class="icon" src="<?php bloginfo("template_url"); ?>/images/tools/webdeveloper.png" alt="Web Developer logo"/></a>
						<div class="info">
							<h3><a href="https://addons.mozilla.org/en-US/firefox/addon/web-developer/">Web Developer</a></h3>
							<p></p>
						</div>
					</li>-->
					<li>
						<a href="http://cyberduck.ch/"><img class="icon" src="<?php bloginfo("template_url"); ?>/images/tools/cyberduck.png" alt="Cyberduck logo"/></a>
						<div class="info">
							<h3><a href="http://cyberduck.ch/">Cyberduck</a></h3>
							<p>An <a href="http://en.wikipedia.org/wiki/File_Transfer_Protocol"><abbr title="File Transfer Protocal">FTP</abbr></a> client. It enables you to upload files to, and download files from, a remote server.</p>
						</div>
					</li>
					<!--<li>
						<a href="http://www.smartftp.com/"><img class="icon" src="<?php bloginfo("template_url"); ?>/images/tools/smartftp.png" alt="SmartFTP logo"/></a>
						<div class="info">
							<h3><a href="http://www.smartftp.com/">SmartFTP</a></h3>
							<small class="note">Windows only</small>
						</div>
					</li>-->
					<li id="tools-textwrangler">
						<a href="http://www.barebones.com/products/textwrangler/"><img class="icon" src="<?php bloginfo("template_url"); ?>/images/tools/textwrangler.png" alt="TextWrangler logo"/></a>
						<div class="info">
							<h3><a href="http://www.barebones.com/products/textwrangler/">TextWrangler</a></h3>
							<small class="note">Mac only</small>
							<p>A text editor that is well suited for writing HTML, CSS, and Javascript files (among others).</p>
						</div>
					</li>
					<li>
						<a href="http://www.activestate.com/komodo-edit"><img class="icon" src="<?php bloginfo("template_url"); ?>/images/tools/komodo.png" alt="Komodo logo"/></a>
						<div class="info">
							<h3><a href="http://www.activestate.com/komodo-edit">Komodo Edit</a></h3>
							<p>Also a text editor, available on Windows, Mac, and Linux (whereas <a href="#tools-textwrangler">TextWrangler</a> is only for Mac).</p>
						</div>
					</li>
				</ul>
			</section>
		
			<section class="resources" id="intro-tutorials">
				<h2>Introductory Tutorials</h2>
				<ul>
					<li>
						<h3><a href="http://www.dontfeartheinternet.com/">Don&#39;t Fear the Internet</a></h3>
					</li>
					<li>
						<h3><a href="http://www.wpdfd.com/issues/70/css_from_the_ground_up/">CSS from the Ground Up</a></h3>
					</li>
					<li>
						<h3><a href="http://docs.jquery.com/Tutorials:How_jQuery_Works">How jQuery Works</a></h3>
					</li>
				</ul>
			</section>
		
			<section class="resources" id="references">
				<h2>References</h2>
				<ul>
					<li>
						<h3><a href="http://html5doctor.com/">HTML5 Doctor</a></h3>
					</li>
					<li>
						<h3><a href="http://reference.sitepoint.com/css">SitePoint CSS Reference</a></h3>
					</li>
					<li>
						<h3><a href="http://www.cssplay.co.uk/">CSSplay</a></h3>
					</li>
					<li>
						<h3><a href="http://api.jquery.com/visual/">Visual jQuery</a></h3>
					</li>
				</ul>
			</section>
			
			<section class="resources" id="libs">
				<h2>Libraries &amp; Frameworks</h2>
				<ul>
					<li>
						<h3><a href="http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/">Eric Meyer&#39;s CSS Reset</a></h3>
					</li>
					<li>
						<h3><a href="http://html5boilerplate.com/">HTML5 Boilerplate</a></h3>
					</li>
					<li>
						<h3><a href="http://flowplayer.org/tools/">jQuery Tools</a></h3>
					</li>
				</ul>
			</section>
		
			<section class="resources" id="playgrounds">
				<h2>Code Playgrounds</h2>
				<ul>
					<li>
						<h3><a href="http://html-ipsum.com/">HTML-Ipsum</a></h3>
					</li>
					<li>
						<h3><a href="http://netprotozo.com/grid/">netProtozo Grid Generator</a></h3>
					</li>
					<li>
						<h3><a href="http://builder.yaml.de/">YAML Builder</a></h3>
					</li>
					<li>
						<h3><a href="http://playground.html5rocks.com/">HTML5 Playground</a></h3>
					</li>
					<li>
						<h3><a href="http://jsfiddle.net/">jsFiddle</a></h3>
					</li>
				</ul>
			</section>
			
			<section class="resources" id="publications">
				<h2>Publications</h2>
				<ul>
					<li>
						<h3><a href="http://www.alistapart.com/">A List Apart</a></h3>
					</li>
					<li>
						<h3><a href="http://www.smashingmagazine.com/">Smashing Magazine</a></h3>
					</li>
				</ul>
			</section>
			
			<section class="resources" id="inspiration">
				<h2>Inspiration</h2>
				<ul>
					<li>
						<h3><a href="http://www.csszengarden.com/">CSS Zen Garden</a></h3>
					</li>
					<li>
						<h3><a href="http://lostworldsfairs.com/">Lost World&#39;s Fairs</a></h3>
					</li>
					<li>
						<h3><a href="http://www.chromeexperiments.com/">Chrome Experiments</a></h3>
					</li>
				</ul>
			</section>
		</div>
		
	</div>
	
<?php
get_footer();
?>