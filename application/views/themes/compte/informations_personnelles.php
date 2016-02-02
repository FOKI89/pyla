<div class="container">
	<div class="section">
		<h2 class="header center-on-small-only grey-text grey-darken-4-text">Espace Personnel</h2>
		<div class ="row">
			<div class="col l4 m4 s12">
				<ul class="collapsible collapsible-accordion" id="nav-account">
					<li class="no-padding"><a href="<?php echo base_url().'mon-compte'; ?>">Dashboard</a></li>
					<li class="no-padding"><a href="<?php echo base_url().'mon-compte/modification'; ?>" class="purple lighten-5">Mes informations personnelles</a></li>
					<li><a class="collapsible-header waves-effect blue lighten-4">Mes commandes</a>
					<div class="collapsible-body">
						<ul>
							<li><a href="<?php echo base_url().'mon-compte/mes-commandes/en-cours'; ?>">En cours</a></li>
							<li><a href="<?php echo base_url().'mon-compte/mes-commandes/terminees'; ?>">Terminées</a></li>
							<li><a href="<?php echo base_url().'mon-compte/mes-commandes/signaler'; ?>">Signaler un problème</a></li>
						</ul>
					</div>
				</li>
				<li>
					<a class="collapsible-header waves-effect deep-purple lighten-4">Mes ventes</a>
					<div class="collapsible-body">
						<ul>
							<li><a href="<?php echo base_url().'mon-compte/mes-ventes/articles'; ?>">Mes articles</a></li>
							<li><a href="<?php echo base_url().'mon-compte/mes-ventes/terminees'; ?>">Ventes terminées</a></li>
							<li><a href="<?php echo base_url().'mon-compte/mes-ventes/retours'; ?>">Retours</a></li>
						</ul>
					</div>
				</li>
				<li class="no-padding"><a href="<?php echo base_url().'mon-compte/mes-commentaires'; ?>" class="indigo lighten-4">Mes commentaires</a></li>
			</ul>
		</div>
		<div class="col l8 s12">
			<div class="">
				<div class="row">
					<h2>Mes informations personnelles</h2>
					<p>Je peux modifier mes informations personnelles.</p>
					<div class="divider"></div>
					<form id="modif_user" class="col s12" action="">
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">account_circle</i>
								<input id="prenom" type="text" class="validate" name="prenom" value="<?php echo $prenom ?>" required>
								<label for="prenom">Prénom</label>
							</div>

							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">perm_identity</i>
								<input id="nom" type="text" class="validate" name="nom" value="<?php echo $nom; ?>" required>
								<label for="nom">Nom</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">email</i>
								<input id="email" type="email" class="validate" name="email" value="<?php echo $email; ?>">
								<label for="email">Email</label>
							</div>
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">phone</i>
								<input id="telephone" type="text" class="validate" name="telephone" value="<?php echo $telephone; ?>">
								<label for="telephone">Téléphone</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">room</i>
								<input id="adresse" type="text" class="validate" name="adresse" value="<?php echo $adresse; ?>">
								<label for="adresse">Adresse:</label>
							</div>
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">label</i>
								<input id="ville" type="text" class="validate" name="ville" value="<?php echo $ville; ?>">
								<label for="ville">Ville</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">label</i>
								<input id="cp" type="text" class="validate" name="cp" value="<?php echo $cp; ?>">
								<label for="codePostal">Code Postal</label>
							</div>
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">label</i>
								<?php echo form_dropdown("id_pays",$pays,$id_pays); ?>
								<label for="pays">Pays</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">lock_open</i>
								<input id="old_mdp" type="password" class="validate" name="old_mdp">
								<label for="old_mdp">Ancien mot de passe</label>
							</div>
						</div>
						<div class="row">
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">lock_open</i>
								<input id="new_mdp" type="password" class="validate" name="new_mdp">
								<label for="new_mdp">Mot de passe</label>
							</div>
							<div class="input-field col s12 m6">
								<i class="material-icons prefix blue-text darken-4-text">lock_outline</i>
								<input id="confirm_mdp" type="password" class="validate" name="confirm_mdp">
								<label for="confirm_mdp">Confirmation du mot de passe</label>
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
		</div><!-- fin div contenu account -->
	</div><!-- fin div row -->
</div><!-- fin div section -->
</div><!-- fin div container -->
