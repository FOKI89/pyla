<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title><?php echo $site_nom ;?></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>
    <body>
        <div style="width:600px; margin:0px auto;">
            <h3 style="text-align: center">
                    Salutations de <?php echo $site_nom;?>!
                    <br>
            </h3>
            <br><?php echo $prenom;?> <?php echo $nom;?>,
            <br>
            <br>Nous sommes heureux de vous annoncer qu'un client souhaite prendre contact avec vous.
            <br>
            <br>Voici le récapitulatif de la commande :
            <br>
            <br>
            <br>
            <table class="responsive-table striped panier">
            <thead>
                <tr>
                    <th data-field="client">Client</th>
                    <th data-field="libelle">Libellé</th>
                    <th data-field="reference">Référence</th>
                    <th data-field="marque">Marque</th>
                    <th data-field="prix">Prix</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <?php if(isset($prenom_client)){ ?>
                    <td>
                        <a href="mailto:<?php echo $email_client; ?>?subject=A propos de l'article <?php echo $libelle; ?>" class="blue-text" title="Contacter votre prospect"><?php echo $prenom_client.' '.$nom_client; ?></a>
                    </td>
                    <?php }else{ ?>
                    <td>
                        <a href="mailto:<?php echo $email_site; ?>?subject=A propos de l'article <?php echo $libelle; ?>" class="blue-text"><?php echo $nom_site; ?></a>
                    </td>
                    <?php } ?>
                    <td><a href="<?php echo base_url().'produit/'.$id; ?>"><?php echo $libelle; ?></a></td>
                    <td><?php echo $reference; ?></td>
                    <td><?php echo $marque; ?></td>
                    <td><?php echo $prix; ?></td>
                    
                </tr>
            </tbody>
        </table>
            <br>
            <br>
            <br>

            <br>
            <br>A bientôt,
            <br>L'équipe Pila
        </div>
    </body>
</html>
