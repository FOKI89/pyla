<form accept-charset="utf-8" id="new_user" >
	<label for="prenom">Prénom:</label>
	<input value="" id="prenom" type="text" class="validate" name="prenom">
	</br>
	<label for="nom">Nom:</label>
	<input value ="" id="nom" type="text" class="validate" name="nom">
	</br>
	<label for="email">Email:</label>
	<input value="" id="email" type="email" class="validate" name="email">
	</br>
	<label for="telephone">Téléphone:</label>
	<input value="" id="telephone" type="text" class="validate" name="telephone">
	</br>
	<label for="adresse">Adresse:</label>
	<input id="adresse" type="text" class="validate" name="adresse">
	</br>
	<label for="ville">Ville:</label>
	<input id="ville" type="text" class="validate" name="ville">
	</br>
	<label for="cp">Code Postal:</label>
	<input id="cp" type="text" class="validate" name="cp">
	</br>
	<label>
		Pays
		<?php echo form_dropdown("pays",$pays); ?>
	</label>
	</br>
	<label for="mdp">Mot de passe:</label>
	<input id="mdp" type="password" class="validate" name="mdp">
	<label for="confirm_mdp">Confirmation du mot de passe:</label>
	<input id="confirm_mdp" type="password" class="validate" name="confirm_mdp">
	<button class="btn waves-effect waves-light blue yellow-text " type="submit" name="inscription">S'inscrire
	</button>
</form>