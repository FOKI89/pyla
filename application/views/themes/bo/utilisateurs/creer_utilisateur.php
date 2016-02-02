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
		<div class="col s12">
			<!-- ======================================================================= -->
			<!-- Formulaire de création d'utilisateur -->
			<div class="row">
				<div class="col s12">
					<div class="card hoverable" >
						<div class="card-content">
							<span class="card-title"><i class="material-icons prefix">person_add</i> Créer un compte</span>
							<form id="creer_compte" action="">
								<div class="row">
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">account_circle</i>
										<input id="prenom" type="text" class="validate" name="prenom">
										<label for="prenom">Prénom</label>
									</div>
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">perm_identity</i>
										<input id="nom" type="text" class="validate" name="nom">
										<label for="nom">Nom</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">email</i>
										<input id="email" type="text" class="validate" name="email">
										<label for="email">Email</label>
									</div>
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">phone</i>
										<input id="telephone" type="text" class="validate" name="telephone">
										<label for="telephone">Téléphone</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">room</i>
										<input id="adresse" type="text" class="validate" name="adresse">
										<label for="adresse">Adresse</label>
									</div>
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">label</i>
										<input id="ville" type="text" class="validate" name="ville">
										<label for="ville">Ville</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">room</i>
										<input id="cp" type="text" class="validate" name="cp">
										<label for="cp">Code Postal</label>
									</div>
									<div class="input-field col s12 m6" id="select_pays">
										<i class="material-icons prefix">label</i>
										<?php echo form_dropdown("pays",$pays,'',"class='validate'"); ?>
										<label for="pays">Pays</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">lock</i>
										<input id="mdp" type="password" class="validate" name="mdp">
										<label for="mdp">Mot de passe</label>
									</div>
									<div class="input-field col s12 m6">
										<i class="material-icons prefix">lock_outline</i>
										<input id="confirm_mdp" type="password" class="validate" name="confirm_mdp">
										<label for="confirm_mdp">Entrez à nouveau le mot de passe</label>
									</div>
								</div>
								</div>
								<!-- Validation et envoi du formulaire -->
								<div class="row">
									<div class="input-field col s12 center-align">
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