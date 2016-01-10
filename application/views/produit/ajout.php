<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" > 
	<head>
		<title>Formulaire d'ajout d'un produit</title>
		<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $this->config->item('charset'); ?>" />
		<link rel="stylesheet" type="text/css" media="screen" href="<?php //echo css_url('livreor/style'); ?>" />
	</head>
	<body>
		<form method="post" action="<?php echo site_url('produit/ajout'); ?>" accept-charset="utf-8" enctype="multipart/form-data">
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
				<?php echo form_error('categories'); ?>
			</div>
			<div>
				<label>
					Image : <br />
					<input type="file" name="image" value="<?php echo set_value('image'); ?>" />
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
	</body>
</html>