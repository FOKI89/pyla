<?php require_once("header.php");?>
    <div class="container">
        <div class="section">
          <h1 class="header center-on-small-only grey-text grey-darken-4-text">Espace Personnel</h1>
            <div class ="row">
                <?php include "partials/nav-account.php";?>
                <div class="col l8">
                  <div class="dashboard-account">
                    <h2>Dashboard</h2>
                    <p>Bienvenue dans votre espace personnel Ludovic</p>
                    <div class="card col l6">
                      <div class="card-content">
                        <h3>Dernière Commande:</h3>
                        <p>Arche antique - 03 Mars 2016</p>
                        <p>150€</p>
                      </div>
                    </div>
                    <div class="card col l6">
                      <div class="card-content">
                        <h3>Dernier Commentaire:</h3>
                        <p>Arche antique - 03 Mars 2016</p>
                        <p>Super produit, dommage qu'il n'y est pas plus...</p>
                      </div>
                    </div>
                    <div class="card col l6">
                      <div class="card-content">
                        <h3>Dernier Vente:</h3>
                        <p>Arche antique - 14 Avril 2016</p>
                        <p>Super produit, dommage qu'il n'y est pas plus...</p>
                      </div>
                    </div>
                    <div class="card col l6">
                      <div class="card-content">
                        <h3>Dernier</h3>
                        <p>Arche antique - 03 Mars 2016</p>
                        <p>Super produit, dommage qu'il n'y est pas plus...</p>
                      </div>
                    </div>
                  </div> <!-- fin div dashboard -->

                  <div class="informations-personnelles">

                    <div class="row">
                      <h2>Mes informations personnelles</h2>
                      <p>Je peux modifier mes informations personnelles.</p>
                      <form class="col s12">
                        <div class="row">
                          <div class="input-field col s6">
                            <input value="Arnold" placeholder="Placeholder" id="first_name" type="text" class="validate">
                            <label for="first_name">Prénom:</label>
                          </div>
                          <div class="input-field col s6">
                            <input value ="Schwarzenegger" id="last_name" type="text" class="validate">
                            <label for="last_name">Nom:</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s6">
                            <input id="adresse" type="text" class="validate">
                            <label for="adresse">Adresse:</label>
                          </div>
                          <div class="input-field col s6">
                            <input id="ville" type="text" class="validate">
                            <label for="ville">Ville:</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s6">
                            <input id="codePostal" type="text" class="validate">
                            <label for="codePostal">Code Postal:</label>
                          </div>
                          <div class="input-field col s6">
                            <input id="pays" type="text" class="validate">
                            <label for="pays">Pays:</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <input disabled value="I am not editable" id="disabled" type="text" class="validate">
                            <label for="disabled">Disabled</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <input id="password" type="password" class="validate">
                            <label for="password">Mot de passe:</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <input value="Conan@terminator.com" id="email" type="email" class="validate">
                            <label for="email">Email:</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <input id="submit" type="submit" value="Valider" class="validate">
                          </div>
                        </div>
                      </form>
                    </div>
                  </div><!-- fin div informations personnelles -->


                </div><!-- fin div contenu account -->
            </div><!-- fin div row -->
        </div><!-- fin div section -->
    </div><!-- fin div container -->
<?php require_once("footer.php");?>
