	<div class="container">
		<div class="section">
			<h1 class="header center-on-small-only grey-text grey-darken-4-text">Inscription</h1>
			<div class ="row">
				<div class="subscribe col s12">
					<h2 class="blue-text darken-4-text">Rejoignez-nous</h2>
					<p>Entrer les informations suivantes pour créer votre compte</p>
					<p class="required-fields red-text darken-4-text"><i class=" tiny material-icons">star_rate</i>Champs requis</p>
					<div class="divider"></div>
					<form id="new_user" class="col s12" action="">
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">account_circle</i>
								<p class="required-fields red-text darken-4-text"><i class=" tiny material-icons">star_rate</i></p>
								<input value="" id="prenom" type="text" class="validate" name="prenom">
								<label for="prenom">Prénom:</label>
							</div>
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">perm_identity</i>
								<p class="required-fields red-text darken-4-text"><i class=" tiny material-icons">star_rate</i></p>
								<input value ="" id="nom" type="text" class="validate" name="nom">
								<label for="nom">Nom:</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">email</i>
								<p class="required-fields red-text darken-4-text"><i class=" tiny material-icons">star_rate</i></p>
								<input value="" id="email" type="email" class="validate" name="email">
								<label for="email">Email:</label>
							</div>
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">phone</i>
								<input value="" id="telephone" type="text" class="validate" name="telephone">
								<label for="telephone">Téléphone:</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">room</i>
								<input id="adresse" type="text" class="validate" name="adresse">
								<label for="adresse">Adresse:</label>
							</div>
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">label</i>
								<input id="ville" type="text" class="validate" name="ville">
								<label for="ville">Ville:</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">label</i>
								<input id="cp" type="text" class="validate" name="cp">
								<label for="cp">Code Postal:</label>
							</div>
							<div class="input-field col s12 m6 select-damous">
								<i class="material-icons prefix blue-text darken-4-text">label</i>
								<?php echo form_dropdown("pays",$pays); ?>
								<label for="pays">Pays:</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">lock_open</i>
								<p class="required-fields red-text darken-4-text"><i class=" tiny material-icons">star_rate</i></p>
								<input id="mdp" type="password" class="validate" name="mdp">
								<label for="mdp">Mot de passe:</label>
							</div>
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">lock_outline</i>
								<p class="required-fields red-text darken-4-text"><i class=" tiny material-icons">star_rate</i></p>
								<input id="confirm_mdp" type="password" class="validate" name="confirm_mdp">
								<label for="confirm_mdp">Confirmation du mot de passe:</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 center">
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
