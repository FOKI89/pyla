<?php require_once("header.php");?>
    <div class="container">
        <div class="section">
          <?php include '/partials/breadcrumb.php'; ?>
          <h2 class="header center-on-small-only grey-text grey-darken-4-text">Statue représentant Toutancamion adolescent, réplique artisanale en terre cuite</h2>
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
                <p class="infos-produit bold">Description:</p>
                <p>Toutânkhamon doit sa célébrité à la découverte de sa sépulture par l'archéologue
                britannique Howard Carter le 4 novembre 1922 et au fabuleux trésor qu'elle recèle.
                La notoriété de la découverte augmenta grâce à une légende reprise par la presse
                de l'époque et faisant état d'une malédiction du pharaon.</p>
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
            <?php include 'partials/best_sales.php' ?>

        </div><!-- fin div section -->
    </div><!-- fin div container -->
<?php require_once("footer.php");?>
