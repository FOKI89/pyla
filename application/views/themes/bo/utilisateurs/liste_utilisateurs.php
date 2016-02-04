<!-- ======================================================================= -->
<!-- Top bar -->
<nav class="top-nav blue darken-4">
	<div class="container">
		<div class="nav-wrapper">
			<!-- Bouton pour afficher la sidebar-->
			<a href="" class="button-collapse" data-activates="slide-out"><i class="mdi-navigation-menu"></i></a>

			<a href="<?php echo site_url('backoffice'); ?>" class="breadcrumb">Back-office</a>
			<span class="breadcrumb">Utilisateurs</span>
			<span class="breadcrumb">Liste des utilisateurs</span>
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
							<span class="card-title">Liste des utilisateurs</span>
							<table class="striped responsive-table" id="liste_utilisateurs">
								<thead>
									<tr>
										<th data-field="icon"></th>
										<th data-field="id">ID</th>
										<th data-field="nom">Nom</th>
										<th data-field="prenom">Prénom</th>
										<th data-field="email">Email</th>
										<th data-field="adresse">Adresse</th>
										<th data-field="ville">Ville</th>
										<th data-field="pays">Pays</th>
										<th data-field="telephone">Téléphone</th>
										<th data-field="date_entree">Date d'entrée</th>
										<th data-field="statut">Statut</th>
										<th data-field="statut"></th>
									</tr>
								</thead>

								<tbody>
									<?php foreach($utilisateurs as $item){ ;?>
									<tr>
										<td>
										<?php if($item->statut > 3 || !isset($item->statut)){ ?>
										<i class="material-icons user-icon red-text">person</i>
										<?php }elseif($item->statut > 1){ ?>
											<i class="material-icons user-icon green-text">person</i>
										<?php }else{ ?>
											<i class="material-icons user-icon">person</i>
										<?php } ?>
										</td>
										<td><?php echo $item->id; ?></td>
										<td><?php echo $item->nom; ?></td>
										<td><?php echo $item->prenom; ?></td>
										<td><?php echo $item->email; ?></td>
										<td><?php echo $item->adresse; ?></td>
										<td><?php echo $item->ville; ?></td>
										<td><?php echo $item->pays_libelle; ?></td>
										<td><?php echo $item->telephone; ?></td>
										<td><?php echo $item->date_entree; ?></td>
										<td><?php echo $item->statut_libelle; ?></td>
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
