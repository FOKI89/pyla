/**
 * Fichier Js principal
 */
jQuery(document).ready(function($) {
  /* Matérialize event */
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('.slider').slider({full_width: true});


    hoverEvent('nav.main-nav ul.desktop li');
    hoverEvent('.top-products>div');
    //centerMenu("ul.desktop");


    $("ul#nav-account > li a").click(function(event){
      //event.preventDefault();
      //navAccount(this);
    });


    if($(".input-field select").length > 0){
      $(".input-field select").material_select();
    }

    if($('.nav-filter').length > 0){
      filterPosition();
      $( window ).resize(function(){
        filterPosition();
      });
    }
    if($('.nav-filter #filtre_prix').length > 0){
      fourchettePrix();
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
  $('.section div.active-account').removeClass("active-account");
  var part = $(link).attr("data-nav");
  $("." + part).addClass('active-account');
}

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
