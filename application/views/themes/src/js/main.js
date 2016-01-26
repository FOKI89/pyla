/**
 * Fichier Js principal
 */
jQuery(document).ready(function($) {
    $(".button-collapse").sideNav();

    hoverEvent('nav.main-nav ul.desktop li');
    hoverEvent('.top-products>div');
    //centerMenu("ul.desktop");


    $("ul#nav-account > li a").click(function(event){
      event.preventDefault();
      navAccount(this);
    });


    if($(".input-field select").length > 0){
      $(".input-field select").material_select();
    }


});


function centerMenu(menu){
    var ulWidth = $(menu).width();
    $(menu).attr("width", ulWidth);
}

function hoverEvent(parent){
    $(parent).mouseenter(function() {
        $(this).children("div").show();
    });
    $(parent).mouseleave(function() {
        $(this).children("div").hide();
    });
}
/*  Fonction servant à faire apparaitre/disparaitre les blocs de la section mon compte*/
function navAccount(link){
  $('.section div.active').removeClass("active");
  var part = $(link).attr("data-nav");
  $("." + part).addClass('active');
}
