<!-- ======================================================================= -->
<!-- Top bar -->
<nav class="top-nav blue darken-4">
	<div class="container">
		<div class="nav-wrapper">
			<!-- Bouton pour afficher la sidebar-->
			<a href="" class="button-collapse" data-activates="slide-out"><i class="mdi-navigation-menu"></i></a>

			<a href="<?php echo site_url('backoffice'); ?>" class="breadcrumb">Back-office</a>
			<span class="breadcrumb">Utilisateurs</span>
			<span class="breadcrumb">Chercher un utilisateur</span>
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
							<span class="card-title">
								<i class="material-icons prefix">
									search
								</i>
								Chercher un utilisateur
							</span>
							<form id="chercher_utilisateur" action="">
								<div class="input-field col s6 offset-s3" id="select">
									<select id="select_utilisateur">
										<option value="default" disabled selected>Sélectionner</option>
										<option value="id">ID</option>
										<option value="prenom">Prénom</option>
										<option value="nom">Nom</option>
										<option value="email">Email</option>
										<option value="adresse">Adresse</option>
										<option value="ville">Ville</option>
									</select>								</div>
								<div class="input-field col s6 offset-s3">
									<input placeholder="Recherche" id="recherche" type="text" class="validate" name="recherche">
								</div>

								<!-- Validation et envoi du formulaire -->
								<div class="row">
									<div class="input-field col s12">
										<button class="btn waves-effect waves-light submit-button" type="submit" name="submit">Lancer la recherche
											<i class="material-icons right">send</i>
										</button>
									</div>
								</div>
							</form>
						</div>
						<div class="card-content" id="resultat">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>