<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" > 
<head>
	<title>Back Office - Connexion</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<link rel="icon" type="image/png" href="<?php echo img_url("favicon.png") ?>" />
	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link type="text/css" rel="stylesheet" href="<?php echo css_url("bo/materialize.min") ?>"  media="screen,projection"/>
	<link type="text/css" rel="stylesheet" href="<?php echo css_url("/bo/custom_rules"); ?>" media="screen,projection">
	<link type="text/css" rel="stylesheet" href="<?php echo css_url("sweetalert/sweetalert"); ?>" media="screen,projection">
	<script type="text/javascript" src="<?php echo js_url("vendors/jquery-1.11.3.min"); ?>"></script>
</head>    
<body>
	<div class="container">
		<div class="row login-wrapper">
			<!-- Conteneur du formulaire-->
			<div class="col s12 l4 offset-l4 center-align z-depth-2">
				<!-- Header du formulaire-->
				<form id="connection">
					<div class="row blue darken-4 white-text valign-wrapper">
						<div class="col s3 center-align valign">
							<img src="<?php echo img_url("bo/logo.png") ?>" class="logo_login" alt="Logo Pila">
						</div>
						<div class="col s9 valign">
							<h5>Accès Back Office</h5>
						</div>
					</div>
					<!-- Corps du formulaire-->
					<div class="row">
						<div class="form col s8 offset-s2">
							<input placeholder="E-mail *" id="credentials" type="text" name="email" class="validate" value="<?php if(isset($email)) echo $email; ?>">
							<input placeholder="Mot de passe *" id="password" type="password" name="mdp" class="validate" value="<?php if(isset($mdp)) echo $mdp; ?>">
							<p class="left-align">
								<input type="checkbox" name="cookie" id="cookie" value="off"/>
								<label for="cookie">Se souvenir de moi</label>
							</p>
							<p>
								<button class="btn waves-effect waves-light btn-large submit-button" type="submit" name="connexion">Connexion
									<i class="material-icons right">send</i>
								</button>
							</p>
							<a href="<?php echo site_url('backoffice/reinitialisation');?>" class="blue-text text-darken-4">Mot de passe oublié</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="<?php echo js_url("bo/materialize.min"); ?>"></script>
<script type="text/javascript" src="<?php echo js_url("sweetalert/sweetalert.min"); ?>"></script>
<script type="text/javascript" src="<?php echo js_url("sweetalert/sweetalert-dev"); ?>"></script>
<script type="text/javascript" src="<?php echo js_url("bo/form_connexion"); ?>"></script>
</body>
</html>
