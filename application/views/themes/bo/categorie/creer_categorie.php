<!-- ======================================================================= -->
<!-- Top bar -->
<nav class="top-nav blue darken-4">
	<div class="container">
		<div class="nav-wrapper">
			<!-- Bouton pour afficher la sidebar-->
			<a href="" class="button-collapse" data-activates="slide-out"><i class="mdi-navigation-menu"></i></a>

			<a href="<?php echo site_url('backoffice'); ?>" class="breadcrumb">Back-office</a>
			<span class="breadcrumb">Catégorie</span>
			<span class="breadcrumb">Créer une catégorie</span>
		</div>
	</div>
</nav>
<!-- ======================================================================= -->
<!-- CONTENU PRINCIPAL-->
<!-- Conteneur -->
<div class="container">
	<!-- Center row -->
	<div class="row ">
		<div class="col s12">
			<!-- ======================================================================= -->
			<!-- Formulaire de création d'utilisateur -->
			<div class="row">
				<div class="col s12">
					<div class="card hoverable" >
						<div class="card-content">
							<span class="card-title"><i class="material-icons prefix">create</i> Créer une catégorie</span>
							<form id="creer_categorie" action="">
								<div class="row">
									<div class="input-field col s12 m6">
										<input id="libelle" type="text" class="validate" name="libelle">
										<label for="libelle">Libellé</label>
									</div>
									<div class="input-field col s12 m6 select-damous grey-text">
										<?php echo form_dropdown("id_parent",$categorie, "", "class='validate' id='select_parent'"); ?>
									</div>
								<div class="row">
									<div class="input-field col s12 m6">
										<input type="checkbox" name="top" id="top"  value="off"/>
										<label for="top">En avant</label>
									</div>
									<div class="input-field col s12 m6">
										<input type="checkbox" name="home" id="home"  value="off"/>
										<label for="home">Lien vers accueil</label>
									</div>
								</div>
								</div>
								<!-- Validation et envoi du formulaire -->
								<div class="row">
									<div class="input-field col s12 center-align">
										<button class="btn waves-effect waves-light submit-button" type="submit" name="action">Valider
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