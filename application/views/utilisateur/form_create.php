<form accept-charset="utf-8" id="new_user" >
	<input value="" id="prenom" type="text" class="validate" name="prenom">
	<label for="prenom">Prénom:</label>
	<input value ="" id="nom" type="text" class="validate" name="nom">
	<label for="nom">Nom:</label>
	<input value="" id="email" type="email" class="validate" name="email">
	<label for="email">Email:</label>
	<input value="" id="telephone" type="text" class="validate" name="telephone">
	<label for="email">Téléphone:</label>
	<input id="adresse" type="text" class="validate" name="adresse">
	<label for="adresse">Adresse:</label>
	<input id="ville" type="text" class="validate" name="ville">
	<label for="ville">Ville:</label>
	<input id="cp" type="text" class="validate" name="cp">
	<label for="cp">Code Postal:</label>
		<div>
		<label>
			Pays<br />
			<?php echo form_dropdown('pays',$pays); ?>

		</label>
	</div>
	<input id="mdp" type="password" class="validate" name="mdp">
	<label for="mdp">Mot de passe:</label>
	<input id="confirm_mdp" type="password" class="validate" name="confirm_mdp">
	<label for="confirm_mdp">Confirmation du mot de passe:</label>
	<button class="btn waves-effect waves-light blue yellow-text " type="submit" name="inscription">S'inscrire
	</button>
</form>