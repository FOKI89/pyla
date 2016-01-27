<?php require_once("header.php");?>
    <div class="container">
        <div class="section">
          <?php include "partials/nav_filter.php"; ?>
          <div class="row liste_produits">
            <?php include "partials/breadcrumb.php"; ?>
            <div class="col s12 m6 l4">
              <div class="card z-depth-0">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="img/top-product1.jpg" alt="">
                </div>
                <div class="card-content indigo lighten-5">
                  <span class="card-title activator grey-text text-darken-4">Titre du produit<i class="material-icons right">more_vert</i></span>
                  <form class="" action="" method="post">
                    <div class="input-field col s12 center">
                      <button class="btn waves-effect waves-light blue yellow-text" type="submit" name="ajout_panier">Ajouter au panier
                        <i class="material-icons right medium">shopping_cart</i>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="card-reveal indigo lighten-5">
                  <span class="card-title grey-text text-darken-4">Nom du produit<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  <a class="btn waves-effect waves-light blue yellow-text" href="produit.php">Zoom sur le produit <i class="material-icons left">zoom_in</i></a>
                </div>
              </div><!-- fin div card -->
            </div><!-- fin div col -->
            <div class="col s12 m6 l4">
              <div class="card z-depth-0">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="img/top-product1.jpg" alt="">
                </div>
                <div class="card-content indigo lighten-5">
                  <span class="card-title activator grey-text text-darken-4">Titre du produit<i class="material-icons right">more_vert</i></span>
                  <form class="" action="" method="post">
                    <div class="input-field col s12 center">
                      <button class="btn waves-effect waves-light blue yellow-text" type="submit" name="ajout_panier">Ajouter au panier
                        <i class="material-icons right medium">shopping_cart</i>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="card-reveal indigo lighten-5">
                  <span class="card-title grey-text text-darken-4">Nom du produit<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  <a class="btn waves-effect waves-light blue yellow-text" href="produit.php">Zoom sur le produit <i class="material-icons left">zoom_in</i></a>
                </div>
              </div><!-- fin div card -->
            </div><!-- fin div col -->
            <div class="col s12 m6 l4">
              <div class="card z-depth-0">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="img/top-product1.jpg" alt="">
                </div>
                <div class="card-content indigo lighten-5">
                  <span class="card-title activator grey-text text-darken-4">Titre du produit<i class="material-icons right">more_vert</i></span>
                  <form class="" action="" method="post">
                    <div class="input-field col s12 center">
                      <button class="btn waves-effect waves-light blue yellow-text" type="submit" name="ajout_panier">Ajouter au panier
                        <i class="material-icons right medium">shopping_cart</i>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="card-reveal indigo lighten-5">
                  <span class="card-title grey-text text-darken-4">Nom du produit<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  <a class="btn waves-effect waves-light blue yellow-text" href="produit.php">Zoom sur le produit <i class="material-icons left">zoom_in</i></a>
                </div>
              </div><!-- fin div card -->
            </div><!-- fin div col -->
            <div class="col s12 center">
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
          <?php include 'partials/best_sales.php'; ?>
        </div><!-- fin div section -->
    </div><!-- fin div container -->
<?php require_once("footer.php");?>
