		</div>
		
		<div class="foot">
	
		</div>
	</div>

	<div class="cloud close"></div>
	<div class="cloud near"></div>
	<div class="cloud far"></div>
	<div class="ground"></div>
	
	<?php wp_footer(); ?>

	<script type="text/javascript">
		(function(window, $) {
			var $win;
	
			function updatePos($c, threshold) {
				if ($win.scrollTop() > threshold) {
					$c.css({ position: "fixed", top: 0 });
				} else {
					$c.css({ position: "", top: "" });
				}
			}
	
			$(function() {
				var $s, threshold;
		
				$win = $(window);
				$s = $(".body .sidebar");
				threshold = $s.offset().top;
		
				if ($s.length) {
					updatePos($s, threshold);
					$win.scroll(function() {
						updatePos($s, threshold);
					});
				}
			});
	
		}(this, this.jQuery));
	</script>

	</body>
</html>
	