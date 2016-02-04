/**
 * Fichier Js principal
 */
jQuery(document).ready(function($) {
  /* Matérialize event */
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('.slider').slider({full_width: true});


    if($('div.product').length > 0){
        equalizeDiv($('div.product'));
      $( window ).resize(function(){
        equalizeDiv($('div.product'));
      });
    }

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

/* search bar */
    $('#search_form').on('submit', function(c){
      c.preventDefault();
      recherche($('#search_form :input'));
    });


});

function equalizeDiv(div){
  var maxHeight = 0;
  $(div).each(function(){
     if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
  });
  $(div).height(maxHeight);
}

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

function recherche(form){
    var data = $("#search_input").val();

      $.ajax({
          url: 'accueil/search_front',
          data: data,
          cache: false,
          contentType: false,
          processData: false,
          dataType: "json",
          type: 'POST',
          success: function(jqXHR){
            if(jqXHR[0] !== true){

            }else{
                  location.href = 'accueil/recherche';
            }
          },
          error: function(jqXHR, textStatus, errorThrown)
          {
              alert("ERREUR : "+ textStatus);
          }
      });
      return false;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEZpY2hpZXIgSnMgcHJpbmNpcGFsXHJcbiAqL1xyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcclxuICAvKiBNYXTDqXJpYWxpemUgZXZlbnQgKi9cclxuICAgICQoXCIuYnV0dG9uLWNvbGxhcHNlXCIpLnNpZGVOYXYoKTtcclxuICAgICQoJy5tYXRlcmlhbGJveGVkJykubWF0ZXJpYWxib3goKTtcclxuICAgICQoJy5zbGlkZXInKS5zbGlkZXIoe2Z1bGxfd2lkdGg6IHRydWV9KTtcclxuXHJcblxyXG4gICAgaWYoJCgnZGl2LnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcclxuICAgICAgICBlcXVhbGl6ZURpdigkKCdkaXYucHJvZHVjdCcpKTtcclxuICAgICAgJCggd2luZG93ICkucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZXF1YWxpemVEaXYoJCgnZGl2LnByb2R1Y3QnKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhvdmVyRXZlbnQoJ25hdi5tYWluLW5hdiB1bC5kZXNrdG9wIGxpJyk7XHJcbiAgICBob3ZlckV2ZW50KCcudG9wLXByb2R1Y3RzPmRpdicpO1xyXG4gICAgLy9jZW50ZXJNZW51KFwidWwuZGVza3RvcFwiKTtcclxuXHJcblxyXG4gICAgJChcInVsI25hdi1hY2NvdW50ID4gbGkgYVwiKS5jbGljayhmdW5jdGlvbihldmVudCl7XHJcbiAgICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgLy9uYXZBY2NvdW50KHRoaXMpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGlmKCQoXCIuaW5wdXQtZmllbGQgc2VsZWN0XCIpLmxlbmd0aCA+IDApe1xyXG4gICAgICAkKFwiLmlucHV0LWZpZWxkIHNlbGVjdFwiKS5tYXRlcmlhbF9zZWxlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZigkKCcubmF2LWZpbHRlcicpLmxlbmd0aCA+IDApe1xyXG4gICAgICBmaWx0ZXJQb3NpdGlvbigpO1xyXG4gICAgICAkKCB3aW5kb3cgKS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBmaWx0ZXJQb3NpdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmKCQoJy5uYXYtZmlsdGVyICNmaWx0cmVfcHJpeCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICBmb3VyY2hldHRlUHJpeCgpO1xyXG4gICAgfVxyXG5cclxuLyogc2VhcmNoIGJhciAqL1xyXG4gICAgJCgnI3NlYXJjaF9mb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGMpe1xyXG4gICAgICBjLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJlY2hlcmNoZSgkKCcjc2VhcmNoX2Zvcm0gOmlucHV0JykpO1xyXG4gICAgfSk7XHJcblxyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBlcXVhbGl6ZURpdihkaXYpe1xyXG4gIHZhciBtYXhIZWlnaHQgPSAwO1xyXG4gICQoZGl2KS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgaWYgKCQodGhpcykuaGVpZ2h0KCkgPiBtYXhIZWlnaHQpIHsgbWF4SGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTsgfVxyXG4gIH0pO1xyXG4gICQoZGl2KS5oZWlnaHQobWF4SGVpZ2h0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2VudGVyTWVudShtZW51KXtcclxuICAgIHZhciB1bFdpZHRoID0gJChtZW51KS53aWR0aCgpO1xyXG4gICAgJChtZW51KS5hdHRyKFwid2lkdGhcIiwgdWxXaWR0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvdmVyRXZlbnQocGFyZW50KXtcclxuICAgICQocGFyZW50KS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oXCJkaXZcIikuc2hvdygpO1xyXG4gICAgfSk7XHJcbiAgICAkKHBhcmVudCkubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwiZGl2XCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG59XHJcbi8qICBGb25jdGlvbiBzZXJ2YW50IMOgIGZhaXJlIGFwcGFyYWl0cmUvZGlzcGFyYWl0cmUgbGVzIGJsb2NzIGRlIGxhIHNlY3Rpb24gbW9uIGNvbXB0ZSovXHJcbmZ1bmN0aW9uIG5hdkFjY291bnQobGluayl7XHJcbiAgJCgnLnNlY3Rpb24gZGl2LmFjdGl2ZS1hY2NvdW50JykucmVtb3ZlQ2xhc3MoXCJhY3RpdmUtYWNjb3VudFwiKTtcclxuICB2YXIgcGFydCA9ICQobGluaykuYXR0cihcImRhdGEtbmF2XCIpO1xyXG4gICQoXCIuXCIgKyBwYXJ0KS5hZGRDbGFzcygnYWN0aXZlLWFjY291bnQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyUG9zaXRpb24oKXtcclxuICBpZigkKCB3aW5kb3cgKS53aWR0aCgpID4gOTc1KXtcclxuICAgIHZhciBib2R5V2lkdGggPSAkKCdib2R5Jykud2lkdGgoKTtcclxuICAgIHZhciBuYXZGaWx0ZXJXaWR0aCA9IGJvZHlXaWR0aCAqIDAuMTUgLSAxMDtcclxuICAgIHZhciBsZWZ0UG9zaXRpb24gPSBib2R5V2lkdGggKiAwLjE1O1xyXG4gICAgJCgnLm5hdi1maWx0ZXInKS53aWR0aChuYXZGaWx0ZXJXaWR0aCk7XHJcbiAgICAkKCcubmF2LWZpbHRlcicpLmNzcyh7IHRvcDogMCwgbGVmdDogXCItXCIgKyBsZWZ0UG9zaXRpb24gK1wicHhcIiB9KTtcclxuICB9ZWxzZXtcclxuICAgIHZhciBtYXhXaWR0aCA9ICQoJy5jb250YWluZXInKS53aWR0aCgpO1xyXG4gICAgJCgnLm5hdi1maWx0ZXInKS53aWR0aChtYXhXaWR0aCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3VyY2hldHRlUHJpeCgpe1xyXG4gIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdHJlX3ByaXgnKTtcclxuICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlciwge1xyXG4gICAgICBzdGFydDogWzIwLCAxMDBdLFxyXG4gICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICBzdGVwOiAxLFxyXG4gICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgICdtYXgnOiA0NTBcclxuICAgICAgIH0sXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVjaGVyY2hlKGZvcm0pe1xyXG4gICAgdmFyIGRhdGEgPSAkKFwiI3NlYXJjaF9pbnB1dFwiKS52YWwoKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB1cmw6ICdhY2N1ZWlsL3NlYXJjaF9mcm9udCcsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oanFYSFIpe1xyXG4gICAgICAgICAgICBpZihqcVhIUlswXSAhPT0gdHJ1ZSl7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICdhY2N1ZWlsL3JlY2hlcmNoZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFwiRVJSRVVSIDogXCIrIHRleHRTdGF0dXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
