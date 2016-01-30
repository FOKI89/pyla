<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" > 
<head>
	<title><?php echo $titre; ?></title>
	<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $charset; ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<link rel="icon" type="image/png" href="<?php echo img_url("favicon.png") ?>" />
	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link type="text/css" rel="stylesheet" href="<?php echo css_url("bo/materialize.min") ?>"  media="screen,projection"/>
	<link type="text/css" rel="stylesheet" href="<?php echo css_url("/bo/custom_rules"); ?>" media="screen,projection">
	<?php foreach($css as $url): ?>
		<link rel="stylesheet" type="text/css" media="screen" href="<?php echo $url; ?>" />
	<?php endforeach; ?>
</head>
<body>
	<header>
		<ul id="slide-out" class="side-nav fixed">
			<!-- Header/logo Pila-->
			<li class="blue darken-4 white-text valign-wrapper" style="height:64px;">
				<img src="<?php echo img_url("bo/logo.png") ?>" alt="Logo Projet Pila" style="max-height:80%">
			</li>

			<!-- Infos sur l'utilisateur connecté -->
			<li class="yellow accent-4 center-align">
				<i class="material-icons user-icon">person</i> Thomas Moraine
			</li>

			<!-- Liste des catégories-->
			<ul class="collapsible" data-collapsible="accordion">
				<!-- Lien vers le Dashboard-->
				<li>
					<div class="collapsible-header blue-text text-darken-4">
						<i class="material-icons">view_module</i>
						<a href="../Dashboard/dashboard.html" class="categorie_menu">Dashboard</a></div>
					</li>
					<!-- Sous-menu Utilisateurs -->
					<li>
						<div class="collapsible-header"><i class="material-icons">group</i>
							<span class="categorie_menu">Utilisateurs</span>
						</div>
						<div class="collapsible-body">
							<ul class="center-align blue-text text-darken-4">
								<li><a href="../Utilisateurs/creer_utilisateur.html" class="sidebar-link">Créer un compte</a></li>
								<li><a href="../Utilisateurs/chercher_utilisateur.html" class="sidebar-link">Chercher un utilisateur</a></li>
								<li><a href="../Utilisateurs/liste_utilisateurs.html" class="sidebar-link">Liste des utilisateurs</a></li>
							</ul>
						</div>
					</li>
					<!-- Sous-menu Catalogue -->
					<li>
						<div class="collapsible-header"><i class="material-icons">library_books</i>
							<span class="categorie_menu">Catalogue</span>
						</div>
						<div class="collapsible-body">
							<ul class="center-align blue-text text-darken-4">
								<li><a href="../Catalogue/creer_article.html" class="sidebar-link">Créer un article</a></li>
								<li><a href="../Catalogue/chercher_article.html" class="sidebar-link">Chercher un article</a></li>
								<li><a href="../Catalogue/creer_critere.html" class="sidebar-link">Créer un critère</a></li>
								<li><a href="../Catalogue/liste_criteres.html" class="sidebar-link">Liste des critères</a></li>
							</ul>
						</div>
					</li>
					<!-- Sous-menu Commandes -->
					<li>
						<div class="collapsible-header"><i class="material-icons">shopping_cart</i>
							<span class="categorie_menu">Commandes</span>
						</div>
						<div class="collapsible-body">
							<ul class="center-align blue-text text-darken-4">
								<li><a href="../Commandes/chercher_commande.html" class="sidebar-link">Chercher une commande</a></li>
							</ul>
						</div>
					</li>
					<!-- Sous-menu Pages -->
					<li>
						<div class="collapsible-header"><i class="material-icons">web</i>
							<span class="categorie_menu">Pages</span>
						</div>
						<div class="collapsible-body">
							<ul class="center-align blue-text text-darken-4">
								<li><a href="../Pages/modif_pages.html" class="sidebar-link">Modifier les pages</a></li>
							</ul>
						</div>
					</li>

					<li>
						<div class="collapsible-header"><i class="material-icons">timeline</i>
							<span class="categorie_menu">Statistiques</span>
						</div>
						<div class="collapsible-body">
							<ul class="center-align blue-text text-darken-4">
								<li>Sous-menu Stats</li>
							</ul>
						</div>
					</li>
					<li>
						<div class="collapsible-header"><i class="material-icons">settings</i>
							<span class="categorie_menu">Paramètres</span>
						</div>
						<div class="collapsible-body">
							<ul class="center-align blue-text text-darken-4">
								<li>Sous-menu Paramètres</li>
							</ul>
						</div>
					</li>
					<!-- Déconnexion -->
					<li>
						<div class="collapsible-header">
							<i class="material-icons user-icon">exit_to_app</i>
							<span> Déconnexion</span>
						</div>
					</li>
				</ul>
				<!-- Fin de la liste des menus-->
			</ul>
			<!-- Fin de la sidebar-->
		</header>
		<main>
		<div id="contenu">
			<?php echo $output; ?>
		</div>
	</div><!-- fin div section -->
</div><!-- fin div container -->
</main>
<footer class="page-footer blue darken-4 white-text">
	<div class="container">© 2016 Damien LERY, Thomas MORAINE et Ludovic SIRE
		<span class="right">Réalisé avec <a href="http://materializecss.com/">Materialize CSS</a>
			(<a href="LICENSE.txt">Licence</a>)</span>
		</div>
	</footer>
	<?php foreach($js as $url): ?>
	<script type="text/javascript" src="<?php echo $url; ?>"></script> 
<?php endforeach; ?>
</body>
</html>