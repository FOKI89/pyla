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
		<div class="col s12">
			<!-- ======================================================================= -->
			<!-- Formulaire de recherche d'utilisateur -->
			<div class="row">
				<div class="col s12">
					<div class="card">
						<div class="card-content">
							<span class="card-title"><i class="material-icons prefix">create</i> Créer un article</span>
							<form id="creer_article" action="#">
								<!-- Prix et Nom du produit-->
								<div class="row">
									<div class="col s12 m6">
										<input id="libelle" type="text" name="libelle" class="validate" required >
										<label for="libelle">Nom du produit</label>
									</div>
									<div class="col s12 m6">
										<input type="number" name="prix" step="0.01" min="0.01">
										<label for="prix">Prix (en €)</label>
									</div>
								</div>

								<!-- Description du produit -->
								<div class="row">
									<div class="col s12 m6">
										<textarea id="description" name="description" class="materialize-textarea"></textarea>
										<label for="description">Description du produit</label>
									</div>
								</div>
								<!-- Photo de l'article -->

								<div class="row">
									<div class="file-field input-field col s12">
										<div class="btn">
											<span>Image</span>
											<input type="file" id="image" name="image" class="validate" required>
										</div>
										<div class="file-path-wrapper">
											<input class="file-path validate" type="text">
										</div>
									</div>
								</div>
									<!-- Référence du produit -->
									<div class="row">
										<div class="col s12 m6">
											<input id="reference" type="text" name="reference" class="validate">
											<label for="reference">Référence</label>
										</div>
									</div>
									<!-- Promo, A paraître et Afficher sur la page d'accueil -->
									<div class="row left-align">
										<div class="col s12 m3">
											<input type="number" name="taux_rabais" step="0.1" min="0" max="99">
											<label for="taux_rabais">Taux de rabais (en %)</label>
										</div>
										<div class="col s12 m2">
											<input type="checkbox" id="en_promo" name="en_promo"/>
											<label for="en_promo">En promo</label>
										</div>
										<div class="col s12 m3">
											<input type="checkbox" id="a_paraitre" name="a_paraitre"/>
											<label for="a_paraitre">À paraître</label>
										</div>
										<div class="col s12 m4">
											<input type="checkbox" id="afficher_accueil" name="afficher_accueil"/>
											<label for="afficher_accueil">Afficher sur la page d'accueil</label>
										</div>
									</div>

									<!-- Gestion des critères-->
									<span class="card-title"><i class="material-icons prefix">create</i> Associer un critère</span>

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
												<div class="col s12 m2">
													<input id="libelle_critere" type="text" class="validate">
													<label for="libelle_critere">Libellé</label>
												</div>

												<!-- Valeur de l'unité -->
												<div class="col s12 m2">
													<input id="unite_critere" type="text" class="validate">
													<label for="unite_critere">Unité</label>
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
									<div class="row center-align">
										<div class="col s12">
											<button class="btn waves-effect waves-light submit-button" type="submit" name="action">Valider
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