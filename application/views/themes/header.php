<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <!--Let browser know website is optimized for mobile-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pyla</title>
  <link rel="stylesheet" href="css/main.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <script src='js/vendors/jquery-1.11.3.min.js'></script>
  <script src="js/vendors/materialize.min.js"></script>
  <script src="js/main.js"></script>
</head>
<body>
  <header>
     <div class="row">
         <div class="logo col l1 m2 s2">
         <a href="#" class="brand-logo">
             <img class="" src="img/logo.png" alt="logo pyla"></a>
        </div>
        <!-- Champs de recherche  -->
        <div class="recherche col s10 m10 l6">
            <nav class="col s7">
                <div class="nav-wrapper">
                  <form>
                    <div class="input-field">
                      <input id="search" type="search" required>
                      <label for="search"><i class="material-icons">search</i></label>
                      <i class="material-icons">close</i>
                    </div>
                  </form>
                </div>
            </nav>
            <div class="col s5">
             <ul id="dropdown2" class="dropdown-content">
                 <li><a class="blue-text" href="#" data-category="tee-shirts">Tee-shirts</a></li>
                 <li><a class="blue-text" data-category="Chemises">Chemises</a></a></li>
                 <li><a class="blue-text" href="#" data-category="Pantalons">Pantalons</a></li>
                 <li><a class="blue-text" href="#" data-category="Chaussures">Chaussures</a></li>
               </ul>
               <a class="btn dropdown-button white grey-text" href="#!" data-activates="dropdown2">Catégories<i class="mdi-navigation-arrow-drop-down right"></i></a>
           </div>
        </div>

        <div class="header-links col s12 m10 l5">
            <a class="btn yellow blue-text" href="#">Inscription</a>
            <a class="btn blue yellow-text" href="/account.php">Connexion</a>
            <a class="btn white blue-grey-text darken-3-text" href="#"><i class="material-icons">shopping_cart</i></a>

        </div>
    </div>
  </header>
  <?php include_once('partials/nav.php'); ?>
