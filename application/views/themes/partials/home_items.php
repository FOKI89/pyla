<div class="row products-container">
	<h2 class="header center-on-small-only indigo-text">Les tendances</h2>
	<?php foreach($categories as $categorie){ ?>
	<div class="col s12 m12 l6 product">
			<div class="col s12 m8 card transparent z-depth-0">
				<div class="card-image waves-effect waves-block waves-light">
					<?php if(isset(reset($categorie['produits'])['img'])){ ?>
						<img class="activator" src="<?php echo img_url('produit/'.$categorie['produits'][0]["id"].'/'.reset($categorie['produits'])['img']); ?>" alt="">
					<?php }else{ ?>
							<p class="empty-image grey darken-4 grey-text text-lighten-1 activator center">Image non disponible</p>
				 <?php } ?>
				</div>
				<div class="card-content indigo lighten-5">
					<span class="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i><?php echo $categorie['libelle'];?></span>
					<form class="" action="" method="post">
						<div class="input-field col s12 center">
							<button class="btn waves-effect waves-light blue yellow-text" type="submit" name="ajout_panier" value="<?php echo $categorie['id']; ?>">Ajouter au panier
								<i class="material-icons right medium">shopping_cart</i>
							</button>
						</div>
					</form>
				</div>
				<div class="card-reveal indigo lighten-5">
					<span class="card-title grey-text text-darken-4"><?php echo $categorie['libelle']; ?><i class="material-icons right">close</i></span>
					<p><?php if(isset($categorie['description'])) echo substr($categorie['description'],0,165)."...";?></p>
					<a class="btn waves-effect waves-light blue yellow-text" href="<?php echo base_url().'categorie/'.$categorie['id'];?>">En savoir<i class="material-icons right">add</i></a>
				</div>
			</div>
			<div class="card transparent col m4 hide-on-small-only side-part-product z-depth-0">
					<?php foreach($categorie['produits'] as $item){ ?>
					<div class="card-image">
						<a href="<?php echo site_url('produit/'.$item['id']); ?>"><img src="<?php echo img_url('produit/'.$item["id"].'/'.$item["img"]) ?>" alt=""/></a>
					</div>
					<?php } ?>
				</div>
		</div>
	<?php } ?>
</div><!-- Fin div Row -->
