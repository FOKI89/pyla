<div class="row products-container">
    <h2 class="header center-on-small-only indigo-text">Les tendances:</h2>
    <?php foreach($categories as $categorie){ ?>
    <div class="col s12 m12 l6 product">
        <div class="card">
            <div class="col m8 s12 main-part-product">
                  <div class="card-image">
                      <a href="#"><img src="img/img-test1.png">
                          <span class="card-title">Card Title</span>
                      </a>
                  </div>
                  <span class="card-title grey-text text-darken-3"><?php echo $categorie['libelle'];?></span>
                  <p class="grey-text text-darken-3 description-product">Les murs de pierres anciennes sont très tendance cette année,
                    aussi bien dans la décoration de nos intérieurs que sur le sol
                    de la chambre de nos enfants. Pour les fêtes, le père Noël doit
                    se préparer à en déposer en dessous de beaucoup ... <a href="#" class="blue-text">lire la suite</a></p>
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
    <?php } ?>



    <!-- <div class="col s12 m12 l6 product">
        <div class="card">
            <div class="col m8 s12 main-part-product">
                  <div class="card-image">
                      <a href="/produit.php"><img src="img/img-test2.jpg">
                          <span class="card-title">Card Title</span>
                      </a>
                  </div>
                  <span class="card-title grey-text text-darken-3">A vos murs !</span>
                  <p class="grey-text text-darken-3 description-product">Les murs de pierres anciennes sont très tendance cette année,
                    aussi bien dans la décoration de nos intérieurs que sur le sol
                    de la chambre de nos enfants. Pour les fêtes, le père Noël doit
                    se préparer à en déposer en dessous de beaucoup ... <a href="#" class="blue-text">lire la suite</a></p>
              </div>
            <div class="col m4 hide-on-small-only side-part-product">
                <div class="card-image">
                    <a href="#"><img src="img/test-mini4.jpg" alt=""></a>
                </div>
                <div class="card-image">
                    <a href="#"><img src="img/test-mini5.jpg" alt=""></a>
                </div>
                <div class="card-image">
                    <a href="#"><img src="img/test-mini6.jpg" alt=""></a>
                </div>
                <a href="#" class="bouton waves-effect waves-light yellow blue-text">Plus de 20 références!</a>
             </div>
        </div>
    </div>


    <div class="col s12 m12 l6 product">
        <div class="card">
            <div class="col m8 s12 main-part-product">
                  <div class="card-image">
                      <a href="/produit.php"><img src="img/img-test2.jpg">
                          <span class="card-title">Card Title</span>
                      </a>
                  </div>
                  <span class="card-title grey-text text-darken-3">A vos murs !</span>
                  <p class="grey-text text-darken-3 description-product">Les murs de pierres anciennes sont très tendance cette année,
                    aussi bien dans la décoration de nos intérieurs que sur le sol
                    de la chambre de nos enfants. Pour les fêtes, le père Noël doit
                    se préparer à en déposer en dessous de beaucoup ... <a href="#" class="blue-text">lire la suite</a></p>
              </div>
            <div class="col m4 hide-on-small-only side-part-product">
                <div class="card-image">
                    <a href="#"><img src="img/test-mini4.jpg" alt=""></a>
                </div>
                <div class="card-image">
                    <a href="#"><img src="img/test-mini5.jpg" alt=""></a>
                </div>
                <div class="card-image">
                    <a href="#"><img src="img/test-mini6.jpg" alt=""></a>
                </div>
                <a href="#" class="bouton waves-effect waves-light yellow blue-text">Plus de 20 références!</a>
             </div>
        </div>
    </div>

    <div class="col s12 m12 l6 product">
        <div class="card">
            <div class="col m8 s12 main-part-product">
                  <div class="card-image">
                      <a href="/produit.php"><img src="img/img-test1.png">
                          <span class="card-title">Card Title</span>
                      </a>
                  </div>
                  <span class="card-title grey-text text-darken-3">A vos murs !</span>
                  <p class="grey-text text-darken-3 description-product">Les murs de pierres anciennes sont très tendance cette année,
                    aussi bien dans la décoration de nos intérieurs que sur le sol
                    de la chambre de nos enfants. Pour les fêtes, le père Noël doit
                    se préparer à en déposer en dessous de beaucoup ... <a href="#" class="blue-text">lire la suite</a></p>
              </div>
            <div class="col m4 hide-on-small-only side-part-product">
                <div class="card-image">
                    <a href="#"><img src="img/test-mini1.jpg" alt=""></a>
                </div>
                <div class="card-image">
                    <a href="#"><img src="img/test-mini2.jpg" alt=""></a>
                </div>
                    <a href="#" class="bouton waves-effect waves-light yellow blue-text">This is a link</a>
             </div>
        </div>
    </div> -->
</div><!-- Fin div Row -->
