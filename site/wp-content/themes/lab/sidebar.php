
	<div class="sidebar">
		<?php if (is_front_page()) { ?><!--
			<div class="roster">
				<h2>Students</h2>
				<ul class="toc">
					<?php 
						wp_list_bookmarks(array(
							"category_name" => "Students",
							"categorize" => 0,
							"title_li" => ""
						));
					?>
				</ul>
			</div>
		--><?php } ?>
	</div>