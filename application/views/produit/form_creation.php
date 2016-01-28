<form method="post" accept-charset="utf-8" id="new_product" />
	<div>
		<label for="libelle">
			Libellé * <br />
			<input type="text" id="libelle" name="libelle" value="<?php echo set_value('libelle'); ?>" title="Minimum 3 caractères" required / >
		</label>
	</div>
	<div>
		<label for="reference">
			Référence * <br />
			<input type="text" id="reference" name="reference" value="<?php echo set_value('reference'); ?>" title="Minimum 3 caractères" required />
		</label>
	</div>
	<div>
		<label for="marque">
			Marque * <br />
			<input type="text" id="marque" name="marque" value="<?php echo set_value('marque'); ?>" title="Minimum 3 caractères" required />
		</label>
	</div>
	<div>
		<label>
			Catégorie * <br />
			<?php echo form_dropdown('categories',$categories); ?>

		</label>
	</div>
	<div>
		<label for="image">
			Image * <br />
			<input type="file" id="image" name="image" value="<?php echo set_value('image'); ?>" required />
		</label>
	</div>
	<div>
		<label for="video">
			Vidéo : <br />
			<input type="url" id="video" name="video" value="<?php echo set_value('video'); ?>" />
		</label>
	</div>
	<p>
		<input type="submit" value="Valider" />
	</p>
</form>