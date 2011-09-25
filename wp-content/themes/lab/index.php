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
				<div class="pagination">
					<?php if(is_single()) { ?>
						<span class="prev"><?php next_post_link( '%link', '<span class="arr">&larr;</span> %title'); ?></span>
						<span class="next"><?php previous_post_link( '%link', '%title <span class="arr">&rarr;</span>'); ?></span>
					<?php } else { ?>
						<span class="prev"><?php previous_posts_link('<span class="arr">&larr;</span>  Newer Posts'); ?></span>
						<span class="next"><?php next_posts_link('Older Posts <span class="arr">&rarr;</span>'); ?></span>
					<?php } ?>
				</div>
			<?php endif; ?>
		</div>
	</div>

<?php
get_footer();
?>