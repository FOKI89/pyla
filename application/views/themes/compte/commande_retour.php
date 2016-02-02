<div class="container">
	<div class="section">
		<h1 class="header center-on-small-only grey-text grey-darken-4-text">Espace Personnel</h1>
		<div class ="row">
			<div class="col l4 m4 s12">
				<ul class="collapsible collapsible-accordion" id="nav-account">
					<a href="<?php echo base_url().'mon-compte'; ?>"><li class="no-padding">Dashboard</li></a>
					<a href="<?php echo base_url().'mon-compte/modification'; ?>" class="purple lighten-5"><li class="no-padding">Mes informations personnelles</li></a><li>
					<a class="collapsible-header waves-effect blue lighten-4">Mes commandes</a>
					<div class="collapsible-body">
						<ul>
							<a href="<?php echo base_url().'mon-compte/mes-commandes/en-cours'; ?>"><li >En cours</li></a>
							<a href="<?php echo base_url().'mon-compte/mes-commandes/terminees'; ?>"><li>Terminées</li></a>
							<a href="<?php echo base_url().'mon-compte/mes-commandes/signaler'; ?>"><li>Signaler un problème</li></a>
						</ul>
					</div>
				</li>
				<li>
					<a class="collapsible-header waves-effect deep-purple lighten-4">Mes ventes</a>
					<div class="collapsible-body">
						<ul>
							<a href="<?php echo base_url().'mon-compte/mes-ventes/articles'; ?>"><li>Mes articles</li></a>
							<a href="<?php echo base_url().'mon-compte/mes-ventes/terminees'; ?>"><li>Ventes terminées</li></a>
							<a href="<?php echo base_url().'mon-compte/mes-ventes/retours'; ?>"><li>Retours</li></a>
						</ul>
					</div>
				</li>
				<a href="<?php echo base_url().'mon-compte/mes-commentaires'; ?>" class="indigo lighten-4"><li class="no-padding">Mes commentaires</li></a>
			</ul>
		</div>
		<div class="col l8 s12">
			<div class="">
					<h2>Mes Commandes - Signaler un problème</h2>
					<table class="responsive-table striped">
						<thead>
							<tr>
								<th data-field="reference">Référence</th>
								<th data-field="prix">Prix</th>
								<th data-field="nombre-items">Nombre d'articles</th>
								<th data-field="date">Date</th>
								<th data-field="adresse-livraison">Adresse de livraison</th>
								<th data-field="status">Status</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td><a href="">Alvin</a></td>
								<td>90€</td>
								<td>2</td>
								<td>23 Janvier 2016</td>
								<td>89 golden ticket street</td>
								<td>Terminée</td>
							</tr>
							<tr>
								<td><a href="">Alan</a></td>
								<td>15.30€</td>
								<td>2</td>
								<td>05 Janvier 2016</td>
								<td>89 total recall place</td>
								<td>Annulée</td>
							</tr>
							<tr>
								<td><a href="">Jonathan</a></td>
								<td>85.60€</td>
								<td>4</td>
								<td>18 Décembre 2015</td>
								<td>89 golden ticket street</td>
								<td>Terminée</td>
							</tr>
						</tbody>
					</table>
				</div><!-- fin div commandes -->
		</div><!-- fin div contenu account -->
	</div><!-- fin div row -->
</div><!-- fin div section -->
</div><!-- fin div container -->