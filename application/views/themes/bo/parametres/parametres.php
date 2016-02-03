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
		<div class="col s12">
			<!-- ======================================================================= -->
			<div class="row">
				<div class="col s12">
					<div class="card hoverable">
						<div class="card-content black-text">
							<div class="center-align">
								<span class="card-title"><i class="material-icons prefix">search</i> Paramètres</span>
							</div>
							<!-- Formulaire de réglage des paramètres -->
							<form id="parametre" action="">
								<!-- Nom du site -->
								<div class="row">
									<div class="input-field col s12">
										<i class="material-icons prefix">language</i>
										<input id="nom" type="text" class="validate" name="nom">
										<label for="nom">Nom du site</label>
									</div>
								</div>

								<!-- E-mail de contact-->
								<div class="row">
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">email</i>
										<input id="email" type="email" class="validate" name="email">
										<label for="email" data-error="Format incorrect" data-success="Format correct !">Email de contact</label>
									</div>

									<!-- Téléphone -->
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">phone</i>
										<input id="telephone" type="text" name="telephone">
										<label for="telephone">Téléphone de contact</label>
									</div>
								</div>
									
								<!-- Adresse et ville -->
								<div class="row">
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">room</i>
										<input id="adresse" type="text" class="validate" name="adresse">
										<label for="adresse">Adresse de contact</label>
									</div>

									<div class="input-field col s12 m6">
										<i class="material-icons prefix">label</i>
										<input id="ville" type="text" class="validate" name="ville">
										<label for="ville">Ville</label>
									</div>
								</div>

								<!-- Code Postal et pays -->
								<div class="row">
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">room</i>
										<input id="cp" type="text" class="validate" name="cp">
										<label for="cp">Code postal</label>
									</div>

									<div class="input-field col s12 m6" id="select_pays">
										<i class="material-icons prefix">label</i>
										<?php echo form_dropdown("id_pays",$pays,'',"class='validate grey-text select_pays_param' id='select_pays'"); ?>
										<label for="pays">Pays</label>
									</div>
								</div>

								<!-- Logo du site -->
								<div class="row">
									<div class="file-field input-field col s12">
										<div class="btn blue darken-4">
											<span>Logo</span>
											<input id="logo" type="file" class="validate" name="logo">
										</div>
										<div class="file-path-wrapper">
											<input class="file-path validate" type="text">
										</div>
									</div>
								</div>

								<!-- Bouton d'envoi -->
								<div class="row">
									<div class="col s12 center-align">
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