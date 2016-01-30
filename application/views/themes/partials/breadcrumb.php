<div class="nav-wrapper">
  <div class="col s12">
  	<?php foreach($breadcrumb as $item){ if($item->type == "categorie"){ ?>
  	<a href="<?php echo site_url('categorie/'.$item->id); ?>" class="breadcrumb blue-text"><?php echo $item->libelle; ?></a>
  	<?php }else{ ?>
    <a href="<?php echo site_url('produit/'.$item->id); ?>" class="breadcrumb blue-text"><?php echo $item->libelle; ?></a>
    <?php }} ?>
  </div>
</div>
<div class="divider"></div>
