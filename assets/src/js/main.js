/**
 * Fichier Js principal
 */
jQuery(document).ready(function($) {
  /* Matérialize event */
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('.slider').slider({full_width: true});

/* Event Redimensionnement */
    if($('div.product').length > 0){
        equalizeDiv($('div.product'));
      $( window ).resize(function(){
        equalizeDiv($('div.product'));
      });
    }

    hoverEvent('nav.main-nav ul.desktop li');
    hoverEvent('.top-products>div');
    //centerMenu("ul.desktop");


/* Effets visuels sur les select via matérialize */
    if($(".input-field select").length > 0){
      $(".input-field select").material_select();
    }
/* nav filter event */
    if($('.nav-filter').length > 0){
      filterPosition();
      $( window ).resize(function(){
        filterPosition();
      });
    }
    if($('.nav-filter #filtre_prix').length > 0){
      fourchettePrix();
    }

/* search bar event */
    $('#search_form').on('submit', function(c){
      c.preventDefault();
      recherche($('#search_form :input'));
    });


});
/*  Redimensionnement des height div produits pour un meilleur affichage */
function equalizeDiv(div){
  var maxHeight = 0;
  $(div).each(function(){
     if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
  });
  $(div).height(maxHeight);
}

/* Redimensionnement de la width et centrage horizontal*/
function centerMenu(menu){
    var ulWidth = $(menu).width();
    $(menu).attr("width", ulWidth);
}
/* Gestion la nav principal */
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
  $('.section div.active-account').removeClass("active-account");
  var part = $(link).attr("data-nav");
  $("." + part).addClass('active-account');
}


/* Function gérant le positionnement dynamique de la nav latérale du fitlre*/
function filterPosition(){
  if($( window ).width() > 975){
    var bodyWidth = $('body').width();
    var navFilterWidth = bodyWidth * 0.15 - 10;
    var leftPosition = bodyWidth * 0.15;
    $('.nav-filter').width(navFilterWidth);
    $('.nav-filter').css({ top: 0, left: "-" + leftPosition +"px" });
  }else{
    var maxWidth = $('.container').width();
    $('.nav-filter').width(maxWidth);
  }
}
/* function d'affichage d'un selecteur de prix */
function fourchettePrix(){
  var slider = document.getElementById('filtre_prix');
    noUiSlider.create(slider, {
      start: [20, 100],
      connect: true,
      step: 1,
       range: {
         'min': 0,
         'max': 450
       },
    });
}
/* Function gérant la recherche sur le site  */
function recherche(form){
    var recherche = $(form).val();
    var baseUrl = $("header .logo .brand-logo").attr("href");
    window.location = baseUrl + "recherche/" + recherche ;
  return false;
}
