<!-- ======================================================================= -->
<!-- Top bar -->
<nav class="top-nav blue darken-4">
	<div class="container">
		<div class="nav-wrapper">
			<!-- Bouton pour afficher la sidebar-->
			<a href="" class="button-collapse" data-activates="slide-out"><i class="mdi-navigation-menu"></i></a>

			<a href="<?php echo site_url('backoffice'); ?>" class="breadcrumb">Back-office</a>
			<span class="breadcrumb">Utilisateurs</span>
			<span class="breadcrumb">Créer un compte</span>
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
			<!-- Formulaire de création d'utilisateur -->
			<div class="row">
				<div class="col s12">
					<div class="card hoverable">
						<div class="card-content">
							<span class="card-title"><i class="material-icons prefix">person_add</i> Créer un compte</span>

							<form action="">

								<div class="row">
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">account_circle</i>
										<input id="first_name" type="text" class="validate">
										<label for="first_name">Votre prénom</label>
									</div>
									<div class="input-field col s12 m6">
										<input id="last_name" type="text" class="validate">
										<label for="last_name">Votre nom</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">lock</i>
										<input id="password" type="password" class="validate">
										<label for="password">Mot de passe</label>
									</div>
									<div class="input-field col s12 m6">
										<input id="password" type="password" class="validate">
										<label for="password">Entrez à nouveau votre mot de passe</label>
									</div>
								</div>

								<div class="row">
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">contact_mail</i>
										<input id="email" type="email" class="validate">
										<label for="email" data-success="OK !" data-error="Format incorrect !">Adresse e-mail</label>
									</div>
									<div class="input-field col s12 m6">
										<input id="email" type="email" class="validate">
										<label for="email" data-success="OK !" data-error="Format incorrect !">Entrez à nouveau votre adresse e-mail</label>
									</div>
								</div>
								<!-- Validation et envoi du formulaire -->
								<div class="row">
									<div class="input-field col s12">
										<button class="btn waves-effect waves-light submit-button" type="submit" name="action">Créer votre compte
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