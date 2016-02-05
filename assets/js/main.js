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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEZpY2hpZXIgSnMgcHJpbmNpcGFsXHJcbiAqL1xyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcclxuICAvKiBNYXTDqXJpYWxpemUgZXZlbnQgKi9cclxuICAgICQoXCIuYnV0dG9uLWNvbGxhcHNlXCIpLnNpZGVOYXYoKTtcclxuICAgICQoJy5tYXRlcmlhbGJveGVkJykubWF0ZXJpYWxib3goKTtcclxuICAgICQoJy5zbGlkZXInKS5zbGlkZXIoe2Z1bGxfd2lkdGg6IHRydWV9KTtcclxuXHJcbi8qIEV2ZW50IFJlZGltZW5zaW9ubmVtZW50ICovXHJcbiAgICBpZigkKCdkaXYucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIGVxdWFsaXplRGl2KCQoJ2Rpdi5wcm9kdWN0JykpO1xyXG4gICAgICAkKCB3aW5kb3cgKS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBlcXVhbGl6ZURpdigkKCdkaXYucHJvZHVjdCcpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaG92ZXJFdmVudCgnbmF2Lm1haW4tbmF2IHVsLmRlc2t0b3AgbGknKTtcclxuICAgIGhvdmVyRXZlbnQoJy50b3AtcHJvZHVjdHM+ZGl2Jyk7XHJcbiAgICAvL2NlbnRlck1lbnUoXCJ1bC5kZXNrdG9wXCIpO1xyXG5cclxuXHJcbi8qIEVmZmV0cyB2aXN1ZWxzIHN1ciBsZXMgc2VsZWN0IHZpYSBtYXTDqXJpYWxpemUgKi9cclxuICAgIGlmKCQoXCIuaW5wdXQtZmllbGQgc2VsZWN0XCIpLmxlbmd0aCA+IDApe1xyXG4gICAgICAkKFwiLmlucHV0LWZpZWxkIHNlbGVjdFwiKS5tYXRlcmlhbF9zZWxlY3QoKTtcclxuICAgIH1cclxuLyogbmF2IGZpbHRlciBldmVudCAqL1xyXG4gICAgaWYoJCgnLm5hdi1maWx0ZXInKS5sZW5ndGggPiAwKXtcclxuICAgICAgZmlsdGVyUG9zaXRpb24oKTtcclxuICAgICAgJCggd2luZG93ICkucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZmlsdGVyUG9zaXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZigkKCcubmF2LWZpbHRlciAjZmlsdHJlX3ByaXgnKS5sZW5ndGggPiAwKXtcclxuICAgICAgZm91cmNoZXR0ZVByaXgoKTtcclxuICAgIH1cclxuXHJcbi8qIHNlYXJjaCBiYXIgZXZlbnQgKi9cclxuICAgICQoJyNzZWFyY2hfZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihjKXtcclxuICAgICAgYy5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZWNoZXJjaGUoJCgnI3NlYXJjaF9mb3JtIDppbnB1dCcpKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbn0pO1xyXG4vKiAgUmVkaW1lbnNpb25uZW1lbnQgZGVzIGhlaWdodCBkaXYgcHJvZHVpdHMgcG91ciB1biBtZWlsbGV1ciBhZmZpY2hhZ2UgKi9cclxuZnVuY3Rpb24gZXF1YWxpemVEaXYoZGl2KXtcclxuICB2YXIgbWF4SGVpZ2h0ID0gMDtcclxuICAkKGRpdikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgIGlmICgkKHRoaXMpLmhlaWdodCgpID4gbWF4SGVpZ2h0KSB7IG1heEhlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7IH1cclxuICB9KTtcclxuICAkKGRpdikuaGVpZ2h0KG1heEhlaWdodCk7XHJcbn1cclxuXHJcbi8qIFJlZGltZW5zaW9ubmVtZW50IGRlIGxhIHdpZHRoIGV0IGNlbnRyYWdlIGhvcml6b250YWwqL1xyXG5mdW5jdGlvbiBjZW50ZXJNZW51KG1lbnUpe1xyXG4gICAgdmFyIHVsV2lkdGggPSAkKG1lbnUpLndpZHRoKCk7XHJcbiAgICAkKG1lbnUpLmF0dHIoXCJ3aWR0aFwiLCB1bFdpZHRoKTtcclxufVxyXG4vKiBHZXN0aW9uIGxhIG5hdiBwcmluY2lwYWwgKi9cclxuZnVuY3Rpb24gaG92ZXJFdmVudChwYXJlbnQpe1xyXG4gICAgJChwYXJlbnQpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcImRpdlwiKS5zaG93KCk7XHJcbiAgICB9KTtcclxuICAgICQocGFyZW50KS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oXCJkaXZcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuLyogIEZvbmN0aW9uIHNlcnZhbnQgw6AgZmFpcmUgYXBwYXJhaXRyZS9kaXNwYXJhaXRyZSBsZXMgYmxvY3MgZGUgbGEgc2VjdGlvbiBtb24gY29tcHRlKi9cclxuZnVuY3Rpb24gbmF2QWNjb3VudChsaW5rKXtcclxuICAkKCcuc2VjdGlvbiBkaXYuYWN0aXZlLWFjY291bnQnKS5yZW1vdmVDbGFzcyhcImFjdGl2ZS1hY2NvdW50XCIpO1xyXG4gIHZhciBwYXJ0ID0gJChsaW5rKS5hdHRyKFwiZGF0YS1uYXZcIik7XHJcbiAgJChcIi5cIiArIHBhcnQpLmFkZENsYXNzKCdhY3RpdmUtYWNjb3VudCcpO1xyXG59XHJcblxyXG5cclxuLyogRnVuY3Rpb24gZ8OpcmFudCBsZSBwb3NpdGlvbm5lbWVudCBkeW5hbWlxdWUgZGUgbGEgbmF2IGxhdMOpcmFsZSBkdSBmaXRscmUqL1xyXG5mdW5jdGlvbiBmaWx0ZXJQb3NpdGlvbigpe1xyXG4gIGlmKCQoIHdpbmRvdyApLndpZHRoKCkgPiA5NzUpe1xyXG4gICAgdmFyIGJvZHlXaWR0aCA9ICQoJ2JvZHknKS53aWR0aCgpO1xyXG4gICAgdmFyIG5hdkZpbHRlcldpZHRoID0gYm9keVdpZHRoICogMC4xNSAtIDEwO1xyXG4gICAgdmFyIGxlZnRQb3NpdGlvbiA9IGJvZHlXaWR0aCAqIDAuMTU7XHJcbiAgICAkKCcubmF2LWZpbHRlcicpLndpZHRoKG5hdkZpbHRlcldpZHRoKTtcclxuICAgICQoJy5uYXYtZmlsdGVyJykuY3NzKHsgdG9wOiAwLCBsZWZ0OiBcIi1cIiArIGxlZnRQb3NpdGlvbiArXCJweFwiIH0pO1xyXG4gIH1lbHNle1xyXG4gICAgdmFyIG1heFdpZHRoID0gJCgnLmNvbnRhaW5lcicpLndpZHRoKCk7XHJcbiAgICAkKCcubmF2LWZpbHRlcicpLndpZHRoKG1heFdpZHRoKTtcclxuICB9XHJcbn1cclxuLyogZnVuY3Rpb24gZCdhZmZpY2hhZ2UgZCd1biBzZWxlY3RldXIgZGUgcHJpeCAqL1xyXG5mdW5jdGlvbiBmb3VyY2hldHRlUHJpeCgpe1xyXG4gIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdHJlX3ByaXgnKTtcclxuICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlciwge1xyXG4gICAgICBzdGFydDogWzIwLCAxMDBdLFxyXG4gICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICBzdGVwOiAxLFxyXG4gICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgICdtYXgnOiA0NTBcclxuICAgICAgIH0sXHJcbiAgICB9KTtcclxufVxyXG4vKiBGdW5jdGlvbiBnw6lyYW50IGxhIHJlY2hlcmNoZSBzdXIgbGUgc2l0ZSAgKi9cclxuZnVuY3Rpb24gcmVjaGVyY2hlKGZvcm0pe1xyXG4gICAgdmFyIHJlY2hlcmNoZSA9ICQoZm9ybSkudmFsKCk7XHJcbiAgICB2YXIgYmFzZVVybCA9ICQoXCJoZWFkZXIgLmxvZ28gLmJyYW5kLWxvZ29cIikuYXR0cihcImhyZWZcIik7XHJcbiAgICB3aW5kb3cubG9jYXRpb24gPSBiYXNlVXJsICsgXCJyZWNoZXJjaGUvXCIgKyByZWNoZXJjaGUgO1xyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
