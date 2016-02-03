
    <div class="container">
        <div class="section">
          <h2 class="header center-on-small-only grey-text grey-darken-4-text">Identifiez-vous ou créez un compte</h2>
            <div class ="row">
                  <div class="connection col s12 m6">
                    <h2 class="blue-text darken-4-text">Déjà membre?</h2>
                    <p>Si vous avez déjà un compte, veuillez vous identifier.</p>
                    <div class="divider"></div>
                      <form id="connection" class="col s12">
                        <div class="row">
                          <div class="input-field col s12">
                            <input value="" id="email" type="email" class="validate" name="email">
                            <label for="email">Email:</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <input id="mdp" type="password" class="validate" name="mdp">
                            <label for="mdp">Mot de passe:</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <button class="btn waves-effect waves-light blue yellow-text " type="submit" name="connection">Connexion
                              <i class="material-icons right">send</i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div><!-- fin div connection -->
                    <div class="subscribe col s12 m6">
                      <h2 class="blue-text darken-4-text">Nouveau sur ce site ?</h2>
                      <p>Inscription rapide et gratuite</p>
                      <div class="divider"></div>
                      <ul>
                        <li>Nécessaire pour passer une commande.</li>
                        <li>Vous permet d'avoir accès aux promotions.</li>
                        <li>Accumuler des points de fidélité.</li>
                      </ul>
                      <a class="btn waves-effect waves-light yellow blue-text" href="<?php echo base_url().'inscription'; ?>" name="connection">Inscription
                        <i class="material-icons right">send</i>
                      </a>
                    </div><!-- fin div inscription -->
                  </div>
            </div><!-- fin div row -->
        </div><!-- fin div section -->
    </div><!-- fin div container -->
<?php //require_once("footer.php");?>
