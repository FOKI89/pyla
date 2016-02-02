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
        <li><a href="<?php echo base_url().'mon-compte/mes-ventes/creer_article'; ?>">Créer un article</a></li>
        <li><a href="<?php echo base_url().'mon-compte/mes-ventes/terminees'; ?>">Ventes terminées</a></li>
        <li><a href="<?php echo base_url().'mon-compte/mes-ventes/retours'; ?>">Retours</a></li>
      </ul>
    </div>
  </li>
  <li class="no-padding"><a href="<?php echo base_url().'mon-compte/mes-commentaires'; ?>" class="indigo lighten-4">Mes commentaires</a></li>
</ul>
</div>
