<?php

	/**
	 * Initialisation et paramétrage du thème
	 */

	if ( ! function_exists( 'carel_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	*
	* Note that this function is hooked into the after_setup_theme hook, which
	* runs before the init hook. The init hook is too late for some features, such
	* as indicating support for post thumbnails.
	*/
	function carel_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on carel-master, use a find and replace
		 * to change 'carel-master' to the name of your theme in all the template files
		 */
		load_theme_textdomain( 'carel', get_template_directory() . '/languages' );

		carel_setupThemeSupport();

		carel_setupPostSupport();
		carel_setupImageFormats();
		// This theme uses wp_nav_menu() in one location.
		register_nav_menu( 'main-menu', __( 'Super Menu') );

		add_action( 'wp_enqueue_scripts', 'carel_enqueueScripts' );

	}
	endif; // up_blog_master_setup
	add_action( 'after_setup_theme', 'carel_setup' );


	// !!!!! A partir de ce point il ne doit plus y avoir que des fonctions PHP, aucune instruction directement incluse, utiliser la fonction setup
	// ou une des fonctions qu'elle exéute
	// pour les fonctions surchargeables le bloc if (!function_exists(XXX)) { function XXX() } est toléré

	/**
	 * Indique à WP quelles fonctionnalités de thème on va utiliser
	 */
	function carel_setupThemeSupport(){

		// Génération auto des RSS, intégrés dans le header
		add_theme_support( 'automatic-feed-links' );

		// On utilise la gestion WP de la balise title (pas de balise en dur dans le header.php)
		add_theme_support( 'title-tag' );

		// On utilie les vignettes de post (image � la une)
		add_theme_support( 'post-thumbnails' );

		/**
		 * On utilise la gestion des menus WP
		*/
		add_theme_support( 'menus');

		/**
		 * On utilise de types de posts pour des présentations spécialisées
		*/
		add_theme_support('post-formats', array('gallery','video'));

		/*
		 * Enable support for Post Formats.
		 * See https://developer.wordpress.org/themes/functionality/post-formats/
		*/
		add_theme_support( 'post-formats', array(
				'aside'
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'up_blog_master_custom_background_args', array(
				'default-color' => 'ffffff',
				'default-image' => '',
		) ) );

	}

	/**
	 * Indique à WP quelles fonctionnalités de post on va utiliser
	 */
	function carel_setupPostSupport(){

		/**
		 * On a besoin d'utiliser l'excerpt sur les pages
		 */
		add_post_type_support('page', 'excerpt');

	}


	/**
	 * Définit les tailles d'image qu'on va utiliser (surchargeable)
	 */
	if (!function_exists("carel_setupImageFormats")) {

		function carel_setupImageFormats(){


			add_filter( 'image_size_names_choose', 'carel_addImageSizesToSelector' );
		}

	}

	/**
	 * Affiche dans le sélecteur de tailles des tailles customisés
	 * @param unknown $sizes
	 * @return multitype:
	 */
	if (!function_exists("carel_addImageSizesToSelector")) {

		function carel_addImageSizesToSelector( $sizes ) {
			$custom_sizes = array(
			//		V2_FACEBOOK => 'Optimal Facebook'
			);
			return array_merge( $sizes, $custom_sizes );
		}
	}


	/**
	 * Gestion des scripts et css à inclure dans nos pages
	*/
	function carel_enqueueScripts() {

		/* CSS */
		/* normalize.css issu de html5 boilerplate */
	//	wp_enqueue_style( 'vendors', get_template_directory_uri()."/css/vendors.css" );
		wp_enqueue_style( 'main-css', get_template_directory_uri()."/css/main.css",array() );
		wp_enqueue_style( 'article-css', get_template_directory_uri()."/css/layouts/article.css",array() );

		/* JS */
		// On s'occupe de remplacer la version admin de jquery par une version r�cente si on est pas dans l'admin
		if (!is_admin()){
			wp_deregister_script( 'jquery' );
			// Charge jquery depuis le cdn google pour perf, on a un fallback si le cdn est down
			wp_enqueue_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js',null,null,true );

		}
		// Le fallback jquery se trouve dans spec on doit le charger apr�s jquery cdn du coup
		wp_register_script( 'vendors-spec', get_template_directory_uri() . '/js/vendors-spec.js' );
		wp_enqueue_script( 'google-maps-api', '//maps.googleapis.com/maps/api/js?v=3.exp', null, null, true );
		// Pour injecter le chemin du theme dans le JS et récupérer correctement notre jquery fallback
		$locData = array('js_vendor_path'=>get_template_directory_uri() . '/js/vendor');
		wp_localize_script( 'vendors-spec', 'locData', $locData );

		// Enqueued script with localized data.
		wp_enqueue_script( 'vendors-spec', null, array('jquery'), BUILD_VERSION, true  );
		
		wp_enqueue_script('masonnery', get_template_directory_uri() .'/js/vendors/masonnery-min.js',null,null,true);
		wp_enqueue_script( 'vendors', get_template_directory_uri() . '/js/vendors.js', array("vendors-spec"), BUILD_VERSION, true );
		wp_enqueue_script( 'main-js', get_template_directory_uri() . '/js/main.js', array("vendors", 'google-maps-api'), BUILD_VERSION, true );

		// Chargement sélectif du js nécessaire aux commentaires
		// TODO interaction avec extension de cache ?
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}
