<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" > 
	<head>
		<title><?php echo $titre; ?></title>
		<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $charset; ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<link rel="icon" type="image/png" href="<?php echo img_url("favicon.png") ?>" />
		<link rel="stylesheet" href="<?php echo css_url("main") ?>">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<script src="<?php echo js_url("vendors/jquery-1.11.3.min"); ?>"></script>
		<script src="<?php echo js_url("vendors/materialize.min"); ?>"></script>
		<script src="<?php echo js_url("vendors/nouislider.min"); ?>"></script>
		<script src="<?php echo js_url("main"); ?>"></script>
		<?php foreach($css as $url): ?>
			<link rel="stylesheet" type="text/css" media="screen" href="<?php echo $url; ?>" />
		<?php endforeach; ?>
	</head>

	<body>
		<header>
 			<div class="row">
			    <div class="logo col l1 m2 s3">
			    <a href="<?php echo base_url(); ?>" class="brand-logo">
			        	<img class="" src="<?php echo img_url("global/logo-2.png") ?>" alt="logo pila">
			    </a>
			    </div>
			    <!-- Champs de recherche  -->
			    <div class="recherche col hide-on-small-only m10 l6">
			        <nav class="col s7">
			            <div class="nav-wrapper">
			              	<form>
			                	<div class="input-field">
			                  		<input id="search" type="search" required>
			                  		<label for="search"><i class="material-icons">search</i></label>
			                  		<i class="material-icons">close</i>
			                	</div>
			              	</form>
			            </div>
			        </nav>
			        <div class="col s5">
			         	<ul id="dropdown2" class="dropdown-content">
							<li><a class="blue-text" href="#" data-category="tee-shirts">Tee-shirts</a></li>
							<li><a class="blue-text" data-category="Chemises">Chemises</a></a></li>
							<li><a class="blue-text" href="#" data-category="Pantalons">Pantalons</a></li>
							<li><a class="blue-text" href="#" data-category="Chaussures">Chaussures</a></li>
			        	</ul>
			        	<a class="btn dropdown-button white grey-text" href="#!" data-activates="dropdown2">Catégories<i class="mdi-navigation-arrow-drop-down right"></i></a>
			        </div>
			    </div>
			    <div class="header-links col s9 m10 l5">
			    	<?php if(isset($_SESSION['id']) && !empty($_SESSION['id'])){ ?>
				        <a class="btn yellow blue-text" href="<?php echo base_url().'mon-compte'; ?>">Mon Compte</a>
				        <a class="btn blue yellow-text" href="<?php echo base_url().'deconnexion'; ?>">Déconnexion</a>
			        <?php }else{ ?>
			        	<a class="btn yellow blue-text" href="<?php echo base_url().'inscription'; ?>">Inscription</a>
				        <a class="btn blue yellow-text" href="<?php echo base_url().'connexion'; ?>">Connexion</a>
			        <?php } ?>
			        <a class="btn white blue-grey-text darken-3-text" href="<?php echo base_url().'mon-panier'; ?>"><i class="material-icons">shopping_cart</i></a>
			    </div>
			</div>
		</header>

		<nav class="main-nav z-depth-0 blue">
		    <div class="nav-wrapper">
				<a href="#" data-activates="mobile-menu" class="button-collapse"><i class="material-icons">menu</i></a>
				<div class="container">
					<ul class="center hide-on-med-and-down desktop">
						<li><a href="#">Habillement</a>
						  <div class="subMenu indigo lighten-5 blue-text">
							  <ul class="left-align">
								  <li><a class="blue-text text-darken-4 subMenu-title" href="#">Chaussures</a></li>
								  <li><a class="blue-text" href="#">Bottes</a></li>
								  <li><a class="blue-text" href="#">Escarpins</a></li>
								  <li><a class="blue-text" href="#">Sandales</a></li>
								  <li><a class="blue-text" href="#">Chaussure de ville</a></li>
								  <li><a class="blue-text" href="#">Sportswear</a></li>
								  <li><a class="blue-text" href="#">Ballerines</a></li>
							  </ul>
							  <ul class="left-align">
								  <li><a class="blue-text text-darken-4 subMenu-title" href="#">Haut</a></li>
								  <li><a class="blue-text" href="#">Tee shirts</a></li>
								  <li><a class="blue-text" href="#">Chemises</a></li>
								  <li><a class="blue-text" href="#">Polo</a></li>
							  </ul>
							  <ul class="left-align">
								  <li><a class="blue-text text-darken-4 subMenu-title" href="#">Manteaux</a></li>
								  <li><a class="blue-text" href="#">Parka</a></li>
								  <li><a class="blue-text" href="#">Duffle Coat</a></li>
								  <li><a class="blue-text" href="#">Blouson</a></li>
								  <li><a class="blue-text" href="#">Anorak</a></li>
							  </ul>
							  <ul class="left-align">
								  <li><a class="blue-text text-darken-4 subMenu-title" href="#">Pantalons</a></li>
								  <li><a class="blue-text" href="#">Jeans</a></li>
								  <li><a class="blue-text" href="#">Chino</a></li>
								  <li><a class="blue-text" href="#">Shorts</a></li>
								  <li><a class="blue-text" href="#">Pantacourt</a></li>
								  <li><a class="blue-text" href="#">Joggings</a></li>
							  </ul>
						  </div>
						</li>
						<li><a href="#">Tee-shirts</a>
							<div class="subMenu white blue-text row">
							    <ul class="col l4">
							        <li><a href="#">Bottes</a></li>
							        <li><a href="#">Escarpins</a></li>
							        <li><a href="#">Sandales</a></li>
							        <li><a href="#">Chaussure de ville</a></li>
							        <li><a href="#">Sportswear</a></li>
							        <li><a href="#">Ballerines</a></li>
							    </ul>
							    <ul class="col l4">
							        <li><a href="#">Bottes</a></li>
							        <li><a href="#">Escarpins</a></li>
							        <li><a href="#">Sandales</a></li>
							        <li><a href="#">Chaussure de ville</a></li>
							        <li><a href="#">Sportswear</a></li>
							        <li><a href="#">Ballerines</a></li>
							    </ul>
							</div>
						</li>
						<li><a href="#">Chemises</a></li>
						<li><a href="#">Pantalons</a></li>
						<li><a href="#">Manteaux</a></li>
						<li><a href="#">Chaussettes</a></li>
						<li><a href="#">Accessoires</a></li>
					</ul>
				</div>
		      <ul class="side-nav" id="mobile-menu">
		            <li class="logo">
		            	<a id="logo-container" href="index.php" class="brand-logo">
		              		<img src="<?php echo img_url("logo-2.png") ?>">
		              	</a>
		            </li>
			        <li class="search no-padding">
		  	            <div class="search-wrapper card">
			                <input id="search"><i class="material-icons">search</i>
			            	<div class="search-results"></div>
			            </div>
			        </li>
		            <li class="no-padding deroule">
		                <ul class="collapsible collapsible-accordion">
		                    <li>
		                        <a class="collapsible-header waves-effect waves-blue">Chaussures</a>
		                        <div class="collapsible-body">
		                            <ul>
										<li><a href="#">Bottes</a></li>
										<li><a href="#">Escarpins</a></li>
										<li><a href="#">Sandales</a></li>
										<li><a href="#">Chaussure de ville</a></li>
										<li><a href="#">Sportswear</a></li>
										<li><a href="#">Ballerines</a></li>
		                            </ul>
		                        </div>
		                    </li>
		                    <li>
		                        <a class="collapsible-header waves-effect waves-blue">Tee-shirts</a>
		                        <div class="collapsible-body">
		                            <ul>
		                                <li><a href="#">Bottes</a></li>
		                                <li><a href="#">Escarpins</a></li>
		                                <li><a href="#">Sandales</a></li>
		                                <li><a href="#">Chaussure de ville</a></li>
		                                <li><a href="#">Sportswear</a></li>
		                                <li><a href="#">Ballerines</a></li>
		                            </ul>
		                        </div>
		                    </li>
		                    <li>
		                        <a class="collapsible-header waves-effect waves-blue">Chemises</a>
			                    <div class="collapsible-body">
			                        <ul>
			                            <li><a href="#">Bottes</a></li>
			                            <li><a href="#">Escarpins</a></li>
			                            <li><a href="#">Sandales</a></li>
			                            <li><a href="#">Chaussure de ville</a></li>
			                            <li><a href="#">Sportswear</a></li>
			                            <li><a href="#">Ballerines</a></li>
			                        </ul>
			                    </div>
			              	</li>
			              	<li>
		                  		<a class="collapsible-header waves-effect waves-blue">Pantalons</a>
		                  		<div class="collapsible-body">
									<ul>
										<li><a href="#">Bottes</a></li>
										<li><a href="#">Escarpins</a></li>
										<li><a href="#">Sandales</a></li>
										<li><a href="#">Chaussure de ville</a></li>
										<li><a href="#">Sportswear</a></li>
										<li><a href="#">Ballerines</a></li>
									</ul>
		                  		</div>
		            		</li>
		            	</ul>
		          	</li>
					<li class="no-padding"><a href="#">Chaussettes</a></li>
					<li class="no-padding"><a href="#">Accessoires</a></li>
		      	</ul>
		    </div>
		</nav>

		<div id="contenu">
			<?php echo $output; ?>
		</div>
			</div><!-- fin div section -->
	    </div><!-- fin div container -->
	    <footer class="page-footer indigo lighten-1">
	        <div class="container">
	            <div class="row">
	             	<div class="col l4 offset-l2 s4">
	               		<h5 class="white-text">Acheter</h5>
	               		<ul>
							<li><a class="grey-text text-lighten-3" href="#!">Boutique de marque</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Boutique Pila</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Pila Mobile</a></li>
						</ul>
	             	</div>
					<div class="col l4 offset-l2 s4">
						<h5 class="white-text">Vendre</h5>
						<ul>
							<li><a class="grey-text text-lighten-3" href="#!">Vendre sur Pila</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Comment vendre</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Outils de vente</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Espace vendeurs</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Espace livraison</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Conditions de vente</a></li>
						</ul>
					</div>
	             	<div class="col l4 offset-l2 s4">
	               		<h5 class="white-text">A propos de Pila</h5>
	               		<ul>
							<li><a class="grey-text text-lighten-3" href="#!">Vendre sur Pila</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Comment vendre</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Outils de vente</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Espace vendeurs</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Espace livraison</a></li>
						</ul>
	             	</div>
	           	</div>
         	</div>
	        <div class="footer-copyright indigo">
           		<div class="container">
	           		© 2016 Site batit avec Pila
	           		<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
	           	</div>
	        </div>
	    </footer>
		<?php foreach($js as $url): ?>
			<script type="text/javascript" src="<?php echo $url; ?>"></script> 
		<?php endforeach; ?>
	</body>
</html>