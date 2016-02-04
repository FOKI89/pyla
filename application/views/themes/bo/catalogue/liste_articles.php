<!-- ======================================================================= -->
<!-- Top bar -->
<nav class="top-nav blue darken-4">
	<div class="container">
		<div class="nav-wrapper">
			<!-- Bouton pour afficher la sidebar-->
			<a href="" class="button-collapse" data-activates="slide-out"><i class="mdi-navigation-menu"></i></a>

			<a href="<?php echo site_url('backoffice'); ?>" class="breadcrumb">Back-office</a>
			<span class="breadcrumb">Catalogue</span>
			<span class="breadcrumb">Liste des articles</span>
		</div>
	</div>
</nav>
<!-- ======================================================================= -->
<!-- CONTENU PRINCIPAL-->
<!-- Conteneur -->
<div class="super-container">
	<!-- Center row -->
	<div class="row ">
		<div class="col s12 center-align">
			<!-- ======================================================================= -->
			<!-- Formulaire de recherche d'utilisateur -->
			<div class="row">
				<div class="col s12">
					<div class="card">
						<div class="card-content">
							<span class="card-title">Liste des articles</span>
							<table class="striped" id="liste_articles">
								<thead>
									<tr>
										<th data-field="icon"></th>
										<th data-field="id">ID</th>
										<th data-field="libelle">Libellé</th>
										<th data-field="reference">Référence</th>
										<th data-field="marque">Marque</th>
										<th data-field="date">Date d'ajout</th>
										<th data-field="categorie">Catégorie</th>
										<th data-field="statut">Statut</th>
										<th data-field=""></th>
									</tr>
								</thead>

								<tbody>
									<?php foreach($produits as $item){ ;?>
									<tr>
										<td>
										<?php if($item->statut == 0){ ?>
										<i class="material-icons user-icon red-text">shopping_cart</i>
										<?php }else{ ?>
											<i class="material-icons user-icon green-text">shopping_cart</i>
										<?php } ?>
										</td>
										<td><?php echo $item->id; ?></td>
										<td><?php echo $item->produit_libelle; ?></td>
										<td><?php echo $item->reference; ?></td>
										<td><?php echo $item->marque; ?></td>
										<td><?php echo $item->date; ?></td>
										<td><?php echo $item->categorie_libelle; ?></td>
										<?php if($item->statut == 0){ ?>
										<td>Inactif</td>
										<?php }else{ ?>
										<td>Actif</td>
										<?php } ?>
									</tr>
									<?php } ?>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
