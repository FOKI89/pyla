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
      event.preventDefault();
      navAccount(this);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRmljaGllciBKcyBwcmluY2lwYWxcclxuICovXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xyXG4gIC8qIE1hdMOpcmlhbGl6ZSBldmVudCAqL1xyXG4gICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpO1xyXG4gICAgJCgnLm1hdGVyaWFsYm94ZWQnKS5tYXRlcmlhbGJveCgpO1xyXG4gICAgJCgnLnNsaWRlcicpLnNsaWRlcih7ZnVsbF93aWR0aDogdHJ1ZX0pO1xyXG5cclxuXHJcbiAgICBob3ZlckV2ZW50KCduYXYubWFpbi1uYXYgdWwuZGVza3RvcCBsaScpO1xyXG4gICAgaG92ZXJFdmVudCgnLnRvcC1wcm9kdWN0cz5kaXYnKTtcclxuICAgIC8vY2VudGVyTWVudShcInVsLmRlc2t0b3BcIik7XHJcblxyXG5cclxuICAgICQoXCJ1bCNuYXYtYWNjb3VudCA+IGxpIGFcIikuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBuYXZBY2NvdW50KHRoaXMpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGlmKCQoXCIuaW5wdXQtZmllbGQgc2VsZWN0XCIpLmxlbmd0aCA+IDApe1xyXG4gICAgICAkKFwiLmlucHV0LWZpZWxkIHNlbGVjdFwiKS5tYXRlcmlhbF9zZWxlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZigkKCcubmF2LWZpbHRlcicpLmxlbmd0aCA+IDApe1xyXG4gICAgICBmaWx0ZXJQb3NpdGlvbigpO1xyXG4gICAgICAkKCB3aW5kb3cgKS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBmaWx0ZXJQb3NpdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmKCQoJy5uYXYtZmlsdGVyICNmaWx0cmVfcHJpeCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICBmb3VyY2hldHRlUHJpeCgpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2VudGVyTWVudShtZW51KXtcclxuICAgIHZhciB1bFdpZHRoID0gJChtZW51KS53aWR0aCgpO1xyXG4gICAgJChtZW51KS5hdHRyKFwid2lkdGhcIiwgdWxXaWR0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvdmVyRXZlbnQocGFyZW50KXtcclxuICAgICQocGFyZW50KS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oXCJkaXZcIikuc2hvdygpO1xyXG4gICAgfSk7XHJcbiAgICAkKHBhcmVudCkubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwiZGl2XCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG59XHJcbi8qICBGb25jdGlvbiBzZXJ2YW50IMOgIGZhaXJlIGFwcGFyYWl0cmUvZGlzcGFyYWl0cmUgbGVzIGJsb2NzIGRlIGxhIHNlY3Rpb24gbW9uIGNvbXB0ZSovXHJcbmZ1bmN0aW9uIG5hdkFjY291bnQobGluayl7XHJcbiAgJCgnLnNlY3Rpb24gZGl2LmFjdGl2ZS1hY2NvdW50JykucmVtb3ZlQ2xhc3MoXCJhY3RpdmUtYWNjb3VudFwiKTtcclxuICB2YXIgcGFydCA9ICQobGluaykuYXR0cihcImRhdGEtbmF2XCIpO1xyXG4gICQoXCIuXCIgKyBwYXJ0KS5hZGRDbGFzcygnYWN0aXZlLWFjY291bnQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyUG9zaXRpb24oKXtcclxuICBpZigkKCB3aW5kb3cgKS53aWR0aCgpID4gOTc1KXtcclxuICAgIHZhciBib2R5V2lkdGggPSAkKCdib2R5Jykud2lkdGgoKTtcclxuICAgIHZhciBuYXZGaWx0ZXJXaWR0aCA9IGJvZHlXaWR0aCAqIDAuMTUgLSAxMDtcclxuICAgIHZhciBsZWZ0UG9zaXRpb24gPSBib2R5V2lkdGggKiAwLjE1O1xyXG4gICAgJCgnLm5hdi1maWx0ZXInKS53aWR0aChuYXZGaWx0ZXJXaWR0aCk7XHJcbiAgICAkKCcubmF2LWZpbHRlcicpLmNzcyh7IHRvcDogMCwgbGVmdDogXCItXCIgKyBsZWZ0UG9zaXRpb24gK1wicHhcIiB9KTtcclxuICB9ZWxzZXtcclxuICAgIHZhciBtYXhXaWR0aCA9ICQoJy5jb250YWluZXInKS53aWR0aCgpO1xyXG4gICAgJCgnLm5hdi1maWx0ZXInKS53aWR0aChtYXhXaWR0aCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3VyY2hldHRlUHJpeCgpe1xyXG4gIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdHJlX3ByaXgnKTtcclxuICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlciwge1xyXG4gICAgICBzdGFydDogWzIwLCAxMDBdLFxyXG4gICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICBzdGVwOiAxLFxyXG4gICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgICdtYXgnOiA0NTBcclxuICAgICAgIH0sXHJcbiAgICB9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
