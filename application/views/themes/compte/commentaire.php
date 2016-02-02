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
							<li><a href="<?php echo base_url().'mon-compte/mes-ventes/creer_article'; ?>">Créer un article</a></li>
							<li><a href="<?php echo base_url().'mon-compte/mes-ventes/retours'; ?>">Retours</a></li>
						</ul>
					</div>
				</li>
				<li class="no-padding"><a href="<?php echo base_url().'mon-compte/mes-commentaires'; ?>" class="indigo lighten-4">Mes commentaires</a></li>
			</ul>
		</div>
		<div class="col l8 s12">
			<div class="">
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
