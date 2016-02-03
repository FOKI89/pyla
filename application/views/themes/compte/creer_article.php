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
							<li><a href="<?php echo base_url().'mon-compte/mes-ventes/creer-article'; ?>">Créer un article</a></li>
							<li><a href="<?php echo base_url().'mon-compte/mes-ventes/retours'; ?>">Retours</a></li>
						</ul>
					</div>
				</li>
				<li class="no-padding"><a href="<?php echo base_url().'mon-compte/mes-commentaires'; ?>" class="indigo lighten-4">Mes commentaires</a></li>
			</ul>
		</div>
		<div class="col l8 s12">
			<div class="row creer-vente-account">
				<div class="col s12">
					<div class="card">
						<div class="card-content">
							<span class="card-title"><i class="material-icons prefix">create</i> Créer un article</span>
							<form id="new_article" action="">
								<!-- Prix et Nom du produit-->
								<div class="row">
									<div class="col s12 m6">
										<input type="text"  name="libelle" id="libelle" class="validate" required >
										<label for="libelle">Libellé</label>
									</div>
									<div class="col s12 m6">
										<input type="text" name="reference" class="validate" >
										<label for="reference">Référence</label>
									</div>
								</div><div class="row">
									<div class="col s12 m6">
										<input type="text" name="marque" id="marque" class="validate" required >
										<label for="marque">Marque</label>
									</div>
									<div class="col s12 m6">
										<input type="number" name="prix" id="prix" step="0.01" min="0.01" required >
										<label for="prix">Prix (en €)</label>
									</div>
								</div>

								<!-- Description du produit -->
								<div class="row">
									<div class="col s12 m12">
										<textarea name="description" id="description" class="materialize-textarea" ></textarea>
										<label for="description">Description du produit</label>
									</div>
								</div>
								<!-- Photo de l'article -->
								<div class="file-field input-field">
									<div class="btn file-upload-button blue yellow-text">
										<span>Photo</span>
										<input type="file" name="image" id="image" required >
									</div>
									<div class="file-path-wrapper">
										<input class="file-path validate" type="text" placeholder="Nom du fichier" >
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12 m6 select-damous grey-text">
										<?php echo form_dropdown('categories',$categories); ?>
									</div>
									<div class="input-field col s12 m6">
										<button type="submit" name="creer_produit" class="btn waves-effect waves-light blue yellow-text " >Créer le produit
											<i class="material-icons right">library_add</i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div><!-- fin div creation vente -->
		</div><!-- fin div contenu account -->
	</div><!-- fin div row -->
</div><!-- fin div section -->
</div><!-- fin div container -->