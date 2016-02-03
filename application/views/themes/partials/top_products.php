<div class="row top-products">
    <h2 class="header center-on-small-only indigo-text">Le top du top</h2>
    <?php foreach($produits as $produit){ ?>
    <div class="col l4 m4 s12 center-on-small-only">
        <img src="<?php echo img_url('produit/'.$produit["id"].'/'.$produit["img"]); ?>">
        <div class="top-products-link-hover">
            <p class="white-text"><?php echo $produit["libelle"]; ?></p>
			<a class="bouton waves-effect waves-light yellow blue-text" href="<?php echo base_url().'produit/' .$produit['id']; ?>">En savoir plus</a>
		</div>
    </div>
    <?php } ?>
</div>