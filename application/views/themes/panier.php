<div class="container">
	<div class="section">
		<div class="row">
		</div>
		<h2>Mon panier</h2>
		<?php if(isset($_SESSION['panier']) && !empty($_SESSION['panier'])){ ?>
		<table class="responsive-table striped panier">
			<thead>
				<tr>
					<th data-field="libelle">Libellé</th>
					<th data-field="reference">Référence</th>
					<th data-field="marque">Marque</th>
					<th data-field="prix">Prix</th>
					<th data-field="vendeur">Vendeur</th>
					<th data-field="suppression">Retirer</th>
				</tr>
			</thead>
			<tbody>
				<?php foreach($_SESSION["panier"] as $key => $panier ){ ?>
				<tr>
					<td><a href="<?php echo base_url().'produit/'.$panier->id; ?>"><?php echo $panier->libelle; ?></a></td>
					<td><?php echo $panier->reference; ?></td>
					<td><?php echo $panier->marque; ?></td>
					<td><?php echo $panier->prix; ?></td>
					<?php if(isset($panier->prenom)){ ?>
					<td><?php echo $panier->prenom.' '.$panier->nom; ?></td>
					<?php }else{ ?>
					<td><?php echo $_SESSION["site_nom"]; ?></td>
					<?php } ?>
					<td><a href="<?php echo base_url().'utilisateur/retirer_panier/'.$key; ?>" title="Retirer du panier" class="vide-panier"><i class="material-icons medium">close</i></a></td>
				</tr>
				<?php } ?>
			</tbody>
		</table>
		<a class="btn yellow blue-text right" href="<?php echo base_url().'utilisateur/valider_panier'; ?>">Valider</a>
		<?php }else{ ?>
		<p class="center">Votre panier est vide</p>
		<?php } ?>
	</div><!-- fin div section -->
</div><!-- fin div container -->