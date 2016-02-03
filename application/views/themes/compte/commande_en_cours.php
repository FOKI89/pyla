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
				<div class="">
						<h2>Mes Commandes - En Cours</h2>
						<table class="responsive-table striped">
							<thead>
								<tr>
									<th data-field="reference">Article</th>
									<th data-field="prix">Marque</th>
									<th data-field="prix">Prix</th>
									<th data-field="date">Date</th>
									<th data-field="adresse-livraison">Adresse de livraison</th>
									<th data-field="status">Status</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td><a href="<?php echo base_url().'/produit/1';?>">Projecteur HJK201</a></td>
									<td>Sony</td>
									<td>650€</td>
									<td>02 Février 2016</td>
									<td>89 golden ticket street</td>
									<td>En cours</td>
								</tr>
							</tbody>
						</table>
					</div><!-- fin div commandes -->
			</div><!-- fin div contenu account -->
		</div><!-- fin div row -->
</div><!-- fin div section -->
</div><!-- fin div container -->
