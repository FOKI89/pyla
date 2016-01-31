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
			<!-- Carte principale -->
			<div class="row">
				<div class="col s12">
					<div class="card hoverable">
						<div class="card-content">
							<span class="card-title"><i class="material-icons">web</i> Pages</span>

							<!-- Titre -->
							<div class="row">
								<div class="input-field col s12">
									<input placeholder="Entrez le titre ici" id="titre_page" type="text" class="validate">
									<label for="titre_page">Titre de la page</label>
								</div>
							</div>

							<!-- Description -->
							<div class="row">
								<div class="input-field col s12">
									<textarea id="description_page" class="materialize-textarea" placeholder="Entrez la description ici"></textarea>
									<label for="description_page">Description de la page</label>
								</div>
							</div>

							<!-- Contenu -->
							<div class="row">
								<div class="input-field col s12">
									<textarea id="contenu_page" class="materialize-textarea" placeholder="Entrez le contenu ici"></textarea>
									<label for="contenu_page">Contenu de la page</label>
								</div>
							</div>

							<!-- Type de page -->
							<div class="row">
								<div class="input-field col s12">
									<select id="type_page" name="type_page">
										<option value="" disabled selected>Sélectionner</option>
										<option value="1">Option 1</option>
										<option value="2">Option 2</option>
										<option value="3">Option 3</option>
									</select>
									<label for="type_page">Type de page</label>
								</div>
							</div>

							<!-- Bouton d'envoi du formulaire-->
							<div class="row">
								<div class="col s12">
									<button class="btn waves-effect waves-light submit-button" type="submit" name="action">Valider
										<i class="material-icons right">send</i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>