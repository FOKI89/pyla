<form accept-charset="utf-8" id="new_user" >
	<label for="prenom">Prénom:</label>
	<input value="<?php echo $prenom; ?>" id="prenom" type="text" name="prenom">
	</br>
	<label for="nom">Nom:</label>
	<input value ="<?php echo $nom; ?>" id="nom" type="text" name="nom">
	</br>
	<label for="email">Email:</label>
	<input value="<?php echo $email; ?>" id="email" type="email" name="email">
	</br>
	<label for="email">Téléphone:</label>
	<input value="<?php echo $telephone; ?>" id="telephone" type="text" name="telephone">
	</br>
	<label for="adresse">Adresse:</label>
	<input value="<?php echo $adresse; ?>" id="adresse" type="text" name="adresse">
	</br>
	<label for="ville">Ville:</label>
	</br>
	<input value="<?php echo $ville; ?>" id="ville" type="text" name="ville">
	</br>
	<label for="cp">Code Postal:</label>
	<input value="<?php echo $cp; ?>"id="cp" type="text" name="cp">
	</br>
	<label>
		Pays
		<?php echo form_dropdown("id_pays",$pays,$id_pays); ?>
	</label>
	</br>
	<label for="old_mdp">Actuel mot de passe:</label>
	<input value="" id="old_mdp" type="password" name="old_mdp">
	<label for="new_mdp">Nouveau mot de passe:</label>
	<input value="" id="new_mdp" type="password" name="new_mdp">
	<label for="confirm_mdp">Confirmation du mot de passe:</label>
	<input value="" id="confirm_mdp" type="password" name="confirm_mdp">
	<button type="submit" name="submit">Mettre à jour
	</button>
</form>