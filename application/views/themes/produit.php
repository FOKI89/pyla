<div class="container">
	<div class="section">
		<?php $this->layout->views("themes/partials/breadcrumb"); ?>
		<h2 class="header center-on-small-only grey-text grey-darken-4-text"><?php echo $produit->libelle; ?></h2>
		<div class ="row produit">
			<div class="col s12 m6">
				<div class="card transparent z-depth-0">
					<div class="card-image">
						<img src="<?php echo img_url('produit/'.$produit->id.'/'.reset($produit->image)) ?>">
					</div>
				</div>
				<div class="card transparent">
					<?php foreach($produit->image as $image){ ?>
					<div class="card-image col s4">
						<img class="materialboxed" src="<?php echo img_url('produit/'.$produit->id.'/'.$image) ?>">
					</div>
					<?php }; ?>
				</div>
			</div>
			<div class="col s12 m6">
				<?php if(isset($produit->reference)){ ?>
					<p class="infos-produit bold">Référence</p>
					<p>
				<?php echo $produit->reference; }?></p>
				<?php if(isset($produit->reference)){ ?>
					<p class="infos-produit bold">Marque</p>
					<p><?php echo $produit->marque; }?></p>
				<?php if(isset($produit->description)){ ?>
					<p class="infos-produit bold">Description</p>
					<p><?php echo $produit->description; }?></p>
					<p class="infos-produit bold">Prix (€)</p>
					<p><span class="prix red-text darken-4-text bold"><?php echo $produit->prix; ?></span></p>
					<?php if(!empty($produit->prenom)){ ?>
					<p>Vendu par <a href="mailto:<?php echo $produit->email; ?>?subject=A propos de l'article <?php echo $produit->libelle; ?>" class="blue-text"><?php echo $produit->prenom.' '.$produit->nom; ?></a></p>
					<?php }elseif($produit->statut == "1"){ ?>
					<p>Vendu par <a href="mailto:<?php echo $_SESSION['site_email']; ?>?subject=A propos de l'article <?php echo $produit->libelle; ?>" class="blue-text"><?php echo $_SESSION['site_nom']; ?></a></p>
					<?php } ?>
					<div class="row">
						<form id="ajout_panier" action="" method="get">
							<div class="input-field col s12 center">
								<button class="btn waves-effect waves-light blue yellow-text" type="" name="ajout_panier" data-panier="<?php echo $produit->id; ?>">Ajouter au panier
									<i class="material-icons right medium">shopping_cart</i>
								</button>
							</div>
						</form>
					</div><!-- fin div row  -->
				</div> <!-- fin div col -->
			</div><!-- fin div row / produit -->
		</div><!-- fin div section -->
</div><!-- fin div container -->
