/* Ce script permet d'ajouter un critère à un article en cours de création
quand l'utilisateur clique sur le bouton jaune et rond*/

$(document).ready(function(){
    $("#ajouter_critere").click(function(){
        $(".critere_individuel").last().clone().appendTo('#criteres_du_produit');
    });
})
