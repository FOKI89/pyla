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
		<?php foreach($css as $url){ ?>
			<link rel="stylesheet" type="text/css" media="screen" href="<?php echo $url; ?>" />
		<?php } ?>
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
			    <div class="recherche col hide-on-small-only m6 l6">
			        <nav class="transparent z-depth-0">
			            <div class="nav-wrapper">
			              	<form id="search-bar" method="" action="">
				                	<div class="input-field col s8 z-depth-1 white">
				                  		<input id="search" type="search" placeholder="Recherche" required>
				                  		<label for="search"><i class="material-icons">search</i></label>
				                  		<i class="material-icons">close</i>
				                	</div>
													<div class="input-field col s4 center">
														<button class="btn waves-effect waves-light white grey-text text-darken-4 " type="submit" name="search">Rechercher</button>
													</div>
			              	</form>
			            </div>
			        </nav>
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
					<?php if(isset($menu)){
						foreach ($menu as $key => $topmenu) {
							if($topmenu['home'] == "1"){
								echo'<li><a href="'.base_url().'">' .$topmenu['libelle'].'</a>';
							}else{
								echo'<li><a href="'.base_url().'categorie/' .$topmenu['id']. '">' .$topmenu['libelle'].'</a>';
							}
							//echo '<li><a href="'.base_url().'categorie/' .$topmenu['id']. '">' .$topmenu['libelle'].'</a>';
							if(isset($topmenu['submenu'])){
								echo '<div class="subMenu indigo lighten-5 blue-text">';
								foreach ($topmenu['submenu'] as $key => $submenu) {
										echo'<ul class="left-align">';
										if($submenu['home'] == "1"){
											echo'<li><a class="blue-text text-darken-4 subMenu-title" href="'.base_url().'/">' .$submenu['libelle'].'</a></li>';
										}else{
											echo'<li><a class="blue-text text-darken-4 subMenu-title" href="'.base_url().'categorie/' .$submenu['id']. '">' .$submenu['libelle'].'</a></li>';
										}
															//<li><a class="blue-text text-darken-4 subMenu-title" href="'.base_url().'categorie/' .$submenu['id']. '">' .$submenu['libelle'].'</a></li>';
												foreach ($submenu as $key => $subsubmenu) {
													if(is_int($key)){
														if($subsubmenu['home'] == "1"){
															echo'<li><a class="blue-text" href="'.base_url().'/">' .$subsubmenu['libelle'].'</a></li>';
														}else{
															echo'<li><a class="blue-text" href="'.base_url().'categorie/' .$subsubmenu['id']. '">' .$subsubmenu['libelle'].'</a></li>';
														}
														//echo '<li><a class="blue-text" href="'.base_url().'categorie/' .$subsubmenu['id']. '">' .$subsubmenu['libelle'].'</a></li>';
													}
												}
										echo'</ul>';
								}
								echo '</div>';
							}
							echo'</li>';
						}
					}
					?>
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
							<?php if(isset($menu)){
								foreach ($menu as $key => $topmenu) {
									if(isset($topmenu['submenu'])){
										echo '<li class="no-padding deroule">
														<ul class="collapsible collapsible-accordion">
															<li><a class="collapsible-header waves-effect waves-blue">'.$topmenu['libelle'].'</a>';
										echo '<div class="collapsible-body"><ul>';
										foreach ($topmenu['submenu'] as $key => $submenu) {
												echo'<li><a href="'.base_url().'categorie/' .$submenu['id']. '">' .$submenu['libelle'].'</a></li>';
										}
										echo'</ul></li>';
									}else{
										echo '<li class="no-padding"><a href="'.base_url().'categorie/' .$topmenu['id']. '">'.$topmenu['libelle'].'</a></li>';
									}
								}
							}
							?>
		      	</ul>
		    </div>
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
								<div class="col s12">
									<ul>
									<?php foreach($pages_footer as $page){ ?>
										<li><a class="grey-text text-lighten-3" href="<?php echo 'page/'.$page->id;?>"><?php echo $page->titre;  ?></a></li>
									<?php }?>
									</ul>
								</div>
								<!--
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
							-->
	           	</div>
         	</div>
	        <div class="footer-copyright indigo">
           		<div class="container">
	           		© 2016 Site bati avec Pila
	           		<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
	           	</div>
	        </div>
	    </footer><?php var_dump($_SESSION["site_cp"]);?>
		<?php foreach($js as $url): ?>
			<script type="text/javascript" src="<?php echo $url; ?>"></script>
		<?php endforeach; ?>
	</body>
</html>
