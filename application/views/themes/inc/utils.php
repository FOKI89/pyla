<?php

/**
 * Affiche le chemin du thème (par défaut celui du master, si true en paramètre celui du thème enfant)
 * @param string $useChildTheme
 */
function carel_th($useChildTheme=false){

	if ($useChildTheme)
		echo get_stylesheet_directory_uri();
	else echo get_template_directory_uri();

}
