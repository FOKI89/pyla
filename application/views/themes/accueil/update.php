	<div class="container">
		<div class="section">
			<h2 class="header center-on-small-only grey-text grey-darken-4-text">Coordonnées</h2>
			<div class ="row">
				<div class="subscribe col s12">
					<h2 class="blue-text darken-4-text">Modification</h2>
					<p>Modifier les informations suivantes pour mettre à jour votre compte</p>
					<p class="required-fields red-text darken-4-text"><i class=" tiny material-icons">star_rate</i>Champs requis</p>
					<div class="divider"></div>
					<form id="modif_user" class="col s12" action="">
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">account_circle</i>
								<p class="required-fields red-text darken-4-text"><i class=" tiny material-icons">star_rate</i></p>
								<input id="prenom" type="text" class="validate" name="prenom" value="<?php echo $prenom ?>">
								<label for="prenom">Prénom</label>
							</div>
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">perm_identity</i>
								<p class="required-fields red-text darken-4-text"><i class=" tiny material-icons">star_rate</i></p>
								<input id="nom" type="text" class="validate" name="nom" value="<?php echo $nom; ?>">
								<label for="nom">Nom</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">email</i>
								<p class="required-fields red-text darken-4-text"><i class=" tiny material-icons">star_rate</i></p>
								<input id="email" type="email" class="validate" name="email" value="<?php echo $email; ?>">
								<label for="email">Email</label>
							</div>
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">phone</i>
								<input id="telephone" type="text" class="validate" name="telephone" value="<?php echo $telephone; ?>">
								<label for="telephone">Téléphone</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">room</i>
								<input id="adresse" type="text" class="validate" name="adresse" value="<?php echo $adresse; ?>">
								<label for="adresse">Adresse</label>
							</div>
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">label</i>
								<input id="ville" type="text" class="validate" name="ville" value="<?php echo $ville; ?>">
								<label for="ville">Ville</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">label</i>
								<input id="cp" type="text" class="validate" name="cp" value="<?php echo $cp; ?>">
								<label for="cp">Code Postal</label>
							</div>
							<div class="input-field col s12 m6" id="select_pays">
								<i class="material-icons prefix blue-text darken-4-text">label</i>
								<?php echo form_dropdown("id_pays",$pays,$id_pays); ?>
								<label for="id_pays">Pays</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">lock_open</i>
								<input id="old_mdp" type="password" class="validate" name="old_mdp">
								<label for="old_mdp">Ancien mot de passe</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">lock_open</i>
								<input id="new_mdp" type="password" class="validate" name="new_mdp">
								<label for="new_mdp">Nouveau mot de passe</label>
							</div>
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">lock_outline</i>
								<input id="confirm_mdp" type="password" class="validate" name="confirm_mdp">
								<label for="confirm_mdp">Confirmation du mot de passe</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12">
								<button class="btn waves-effect waves-light blue yellow-text " type="submit" name="connection">S'inscrire
									<i class="material-icons right">send</i>
								</button>
							</div>
						</div>
					</form>
				</div><!-- fin div connection -->
			</div>
		</div><!-- fin div row -->
	</div><!-- fin div section -->
</div><!-- fin div container -->