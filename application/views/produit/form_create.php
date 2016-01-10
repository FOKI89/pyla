<?php echo form_open_multipart('produit/form_create');?>
	<div>
		<label>
			Libellé : <br />
			<input type="text" name="libelle" value="<?php echo set_value('libelle'); ?>" />
		</label>
		<?php echo form_error('libelle'); ?>
	</div>
	<div>
		<label>
			Référence : <br />
			<input type="text"  name="reference" value="<?php echo set_value('reference'); ?>" />
		</label>
		<?php echo form_error('reference'); ?>
	</div>
	<div>
		<label>
			Marque : <br />
			<input type="text" name="marque" value="<?php echo set_value('marque'); ?>" />
		</label>
		<?php echo form_error('marque'); ?>
	</div>
	<div>
		<label>
			Catégorie : <br />
			<?php echo form_dropdown('categories',$categories); ?>

		</label>
		<?php echo form_error('marque'); ?>
	</div>
	<div>
		<label>
			Image : <br />
			<input type="file" name="image[]" value="<?php echo set_value('image'); ?>" />
		</label>
		<?php echo form_error('image'); ?>
	</div>
	<div>
		<label>
			Vidéo : <br />
			<input type="file" name="video" value="<?php echo set_value('video'); ?>" />
		</label>
		<?php echo form_error('video'); ?>
	</div>
	<p>
		<input type="submit" value="Ajouter produit" />
	</p>
</form>