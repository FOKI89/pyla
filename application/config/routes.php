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
$route['404_override'] = 'page/my404';
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
$route['recherche/(:any)'] = "accueil/search_front/$1";

/*
| -------------------------------------------------------------------------
| PAGES
| -------------------------------------------------------------------------
*/
$route['contact'] = "page/contact";
$route['categorie/6'] = "page/contact";
$route['categorie/5'] = "page/about";
$route['page/(:num)'] = "page/page/$1";


/*
| -------------------------------------------------------------------------
| CATEGORIE
| -------------------------------------------------------------------------
*/

$route['categorie/(:num)'] = "produit/liste_produits/$1";

/*
| -------------------------------------------------------------------------
| PRODUIT
| -------------------------------------------------------------------------
*/

$route['produit/(:num)'] = "produit/detail_produit/$1";
$route['produit/ajout-panier'] = "produit/ajout_panier";

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
$route['mon-compte'] = "utilisateur/compte";
$route['mon-compte/modification'] = "utilisateur/form_update";
$route['mon-compte/mes-commandes/en-cours'] = "utilisateur/commande_en_cours";
$route['mon-compte/mes-commandes/terminees'] = "utilisateur/commande_terminee";
$route['mon-compte/mes-commandes/signaler'] = "utilisateur/commande_signaler";
$route['mon-compte/mes-ventes/articles'] = "utilisateur/vente_article";
$route['mon-compte/mes-ventes/creer-article'] = "utilisateur/creer_article";
$route['mon-compte/mes-ventes/terminees'] = "utilisateur/vente_terminee";
$route['mon-compte/mes-ventes/retours'] = "utilisateur/vente_retour";
$route['mon-compte/mes-commentaires'] = "utilisateur/commentaire";
$route['mon-panier'] = "utilisateur/panier";
$route['deconnexion'] = "utilisateur/deconnexion";

/*
| -------------------------------------------------------------------------
| BACKOFFICE
| -------------------------------------------------------------------------
*/

$route['backoffice'] = "backoffice/accueil";
$route['backoffice/reinitialisation'] = "backoffice/form_reinitialisation";
$route['backoffice/nouveau-produit'] = "produit/form_creation";
$route['backoffice/nouveau-critere'] = "critere/form_creation";
$route['backoffice/creer-compte'] = "backoffice/creer_utilisateur";
$route['backoffice/creer-categorie'] = "backoffice/creer_categorie";
$route['backoffice/chercher-utilisateur'] = "backoffice/chercher_utilisateur";
$route['backoffice/liste-utilisateur'] = "backoffice/liste_utilisateur";
$route['backoffice/creer-article'] = "backoffice/creer_article";
$route['backoffice/chercher-article'] = "backoffice/chercher_article";
$route['backoffice/liste-categorie'] = "backoffice/liste_article";
$route['backoffice/creer-critere'] = "backoffice/creer_critere";
$route['backoffice/liste-critere'] = "backoffice/liste_criteres";
$route['backoffice/chercher-commande'] = "backoffice/chercher_commande";
$route['backoffice/liste-commande'] = "backoffice/liste_commandes";
$route['backoffice/modifier-pages'] = "backoffice/modifier_pages";
$route['backoffice/statistiques'] = "backoffice/statistiques";
$route['backoffice/parametres'] = "backoffice/parametres";
$route['backoffice/deconnexion'] = "backoffice/deconnexion";
$route['backoffice/reinitialisation'] = "backoffice/reinitialisation";
