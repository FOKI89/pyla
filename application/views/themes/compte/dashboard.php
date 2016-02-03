<div class="container">
	<div class="section">
		<h2 class="header center-on-small-only grey-text grey-darken-4-text">Espace Personnel</h2>
		<div class ="row">
			<div class="col l4 m4 s12">
				<ul class="collapsible collapsible-accordion" id="nav-account">
					<li class="no-padding"><a href="<?php echo base_url().'mon-compte'; ?>">Dashboard</a></li>
					<li class="no-padding"><a href="<?php echo base_url().'mon-compte/modification'; ?>" class="purple lighten-5">Mes informations personnelles</a></li>
					<li><a class="collapsible-header waves-effect blue lighten-4">Mes commandes</a>
					<div class="collapsible-body">
						<ul>
							<li><a href="<?php echo base_url().'mon-compte/mes-commandes/en-cours'; ?>">En cours</a></li>
							<li><a href="<?php echo base_url().'mon-compte/mes-commandes/terminees'; ?>">Terminées</a></li>
							<li><a href="<?php echo base_url().'mon-compte/mes-commandes/signaler'; ?>">Signaler un problème</a></li>
						</ul>
					</div>
				</li>
				<li>
					<a class="collapsible-header waves-effect deep-purple lighten-4">Mes ventes</a>
					<div class="collapsible-body">
						<ul>
							<li><a href="<?php echo base_url().'mon-compte/mes-ventes/articles'; ?>">Mes articles</a></li>
							<li><a href="<?php echo base_url().'mon-compte/mes-ventes/terminees'; ?>">Ventes terminées</a></li>
							<li><a href="<?php echo base_url().'mon-compte/mes-ventes/creer-article'; ?>">Créer un article</a></li>
							<li><a href="<?php echo base_url().'mon-compte/mes-ventes/retours'; ?>">Retours</a></li>
						</ul>
					</div>
				</li>
				<li class="no-padding"><a href="<?php echo base_url().'mon-compte/mes-commentaires'; ?>" class="indigo lighten-4">Mes commentaires</a></li>
			</ul>
		</div>
		<div class="col l8 s12">
			<div class="dashboard-account active-account">
				<h2>Dashboard</h2>
				<p>Bienvenue dans votre espace personnel Ludovic</p>
				<div class="divider"></div>
				<div class="card col m6 s12 z-depth-0">
					<div class="card-content blue lighten-4">
						<h3>Dernière Commande:</h3>
						<div class="divider grey darken-4"></div>
						<p>Projecteur HJK201, Sony  - <span class="grey-text text-darken-2">02 Février 2016</span></p>
						<p class="right-align bold">650€</p>
						<a href="<?php echo base_url().'/mon-compte/mes-commandes/en-cours';?>" class="blue-text"><i class="tiny material-icons">play_arrow</i> En détail</a>
					</div>
				</div>
				<div class="card col m6 s12 z-depth-0">
					<div class="card-content indigo lighten-4">
						<h3>Dernier Commentaire:</h3>
						<div class="divider grey darken-4"></div>
						<p>Objectif Fish Eye, Canon - <span class="grey-text text-darken-2">15 Décembre 2015</span></p>
						<p>Super produit, l'effet est vraiment concluant je peux faire créer des ...</p>
						<a href="<?php echo base_url().'/mon-compte/mes-commentaires';?>" class="blue-text"><i class="tiny material-icons">play_arrow</i> En détail</a>
					</div>
				</div>
				<div class="card col m6 s12 z-depth-0">
					<div class="card-content deep-purple lighten-4">
						<h3>Dernière Vente:</h3>
						<div class="divider grey darken-4"></div>
						<p>Vous n'avez pas encore fait de vente</p>
						<a href="<?php echo base_url().'/mon-compte/mes-ventes/creer-article';?>" class="blue-text"><i class="tiny material-icons">play_arrow</i> Créer une vente</a>
					</div>
				</div>
				<div class="card col m6 s12 z-depth-0">
					<div class="card-content purple lighten-5">
						<h3>Infos</h3>
						<div class="divider grey darken-4"></div>
						<p>Vous avez modifié vos informations le <span class="grey-text text-darken-2">03 Février 2016</span></p>
						<a href="<?php echo base_url().'/page/contact';?>" class="blue-text"><i class="tiny material-icons">play_arrow</i> Signaler un problème</a>
					</div>
				</div>
				<div class="divider"></div>
			</div> <!-- fin div dashboard -->
		</div><!-- fin div contenu account -->
	</div><!-- fin div row -->
</div><!-- fin div section -->
</div><!-- fin div container -->
