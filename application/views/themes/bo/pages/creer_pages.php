<!-- ======================================================================= -->
<!-- Top bar -->
<nav class="top-nav blue darken-4">
	<div class="container">
		<div class="nav-wrapper">
			<!-- Bouton pour afficher la sidebar-->
			<a href="" class="button-collapse" data-activates="slide-out"><i class="mdi-navigation-menu"></i></a>

			<a href="<?php echo site_url('backoffice'); ?>" class="breadcrumb">Back-office</a>
			<span class="breadcrumb">Pages</span>
			<span class="breadcrumb">Créer Page</span>
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
							<span class="card-title"><i class="material-icons">web</i>Créer une Page</span>
							<!-- Titre -->
							<form id="creer_page" action="#">
								<div class="row">
									<div class="input-field col s12">
										<input placeholder="Entrez le titre ici" id="titre_page" name="titre" type="text" class="validate">
										<label for="titre_page">Titre de la page</label>
									</div>
								</div>

								<!-- Contenu -->
								<div class="row">
									<div class="input-field col s12">
										<textarea id="contenu_page" name="contenu" class="materialize-textarea" placeholder="Entrez le contenu ici"></textarea>
										<label for="contenu_page">Contenu de la page</label>
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
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
