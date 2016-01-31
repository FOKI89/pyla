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
					<div class="card">
						<div class="card-content">
							<span class="card-title"><i class="material-icons prefix">create</i> Créer un critère</span>
							<form action="#">
								<div class="row">
									<!-- Libéllé -->
									<div class="input-field col s12 m8">
										<input placeholder="Entrez le libellé ici" id="libelle" type="text" class="validate">
										<label for="first_name">Libéllé</label>
									</div>

									<!-- Unité -->
									<div class="input-field col s12 m4">
										<input placeholder="Entrez l'unité ici" id="unite" type="text" class="validate" length="16">
										<label for="first_name" data-error="Texte trop long !" data-success="OK !">Unité</label>
									</div>
								</div>

								<!-- Bouton d'envoi du formulaire -->
								<div class="row">
									<div class="col s12">
										<button class="btn waves-effect waves-light submit-button" type="submit" name="action">Valider la création
											<i class="material-icons right">send</i>
										</button>
									</div>
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