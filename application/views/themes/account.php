<?php require_once("header.php");?>
    <div class="container">
        <div class="section">
          <h1 class="header center-on-small-only grey-text grey-darken-4-text">Espace Personnel</h1>
            <div class ="row">
                  <?php include "partials/nav-account.php";?>
                  <div class="col l8 s12">
                    <div class="dashboard-account active-account">
                      <h2>Dashboard</h2>
                      <p>Bienvenue dans votre espace personnel Ludovic</p>
                      <div class="divider"></div>
                      <div class="card col m6 s12 z-depth-0">
                        <div class="card-content blue lighten-4">
                          <h3>Dernière Commande:</h3>
                          <div class="divider grey darken-4"></div>
                          <p>Arche antique - 03 Mars 2016</p>
                          <p>150€</p>
                          <a href="" class="blue-text"><i class="tiny material-icons">play_arrow</i> En détail</a>
                        </div>
                      </div>
                      <div class="card col m6 s12 z-depth-0">
                        <div class="card-content indigo lighten-4">
                          <h3>Dernier Commentaire:</h3>
                          <div class="divider grey darken-4"></div>
                          <p>Arche antique - 03 Mars 2016</p>
                          <p>Super produit, dommage qu'il n'y est pas plus...</p>
                          <a href="" class="blue-text"><i class="tiny material-icons">play_arrow</i> En détail</a>
                        </div>
                      </div>
                      <div class="card col m6 s12 z-depth-0">
                        <div class="card-content deep-purple lighten-4">
                          <h3>Dernier Vente:</h3>
                          <div class="divider grey darken-4"></div>
                          <p>Arche antique - 14 Avril 2016</p>
                          <p>Super produit, dommage qu'il n'y est pas plus...</p>
                          <a href="" class="blue-text"><i class="tiny material-icons">play_arrow</i> En détail</a>
                        </div>
                      </div>
                      <div class="card col m6 s12 z-depth-0">
                        <div class="card-content purple lighten-5">
                          <h3>Infos</h3>
                          <div class="divider grey darken-4"></div>
                          <p>Arche antique - 03 Mars 2016</p>
                          <p>Super produit, dommage qu'il n'y est pas plus...</p>
                          <a href="" class="blue-text"><i class="tiny material-icons">play_arrow</i> En détail</a>
                        </div>
                      </div>
                      <div class="divider"></div>
                    </div> <!-- fin div dashboard -->
                    <div class="informations-personnelles-account">
                      <div class="row">
                        <h2>Mes informations personnelles</h2>
                        <p>Je peux modifier mes informations personnelles.</p>
                        <div class="divider"></div>
                        <form id="modification-account" class="col s12" action="">
                            <div class="row">
                              <div class="input-field col s12 m6">
                                <i class="material-icons prefix blue-text darken-4-text">account_circle</i>

                                <input value="Arnold" id="first_name" type="text" class="validate" name="firstname">
                                <label for="first_name">Prénom:</label>
                              </div>
                              <div class="input-field col s12 m6">
                                <i class="material-icons prefix blue-text darken-4-text">perm_identity</i>

                                <input value ="Schwarzenegger" id="last_name" type="text" class="validate" name="lastname">
                                <label for="last_name">Nom:</label>
                              </div>
                            </div>
                            <div class="row">
                              <div class="input-field col s12 m6">
                                <i class="material-icons prefix blue-text darken-4-text">email</i>

                                <input value="Conan@predator.com" id="email" type="email" class="validate" name="email">
                                <label for="email">Email:</label>
                              </div>
                              <div class="input-field col s12 m6">
                                <i class="material-icons prefix blue-text darken-4-text">phone</i>
                                <input value="+5049536953" id="telephone" type="text" class="validate" name="telephone">
                                <label for="email">Téléphone:</label>
                              </div>
                            </div>
                            <div class="row">
                              <div class="input-field col s12 m6">
                                <i class="material-icons prefix blue-text darken-4-text">room</i>
                                <input value="580 Skynet boulevard" id="adresse" type="text" class="validate" name="address">
                                <label for="adresse">Adresse:</label>
                              </div>
                              <div class="input-field col s12 m6">
                                <i class="material-icons prefix blue-text darken-4-text">label</i>
                                <input value="San francisco" id="ville" type="text" class="validate" name="city">
                                <label for="ville">Ville:</label>
                              </div>
                            </div>
                            <div class="row">
                              <div class="input-field col s12 m6">
                                <i class="material-icons prefix blue-text darken-4-text">label</i>
                                <input value="ART32" id="codePostal" type="text" class="validate" name="cp">
                                <label for="codePostal">Code Postal:</label>
                              </div>
                              <div class="input-field col s12 m6">
                                <i class="material-icons prefix blue-text darken-4-text">label</i>
                                <input value="USA" id="pays" type="text" class="validate" name="country">
                                <label for="pays">Pays:</label>
                              </div>
                            </div>
                            <div class="row">
                              <div class="input-field col s12 m6">
                                <i class="material-icons prefix blue-text darken-4-text">lock_open</i>

                                <input id="password" type="password" class="validate" name="password">
                                <label for="password">Mot de passe:</label>
                              </div>
                              <div class="input-field col s12 m6">
                                <i class="material-icons prefix blue-text darken-4-text">lock_outline</i>

                                <input id="confirm-password" type="password" class="validate" name="confirm_password">
                                <label for="confirm-password">Confirmation du mot de passe:</label>
                              </div>
                            </div>
                          <div class="row">
                            <div class="input-field col s12">
                              <button class="btn waves-effect waves-light blue yellow-text " type="submit" name="connection">Modifier
                                <i class="material-icons right">send</i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div><!-- fin div informations personnelles -->

                    <div class="commandes-account">
                      <h2>Mes Commandes</h2>
                      <table class="responsive-table striped">
                        <thead>
                          <tr>
                              <th data-field="reference">Référence</th>
                              <th data-field="prix">Prix</th>
                              <th data-field="nombre-items">Nombre d'articles</th>
                              <th data-field="date">Date</th>
                              <th data-field="adresse-livraison">Adresse de livraison</th>
                              <th data-field="status">Status</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td><a href="">Alvin</a></td>
                            <td>90€</td>
                            <td>2</td>
                            <td>23 Janvier 2016</td>
                            <td>89 golden ticket street</td>
                            <td>Temrinée</td>
                          </tr>
                          <tr>
                            <td><a href="">Alan</a></td>
                            <td>15.30€</td>
                            <td>2</td>
                            <td>05 Janvier 2016</td>
                            <td>89 total recall place</td>
                            <td>Annulée</td>
                          </tr>
                          <tr>
                            <td><a href="">Jonathan</a></td>
                            <td>85.60€</td>
                            <td>4</td>
                            <td>18 Décembre 2015</td>
                            <td>89 golden ticket street</td>
                            <td>Terminée</td>
                          </tr>
                        </tbody>
                      </table>
                    </div><!-- fin div commandes -->
                    <div class="ventes-account">
                      <h2>Mes Ventes</h2>
                      <table class="responsive-table striped">
                        <thead>
                          <tr>
                              <th data-field="reference">Référence</th>
                              <th data-field="prix">Prix</th>
                              <th data-field="nombre-items">Nombre d'articles</th>
                              <th data-field="date">Date</th>
                              <th data-field="adresse-livraison">Adresse de livraison</th>
                              <th data-field="status">Status</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td><a href="">Alvin</a></td>
                            <td>90€</td>
                            <td>2</td>
                            <td>23 Janvier 2016</td>
                            <td>89 golden ticket street</td>
                            <td>Temrinée</td>
                          </tr>
                          <tr>
                            <td><a href="">Alan</a></td>
                            <td>15.30€</td>
                            <td>2</td>
                            <td>05 Janvier 2016</td>
                            <td>89 total recall place</td>
                            <td>Annulée</td>
                          </tr>
                          <tr>
                            <td><a href="">Jonathan</a></td>
                            <td>85.60€</td>
                            <td>4</td>
                            <td>18 Décembre 2015</td>
                            <td>89 golden ticket street</td>
                            <td>Terminée</td>
                          </tr>
                        </tbody>
                      </table>
                    </div><!-- fin div ventes -->
                    <div class="commentaires-account">
                      <h2>Mes Commentaires</h2>
                      <div class="row">
                        <div class="col s12">
                          <div class='card-content'>
                            <p>12/01/16 - <a href="" class="blue-text">Nom du produit</a></p>
                            <p>Nullam aliquet ut erat eget posuere. Aenean ornare, sem sit amet auctor consectetur, leo enim tempor orci, at pretium tortor nunc a purus. Donec vulputate sit amet sapien sodales cursus. Proin maximus, felis in rutrum euismod, nisl est tristique lacus, et euismod tortor nulla vitae sapien. Donec ac augue tristique, ornare nibh id, cursus erat. Cras accumsan, metus et mollis fringilla, sem ligula pharetra justo, sagittis lacinia ipsum libero vitae sem. Quisque nec turpis id risus lacinia suscipit id ut lorem. Fusce faucibus erat accumsan, molestie augue non, suscipit ipsum. Morbi lorem dui, molestie sit amet orci at, molestie imperdiet arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada leo risus, sed imperdiet dui vehicula vitae. Aenean porta nisi at elementum porta. Donec pharetra sapien eu eros posuere vulputate. Vivamus ante sapien, pharetra nec nibh vitae, tincidunt dictum urna. Suspendisse dignissim dignissim felis, non semper leo luctus at.</p>
                            <button class="btn waves-effect waves-light blue yellow-text" type="button" name="effacer">Effacer
                              <i class="material-icons right">replay</i>
                            </button>
                          </div>
                          <div class="divider"></div>
                          <div class='card-content'>
                            <p>25/09/15 - <a href="" class="blue-text">Nom du produit</a></p>
                            <p>Donec eu nunc sed felis mattis dictum. Pellentesque pretium, diam et pretium mattis, arcu diam auctor enim, id facilisis lorem odio non diam. Aliquam vel semper ligula, at tempus libero. Cras non turpis in mauris viverra iaculis sit amet id dui. Cras sagittis ac lacus eu pretium. Maecenas consequat feugiat mi sit amet egestas. Sed ullamcorper ipsum gravida eros rutrum sollicitudin. Cras orci urna, iaculis finibus tempor vel, convallis vitae ligula. Aliquam molestie ut ligula eget pellentesque. In dui tortor, maximus nec tristique a, ornare vitae tortor. Ut at nunc convallis ante convallis scelerisque in et magna. Nulla facilisi.</p>
                            <button class="btn waves-effect waves-light blue yellow-text" type="button" name="effacer">Effacer
                              <i class="material-icons right">replay</i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div><!-- fin div commentaires -->

                  </div><!-- fin div contenu account -->
            </div><!-- fin div row -->
        </div><!-- fin div section -->
    </div><!-- fin div container -->
<?php require_once("footer.php");?>
