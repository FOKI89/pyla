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

    if($('div.product').length > 0){
       equalizeDiv($('div.product'));
     $( window ).resize(function(){
       equalizeDiv($('div.product'));
     });
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

function equalizeDiv(div){
 var maxHeight = 0;
 $(div).each(function(){
    if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
 });console.log(maxHeight);
 $(div).height(maxHeight);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRmljaGllciBKcyBwcmluY2lwYWxcclxuICovXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xyXG4gIC8qIE1hdMOpcmlhbGl6ZSBldmVudCAqL1xyXG4gICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpO1xyXG4gICAgJCgnLm1hdGVyaWFsYm94ZWQnKS5tYXRlcmlhbGJveCgpO1xyXG4gICAgJCgnLnNsaWRlcicpLnNsaWRlcih7ZnVsbF93aWR0aDogdHJ1ZX0pO1xyXG5cclxuXHJcbiAgICBob3ZlckV2ZW50KCduYXYubWFpbi1uYXYgdWwuZGVza3RvcCBsaScpO1xyXG4gICAgaG92ZXJFdmVudCgnLnRvcC1wcm9kdWN0cz5kaXYnKTtcclxuICAgIC8vY2VudGVyTWVudShcInVsLmRlc2t0b3BcIik7XHJcblxyXG5cclxuICAgICQoXCJ1bCNuYXYtYWNjb3VudCA+IGxpIGFcIikuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIC8vbmF2QWNjb3VudCh0aGlzKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZigkKFwiLmlucHV0LWZpZWxkIHNlbGVjdFwiKS5sZW5ndGggPiAwKXtcclxuICAgICAgJChcIi5pbnB1dC1maWVsZCBzZWxlY3RcIikubWF0ZXJpYWxfc2VsZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoJCgnLm5hdi1maWx0ZXInKS5sZW5ndGggPiAwKXtcclxuICAgICAgZmlsdGVyUG9zaXRpb24oKTtcclxuICAgICAgJCggd2luZG93ICkucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZmlsdGVyUG9zaXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZigkKCcubmF2LWZpbHRlciAjZmlsdHJlX3ByaXgnKS5sZW5ndGggPiAwKXtcclxuICAgICAgZm91cmNoZXR0ZVByaXgoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNlbnRlck1lbnUobWVudSl7XHJcbiAgICB2YXIgdWxXaWR0aCA9ICQobWVudSkud2lkdGgoKTtcclxuICAgICQobWVudSkuYXR0cihcIndpZHRoXCIsIHVsV2lkdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob3ZlckV2ZW50KHBhcmVudCl7XHJcbiAgICAkKHBhcmVudCkubW91c2VlbnRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwiZGl2XCIpLnNob3coKTtcclxuICAgIH0pO1xyXG4gICAgJChwYXJlbnQpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcImRpdlwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxufVxyXG4vKiAgRm9uY3Rpb24gc2VydmFudCDDoCBmYWlyZSBhcHBhcmFpdHJlL2Rpc3BhcmFpdHJlIGxlcyBibG9jcyBkZSBsYSBzZWN0aW9uIG1vbiBjb21wdGUqL1xyXG5mdW5jdGlvbiBuYXZBY2NvdW50KGxpbmspe1xyXG4gICQoJy5zZWN0aW9uIGRpdi5hY3RpdmUtYWNjb3VudCcpLnJlbW92ZUNsYXNzKFwiYWN0aXZlLWFjY291bnRcIik7XHJcbiAgdmFyIHBhcnQgPSAkKGxpbmspLmF0dHIoXCJkYXRhLW5hdlwiKTtcclxuICAkKFwiLlwiICsgcGFydCkuYWRkQ2xhc3MoJ2FjdGl2ZS1hY2NvdW50Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlclBvc2l0aW9uKCl7XHJcbiAgaWYoJCggd2luZG93ICkud2lkdGgoKSA+IDk3NSl7XHJcbiAgICB2YXIgYm9keVdpZHRoID0gJCgnYm9keScpLndpZHRoKCk7XHJcbiAgICB2YXIgbmF2RmlsdGVyV2lkdGggPSBib2R5V2lkdGggKiAwLjE1IC0gMTA7XHJcbiAgICB2YXIgbGVmdFBvc2l0aW9uID0gYm9keVdpZHRoICogMC4xNTtcclxuICAgICQoJy5uYXYtZmlsdGVyJykud2lkdGgobmF2RmlsdGVyV2lkdGgpO1xyXG4gICAgJCgnLm5hdi1maWx0ZXInKS5jc3MoeyB0b3A6IDAsIGxlZnQ6IFwiLVwiICsgbGVmdFBvc2l0aW9uICtcInB4XCIgfSk7XHJcbiAgfWVsc2V7XHJcbiAgICB2YXIgbWF4V2lkdGggPSAkKCcuY29udGFpbmVyJykud2lkdGgoKTtcclxuICAgICQoJy5uYXYtZmlsdGVyJykud2lkdGgobWF4V2lkdGgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm91cmNoZXR0ZVByaXgoKXtcclxuICB2YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRyZV9wcml4Jyk7XHJcbiAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcclxuICAgICAgc3RhcnQ6IFsyMCwgMTAwXSxcclxuICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgc3RlcDogMSxcclxuICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICAnbWF4JzogNDUwXHJcbiAgICAgICB9LFxyXG4gICAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
