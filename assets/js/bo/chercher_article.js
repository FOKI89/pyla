/* Ce script premet de récupérer la valeur des sliders de prix au moment où
    l'utilisateur appuie sur le bouton pour envoyer les formulaire. Les prix
    minimum et maximum sont enregistrées dans des input de type
    hidden, et sont ensuite envoyées avec le reste du formulaire */

$(document).ready(function(){
    $('#valider_recherche_produit').click(function(){
        var priceRange = slider.noUiSlider.get();
        var prixMin = priceRange[0];
        var prixMax = priceRange[1];

        $('#prix_min').val(prixMin);
        $('#prix_max').val(prixMax);
    });
});
