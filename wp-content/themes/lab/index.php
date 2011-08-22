<?php
get_header();
?>

	<div class="sidebar">
		
	</div>
	
	<div class="content">
		<?php if (have_posts()) : ?>
			<?php while (have_posts()) : the_post(); ?>
				<section>
					<?php the_content(); ?>
				</section>
			<?php endwhile; ?>
		<?php endif; ?>
	</div>

<?php

endwhile;

get_footer();
?>