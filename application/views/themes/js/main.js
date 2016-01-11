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

/**
 * Fichier Js principal
 */
jQuery(document).ready(function($) {
    $(".button-collapse").sideNav();

    hoverEvent('nav.main-nav ul.desktop li');
    hoverEvent('.top-products>div');
    //centerMenu("ul.desktop");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjZi1nb29nbGUtbWFwLmpzIiwiY2Fyb3VzZWwuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG5cclxuLypcclxuKiAgbmV3X21hcFxyXG4qXHJcbiogIFRoaXMgZnVuY3Rpb24gd2lsbCByZW5kZXIgYSBHb29nbGUgTWFwIG9udG8gdGhlIHNlbGVjdGVkIGpRdWVyeSBlbGVtZW50XHJcbipcclxuKiAgQHR5cGVcdGZ1bmN0aW9uXHJcbiogIEBkYXRlXHQ4LzExLzIwMTNcclxuKiAgQHNpbmNlXHQ0LjMuMFxyXG4qXHJcbiogIEBwYXJhbVx0JGVsIChqUXVlcnkgZWxlbWVudClcclxuKiAgQHJldHVyblx0bi9hXHJcbiovXHJcblxyXG5mdW5jdGlvbiBuZXdfbWFwKCAkZWwgKSB7XHJcblxyXG5cdC8vIHZhclxyXG5cdHZhciAkbWFya2VycyA9ICRlbC5maW5kKCcubWFya2VyJyk7XHJcblxyXG5cclxuXHJcblx0Ly8gdmFyc1xyXG5cdHZhciBhcmdzID0ge1xyXG5cdFx0em9vbVx0XHQ6IDE2LFxyXG5cdFx0Y2VudGVyXHRcdDogbmV3IGdvb2dsZS5tYXBzLkxhdExuZygwLCAwKSxcclxuXHRcdG1hcFR5cGVJZFx0OiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUFxyXG5cdH07XHJcblxyXG5cclxuXHQvLyBjcmVhdGUgbWFwXHJcblx0dmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoICRlbFswXSwgYXJncyk7XHJcblxyXG5cclxuXHQvLyBhZGQgYSBtYXJrZXJzIHJlZmVyZW5jZVxyXG5cdG1hcC5tYXJrZXJzID0gW107XHJcblxyXG5cclxuXHQvLyBhZGQgbWFya2Vyc1xyXG5cdCRtYXJrZXJzLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICBcdGFkZF9tYXJrZXIoICQodGhpcyksIG1hcCApO1xyXG5cclxuXHR9KTtcclxuXHJcblxyXG5cdC8vIGNlbnRlciBtYXBcclxuXHRjZW50ZXJfbWFwKCBtYXAgKTtcclxuXHJcblxyXG5cdC8vIHJldHVyblxyXG5cdHJldHVybiBtYXA7XHJcblxyXG59XHJcblxyXG4vKlxyXG4qICBhZGRfbWFya2VyXHJcbipcclxuKiAgVGhpcyBmdW5jdGlvbiB3aWxsIGFkZCBhIG1hcmtlciB0byB0aGUgc2VsZWN0ZWQgR29vZ2xlIE1hcFxyXG4qXHJcbiogIEB0eXBlXHRmdW5jdGlvblxyXG4qICBAZGF0ZVx0OC8xMS8yMDEzXHJcbiogIEBzaW5jZVx0NC4zLjBcclxuKlxyXG4qICBAcGFyYW1cdCRtYXJrZXIgKGpRdWVyeSBlbGVtZW50KVxyXG4qICBAcGFyYW1cdG1hcCAoR29vZ2xlIE1hcCBvYmplY3QpXHJcbiogIEByZXR1cm5cdG4vYVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gYWRkX21hcmtlciggJG1hcmtlciwgbWFwICkge1xyXG5cclxuXHQvLyB2YXJcclxuXHR2YXIgbGF0bG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyggJG1hcmtlci5hdHRyKCdkYXRhLWxhdCcpLCAkbWFya2VyLmF0dHIoJ2RhdGEtbG5nJykgKTtcclxuXHJcblxyXG5cdC8vIGNyZWF0ZSBtYXJrZXJcclxuXHR2YXIgaWNvbkJhc2UgPSAnL2FwcC90aGVtZXMvY2FyZWwvaW1nLyc7XHJcblx0dmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG5cdFx0cG9zaXRpb25cdDogbGF0bG5nLFxyXG5cdFx0bWFwXHRcdFx0OiBtYXAsXHJcblx0XHRpY29uOiBpY29uQmFzZSArICdtYXJrZXJHTWFwLnBuZydcclxuXHR9KTtcclxuXHJcblxyXG5cdC8vIGFkZCB0byBhcnJheVxyXG5cdG1hcC5tYXJrZXJzLnB1c2goIG1hcmtlciApO1xyXG5cclxuXHQvLyBpZiBtYXJrZXIgY29udGFpbnMgSFRNTCwgYWRkIGl0IHRvIGFuIGluZm9XaW5kb3dcclxuXHRpZiggJG1hcmtlci5odG1sKCkgKVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSBpbmZvIHdpbmRvd1xyXG5cdFx0dmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcblx0XHRcdGNvbnRlbnRcdFx0OiAkbWFya2VyLmh0bWwoKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gc2hvdyBpbmZvIHdpbmRvdyB3aGVuIG1hcmtlciBpcyBjbGlja2VkXHJcblx0XHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0aW5mb3dpbmRvdy5vcGVuKCBtYXAsIG1hcmtlciApO1xyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbi8qXHJcbiogIGNlbnRlcl9tYXBcclxuKlxyXG4qICBUaGlzIGZ1bmN0aW9uIHdpbGwgY2VudGVyIHRoZSBtYXAsIHNob3dpbmcgYWxsIG1hcmtlcnMgYXR0YWNoZWQgdG8gdGhpcyBtYXBcclxuKlxyXG4qICBAdHlwZVx0ZnVuY3Rpb25cclxuKiAgQGRhdGVcdDgvMTEvMjAxM1xyXG4qICBAc2luY2VcdDQuMy4wXHJcbipcclxuKiAgQHBhcmFtXHRtYXAgKEdvb2dsZSBNYXAgb2JqZWN0KVxyXG4qICBAcmV0dXJuXHRuL2FcclxuKi9cclxuXHJcbmZ1bmN0aW9uIGNlbnRlcl9tYXAoIG1hcCApIHtcclxuXHJcblx0Ly8gdmFyc1xyXG5cdHZhciBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XHJcblxyXG5cdC8vIGxvb3AgdGhyb3VnaCBhbGwgbWFya2VycyBhbmQgY3JlYXRlIGJvdW5kc1xyXG5cdCQuZWFjaCggbWFwLm1hcmtlcnMsIGZ1bmN0aW9uKCBpLCBtYXJrZXIgKXtcclxuXHJcblx0XHR2YXIgbGF0bG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyggbWFya2VyLnBvc2l0aW9uLmxhdCgpLCBtYXJrZXIucG9zaXRpb24ubG5nKCkgKTtcclxuXHJcblx0XHRib3VuZHMuZXh0ZW5kKCBsYXRsbmcgKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vIG9ubHkgMSBtYXJrZXI/XHJcblx0aWYoIG1hcC5tYXJrZXJzLmxlbmd0aCA9PSAxIClcclxuXHR7XHJcblx0XHQvLyBzZXQgY2VudGVyIG9mIG1hcFxyXG5cdCAgICBtYXAuc2V0Q2VudGVyKCBib3VuZHMuZ2V0Q2VudGVyKCkgKTtcclxuXHQgICAgbWFwLnNldFpvb20oIDE2ICk7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyBmaXQgdG8gYm91bmRzXHJcblx0XHRtYXAuZml0Qm91bmRzKCBib3VuZHMgKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG4vKlxyXG4qICBkb2N1bWVudCByZWFkeVxyXG4qXHJcbiogIFRoaXMgZnVuY3Rpb24gd2lsbCByZW5kZXIgZWFjaCBtYXAgd2hlbiB0aGUgZG9jdW1lbnQgaXMgcmVhZHkgKHBhZ2UgaGFzIGxvYWRlZClcclxuKlxyXG4qICBAdHlwZVx0ZnVuY3Rpb25cclxuKiAgQGRhdGVcdDgvMTEvMjAxM1xyXG4qICBAc2luY2VcdDUuMC4wXHJcbipcclxuKiAgQHBhcmFtXHRuL2FcclxuKiAgQHJldHVyblx0bi9hXHJcbiovXHJcbi8vIGdsb2JhbCB2YXJcclxuLy92YXIgbWFwID0gbnVsbDtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG5cdCQoJy5hY2YtbWFwJykuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBtYXBcclxuXHRcdG1hcCA9IG5ld19tYXAoICQodGhpcykgKTtcclxuXHJcblx0fSk7XHJcblxyXG59KTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcblxyXG52YXIgbWFwO1xyXG4iLCIvLyBUaGlzIENhcm91c2VsIG5lZWRzIGZpcnN0IGFuZCBsYXN0IEl0ZW1zIGlkZW50aWNhbHMgLy9cbi8vIHRvIG1ha2UgYW4gaW5maW5pdGUgbG9vcCBlZmZlY3QvL1xuXG5cblxudmFyIGNhcm91c2VsID0ge1xuICAgIHdyYXBwZXJDYXJvdXNlbCA6IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmxvYy1jYXJvdXNlbCcpLFxuICAgIHdyYXBwZXJJdGVtcyA6IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlci1pdGVtcy1jYXJvdXNlbCcpLFxuICAgIG51bWJlckl0ZW1zIDogd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN3cmFwcGVyLWl0ZW1zLWNhcm91c2VsICAuaXRlbXMtY2Fyb3VzZWwnKS5sZW5ndGgsXG4gICAgaXRlbXMgOiB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXRlbXMtY2Fyb3VzZWwnKSxcbiAgICBjb3VudCA6IDAsXG4gICAgc2V0U2l6ZUl0ZW1zIDogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy53cmFwcGVySXRlbXMuc3R5bGUud2lkdGggPSB0aGlzLm51bWJlckl0ZW1zICogMTAwICsgXCIlXCI7IC8vIFNldCB0aGUgd3JhcHBlci1pdGVtcy1jYXJvdXNlbCB3aWR0aFxuICAgIH0sXG4gICAgc2xpZGVMZWZ0IDogZnVuY3Rpb24oKXtcbiAgICAgICAgaW50ZXJ2YWxlID0gc2V0SW50ZXJ2YWwoY2Fyb3VzZWwuYXV0b1NsaWRlLCA0MDAwKTsgLy8gMTAwMCA9IDEgc2Vjb25kXG4gICAgfSxcbiAgICBhdXRvU2xpZGUgOiBmdW5jdGlvbigpe1xuICAgICAgICBpZihjYXJvdXNlbC5jb3VudCA9PSAoY2Fyb3VzZWwubnVtYmVySXRlbXMtMSkpe1xuICAgICAgICAgICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLmxlZnQgPSBcIi1cIiArIGNhcm91c2VsLmNvdW50ICogMTAwICsgXCIlXCI7XG4gICAgICAgICAgICAvLyBJbmZpbml0ZSBMb29wXG4gICAgICAgICAgICBsYXN0SXRlbSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLmxlZnQgPSAwOyAvLyBQdXQgd3JhcHBlci1pdGVtcy1jYXJvdXNlbCBhdCBpbml0aWFsIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjsgLy8gRGlzYWJsZWQgVHJhbnNpdGlvbiBlZmZlY3RcbiAgICAgICAgICAgICAgICBpbmZvc0Nhcm91c2VsLmNoYW5nZUluZm9zKDApOyAvLyBBbmltYXRpb24gaW5mb3MgYmxvYyBjYXJvdXNlbFxuICAgICAgICAgICAgICAgIGNhcm91c2VsLmNvdW50ID0gMTsgLy8gU2V0IENvdW50IGZvciB0aGUgc2Vjb25kIEl0ZW1cbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjYXJvdXNlbC53cmFwcGVySXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9IFwibGVmdCAwLjVzLCBwb3NpdGlvbiAwLjVzXCI7IC8vIEVuYWJsZWQgVHJhbnNpdGlvbiBlZmZlY3RcbiAgICAgICAgICAgIGNhcm91c2VsLndyYXBwZXJJdGVtcy5zdHlsZS5sZWZ0ID0gXCItXCIgKyBjYXJvdXNlbC5jb3VudCAqIDEwMCArIFwiJVwiO1xuICAgICAgICAgICAgaW5mb3NDYXJvdXNlbC5jaGFuZ2VJbmZvcyhjYXJvdXNlbC5jb3VudCk7Ly8gQW5pbWF0aW9uIGluZm9zIGJsb2MgY2Fyb3VzZWxcbiAgICAgICAgICAgIGNhcm91c2VsLmNvdW50Kys7IC8vIENvdW50IGxvb3BcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRDYXJvdXNlbExpc3RlbmVyIDogZnVuY3Rpb24oKXtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2Fyb3VzZWwucmVzaXplQ2Fyb3VzZWwsIGZhbHNlKTsgLy8gUmVzcG9uc2l2ZVxuICAgICAgICBjYXJvdXNlbC53cmFwcGVyQ2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgY2Fyb3VzZWwucGF1c2VIb3ZlciwgZmFsc2UpOyAvLyBTdG9wIExvb3AgY2Fyb3VzZWxcbiAgICAgICAgY2Fyb3VzZWwud3JhcHBlckNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGNhcm91c2VsLnNsaWRlTGVmdCwgZmFsc2UpOyAvLyBSZWxvYWQgTG9vcCBjYXJvdXNlbFxuXG4gICAgICAgIHZhciBuZXh0TGluayA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xuICAgICAgICB2YXIgcHJldkxpbmsgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcbiAgICAgICAgbmV4dExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcm91c2VsQ2xpY2tIYW5kbGVyICwgZmFsc2UpO1xuICAgICAgICBwcmV2TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2Fyb3VzZWxDbGlja0hhbmRsZXIgLCBmYWxzZSk7XG5cbiAgICB9LFxuICAgIHBhdXNlSG92ZXIgOiBmdW5jdGlvbigpe1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsZSk7IC8vIFN0b3AgTG9vcCBjYXJvdXNlbFxuICAgIH0sXG4gICAgcmVzaXplQ2Fyb3VzZWwgOiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgY3VycmVudFZpZXdwb3J0V2lkdGg7IHZhciBuZXdXaWR0aDsgdmFyIG5ld0hlaWdodDtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaW5uZXJXaWR0aCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3cG9ydFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7IC8vIEdldCBWaWV3cG9ydCBXaWR0aFxuICAgICAgICAgICAgfVxuICAgICAgICAvLyBBcHBseSBvbmx5IGlmIHRoZSB2aWV3cG9ydCB3aWR0aCBpc1xuICAgICAgICAvLyB1bmRlciBpdHMgaW5pdGlhbCB3aWR0aFxuXG4gICAgICAgIGlmKGN1cnJlbnRWaWV3cG9ydFdpZHRoIDwgMjAwMCAmJiBjdXJyZW50Vmlld3BvcnRXaWR0aCA+IDgwMCl7XG4gICAgICAgICAgICBuZXdXaWR0aCA9IGN1cnJlbnRWaWV3cG9ydFdpZHRoIC0gMTc7IC8vIHZpZXdwb3J0IHdpZHRoIG1pbnVzIHNjcm9sbCBiYXIgd2lkdGhcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IG5ld1dpZHRoIC8yLjczMjI7XG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRWaWV3cG9ydFdpZHRoIDwgODAwKXtcbiAgICAgICAgICAgIG5ld1dpZHRoID0gMDtcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IDA7XG4gICAgICAgIH1lbHNleyAvLyBBcHBseSBpbml0aWFsIHdpZHRoIGluIG90aGVyIGNhc2VzXG4gICAgICAgICAgICBuZXdXaWR0aCA9IDIwMDA7XG4gICAgICAgICAgICBuZXdIZWlnaHQgPSA3MzI7XG4gICAgICAgIH1cbiAgICAgICAgY2Fyb3VzZWwud3JhcHBlckNhcm91c2VsLnN0eWxlLndpZHRoID0gbmV3V2lkdGggK1wicHhcIjtcbiAgICAgICAgY2Fyb3VzZWwud3JhcHBlckNhcm91c2VsLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArXCJweFwiO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBjYXJvdXNlbC5udW1iZXJJdGVtczsgaSsrKXtcbiAgICAgICAgICAgIGNhcm91c2VsLml0ZW1zW2ldLnN0eWxlLndpZHRoID0gbmV3V2lkdGggK1wicHhcIjtcbiAgICAgICAgfVxuICAgIH0sXG5cbn07XG5cbmZ1bmN0aW9uIGNhcm91c2VsQ2xpY2tIYW5kbGVyKGUpe1xuXG4gICAgdmFyIGRpcmVjdGlvbiA9IHRoaXMuaWQ7IC8vIEdldCB0aGUgY3VycmVudCBpdGVtXG4gICAgdmFyIGxpbWl0ID0gY2Fyb3VzZWwubnVtYmVySXRlbXMgLSAyIDsgLy8gbG9vcCBjb25kaXRpb25cbiAgICBpZiAoZGlyZWN0aW9uID09IFwibmV4dFwiKSB7XG4gICAgICAgIGlmIChjYXJvdXNlbC5jb3VudCA8IGxpbWl0KSB7XG4gICAgICAgICAgICBjYXJvdXNlbC5jb3VudCArPSAxO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNhcm91c2VsLmNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PSBcInByZXZcIil7XG4gICAgICAgIGlmIChjYXJvdXNlbC5jb3VudCA+IDApIHtcbiAgICAgICAgICAgIGNhcm91c2VsLmNvdW50IC09IDE7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2Fyb3VzZWwuY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE1vZGlmeSBpdGVtIGxlZnQgcG9zaXRpb25cbiAgICBjYXJvdXNlbC53cmFwcGVySXRlbXMuc3R5bGUubGVmdCA9IFwiLVwiICsgY2Fyb3VzZWwuY291bnQgKiAxMDAgKyBcIiVcIjtcbiAgICBjYXJvdXNlbC53cmFwcGVySXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9IFwibGVmdCAwLjVzLCBwb3NpdGlvbiAwLjVzXCI7XG4gICAgaW5mb3NDYXJvdXNlbC5jaGFuZ2VJbmZvcyhjYXJvdXNlbC5jb3VudCk7IC8vIEFuaW1hdGlvbiBpbmZvcyBibG9jIGNhcm91c2VsXG59XG5cbnZhciBpbmZvc0Nhcm91c2VsID0ge1xuICAgIHdyYXBwZXJJbmZvcyA6IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjd3JhcHBlci1pbmZvcy1pdGVtcyAuaW5mb3MtaXRlbXMnKSxcbiAgICBjaGFuZ2VJbmZvcyA6IGZ1bmN0aW9uKGFjdGl2ZWQpe1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBpbmZvc0Nhcm91c2VsLndyYXBwZXJJbmZvcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihhY3RpdmVkID09IGkpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmZvcyA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZm9yKGogPSAwOyBqIDwgY3VycmVudEluZm9zLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZm9zW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7IC8vIFJlbW92ZSBBbGwgYWN0aXZlIGNsYXNzZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5mb3NDYXJvdXNlbC53cmFwcGVySW5mb3NbaV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byB0aGUgSW5mbyBCb3hcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5pZiAoY2Fyb3VzZWwud3JhcHBlckNhcm91c2VsICE9PSBudWxsKXtcblx0Y2Fyb3VzZWwucmVzaXplQ2Fyb3VzZWwoKTtcblx0Y2Fyb3VzZWwuc2V0U2l6ZUl0ZW1zKCk7XG5cdGNhcm91c2VsLnNsaWRlTGVmdCgpO1xuXHRjYXJvdXNlbC5hZGRDYXJvdXNlbExpc3RlbmVyKCk7XG5cdC8vbmF2Q2Fyb3VzZWwuc2xpZGVDb21tYW5kKCk7XG59XG4iLCIvKipcclxuICogRmljaGllciBKcyBwcmluY2lwYWxcclxuICovXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xyXG4gICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpO1xyXG5cclxuICAgIGhvdmVyRXZlbnQoJ25hdi5tYWluLW5hdiB1bC5kZXNrdG9wIGxpJyk7XHJcbiAgICBob3ZlckV2ZW50KCcudG9wLXByb2R1Y3RzPmRpdicpO1xyXG4gICAgLy9jZW50ZXJNZW51KFwidWwuZGVza3RvcFwiKTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gY2VudGVyTWVudShtZW51KXtcclxuICAgIHZhciB1bFdpZHRoID0gJChtZW51KS53aWR0aCgpO1xyXG4gICAgJChtZW51KS5hdHRyKFwid2lkdGhcIiwgdWxXaWR0aCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBob3ZlckV2ZW50KHBhcmVudCl7XHJcbiAgICAkKHBhcmVudCkubW91c2VlbnRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwiZGl2XCIpLnNob3coKTtcclxuICAgIH0pO1xyXG4gICAgJChwYXJlbnQpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcImRpdlwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
