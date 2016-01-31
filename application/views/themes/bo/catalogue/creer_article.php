<!-- ======================================================================= -->
<!-- Top bar -->
<nav class="top-nav blue darken-4">
	<div class="container">
		<div class="nav-wrapper">
			<!-- Bouton pour afficher la sidebar-->
			<a href="" class="button-collapse" data-activates="slide-out"><i class="mdi-navigation-menu"></i></a>

			<a href="<?php echo site_url('backoffice'); ?>" class="breadcrumb">Back-office</a>
			<span class="breadcrumb">Utilisateurs</span>
			<span class="breadcrumb">Liste des utilisateurs</span>
		</div>
	</div>
</nav>
<!-- ======================================================================= -->
<!-- CONTENU PRINCIPAL-->
<!-- Conteneur -->
<div class="container">
	<!-- Center row -->
	<div class="row ">
		<div class="col s12 center-align">
			<!-- ======================================================================= -->
			<!-- Formulaire de recherche d'utilisateur -->
			<div class="row">
				<div class="col s12">
					<div class="card">
						<div class="card-content">
							<span class="card-title"><i class="material-icons prefix">create</i> Créer un article</span>
							<form action="#">
								<!-- Prix et Nom du produit-->
								<div class="row">
									<div class="col s12 m6">
										<input id="nom_article" type="text" class="validate" name="nom_article" >
										<label for="nom_article">Nom du produit</label>
									</div>
									<div class="col s12 m6">
										<input type="number" name="prix" step="0.01" min="0.01">
										<label for="prix">Prix (en €)</label>
									</div>
								</div>

								<!-- Description du produit -->
								<div class="row">
									<div class="input-field col s12">
										<textarea id="description_produit" nom="description_produit" class="materialize-textarea"></textarea>
										<label for="description_produit">Description du produit</label>
									</div>
								</div>
								<!-- Photo de l'article -->
								<div class="file-field input-field">
									<div class="btn file-upload-button">
										<span>Photo</span>
										<input type="file">
									</div>
									<div class="file-path-wrapper">
										<input class="file-path validate" type="text" placeholder="Nom du fichier">
									</div>
								</div>
								<!-- Référence du produit -->
								<div class="row">
									<div class="input-field col s12">
										<input placeholder="Référence" id="reference" type="text" class="validate">
										<label for="reference">Référence</label>
									</div>
								</div>
								<!-- Promo, A paraître et Afficher sur la page d'accueil -->
								<div class="row left-align">
									<div class="input-field col s12 m3">
										<input type="number" name="taux_rabais" step="0.1" min="0" max="99">
										<label for="taux_rabais">Taux de rabais (en %)</label>
									</div>
									<div class="input-field col s6 m2">
										<input type="checkbox" id="en_promo" name="en_promo"/>
										<label for="en_promo">En promo</label>
									</div>
									<div class="input-field col s6 m3">
										<input type="checkbox" id="a_paraitre" name="a_paraitre"/>
										<label for="a_paraitre">À paraître</label>
									</div>
									<div class="input-field col s12 m4">
										<input type="checkbox" id="afficher_accueil" name="afficher_accueil"/>
										<label for="afficher_accueil">Afficher sur la page d'accueil</label>
									</div>
								</div>

								<!-- Gestion des critères-->
								<div class="row left-align">
									<div class="col s12">
										<h5>Critères du produit</h5>
									</div>
								</div>

								<ul id="criteres_du_produit">
									<li class="critere_individuel">
										<div class="row">
											<div class="col s12 m4">
												<select name="liste_criteres" id="class">
													<option value="" disabled selected>Sélectionner</option>
													<option value="poids">Poids</option>
													<option value="resolution">Résolution</option>
													<option value="pegi_12">PEGI 12</option>
													<option value="pegi_16">PEGI 16</option>
													<option value="pegi_18">PEGI 18</option>
													<option value="longueur">Longueur</option>
												</select>

											</div>
											<div class="col s12 m6">
												<input placeholder="Valeur du critère" id="valeur_critere" type="text" class="validate">

											</div>

											<!-- Valeur de l'unité -->
											<div class="col s12 m2">
												<input id="valeur_unite" type="text" class="validate">

											</div>
										</div>
									</li>
								</ul>

								<!-- Ajouter un critère -->
								<div class="row right-align">
									<div class="col s12">
										<a id="ajouter_critere" class="btn-floating btn-large waves-effect waves-light yellow accent-4"><i class="material-icons black-text">add</i></a>
									</div>
								</div>

								<!-- Bouton d'envoi du formulaire-->
								<div class="row">
									<div class="col s12">
										<button class="btn waves-effect waves-light submit-button" type="submit" name="action">Valider la création
											<i class="material-icons right">send</i>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>