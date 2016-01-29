  <!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="../css/materialize.min.css"  media="screen,projection"/>

      <link type="text/css" rel="stylesheet" href="../css/custom_rules.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Accès back-office | Pila</title>
    </head>

    <body>
      <div class="container">
        <div class="row login-wrapper">
          <!-- Conteneur du formulaire-->
          <div class="col s12 l4 offset-l4 center-align z-depth-2">
            <!-- Header du formulaire-->
            <div class="row blue darken-4 white-text valign-wrapper">
              <div class="col s3 center-align valign">
                  <img src="../images/logo.png" class="logo_login" alt="Logo Pila">
              </div>
              <div class="col s9 valign">
                  <h5>Accès back-office</h5>
              </div>
            </div>
            <!-- Corps du formulaire-->
            <div class="row">
              <div class="form col s8 offset-s2">
                <input placeholder="Nom/e-mail" id="credentials" type="text" class="validate">
                <input placeholder="Mot de passe" id="password" type="password" class="validate">
                <p class="left-align">
                  <input type="checkbox" id="remember_me" />
                  <label for="remember_me">Se souvenir de moi</label>
                </p>
                <p>
                  <button class="btn waves-effect waves-light btn-large submit-button" type="submit" name="action">CONNEXION
                  <i class="material-icons right">send</i>
                </button>
                </p>
                <a href="" class="blue-text text-darken-4">Mot de passe oublié</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Import jQuery before materialize.js-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>
    </body>
  </html>
