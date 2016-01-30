<div class="container">
	<div class="section">
		<?php $this->layout->views("themes/partials/breadcrumb"); ?>
		<h2 class="header center-on-small-only grey-text grey-darken-4-text"><?php echo $produit->libelle; ?></h2>
		<div class ="row produit">
			<div class="col s12 m6">
				<div class="card">
					<div class="card-image">
						<img src="img/top-product1.jpg">
					</div>
				</div>
				<div class="card">
					<div class="card-image col s4">
						<a href=""><img src="img/top-product1.jpg"></a>
					</div>
					<div class="card-image col s4">
						<a href=""><img src="img/top-product1.jpg"></a>
					</div>
					<div class="card-image col s4">
						<a href=""><img src="img/top-product1.jpg"></a>
					</div>
				</div>
			</div>
			<div class="col s12 m6">
				<?php if(isset($description)){ ?> 
				<p class="infos-produit bold">Description:</p>
				<p><?php echo $description; ?></p>
				<?php }; ?>
					<p class="infos-produit bold">Le meilleur prix:</p>
					<p><span class="prix red-text darken-4-text bold">103.30€</span> + frais de port(<span class="bold">30€</span>)</p>
					<p>Vendu par <a href="#" class="blue-text">Prixdedingue</a></p>
					<div class="row">
						<form id="ajout_panier" action="" method="get">
							<div class="input-field col s12 center">
								<select class="icon validate">
									<option value="" disabled selected>Quantité</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>
							</div>
							<div class="input-field col s12 center">
								<button class="btn waves-effect waves-light blue yellow-text" type="submit" name="ajout_panier">Ajouter au panier
									<i class="material-icons right medium">shopping_cart</i>
								</button>
							</div>
						</form>
					</div><!-- fin div row  -->
				</div> <!-- fin div col -->
			</div><!-- fin div row / produit -->
		</div><!-- fin div section -->
</div><!-- fin div container -->