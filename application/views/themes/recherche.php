<div class="container">
	<div class="section">
    <div class="row liste_produits">
			<?php if(isset($produits) && !empty($produits)){ ?>
	      <?php foreach($produits as $produit){ ?>
	      <div class="col s12 m6 l4 product">
	        <div class="card z-depth-0">
	          <div class="card-image waves-effect waves-block waves-light">
	            <img class="activator" src="<?php echo img_url('produit/'.$produit->id.'/'.$produit->image); ?>" alt="">
	          </div>
	          <div class="card-content indigo lighten-5">
	            <span class="card-title activator grey-text text-darken-4"><?php echo $produit->libelle; ?><i class="material-icons right">more_vert</i></span>
	            <form class="" action="" method="post">
	              <div class="input-field col s12 center">
	                <button class="btn waves-effect waves-light blue yellow-text" type="submit" name="ajout_panier" value="<?php echo $produit->id; ?>">Ajouter au panier
	                  <i class="material-icons right medium">shopping_cart</i>
	                </button>
	              </div>
	            </form>
	          </div>
	          <div class="card-reveal indigo lighten-5">
	            <span class="card-title grey-text text-darken-4"><?php echo $produit->libelle; ?><i class="material-icons right">close</i></span>
	            <p><?php echo substr($produit->description,0,145)."...";?></p>
	            <a class="btn waves-effect waves-light blue yellow-text" href="<?php echo base_url().'produit/'.$produit->id; ?>">Zoom sur le produit <i class="material-icons left">zoom_in</i></a>
	          </div>
	        </div><!-- fin div card -->
	      </div><!-- fin div col -->
	      <?php }
			}else{ ?>
				<div class="col s12">
					<div class="card indigo lighten-5">
						<div class="card-content grey-text text-darken-3">
							<h2 class="card-title indigo-text">Aucun résultat</h2>
							<!-- start slipsum code -->
							<p>Oups, il n'y a aucun résultat à votre recherche,</p>
							<p>essayer une autre recherche, ou flaner dans notre boutique</p>
						</div>
					</div>
				</div>
			<?php } ?>
      <div class="col s12 center hide">
        <ul class="pagination">
          <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
          <li class="active"><a href="#!">1</a></li>
          <li class="waves-effect"><a href="#!">2</a></li>
          <li class="waves-effect"><a href="#!">3</a></li>
          <li class="waves-effect"><a href="#!">4</a></li>
          <li class="waves-effect"><a href="#!">5</a></li>
          <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
        </ul>
      </div>
    </div><!-- fin div row -->
