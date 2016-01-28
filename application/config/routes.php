<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	http://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'accueil/accueil';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

/*
| -------------------------------------------------------------------------
| ACCUEIL
| -------------------------------------------------------------------------
*/

$route['index'] = "accueil/accueil";
$route['index.html'] = "accueil/accueil";
$route['index.php'] = "accueil/accueil";
$route['accueil'] = "accueil/accueil";
$route['accueil.html'] = "accueil/accueil";
$route['accueil.php'] = "accueil/accueil";
$route['connexion'] = "accueil/form_connexion";
$route['connexion.php'] = "accueil/form_connexion";

/*
| -------------------------------------------------------------------------
| PRODUIT
| -------------------------------------------------------------------------
*/

$route['produit/(:num)'] = "produit/liste_produit/$1";

/*
| -------------------------------------------------------------------------
| UTILISATEUR
| -------------------------------------------------------------------------
*/

$route['utilisateur/inscription'] = "utilisateur/form_creation";
$route['utilisateur/inscription.php'] = "utilisateur/form_creation";
$route['inscription'] = "utilisateur/form_creation";
$route['inscription.php'] = "utilisateur/form_creation";
$route['utilisateur/activation?(:any)'] = "utilisateur/activation";
$route['activation?(:any)'] = "utilisateur/activation";
$route['utilisateur/modification'] = "utilisateur/form_update";

/*
| -------------------------------------------------------------------------
| BACKOFFICE
| -------------------------------------------------------------------------
*/

$route['backoffice/nouveau-produit'] = "produit/form_creation";
$route['backoffice/nouveau-critere'] = "critere/form_creation";
$route['style'] = "css/form_bg";