		</div>
		
		<div class="foot">
	
		</div>
	</div>

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
				
				if ($s.length) {
					threshold = $s.offset().top;
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
	