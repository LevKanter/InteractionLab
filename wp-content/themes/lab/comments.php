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
					
					<div class="tier">
						<div class="box">
							<label for="author">Your name</label>
							<input name="author" id="author" type="text"/>
						</div>
						<div class="box">
							<label for="email">Your email</label>
							<input name="email" id="email" type="text"/>
						</div>
					</div>

				<?php } else { // If logged in: ?>
			
				<?php } ?>
		
				<div class="tier">
					<label for="comment">Your Comment</label>
					<textarea name="comment" id="comment" rows="8" cols="56"></textarea>
				</div>
			
				<input type="submit" value="Post comment"/>
		
				<?php comment_id_fields(); ?>
				<?php do_action('comment_form', $post->ID); ?>
			<?php } ?>
		</form>
	</section>

<?php } ?>