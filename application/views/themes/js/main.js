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


    $("ul#nav-account > li a").click(function(event){
      event.preventDefault();
      navAccount(this);
    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjZi1nb29nbGUtbWFwLmpzIiwiY2Fyb3VzZWwuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuXHJcbi8qXHJcbiogIG5ld19tYXBcclxuKlxyXG4qICBUaGlzIGZ1bmN0aW9uIHdpbGwgcmVuZGVyIGEgR29vZ2xlIE1hcCBvbnRvIHRoZSBzZWxlY3RlZCBqUXVlcnkgZWxlbWVudFxyXG4qXHJcbiogIEB0eXBlXHRmdW5jdGlvblxyXG4qICBAZGF0ZVx0OC8xMS8yMDEzXHJcbiogIEBzaW5jZVx0NC4zLjBcclxuKlxyXG4qICBAcGFyYW1cdCRlbCAoalF1ZXJ5IGVsZW1lbnQpXHJcbiogIEByZXR1cm5cdG4vYVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gbmV3X21hcCggJGVsICkge1xyXG5cclxuXHQvLyB2YXJcclxuXHR2YXIgJG1hcmtlcnMgPSAkZWwuZmluZCgnLm1hcmtlcicpO1xyXG5cclxuXHJcblxyXG5cdC8vIHZhcnNcclxuXHR2YXIgYXJncyA9IHtcclxuXHRcdHpvb21cdFx0OiAxNixcclxuXHRcdGNlbnRlclx0XHQ6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoMCwgMCksXHJcblx0XHRtYXBUeXBlSWRcdDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVBcclxuXHR9O1xyXG5cclxuXHJcblx0Ly8gY3JlYXRlIG1hcFxyXG5cdHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKCAkZWxbMF0sIGFyZ3MpO1xyXG5cclxuXHJcblx0Ly8gYWRkIGEgbWFya2VycyByZWZlcmVuY2VcclxuXHRtYXAubWFya2VycyA9IFtdO1xyXG5cclxuXHJcblx0Ly8gYWRkIG1hcmtlcnNcclxuXHQkbWFya2Vycy5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgXHRhZGRfbWFya2VyKCAkKHRoaXMpLCBtYXAgKTtcclxuXHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyBjZW50ZXIgbWFwXHJcblx0Y2VudGVyX21hcCggbWFwICk7XHJcblxyXG5cclxuXHQvLyByZXR1cm5cclxuXHRyZXR1cm4gbWFwO1xyXG5cclxufVxyXG5cclxuLypcclxuKiAgYWRkX21hcmtlclxyXG4qXHJcbiogIFRoaXMgZnVuY3Rpb24gd2lsbCBhZGQgYSBtYXJrZXIgdG8gdGhlIHNlbGVjdGVkIEdvb2dsZSBNYXBcclxuKlxyXG4qICBAdHlwZVx0ZnVuY3Rpb25cclxuKiAgQGRhdGVcdDgvMTEvMjAxM1xyXG4qICBAc2luY2VcdDQuMy4wXHJcbipcclxuKiAgQHBhcmFtXHQkbWFya2VyIChqUXVlcnkgZWxlbWVudClcclxuKiAgQHBhcmFtXHRtYXAgKEdvb2dsZSBNYXAgb2JqZWN0KVxyXG4qICBAcmV0dXJuXHRuL2FcclxuKi9cclxuXHJcbmZ1bmN0aW9uIGFkZF9tYXJrZXIoICRtYXJrZXIsIG1hcCApIHtcclxuXHJcblx0Ly8gdmFyXHJcblx0dmFyIGxhdGxuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoICRtYXJrZXIuYXR0cignZGF0YS1sYXQnKSwgJG1hcmtlci5hdHRyKCdkYXRhLWxuZycpICk7XHJcblxyXG5cclxuXHQvLyBjcmVhdGUgbWFya2VyXHJcblx0dmFyIGljb25CYXNlID0gJy9hcHAvdGhlbWVzL2NhcmVsL2ltZy8nO1xyXG5cdHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuXHRcdHBvc2l0aW9uXHQ6IGxhdGxuZyxcclxuXHRcdG1hcFx0XHRcdDogbWFwLFxyXG5cdFx0aWNvbjogaWNvbkJhc2UgKyAnbWFya2VyR01hcC5wbmcnXHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyBhZGQgdG8gYXJyYXlcclxuXHRtYXAubWFya2Vycy5wdXNoKCBtYXJrZXIgKTtcclxuXHJcblx0Ly8gaWYgbWFya2VyIGNvbnRhaW5zIEhUTUwsIGFkZCBpdCB0byBhbiBpbmZvV2luZG93XHJcblx0aWYoICRtYXJrZXIuaHRtbCgpIClcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgaW5mbyB3aW5kb3dcclxuXHRcdHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG5cdFx0XHRjb250ZW50XHRcdDogJG1hcmtlci5odG1sKClcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHNob3cgaW5mbyB3aW5kb3cgd2hlbiBtYXJrZXIgaXMgY2xpY2tlZFxyXG5cdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdGluZm93aW5kb3cub3BlbiggbWFwLCBtYXJrZXIgKTtcclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcblxyXG4vKlxyXG4qICBjZW50ZXJfbWFwXHJcbipcclxuKiAgVGhpcyBmdW5jdGlvbiB3aWxsIGNlbnRlciB0aGUgbWFwLCBzaG93aW5nIGFsbCBtYXJrZXJzIGF0dGFjaGVkIHRvIHRoaXMgbWFwXHJcbipcclxuKiAgQHR5cGVcdGZ1bmN0aW9uXHJcbiogIEBkYXRlXHQ4LzExLzIwMTNcclxuKiAgQHNpbmNlXHQ0LjMuMFxyXG4qXHJcbiogIEBwYXJhbVx0bWFwIChHb29nbGUgTWFwIG9iamVjdClcclxuKiAgQHJldHVyblx0bi9hXHJcbiovXHJcblxyXG5mdW5jdGlvbiBjZW50ZXJfbWFwKCBtYXAgKSB7XHJcblxyXG5cdC8vIHZhcnNcclxuXHR2YXIgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xyXG5cclxuXHQvLyBsb29wIHRocm91Z2ggYWxsIG1hcmtlcnMgYW5kIGNyZWF0ZSBib3VuZHNcclxuXHQkLmVhY2goIG1hcC5tYXJrZXJzLCBmdW5jdGlvbiggaSwgbWFya2VyICl7XHJcblxyXG5cdFx0dmFyIGxhdGxuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoIG1hcmtlci5wb3NpdGlvbi5sYXQoKSwgbWFya2VyLnBvc2l0aW9uLmxuZygpICk7XHJcblxyXG5cdFx0Ym91bmRzLmV4dGVuZCggbGF0bG5nICk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyBvbmx5IDEgbWFya2VyP1xyXG5cdGlmKCBtYXAubWFya2Vycy5sZW5ndGggPT0gMSApXHJcblx0e1xyXG5cdFx0Ly8gc2V0IGNlbnRlciBvZiBtYXBcclxuXHQgICAgbWFwLnNldENlbnRlciggYm91bmRzLmdldENlbnRlcigpICk7XHJcblx0ICAgIG1hcC5zZXRab29tKCAxNiApO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gZml0IHRvIGJvdW5kc1xyXG5cdFx0bWFwLmZpdEJvdW5kcyggYm91bmRzICk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuLypcclxuKiAgZG9jdW1lbnQgcmVhZHlcclxuKlxyXG4qICBUaGlzIGZ1bmN0aW9uIHdpbGwgcmVuZGVyIGVhY2ggbWFwIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5IChwYWdlIGhhcyBsb2FkZWQpXHJcbipcclxuKiAgQHR5cGVcdGZ1bmN0aW9uXHJcbiogIEBkYXRlXHQ4LzExLzIwMTNcclxuKiAgQHNpbmNlXHQ1LjAuMFxyXG4qXHJcbiogIEBwYXJhbVx0bi9hXHJcbiogIEByZXR1cm5cdG4vYVxyXG4qL1xyXG4vLyBnbG9iYWwgdmFyXHJcbi8vdmFyIG1hcCA9IG51bGw7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHQkKCcuYWNmLW1hcCcpLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcblx0XHQvLyBjcmVhdGUgbWFwXHJcblx0XHRtYXAgPSBuZXdfbWFwKCAkKHRoaXMpICk7XHJcblxyXG5cdH0pO1xyXG5cclxufSk7XHJcblxyXG59KShqUXVlcnkpO1xyXG5cclxudmFyIG1hcDtcclxuIiwiLy8gVGhpcyBDYXJvdXNlbCBuZWVkcyBmaXJzdCBhbmQgbGFzdCBJdGVtcyBpZGVudGljYWxzIC8vXHJcbi8vIHRvIG1ha2UgYW4gaW5maW5pdGUgbG9vcCBlZmZlY3QvL1xyXG5cclxuXHJcblxyXG52YXIgY2Fyb3VzZWwgPSB7XHJcbiAgICB3cmFwcGVyQ2Fyb3VzZWwgOiB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2MtY2Fyb3VzZWwnKSxcclxuICAgIHdyYXBwZXJJdGVtcyA6IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlci1pdGVtcy1jYXJvdXNlbCcpLFxyXG4gICAgbnVtYmVySXRlbXMgOiB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3dyYXBwZXItaXRlbXMtY2Fyb3VzZWwgIC5pdGVtcy1jYXJvdXNlbCcpLmxlbmd0aCxcclxuICAgIGl0ZW1zIDogd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW1zLWNhcm91c2VsJyksXHJcbiAgICBjb3VudCA6IDAsXHJcbiAgICBzZXRTaXplSXRlbXMgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMud3JhcHBlckl0ZW1zLnN0eWxlLndpZHRoID0gdGhpcy5udW1iZXJJdGVtcyAqIDEwMCArIFwiJVwiOyAvLyBTZXQgdGhlIHdyYXBwZXItaXRlbXMtY2Fyb3VzZWwgd2lkdGhcclxuICAgIH0sXHJcbiAgICBzbGlkZUxlZnQgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGludGVydmFsZSA9IHNldEludGVydmFsKGNhcm91c2VsLmF1dG9TbGlkZSwgNDAwMCk7IC8vIDEwMDAgPSAxIHNlY29uZFxyXG4gICAgfSxcclxuICAgIGF1dG9TbGlkZSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoY2Fyb3VzZWwuY291bnQgPT0gKGNhcm91c2VsLm51bWJlckl0ZW1zLTEpKXtcclxuICAgICAgICAgICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLmxlZnQgPSBcIi1cIiArIGNhcm91c2VsLmNvdW50ICogMTAwICsgXCIlXCI7XHJcbiAgICAgICAgICAgIC8vIEluZmluaXRlIExvb3BcclxuICAgICAgICAgICAgbGFzdEl0ZW0gPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLmxlZnQgPSAwOyAvLyBQdXQgd3JhcHBlci1pdGVtcy1jYXJvdXNlbCBhdCBpbml0aWFsIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbC53cmFwcGVySXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiOyAvLyBEaXNhYmxlZCBUcmFuc2l0aW9uIGVmZmVjdFxyXG4gICAgICAgICAgICAgICAgaW5mb3NDYXJvdXNlbC5jaGFuZ2VJbmZvcygwKTsgLy8gQW5pbWF0aW9uIGluZm9zIGJsb2MgY2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIGNhcm91c2VsLmNvdW50ID0gMTsgLy8gU2V0IENvdW50IGZvciB0aGUgc2Vjb25kIEl0ZW1cclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNhcm91c2VsLndyYXBwZXJJdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gXCJsZWZ0IDAuNXMsIHBvc2l0aW9uIDAuNXNcIjsgLy8gRW5hYmxlZCBUcmFuc2l0aW9uIGVmZmVjdFxyXG4gICAgICAgICAgICBjYXJvdXNlbC53cmFwcGVySXRlbXMuc3R5bGUubGVmdCA9IFwiLVwiICsgY2Fyb3VzZWwuY291bnQgKiAxMDAgKyBcIiVcIjtcclxuICAgICAgICAgICAgaW5mb3NDYXJvdXNlbC5jaGFuZ2VJbmZvcyhjYXJvdXNlbC5jb3VudCk7Ly8gQW5pbWF0aW9uIGluZm9zIGJsb2MgY2Fyb3VzZWxcclxuICAgICAgICAgICAgY2Fyb3VzZWwuY291bnQrKzsgLy8gQ291bnQgbG9vcFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYWRkQ2Fyb3VzZWxMaXN0ZW5lciA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2Fyb3VzZWwucmVzaXplQ2Fyb3VzZWwsIGZhbHNlKTsgLy8gUmVzcG9uc2l2ZVxyXG4gICAgICAgIGNhcm91c2VsLndyYXBwZXJDYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBjYXJvdXNlbC5wYXVzZUhvdmVyLCBmYWxzZSk7IC8vIFN0b3AgTG9vcCBjYXJvdXNlbFxyXG4gICAgICAgIGNhcm91c2VsLndyYXBwZXJDYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBjYXJvdXNlbC5zbGlkZUxlZnQsIGZhbHNlKTsgLy8gUmVsb2FkIExvb3AgY2Fyb3VzZWxcclxuXHJcbiAgICAgICAgdmFyIG5leHRMaW5rID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XHJcbiAgICAgICAgdmFyIHByZXZMaW5rID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2Jyk7XHJcbiAgICAgICAgbmV4dExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcm91c2VsQ2xpY2tIYW5kbGVyICwgZmFsc2UpO1xyXG4gICAgICAgIHByZXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJvdXNlbENsaWNrSGFuZGxlciAsIGZhbHNlKTtcclxuXHJcbiAgICB9LFxyXG4gICAgcGF1c2VIb3ZlciA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbGUpOyAvLyBTdG9wIExvb3AgY2Fyb3VzZWxcclxuICAgIH0sXHJcbiAgICByZXNpemVDYXJvdXNlbCA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRWaWV3cG9ydFdpZHRoOyB2YXIgbmV3V2lkdGg7IHZhciBuZXdIZWlnaHQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaW5uZXJXaWR0aCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFZpZXdwb3J0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDsgLy8gR2V0IFZpZXdwb3J0IFdpZHRoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvLyBBcHBseSBvbmx5IGlmIHRoZSB2aWV3cG9ydCB3aWR0aCBpc1xyXG4gICAgICAgIC8vIHVuZGVyIGl0cyBpbml0aWFsIHdpZHRoXHJcblxyXG4gICAgICAgIGlmKGN1cnJlbnRWaWV3cG9ydFdpZHRoIDwgMjAwMCAmJiBjdXJyZW50Vmlld3BvcnRXaWR0aCA+IDgwMCl7XHJcbiAgICAgICAgICAgIG5ld1dpZHRoID0gY3VycmVudFZpZXdwb3J0V2lkdGggLSAxNzsgLy8gdmlld3BvcnQgd2lkdGggbWludXMgc2Nyb2xsIGJhciB3aWR0aFxyXG4gICAgICAgICAgICBuZXdIZWlnaHQgPSBuZXdXaWR0aCAvMi43MzIyO1xyXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRWaWV3cG9ydFdpZHRoIDwgODAwKXtcclxuICAgICAgICAgICAgbmV3V2lkdGggPSAwO1xyXG4gICAgICAgICAgICBuZXdIZWlnaHQgPSAwO1xyXG4gICAgICAgIH1lbHNleyAvLyBBcHBseSBpbml0aWFsIHdpZHRoIGluIG90aGVyIGNhc2VzXHJcbiAgICAgICAgICAgIG5ld1dpZHRoID0gMjAwMDtcclxuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gNzMyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXJvdXNlbC53cmFwcGVyQ2Fyb3VzZWwuc3R5bGUud2lkdGggPSBuZXdXaWR0aCArXCJweFwiO1xyXG4gICAgICAgIGNhcm91c2VsLndyYXBwZXJDYXJvdXNlbC5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgK1wicHhcIjtcclxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBjYXJvdXNlbC5udW1iZXJJdGVtczsgaSsrKXtcclxuICAgICAgICAgICAgY2Fyb3VzZWwuaXRlbXNbaV0uc3R5bGUud2lkdGggPSBuZXdXaWR0aCArXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2Fyb3VzZWxDbGlja0hhbmRsZXIoZSl7XHJcblxyXG4gICAgdmFyIGRpcmVjdGlvbiA9IHRoaXMuaWQ7IC8vIEdldCB0aGUgY3VycmVudCBpdGVtXHJcbiAgICB2YXIgbGltaXQgPSBjYXJvdXNlbC5udW1iZXJJdGVtcyAtIDIgOyAvLyBsb29wIGNvbmRpdGlvblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcIm5leHRcIikge1xyXG4gICAgICAgIGlmIChjYXJvdXNlbC5jb3VudCA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgIGNhcm91c2VsLmNvdW50ICs9IDE7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNhcm91c2VsLmNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT0gXCJwcmV2XCIpe1xyXG4gICAgICAgIGlmIChjYXJvdXNlbC5jb3VudCA+IDApIHtcclxuICAgICAgICAgICAgY2Fyb3VzZWwuY291bnQgLT0gMTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2Fyb3VzZWwuY291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIE1vZGlmeSBpdGVtIGxlZnQgcG9zaXRpb25cclxuICAgIGNhcm91c2VsLndyYXBwZXJJdGVtcy5zdHlsZS5sZWZ0ID0gXCItXCIgKyBjYXJvdXNlbC5jb3VudCAqIDEwMCArIFwiJVwiO1xyXG4gICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSBcImxlZnQgMC41cywgcG9zaXRpb24gMC41c1wiO1xyXG4gICAgaW5mb3NDYXJvdXNlbC5jaGFuZ2VJbmZvcyhjYXJvdXNlbC5jb3VudCk7IC8vIEFuaW1hdGlvbiBpbmZvcyBibG9jIGNhcm91c2VsXHJcbn1cclxuXHJcbnZhciBpbmZvc0Nhcm91c2VsID0ge1xyXG4gICAgd3JhcHBlckluZm9zIDogd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN3cmFwcGVyLWluZm9zLWl0ZW1zIC5pbmZvcy1pdGVtcycpLFxyXG4gICAgY2hhbmdlSW5mb3MgOiBmdW5jdGlvbihhY3RpdmVkKXtcclxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBpbmZvc0Nhcm91c2VsLndyYXBwZXJJbmZvcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKGFjdGl2ZWQgPT0gaSl7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5mb3MgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGogPSAwOyBqIDwgY3VycmVudEluZm9zLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5mb3Nbal0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTsgLy8gUmVtb3ZlIEFsbCBhY3RpdmUgY2xhc3Nlc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5mb3NDYXJvdXNlbC53cmFwcGVySW5mb3NbaV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byB0aGUgSW5mbyBCb3hcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcblxyXG5pZiAoY2Fyb3VzZWwud3JhcHBlckNhcm91c2VsICE9PSBudWxsKXtcclxuXHRjYXJvdXNlbC5yZXNpemVDYXJvdXNlbCgpO1xyXG5cdGNhcm91c2VsLnNldFNpemVJdGVtcygpO1xyXG5cdGNhcm91c2VsLnNsaWRlTGVmdCgpO1xyXG5cdGNhcm91c2VsLmFkZENhcm91c2VsTGlzdGVuZXIoKTtcclxuXHQvL25hdkNhcm91c2VsLnNsaWRlQ29tbWFuZCgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBGaWNoaWVyIEpzIHByaW5jaXBhbFxyXG4gKi9cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XHJcbiAgICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KCk7XHJcblxyXG4gICAgaG92ZXJFdmVudCgnbmF2Lm1haW4tbmF2IHVsLmRlc2t0b3AgbGknKTtcclxuICAgIGhvdmVyRXZlbnQoJy50b3AtcHJvZHVjdHM+ZGl2Jyk7XHJcbiAgICAvL2NlbnRlck1lbnUoXCJ1bC5kZXNrdG9wXCIpO1xyXG5cclxuXHJcbiAgICAkKFwidWwjbmF2LWFjY291bnQgPiBsaSBhXCIpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbmF2QWNjb3VudCh0aGlzKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBjZW50ZXJNZW51KG1lbnUpe1xyXG4gICAgdmFyIHVsV2lkdGggPSAkKG1lbnUpLndpZHRoKCk7XHJcbiAgICAkKG1lbnUpLmF0dHIoXCJ3aWR0aFwiLCB1bFdpZHRoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaG92ZXJFdmVudChwYXJlbnQpe1xyXG4gICAgJChwYXJlbnQpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcImRpdlwiKS5zaG93KCk7XHJcbiAgICB9KTtcclxuICAgICQocGFyZW50KS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oXCJkaXZcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuLyogIEZvbmN0aW9uIHNlcnZhbnQgw6AgZmFpcmUgYXBwYXJhaXRyZS9kaXNwYXJhaXRyZSBsZXMgYmxvY3MgZGUgbGEgc2VjdGlvbiBtb24gY29tcHRlKi9cclxuZnVuY3Rpb24gbmF2QWNjb3VudChsaW5rKXtcclxuICAkKCcuc2VjdGlvbiBkaXYuYWN0aXZlJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgdmFyIHBhcnQgPSAkKGxpbmspLmF0dHIoXCJkYXRhLW5hdlwiKTtcclxuICAkKFwiLlwiICsgcGFydCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
