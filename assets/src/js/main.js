(function($) {

/*
*  new_map
*
*  This function will render a Google Map onto the selected jQuery element
*
*  @type	function
*  @date	8/11/2013
*  @since	4.3.0
*
*  @param	$el (jQuery element)
*  @return	n/a
*/

function new_map( $el ) {

	// var
	var $markers = $el.find('.marker');



	// vars
	var args = {
		zoom		: 16,
		center		: new google.maps.LatLng(0, 0),
		mapTypeId	: google.maps.MapTypeId.ROADMAP
	};


	// create map
	var map = new google.maps.Map( $el[0], args);


	// add a markers reference
	map.markers = [];


	// add markers
	$markers.each(function(){

    	add_marker( $(this), map );

	});


	// center map
	center_map( map );


	// return
	return map;

}

/*
*  add_marker
*
*  This function will add a marker to the selected Google Map
*
*  @type	function
*  @date	8/11/2013
*  @since	4.3.0
*
*  @param	$marker (jQuery element)
*  @param	map (Google Map object)
*  @return	n/a
*/

function add_marker( $marker, map ) {

	// var
	var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );


	// create marker
	var iconBase = '/app/themes/carel/img/';
	var marker = new google.maps.Marker({
		position	: latlng,
		map			: map,
		icon: iconBase + 'markerGMap.png'
	});


	// add to array
	map.markers.push( marker );

	// if marker contains HTML, add it to an infoWindow
	if( $marker.html() )
	{
		// create info window
		var infowindow = new google.maps.InfoWindow({
			content		: $marker.html()
		});

		// show info window when marker is clicked
		google.maps.event.addListener(marker, 'click', function() {

			infowindow.open( map, marker );

		});
	}

}

/*
*  center_map
*
*  This function will center the map, showing all markers attached to this map
*
*  @type	function
*  @date	8/11/2013
*  @since	4.3.0
*
*  @param	map (Google Map object)
*  @return	n/a
*/

function center_map( map ) {

	// vars
	var bounds = new google.maps.LatLngBounds();

	// loop through all markers and create bounds
	$.each( map.markers, function( i, marker ){

		var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

		bounds.extend( latlng );

	});

	// only 1 marker?
	if( map.markers.length == 1 )
	{
		// set center of map
	    map.setCenter( bounds.getCenter() );
	    map.setZoom( 16 );
	}
	else
	{
		// fit to bounds
		map.fitBounds( bounds );
	}

}

/*
*  document ready
*
*  This function will render each map when the document is ready (page has loaded)
*
*  @type	function
*  @date	8/11/2013
*  @since	5.0.0
*
*  @param	n/a
*  @return	n/a
*/
// global var
//var map = null;

$(document).ready(function(){

	$('.acf-map').each(function(){

		// create map
		map = new_map( $(this) );

	});

});

})(jQuery);

var map;

// This Carousel needs first and last Items identicals //
// to make an infinite loop effect//


/*
var carousel = {
    wrapperCarousel : window.document.getElementById('bloc-carousel'),
    wrapperItems : window.document.getElementById('wrapper-items-carousel'),
    numberItems : window.document.querySelectorAll('#wrapper-items-carousel  .items-carousel').length,
    items : window.document.getElementsByClassName('items-carousel'),
    count : 0,
    setSizeItems : function(){
        this.wrapperItems.style.width = this.numberItems * 100 + "%"; // Set the wrapper-items-carousel width
    },
    slideLeft : function(){
        intervale = setInterval(carousel.autoSlide, 4000); // 1000 = 1 second
    },
    autoSlide : function(){
        if(carousel.count == (carousel.numberItems-1)){
            carousel.wrapperItems.style.left = "-" + carousel.count * 100 + "%";
            // Infinite Loop
            lastItem = window.setTimeout(function(){
                carousel.wrapperItems.style.left = 0; // Put wrapper-items-carousel at initial position
                carousel.wrapperItems.style.transition = "none"; // Disabled Transition effect
                infosCarousel.changeInfos(0); // Animation infos bloc carousel
                carousel.count = 1; // Set Count for the second Item
            }, 500);

        }else{
            carousel.wrapperItems.style.transition = "left 0.5s, position 0.5s"; // Enabled Transition effect
            carousel.wrapperItems.style.left = "-" + carousel.count * 100 + "%";
            infosCarousel.changeInfos(carousel.count);// Animation infos bloc carousel
            carousel.count++; // Count loop
        }
    },

    addCarouselListener : function(){
        window.addEventListener("resize", carousel.resizeCarousel, false); // Responsive
        carousel.wrapperCarousel.addEventListener("mouseenter", carousel.pauseHover, false); // Stop Loop carousel
        carousel.wrapperCarousel.addEventListener("mouseleave", carousel.slideLeft, false); // Reload Loop carousel

        var nextLink = window.document.getElementById('next');
        var prevLink = window.document.getElementById('prev');
        nextLink.addEventListener("click", carouselClickHandler , false);
        prevLink.addEventListener("click", carouselClickHandler , false);

    },
    pauseHover : function(){
        clearInterval(intervale); // Stop Loop carousel
    },
    resizeCarousel : function(){
        var currentViewportWidth; var newWidth; var newHeight;
        if (typeof window.innerWidth != 'undefined') {
                currentViewportWidth = window.innerWidth; // Get Viewport Width
            }
        // Apply only if the viewport width is
        // under its initial width

        if(currentViewportWidth < 2000 && currentViewportWidth > 800){
            newWidth = currentViewportWidth - 17; // viewport width minus scroll bar width
            newHeight = newWidth /2.7322;
        }else if(currentViewportWidth < 800){
            newWidth = 0;
            newHeight = 0;
        }else{ // Apply initial width in other cases
            newWidth = 2000;
            newHeight = 732;
        }
        carousel.wrapperCarousel.style.width = newWidth +"px";
        carousel.wrapperCarousel.style.height = newHeight +"px";
        for(i = 0; i < carousel.numberItems; i++){
            carousel.items[i].style.width = newWidth +"px";
        }
    },

};

function carouselClickHandler(e){

    var direction = this.id; // Get the current item
    var limit = carousel.numberItems - 2 ; // loop condition
    if (direction == "next") {
        if (carousel.count < limit) {
            carousel.count += 1;
        }else{
            carousel.count = 0;
        }
    }else if(direction == "prev"){
        if (carousel.count > 0) {
            carousel.count -= 1;
        }else{
            carousel.count = 0;
        }
    }
    // Modify item left position
    carousel.wrapperItems.style.left = "-" + carousel.count * 100 + "%";
    carousel.wrapperItems.style.transition = "left 0.5s, position 0.5s";
    infosCarousel.changeInfos(carousel.count); // Animation infos bloc carousel
}

var infosCarousel = {
    wrapperInfos : window.document.querySelectorAll('#wrapper-infos-items .infos-items'),
    changeInfos : function(actived){
        for(i = 0; i < infosCarousel.wrapperInfos.length; i++){
            if(actived == i){
                currentInfos = window.document.querySelectorAll('.active');
                for(j = 0; j < currentInfos.length; j++){
                    currentInfos[j].classList.remove("active"); // Remove All active classes
                }
                infosCarousel.wrapperInfos[i].classList.add("active"); // Add active class to the Info Box
            }
        }
    },
};

if (carousel.wrapperCarousel !== null){
	carousel.resizeCarousel();
	carousel.setSizeItems();
	carousel.slideLeft();
	carousel.addCarouselListener();
	//navCarousel.slideCommand();
}
*/

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjZi1nb29nbGUtbWFwLmpzIiwiY2Fyb3VzZWwuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG5cclxuLypcclxuKiAgbmV3X21hcFxyXG4qXHJcbiogIFRoaXMgZnVuY3Rpb24gd2lsbCByZW5kZXIgYSBHb29nbGUgTWFwIG9udG8gdGhlIHNlbGVjdGVkIGpRdWVyeSBlbGVtZW50XHJcbipcclxuKiAgQHR5cGVcdGZ1bmN0aW9uXHJcbiogIEBkYXRlXHQ4LzExLzIwMTNcclxuKiAgQHNpbmNlXHQ0LjMuMFxyXG4qXHJcbiogIEBwYXJhbVx0JGVsIChqUXVlcnkgZWxlbWVudClcclxuKiAgQHJldHVyblx0bi9hXHJcbiovXHJcblxyXG5mdW5jdGlvbiBuZXdfbWFwKCAkZWwgKSB7XHJcblxyXG5cdC8vIHZhclxyXG5cdHZhciAkbWFya2VycyA9ICRlbC5maW5kKCcubWFya2VyJyk7XHJcblxyXG5cclxuXHJcblx0Ly8gdmFyc1xyXG5cdHZhciBhcmdzID0ge1xyXG5cdFx0em9vbVx0XHQ6IDE2LFxyXG5cdFx0Y2VudGVyXHRcdDogbmV3IGdvb2dsZS5tYXBzLkxhdExuZygwLCAwKSxcclxuXHRcdG1hcFR5cGVJZFx0OiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUFxyXG5cdH07XHJcblxyXG5cclxuXHQvLyBjcmVhdGUgbWFwXHJcblx0dmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoICRlbFswXSwgYXJncyk7XHJcblxyXG5cclxuXHQvLyBhZGQgYSBtYXJrZXJzIHJlZmVyZW5jZVxyXG5cdG1hcC5tYXJrZXJzID0gW107XHJcblxyXG5cclxuXHQvLyBhZGQgbWFya2Vyc1xyXG5cdCRtYXJrZXJzLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICBcdGFkZF9tYXJrZXIoICQodGhpcyksIG1hcCApO1xyXG5cclxuXHR9KTtcclxuXHJcblxyXG5cdC8vIGNlbnRlciBtYXBcclxuXHRjZW50ZXJfbWFwKCBtYXAgKTtcclxuXHJcblxyXG5cdC8vIHJldHVyblxyXG5cdHJldHVybiBtYXA7XHJcblxyXG59XHJcblxyXG4vKlxyXG4qICBhZGRfbWFya2VyXHJcbipcclxuKiAgVGhpcyBmdW5jdGlvbiB3aWxsIGFkZCBhIG1hcmtlciB0byB0aGUgc2VsZWN0ZWQgR29vZ2xlIE1hcFxyXG4qXHJcbiogIEB0eXBlXHRmdW5jdGlvblxyXG4qICBAZGF0ZVx0OC8xMS8yMDEzXHJcbiogIEBzaW5jZVx0NC4zLjBcclxuKlxyXG4qICBAcGFyYW1cdCRtYXJrZXIgKGpRdWVyeSBlbGVtZW50KVxyXG4qICBAcGFyYW1cdG1hcCAoR29vZ2xlIE1hcCBvYmplY3QpXHJcbiogIEByZXR1cm5cdG4vYVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gYWRkX21hcmtlciggJG1hcmtlciwgbWFwICkge1xyXG5cclxuXHQvLyB2YXJcclxuXHR2YXIgbGF0bG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyggJG1hcmtlci5hdHRyKCdkYXRhLWxhdCcpLCAkbWFya2VyLmF0dHIoJ2RhdGEtbG5nJykgKTtcclxuXHJcblxyXG5cdC8vIGNyZWF0ZSBtYXJrZXJcclxuXHR2YXIgaWNvbkJhc2UgPSAnL2FwcC90aGVtZXMvY2FyZWwvaW1nLyc7XHJcblx0dmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG5cdFx0cG9zaXRpb25cdDogbGF0bG5nLFxyXG5cdFx0bWFwXHRcdFx0OiBtYXAsXHJcblx0XHRpY29uOiBpY29uQmFzZSArICdtYXJrZXJHTWFwLnBuZydcclxuXHR9KTtcclxuXHJcblxyXG5cdC8vIGFkZCB0byBhcnJheVxyXG5cdG1hcC5tYXJrZXJzLnB1c2goIG1hcmtlciApO1xyXG5cclxuXHQvLyBpZiBtYXJrZXIgY29udGFpbnMgSFRNTCwgYWRkIGl0IHRvIGFuIGluZm9XaW5kb3dcclxuXHRpZiggJG1hcmtlci5odG1sKCkgKVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSBpbmZvIHdpbmRvd1xyXG5cdFx0dmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcblx0XHRcdGNvbnRlbnRcdFx0OiAkbWFya2VyLmh0bWwoKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gc2hvdyBpbmZvIHdpbmRvdyB3aGVuIG1hcmtlciBpcyBjbGlja2VkXHJcblx0XHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0aW5mb3dpbmRvdy5vcGVuKCBtYXAsIG1hcmtlciApO1xyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbi8qXHJcbiogIGNlbnRlcl9tYXBcclxuKlxyXG4qICBUaGlzIGZ1bmN0aW9uIHdpbGwgY2VudGVyIHRoZSBtYXAsIHNob3dpbmcgYWxsIG1hcmtlcnMgYXR0YWNoZWQgdG8gdGhpcyBtYXBcclxuKlxyXG4qICBAdHlwZVx0ZnVuY3Rpb25cclxuKiAgQGRhdGVcdDgvMTEvMjAxM1xyXG4qICBAc2luY2VcdDQuMy4wXHJcbipcclxuKiAgQHBhcmFtXHRtYXAgKEdvb2dsZSBNYXAgb2JqZWN0KVxyXG4qICBAcmV0dXJuXHRuL2FcclxuKi9cclxuXHJcbmZ1bmN0aW9uIGNlbnRlcl9tYXAoIG1hcCApIHtcclxuXHJcblx0Ly8gdmFyc1xyXG5cdHZhciBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XHJcblxyXG5cdC8vIGxvb3AgdGhyb3VnaCBhbGwgbWFya2VycyBhbmQgY3JlYXRlIGJvdW5kc1xyXG5cdCQuZWFjaCggbWFwLm1hcmtlcnMsIGZ1bmN0aW9uKCBpLCBtYXJrZXIgKXtcclxuXHJcblx0XHR2YXIgbGF0bG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyggbWFya2VyLnBvc2l0aW9uLmxhdCgpLCBtYXJrZXIucG9zaXRpb24ubG5nKCkgKTtcclxuXHJcblx0XHRib3VuZHMuZXh0ZW5kKCBsYXRsbmcgKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vIG9ubHkgMSBtYXJrZXI/XHJcblx0aWYoIG1hcC5tYXJrZXJzLmxlbmd0aCA9PSAxIClcclxuXHR7XHJcblx0XHQvLyBzZXQgY2VudGVyIG9mIG1hcFxyXG5cdCAgICBtYXAuc2V0Q2VudGVyKCBib3VuZHMuZ2V0Q2VudGVyKCkgKTtcclxuXHQgICAgbWFwLnNldFpvb20oIDE2ICk7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyBmaXQgdG8gYm91bmRzXHJcblx0XHRtYXAuZml0Qm91bmRzKCBib3VuZHMgKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG4vKlxyXG4qICBkb2N1bWVudCByZWFkeVxyXG4qXHJcbiogIFRoaXMgZnVuY3Rpb24gd2lsbCByZW5kZXIgZWFjaCBtYXAgd2hlbiB0aGUgZG9jdW1lbnQgaXMgcmVhZHkgKHBhZ2UgaGFzIGxvYWRlZClcclxuKlxyXG4qICBAdHlwZVx0ZnVuY3Rpb25cclxuKiAgQGRhdGVcdDgvMTEvMjAxM1xyXG4qICBAc2luY2VcdDUuMC4wXHJcbipcclxuKiAgQHBhcmFtXHRuL2FcclxuKiAgQHJldHVyblx0bi9hXHJcbiovXHJcbi8vIGdsb2JhbCB2YXJcclxuLy92YXIgbWFwID0gbnVsbDtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG5cdCQoJy5hY2YtbWFwJykuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBtYXBcclxuXHRcdG1hcCA9IG5ld19tYXAoICQodGhpcykgKTtcclxuXHJcblx0fSk7XHJcblxyXG59KTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcblxyXG52YXIgbWFwO1xyXG4iLCIvLyBUaGlzIENhcm91c2VsIG5lZWRzIGZpcnN0IGFuZCBsYXN0IEl0ZW1zIGlkZW50aWNhbHMgLy9cclxuLy8gdG8gbWFrZSBhbiBpbmZpbml0ZSBsb29wIGVmZmVjdC8vXHJcblxyXG5cclxuLypcclxudmFyIGNhcm91c2VsID0ge1xyXG4gICAgd3JhcHBlckNhcm91c2VsIDogd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibG9jLWNhcm91c2VsJyksXHJcbiAgICB3cmFwcGVySXRlbXMgOiB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXItaXRlbXMtY2Fyb3VzZWwnKSxcclxuICAgIG51bWJlckl0ZW1zIDogd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN3cmFwcGVyLWl0ZW1zLWNhcm91c2VsICAuaXRlbXMtY2Fyb3VzZWwnKS5sZW5ndGgsXHJcbiAgICBpdGVtcyA6IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpdGVtcy1jYXJvdXNlbCcpLFxyXG4gICAgY291bnQgOiAwLFxyXG4gICAgc2V0U2l6ZUl0ZW1zIDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLndyYXBwZXJJdGVtcy5zdHlsZS53aWR0aCA9IHRoaXMubnVtYmVySXRlbXMgKiAxMDAgKyBcIiVcIjsgLy8gU2V0IHRoZSB3cmFwcGVyLWl0ZW1zLWNhcm91c2VsIHdpZHRoXHJcbiAgICB9LFxyXG4gICAgc2xpZGVMZWZ0IDogZnVuY3Rpb24oKXtcclxuICAgICAgICBpbnRlcnZhbGUgPSBzZXRJbnRlcnZhbChjYXJvdXNlbC5hdXRvU2xpZGUsIDQwMDApOyAvLyAxMDAwID0gMSBzZWNvbmRcclxuICAgIH0sXHJcbiAgICBhdXRvU2xpZGUgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGNhcm91c2VsLmNvdW50ID09IChjYXJvdXNlbC5udW1iZXJJdGVtcy0xKSl7XHJcbiAgICAgICAgICAgIGNhcm91c2VsLndyYXBwZXJJdGVtcy5zdHlsZS5sZWZ0ID0gXCItXCIgKyBjYXJvdXNlbC5jb3VudCAqIDEwMCArIFwiJVwiO1xyXG4gICAgICAgICAgICAvLyBJbmZpbml0ZSBMb29wXHJcbiAgICAgICAgICAgIGxhc3RJdGVtID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNhcm91c2VsLndyYXBwZXJJdGVtcy5zdHlsZS5sZWZ0ID0gMDsgLy8gUHV0IHdyYXBwZXItaXRlbXMtY2Fyb3VzZWwgYXQgaW5pdGlhbCBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjsgLy8gRGlzYWJsZWQgVHJhbnNpdGlvbiBlZmZlY3RcclxuICAgICAgICAgICAgICAgIGluZm9zQ2Fyb3VzZWwuY2hhbmdlSW5mb3MoMCk7IC8vIEFuaW1hdGlvbiBpbmZvcyBibG9jIGNhcm91c2VsXHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbC5jb3VudCA9IDE7IC8vIFNldCBDb3VudCBmb3IgdGhlIHNlY29uZCBJdGVtXHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYXJvdXNlbC53cmFwcGVySXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9IFwibGVmdCAwLjVzLCBwb3NpdGlvbiAwLjVzXCI7IC8vIEVuYWJsZWQgVHJhbnNpdGlvbiBlZmZlY3RcclxuICAgICAgICAgICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLmxlZnQgPSBcIi1cIiArIGNhcm91c2VsLmNvdW50ICogMTAwICsgXCIlXCI7XHJcbiAgICAgICAgICAgIGluZm9zQ2Fyb3VzZWwuY2hhbmdlSW5mb3MoY2Fyb3VzZWwuY291bnQpOy8vIEFuaW1hdGlvbiBpbmZvcyBibG9jIGNhcm91c2VsXHJcbiAgICAgICAgICAgIGNhcm91c2VsLmNvdW50Kys7IC8vIENvdW50IGxvb3BcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZENhcm91c2VsTGlzdGVuZXIgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNhcm91c2VsLnJlc2l6ZUNhcm91c2VsLCBmYWxzZSk7IC8vIFJlc3BvbnNpdmVcclxuICAgICAgICBjYXJvdXNlbC53cmFwcGVyQ2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgY2Fyb3VzZWwucGF1c2VIb3ZlciwgZmFsc2UpOyAvLyBTdG9wIExvb3AgY2Fyb3VzZWxcclxuICAgICAgICBjYXJvdXNlbC53cmFwcGVyQ2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgY2Fyb3VzZWwuc2xpZGVMZWZ0LCBmYWxzZSk7IC8vIFJlbG9hZCBMb29wIGNhcm91c2VsXHJcblxyXG4gICAgICAgIHZhciBuZXh0TGluayA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG4gICAgICAgIHZhciBwcmV2TGluayA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG4gICAgICAgIG5leHRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJvdXNlbENsaWNrSGFuZGxlciAsIGZhbHNlKTtcclxuICAgICAgICBwcmV2TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2Fyb3VzZWxDbGlja0hhbmRsZXIgLCBmYWxzZSk7XHJcblxyXG4gICAgfSxcclxuICAgIHBhdXNlSG92ZXIgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxlKTsgLy8gU3RvcCBMb29wIGNhcm91c2VsXHJcbiAgICB9LFxyXG4gICAgcmVzaXplQ2Fyb3VzZWwgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBjdXJyZW50Vmlld3BvcnRXaWR0aDsgdmFyIG5ld1dpZHRoOyB2YXIgbmV3SGVpZ2h0O1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93LmlubmVyV2lkdGggIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3cG9ydFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7IC8vIEdldCBWaWV3cG9ydCBXaWR0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gQXBwbHkgb25seSBpZiB0aGUgdmlld3BvcnQgd2lkdGggaXNcclxuICAgICAgICAvLyB1bmRlciBpdHMgaW5pdGlhbCB3aWR0aFxyXG5cclxuICAgICAgICBpZihjdXJyZW50Vmlld3BvcnRXaWR0aCA8IDIwMDAgJiYgY3VycmVudFZpZXdwb3J0V2lkdGggPiA4MDApe1xyXG4gICAgICAgICAgICBuZXdXaWR0aCA9IGN1cnJlbnRWaWV3cG9ydFdpZHRoIC0gMTc7IC8vIHZpZXdwb3J0IHdpZHRoIG1pbnVzIHNjcm9sbCBiYXIgd2lkdGhcclxuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gbmV3V2lkdGggLzIuNzMyMjtcclxuICAgICAgICB9ZWxzZSBpZihjdXJyZW50Vmlld3BvcnRXaWR0aCA8IDgwMCl7XHJcbiAgICAgICAgICAgIG5ld1dpZHRoID0gMDtcclxuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gMDtcclxuICAgICAgICB9ZWxzZXsgLy8gQXBwbHkgaW5pdGlhbCB3aWR0aCBpbiBvdGhlciBjYXNlc1xyXG4gICAgICAgICAgICBuZXdXaWR0aCA9IDIwMDA7XHJcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IDczMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2Fyb3VzZWwud3JhcHBlckNhcm91c2VsLnN0eWxlLndpZHRoID0gbmV3V2lkdGggK1wicHhcIjtcclxuICAgICAgICBjYXJvdXNlbC53cmFwcGVyQ2Fyb3VzZWwuc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0ICtcInB4XCI7XHJcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgY2Fyb3VzZWwubnVtYmVySXRlbXM7IGkrKyl7XHJcbiAgICAgICAgICAgIGNhcm91c2VsLml0ZW1zW2ldLnN0eWxlLndpZHRoID0gbmV3V2lkdGggK1wicHhcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNhcm91c2VsQ2xpY2tIYW5kbGVyKGUpe1xyXG5cclxuICAgIHZhciBkaXJlY3Rpb24gPSB0aGlzLmlkOyAvLyBHZXQgdGhlIGN1cnJlbnQgaXRlbVxyXG4gICAgdmFyIGxpbWl0ID0gY2Fyb3VzZWwubnVtYmVySXRlbXMgLSAyIDsgLy8gbG9vcCBjb25kaXRpb25cclxuICAgIGlmIChkaXJlY3Rpb24gPT0gXCJuZXh0XCIpIHtcclxuICAgICAgICBpZiAoY2Fyb3VzZWwuY291bnQgPCBsaW1pdCkge1xyXG4gICAgICAgICAgICBjYXJvdXNlbC5jb3VudCArPSAxO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYXJvdXNlbC5jb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2UgaWYoZGlyZWN0aW9uID09IFwicHJldlwiKXtcclxuICAgICAgICBpZiAoY2Fyb3VzZWwuY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGNhcm91c2VsLmNvdW50IC09IDE7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNhcm91c2VsLmNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBNb2RpZnkgaXRlbSBsZWZ0IHBvc2l0aW9uXHJcbiAgICBjYXJvdXNlbC53cmFwcGVySXRlbXMuc3R5bGUubGVmdCA9IFwiLVwiICsgY2Fyb3VzZWwuY291bnQgKiAxMDAgKyBcIiVcIjtcclxuICAgIGNhcm91c2VsLndyYXBwZXJJdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gXCJsZWZ0IDAuNXMsIHBvc2l0aW9uIDAuNXNcIjtcclxuICAgIGluZm9zQ2Fyb3VzZWwuY2hhbmdlSW5mb3MoY2Fyb3VzZWwuY291bnQpOyAvLyBBbmltYXRpb24gaW5mb3MgYmxvYyBjYXJvdXNlbFxyXG59XHJcblxyXG52YXIgaW5mb3NDYXJvdXNlbCA9IHtcclxuICAgIHdyYXBwZXJJbmZvcyA6IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjd3JhcHBlci1pbmZvcy1pdGVtcyAuaW5mb3MtaXRlbXMnKSxcclxuICAgIGNoYW5nZUluZm9zIDogZnVuY3Rpb24oYWN0aXZlZCl7XHJcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgaW5mb3NDYXJvdXNlbC53cmFwcGVySW5mb3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihhY3RpdmVkID09IGkpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEluZm9zID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGZvcihqID0gMDsgaiA8IGN1cnJlbnRJbmZvcy5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZm9zW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7IC8vIFJlbW92ZSBBbGwgYWN0aXZlIGNsYXNzZXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGluZm9zQ2Fyb3VzZWwud3JhcHBlckluZm9zW2ldLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7IC8vIEFkZCBhY3RpdmUgY2xhc3MgdG8gdGhlIEluZm8gQm94XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xyXG5cclxuaWYgKGNhcm91c2VsLndyYXBwZXJDYXJvdXNlbCAhPT0gbnVsbCl7XHJcblx0Y2Fyb3VzZWwucmVzaXplQ2Fyb3VzZWwoKTtcclxuXHRjYXJvdXNlbC5zZXRTaXplSXRlbXMoKTtcclxuXHRjYXJvdXNlbC5zbGlkZUxlZnQoKTtcclxuXHRjYXJvdXNlbC5hZGRDYXJvdXNlbExpc3RlbmVyKCk7XHJcblx0Ly9uYXZDYXJvdXNlbC5zbGlkZUNvbW1hbmQoKTtcclxufVxyXG4qL1xyXG4iLCIvKipcclxuICogRmljaGllciBKcyBwcmluY2lwYWxcclxuICovXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xyXG4gIC8qIE1hdMOpcmlhbGl6ZSBldmVudCAqL1xyXG4gICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpO1xyXG4gICAgJCgnLm1hdGVyaWFsYm94ZWQnKS5tYXRlcmlhbGJveCgpO1xyXG4gICAgJCgnLnNsaWRlcicpLnNsaWRlcih7ZnVsbF93aWR0aDogdHJ1ZX0pO1xyXG5cclxuXHJcbiAgICBob3ZlckV2ZW50KCduYXYubWFpbi1uYXYgdWwuZGVza3RvcCBsaScpO1xyXG4gICAgaG92ZXJFdmVudCgnLnRvcC1wcm9kdWN0cz5kaXYnKTtcclxuICAgIC8vY2VudGVyTWVudShcInVsLmRlc2t0b3BcIik7XHJcblxyXG5cclxuICAgICQoXCJ1bCNuYXYtYWNjb3VudCA+IGxpIGFcIikuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBuYXZBY2NvdW50KHRoaXMpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGlmKCQoXCIuaW5wdXQtZmllbGQgc2VsZWN0XCIpLmxlbmd0aCA+IDApe1xyXG4gICAgICAkKFwiLmlucHV0LWZpZWxkIHNlbGVjdFwiKS5tYXRlcmlhbF9zZWxlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZigkKCcubmF2LWZpbHRlcicpLmxlbmd0aCA+IDApe1xyXG4gICAgICBmaWx0ZXJQb3NpdGlvbigpO1xyXG4gICAgICAkKCB3aW5kb3cgKS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBmaWx0ZXJQb3NpdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmKCQoJy5uYXYtZmlsdGVyICNmaWx0cmVfcHJpeCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICBmb3VyY2hldHRlUHJpeCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjZW50ZXJNZW51KG1lbnUpe1xyXG4gICAgdmFyIHVsV2lkdGggPSAkKG1lbnUpLndpZHRoKCk7XHJcbiAgICAkKG1lbnUpLmF0dHIoXCJ3aWR0aFwiLCB1bFdpZHRoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaG92ZXJFdmVudChwYXJlbnQpe1xyXG4gICAgJChwYXJlbnQpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcImRpdlwiKS5zaG93KCk7XHJcbiAgICB9KTtcclxuICAgICQocGFyZW50KS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oXCJkaXZcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuLyogIEZvbmN0aW9uIHNlcnZhbnQgw6AgZmFpcmUgYXBwYXJhaXRyZS9kaXNwYXJhaXRyZSBsZXMgYmxvY3MgZGUgbGEgc2VjdGlvbiBtb24gY29tcHRlKi9cclxuZnVuY3Rpb24gbmF2QWNjb3VudChsaW5rKXtcclxuICAkKCcuc2VjdGlvbiBkaXYuYWN0aXZlLWFjY291bnQnKS5yZW1vdmVDbGFzcyhcImFjdGl2ZS1hY2NvdW50XCIpO1xyXG4gIHZhciBwYXJ0ID0gJChsaW5rKS5hdHRyKFwiZGF0YS1uYXZcIik7XHJcbiAgJChcIi5cIiArIHBhcnQpLmFkZENsYXNzKCdhY3RpdmUtYWNjb3VudCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJQb3NpdGlvbigpe1xyXG4gIGlmKCQoIHdpbmRvdyApLndpZHRoKCkgPiA5NzUpe1xyXG4gICAgdmFyIGJvZHlXaWR0aCA9ICQoJ2JvZHknKS53aWR0aCgpO1xyXG4gICAgdmFyIG5hdkZpbHRlcldpZHRoID0gYm9keVdpZHRoICogMC4xNSAtIDEwO1xyXG4gICAgdmFyIGxlZnRQb3NpdGlvbiA9IGJvZHlXaWR0aCAqIDAuMTU7XHJcbiAgICAkKCcubmF2LWZpbHRlcicpLndpZHRoKG5hdkZpbHRlcldpZHRoKTtcclxuICAgICQoJy5uYXYtZmlsdGVyJykuY3NzKHsgdG9wOiAwLCBsZWZ0OiBcIi1cIiArIGxlZnRQb3NpdGlvbiArXCJweFwiIH0pO1xyXG4gIH1lbHNle1xyXG4gICAgdmFyIG1heFdpZHRoID0gJCgnLmNvbnRhaW5lcicpLndpZHRoKCk7XHJcbiAgICAkKCcubmF2LWZpbHRlcicpLndpZHRoKG1heFdpZHRoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvdXJjaGV0dGVQcml4KCl7XHJcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0cmVfcHJpeCcpO1xyXG4gICAgbm9VaVNsaWRlci5jcmVhdGUoc2xpZGVyLCB7XHJcbiAgICAgIHN0YXJ0OiBbMjAsIDEwMF0sXHJcbiAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICByYW5nZToge1xyXG4gICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAgJ21heCc6IDQ1MFxyXG4gICAgICAgfSxcclxuICAgIH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
