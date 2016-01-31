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
<div class="container">
	<!-- Center row -->
	<div class="row ">
		<div class="col s12 center-align">
			<!-- ======================================================================= -->
			<!-- Formulaire de recherche d'utilisateur -->
			<div class="row">
				<div class="col s12">
					<div class="card hoverable">
						<div class="card-content">
							<span class="card-title"><i class="material-icons prefix">search</i> Chercher un article</span>
							<form action="">
								<!-- Recherche par nom -->
								<div class="row">
									<div class="input-field col s12 m6">
										<input placeholder="Entrez votre texte ici" id="nom_produit" type="text" class="validate">
										<label for="first_name">Nom du produit</label>
									</div>
									<!-- Recherche par référence -->
									<div class="input-field col s12 m6">
										<input placeholder="Entrez votre texte ici" id="reference_produit" type="text" class="validate">
										<label for="reference_produit">Référence du produit</label>
									</div>
								</div>
								<!-- Recherche par prix -->
								<div class="row valign-wrapper">
									<div class="col s4 m2">
										<p>Prix (en €) :</p>
									</div>
									<div class="input-field col s8 m10">
										<div id="price_range"></div>
										<input type="hidden" id="prix_min" name="prix_min">
										<input type="hidden" id="prix_max" name="prix_max">

									</div>
								</div>

								<!-- Validation et envoi du formulaire -->
								<div class="row">
									<div class="input-field col s12">
										<button class="btn waves-effect waves-light submit-button" id="valider_recherche_produit" type="submit" name="action">Lancer la recherche
											<i class="material-icons right">send</i>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>