<?php

if (!empty($_SERVER["SCRIPT_FILENAME"]) && "comments.php" == basename($_SERVER["SCRIPT_FILENAME"])) {
	die("Peace out, yo!");
}
if (post_password_required()) {
	return;
}
?>

<?php if ($comments) { ?>

	<section id="comments" class="comment-stack">
		<h2><?php comments_number('No Comments','One Comment','% Comments'); ?></h2>
		<ol>
			<?php foreach($comments as $comment) { ?>
				<?php if (get_comment_type() == "comment") { ?>
					<li id="comment-<?php comment_ID(); ?>">
						<cite class="meta">
							<span><?php comment_author_link(); ?></span> &ndash; 
							<span><?php comment_date() ?> at <?php comment_time('g:ia') ?></span>
						</cite>
						<blockquote><?php comment_text(); ?></blockquote>
					</li>
				<?php } ?>
			<?php } ?>
		</ol>
	</section>
	
<?php } else { // When there are no comments: ?>
	
	<?php if ('open' == $post->comment_status) { // When comments are open (but there are none) ?>
			
	<?php } else { // When comments are closed: ?>
		    	
	<?php } ?>
<?php } ?>
    	
<?php if ('open' == $post->comment_status) { ?>

	<section id="respond" class="comment-form">
		<h2>Add a comment</h2>
		<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method='post'>
			<?php if (get_option( 'comment_registration' ) && !$user_ID) { // When login is required: ?>
	    	<?php } else { ?>
				<?php if (!$user_ID) { // If not logged in: ?>
			
					<div>
						<label for="author">Your name<span class="note">&#42;</span></label>
						<input name="author" id="author" type="text"/>
					</div>

					<div>
						<label for="email">Your email<span class="note">&#42;</span></label>
						<input name="email" id="email" type="text"/>
					</div>

					<div>
						<label for="url">Your <abbr title="Uniform Resource Locator">URL</abbr></label>
						<input name="url" id="url" type="text"/>
					</div>
			
				<?php } else { // If logged in: ?>
			
				<?php } ?>
		
				<div>
					<label for="comment">Your Comment<span class="note">&#42;</span></label>
					<textarea name="comment" id="comment" rows="8" cols="56"></textarea>
					<span class="footnote"><span class="note">&#42;</span>Required</span>
				</div>
			
				<input type="submit" value="Post comment"/>
		
				<?php comment_id_fields(); ?>
				<?php do_action('comment_form', $post->ID); ?>
			<?php } ?>
		</form>
	</section>

<?php } ?>