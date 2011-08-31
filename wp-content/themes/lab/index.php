<?php
get_header();
?>
	
	<div class="colx2">
		
		<?php get_sidebar(); ?>
		
		<div class="content">
			<?php if (have_posts()) : ?>
				<?php while (have_posts()) : the_post(); ?>
					<section class="prime">
						<h2>
							<?php if (!is_single()) : ?><a href="<?php the_permalink(); ?>"><?php endif; ?>
							<?php the_title(); ?>
							<?php if (!is_single()) : ?></a><?php endif; ?>
						</h2>
						<?php the_content(); ?>
					</section>
				<?php endwhile; ?>
				<?php
					if (is_single()) {
						comments_template();
					}
				?>
			<?php endif; ?>
		</div>
	</div>

<?php
get_footer();
?>