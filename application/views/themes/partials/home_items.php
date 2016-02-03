<div class="row products-container">
	<h2 class="header center-on-small-only indigo-text">Les tendances:</h2>
	<?php foreach($categories as $categorie){ ?>
	<div class="col s12 m12 l6 product">
		<div class="card">
			<div class="col m8 s12 main-part-product">
				<div class="card-image">
					<?php if(isset(reset($categorie['produits'])['img'])){ ?>
					<a href="#"><img src="<?php echo img_url('produit/'.$categorie['produits'][0]["id"].'/'.reset($categorie['produits'])['img']); ?>">
						<?php } ?>
					</a>
				</div>
				<span class="card-title grey-text text-darken-3"><?php echo $categorie['libelle'];?></span>
				<p class="grey-text text-darken-3 description-product"><?php if(isset($categorie['categorie'])) echo $categorie['categorie'];?><a href="#" class="blue-text"></a></p>
			</div>
			<div class="col m4 hide-on-small-only side-part-product">
				<?php foreach($categorie['produits'] as $item){ ?>
				<div class="card-image">
					<a href="<?php echo site_url('produit/'.$item['id']); ?>"><img src="<?php echo img_url('produit/'.$item["id"].'/'.$item["img"]) ?>" alt=""/></a>
				</div>
				<?php } ?>
				<a href="#" class="bouton waves-effect waves-light yellow blue-text">This is a link</a>
			</div>
		</div>
	</div>
	<?php ; } ?>
</div><!-- Fin div Row -->
