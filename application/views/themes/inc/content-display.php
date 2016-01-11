<?php
	/**
	 * Ce fichier contient toutes les fonctions qui servent à transformer la présentation des données
	 * de manière spécifique au thème.
	 * Si la transformation est liée aux données en elles-même ou au métier, utiliser plutôt un plugin
	 * 
	 */

/*
 * TODO : les eux fonctions ci-dessous peuvent être utiles car elles utilisent des format de micro-données
 * à voir si on peut les utiliser sinon les supprimer
 */

if ( ! function_exists( 'aetd_master_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post-date/time and author.
*/
function aetd_master_posted_on() {
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
	if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
	}

	$time_string = sprintf( $time_string,
			esc_attr( get_the_date( 'c' ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_modified_date( 'c' ) ),
			esc_html( get_the_modified_date() )
	);

	$posted_on = sprintf(
			esc_html_x( 'Posted on %s', 'post date', 'up-blog-master' ),
			'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
	);

	$byline = sprintf(
			esc_html_x( 'by %s', 'post author', 'up-blog-master' ),
			'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
	);

	echo '<span class="posted-on">' . $posted_on . '</span><span class="byline"> ' . $byline . '</span>'; // WPCS: XSS OK.

}
endif;



/**
 * Affiche le lien pour voir les commentaires
 * Must be called in the loop!
 */
function aetd_the_comments_link(){

	$nbComments = get_comments_number();
	$label = $nbComments;
	if ($nbComments == 0){
		$attr = ' class="tooltipped" title="'.__("0 commentaire, soyez le premier!","up-blog-master").'" ';
	}

	if (is_single(get_the_ID())){
		$link ="#".__("poster-un-commentaire","up-blog-master");
	}
	else $link = get_permalink()."#".__("poster-un-commentaire","up-blog-master");
	?><a href="<?php echo $link;?>" <?php echo $attr; ?>><?php echo $nbComments;?></a><?php
}


function mag_the_linkedin_shareurl($url){
	
	echo  "https://www.linkedin.com/cws/share?url=".urlencode($url);
	
}


