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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjZi1nb29nbGUtbWFwLmpzIiwiY2Fyb3VzZWwuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuXHJcbi8qXHJcbiogIG5ld19tYXBcclxuKlxyXG4qICBUaGlzIGZ1bmN0aW9uIHdpbGwgcmVuZGVyIGEgR29vZ2xlIE1hcCBvbnRvIHRoZSBzZWxlY3RlZCBqUXVlcnkgZWxlbWVudFxyXG4qXHJcbiogIEB0eXBlXHRmdW5jdGlvblxyXG4qICBAZGF0ZVx0OC8xMS8yMDEzXHJcbiogIEBzaW5jZVx0NC4zLjBcclxuKlxyXG4qICBAcGFyYW1cdCRlbCAoalF1ZXJ5IGVsZW1lbnQpXHJcbiogIEByZXR1cm5cdG4vYVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gbmV3X21hcCggJGVsICkge1xyXG5cclxuXHQvLyB2YXJcclxuXHR2YXIgJG1hcmtlcnMgPSAkZWwuZmluZCgnLm1hcmtlcicpO1xyXG5cclxuXHJcblxyXG5cdC8vIHZhcnNcclxuXHR2YXIgYXJncyA9IHtcclxuXHRcdHpvb21cdFx0OiAxNixcclxuXHRcdGNlbnRlclx0XHQ6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoMCwgMCksXHJcblx0XHRtYXBUeXBlSWRcdDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVBcclxuXHR9O1xyXG5cclxuXHJcblx0Ly8gY3JlYXRlIG1hcFxyXG5cdHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKCAkZWxbMF0sIGFyZ3MpO1xyXG5cclxuXHJcblx0Ly8gYWRkIGEgbWFya2VycyByZWZlcmVuY2VcclxuXHRtYXAubWFya2VycyA9IFtdO1xyXG5cclxuXHJcblx0Ly8gYWRkIG1hcmtlcnNcclxuXHQkbWFya2Vycy5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgXHRhZGRfbWFya2VyKCAkKHRoaXMpLCBtYXAgKTtcclxuXHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyBjZW50ZXIgbWFwXHJcblx0Y2VudGVyX21hcCggbWFwICk7XHJcblxyXG5cclxuXHQvLyByZXR1cm5cclxuXHRyZXR1cm4gbWFwO1xyXG5cclxufVxyXG5cclxuLypcclxuKiAgYWRkX21hcmtlclxyXG4qXHJcbiogIFRoaXMgZnVuY3Rpb24gd2lsbCBhZGQgYSBtYXJrZXIgdG8gdGhlIHNlbGVjdGVkIEdvb2dsZSBNYXBcclxuKlxyXG4qICBAdHlwZVx0ZnVuY3Rpb25cclxuKiAgQGRhdGVcdDgvMTEvMjAxM1xyXG4qICBAc2luY2VcdDQuMy4wXHJcbipcclxuKiAgQHBhcmFtXHQkbWFya2VyIChqUXVlcnkgZWxlbWVudClcclxuKiAgQHBhcmFtXHRtYXAgKEdvb2dsZSBNYXAgb2JqZWN0KVxyXG4qICBAcmV0dXJuXHRuL2FcclxuKi9cclxuXHJcbmZ1bmN0aW9uIGFkZF9tYXJrZXIoICRtYXJrZXIsIG1hcCApIHtcclxuXHJcblx0Ly8gdmFyXHJcblx0dmFyIGxhdGxuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoICRtYXJrZXIuYXR0cignZGF0YS1sYXQnKSwgJG1hcmtlci5hdHRyKCdkYXRhLWxuZycpICk7XHJcblxyXG5cclxuXHQvLyBjcmVhdGUgbWFya2VyXHJcblx0dmFyIGljb25CYXNlID0gJy9hcHAvdGhlbWVzL2NhcmVsL2ltZy8nO1xyXG5cdHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuXHRcdHBvc2l0aW9uXHQ6IGxhdGxuZyxcclxuXHRcdG1hcFx0XHRcdDogbWFwLFxyXG5cdFx0aWNvbjogaWNvbkJhc2UgKyAnbWFya2VyR01hcC5wbmcnXHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyBhZGQgdG8gYXJyYXlcclxuXHRtYXAubWFya2Vycy5wdXNoKCBtYXJrZXIgKTtcclxuXHJcblx0Ly8gaWYgbWFya2VyIGNvbnRhaW5zIEhUTUwsIGFkZCBpdCB0byBhbiBpbmZvV2luZG93XHJcblx0aWYoICRtYXJrZXIuaHRtbCgpIClcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgaW5mbyB3aW5kb3dcclxuXHRcdHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG5cdFx0XHRjb250ZW50XHRcdDogJG1hcmtlci5odG1sKClcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHNob3cgaW5mbyB3aW5kb3cgd2hlbiBtYXJrZXIgaXMgY2xpY2tlZFxyXG5cdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdGluZm93aW5kb3cub3BlbiggbWFwLCBtYXJrZXIgKTtcclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcblxyXG4vKlxyXG4qICBjZW50ZXJfbWFwXHJcbipcclxuKiAgVGhpcyBmdW5jdGlvbiB3aWxsIGNlbnRlciB0aGUgbWFwLCBzaG93aW5nIGFsbCBtYXJrZXJzIGF0dGFjaGVkIHRvIHRoaXMgbWFwXHJcbipcclxuKiAgQHR5cGVcdGZ1bmN0aW9uXHJcbiogIEBkYXRlXHQ4LzExLzIwMTNcclxuKiAgQHNpbmNlXHQ0LjMuMFxyXG4qXHJcbiogIEBwYXJhbVx0bWFwIChHb29nbGUgTWFwIG9iamVjdClcclxuKiAgQHJldHVyblx0bi9hXHJcbiovXHJcblxyXG5mdW5jdGlvbiBjZW50ZXJfbWFwKCBtYXAgKSB7XHJcblxyXG5cdC8vIHZhcnNcclxuXHR2YXIgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xyXG5cclxuXHQvLyBsb29wIHRocm91Z2ggYWxsIG1hcmtlcnMgYW5kIGNyZWF0ZSBib3VuZHNcclxuXHQkLmVhY2goIG1hcC5tYXJrZXJzLCBmdW5jdGlvbiggaSwgbWFya2VyICl7XHJcblxyXG5cdFx0dmFyIGxhdGxuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoIG1hcmtlci5wb3NpdGlvbi5sYXQoKSwgbWFya2VyLnBvc2l0aW9uLmxuZygpICk7XHJcblxyXG5cdFx0Ym91bmRzLmV4dGVuZCggbGF0bG5nICk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyBvbmx5IDEgbWFya2VyP1xyXG5cdGlmKCBtYXAubWFya2Vycy5sZW5ndGggPT0gMSApXHJcblx0e1xyXG5cdFx0Ly8gc2V0IGNlbnRlciBvZiBtYXBcclxuXHQgICAgbWFwLnNldENlbnRlciggYm91bmRzLmdldENlbnRlcigpICk7XHJcblx0ICAgIG1hcC5zZXRab29tKCAxNiApO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gZml0IHRvIGJvdW5kc1xyXG5cdFx0bWFwLmZpdEJvdW5kcyggYm91bmRzICk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuLypcclxuKiAgZG9jdW1lbnQgcmVhZHlcclxuKlxyXG4qICBUaGlzIGZ1bmN0aW9uIHdpbGwgcmVuZGVyIGVhY2ggbWFwIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5IChwYWdlIGhhcyBsb2FkZWQpXHJcbipcclxuKiAgQHR5cGVcdGZ1bmN0aW9uXHJcbiogIEBkYXRlXHQ4LzExLzIwMTNcclxuKiAgQHNpbmNlXHQ1LjAuMFxyXG4qXHJcbiogIEBwYXJhbVx0bi9hXHJcbiogIEByZXR1cm5cdG4vYVxyXG4qL1xyXG4vLyBnbG9iYWwgdmFyXHJcbi8vdmFyIG1hcCA9IG51bGw7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHQkKCcuYWNmLW1hcCcpLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcblx0XHQvLyBjcmVhdGUgbWFwXHJcblx0XHRtYXAgPSBuZXdfbWFwKCAkKHRoaXMpICk7XHJcblxyXG5cdH0pO1xyXG5cclxufSk7XHJcblxyXG59KShqUXVlcnkpO1xyXG5cclxudmFyIG1hcDtcclxuIiwiLy8gVGhpcyBDYXJvdXNlbCBuZWVkcyBmaXJzdCBhbmQgbGFzdCBJdGVtcyBpZGVudGljYWxzIC8vXHJcbi8vIHRvIG1ha2UgYW4gaW5maW5pdGUgbG9vcCBlZmZlY3QvL1xyXG5cclxuXHJcblxyXG52YXIgY2Fyb3VzZWwgPSB7XHJcbiAgICB3cmFwcGVyQ2Fyb3VzZWwgOiB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2MtY2Fyb3VzZWwnKSxcclxuICAgIHdyYXBwZXJJdGVtcyA6IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlci1pdGVtcy1jYXJvdXNlbCcpLFxyXG4gICAgbnVtYmVySXRlbXMgOiB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3dyYXBwZXItaXRlbXMtY2Fyb3VzZWwgIC5pdGVtcy1jYXJvdXNlbCcpLmxlbmd0aCxcclxuICAgIGl0ZW1zIDogd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW1zLWNhcm91c2VsJyksXHJcbiAgICBjb3VudCA6IDAsXHJcbiAgICBzZXRTaXplSXRlbXMgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMud3JhcHBlckl0ZW1zLnN0eWxlLndpZHRoID0gdGhpcy5udW1iZXJJdGVtcyAqIDEwMCArIFwiJVwiOyAvLyBTZXQgdGhlIHdyYXBwZXItaXRlbXMtY2Fyb3VzZWwgd2lkdGhcclxuICAgIH0sXHJcbiAgICBzbGlkZUxlZnQgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGludGVydmFsZSA9IHNldEludGVydmFsKGNhcm91c2VsLmF1dG9TbGlkZSwgNDAwMCk7IC8vIDEwMDAgPSAxIHNlY29uZFxyXG4gICAgfSxcclxuICAgIGF1dG9TbGlkZSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoY2Fyb3VzZWwuY291bnQgPT0gKGNhcm91c2VsLm51bWJlckl0ZW1zLTEpKXtcclxuICAgICAgICAgICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLmxlZnQgPSBcIi1cIiArIGNhcm91c2VsLmNvdW50ICogMTAwICsgXCIlXCI7XHJcbiAgICAgICAgICAgIC8vIEluZmluaXRlIExvb3BcclxuICAgICAgICAgICAgbGFzdEl0ZW0gPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLmxlZnQgPSAwOyAvLyBQdXQgd3JhcHBlci1pdGVtcy1jYXJvdXNlbCBhdCBpbml0aWFsIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbC53cmFwcGVySXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiOyAvLyBEaXNhYmxlZCBUcmFuc2l0aW9uIGVmZmVjdFxyXG4gICAgICAgICAgICAgICAgaW5mb3NDYXJvdXNlbC5jaGFuZ2VJbmZvcygwKTsgLy8gQW5pbWF0aW9uIGluZm9zIGJsb2MgY2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIGNhcm91c2VsLmNvdW50ID0gMTsgLy8gU2V0IENvdW50IGZvciB0aGUgc2Vjb25kIEl0ZW1cclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNhcm91c2VsLndyYXBwZXJJdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gXCJsZWZ0IDAuNXMsIHBvc2l0aW9uIDAuNXNcIjsgLy8gRW5hYmxlZCBUcmFuc2l0aW9uIGVmZmVjdFxyXG4gICAgICAgICAgICBjYXJvdXNlbC53cmFwcGVySXRlbXMuc3R5bGUubGVmdCA9IFwiLVwiICsgY2Fyb3VzZWwuY291bnQgKiAxMDAgKyBcIiVcIjtcclxuICAgICAgICAgICAgaW5mb3NDYXJvdXNlbC5jaGFuZ2VJbmZvcyhjYXJvdXNlbC5jb3VudCk7Ly8gQW5pbWF0aW9uIGluZm9zIGJsb2MgY2Fyb3VzZWxcclxuICAgICAgICAgICAgY2Fyb3VzZWwuY291bnQrKzsgLy8gQ291bnQgbG9vcFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYWRkQ2Fyb3VzZWxMaXN0ZW5lciA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2Fyb3VzZWwucmVzaXplQ2Fyb3VzZWwsIGZhbHNlKTsgLy8gUmVzcG9uc2l2ZVxyXG4gICAgICAgIGNhcm91c2VsLndyYXBwZXJDYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBjYXJvdXNlbC5wYXVzZUhvdmVyLCBmYWxzZSk7IC8vIFN0b3AgTG9vcCBjYXJvdXNlbFxyXG4gICAgICAgIGNhcm91c2VsLndyYXBwZXJDYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBjYXJvdXNlbC5zbGlkZUxlZnQsIGZhbHNlKTsgLy8gUmVsb2FkIExvb3AgY2Fyb3VzZWxcclxuXHJcbiAgICAgICAgdmFyIG5leHRMaW5rID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XHJcbiAgICAgICAgdmFyIHByZXZMaW5rID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2Jyk7XHJcbiAgICAgICAgbmV4dExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcm91c2VsQ2xpY2tIYW5kbGVyICwgZmFsc2UpO1xyXG4gICAgICAgIHByZXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJvdXNlbENsaWNrSGFuZGxlciAsIGZhbHNlKTtcclxuXHJcbiAgICB9LFxyXG4gICAgcGF1c2VIb3ZlciA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbGUpOyAvLyBTdG9wIExvb3AgY2Fyb3VzZWxcclxuICAgIH0sXHJcbiAgICByZXNpemVDYXJvdXNlbCA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRWaWV3cG9ydFdpZHRoOyB2YXIgbmV3V2lkdGg7IHZhciBuZXdIZWlnaHQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaW5uZXJXaWR0aCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFZpZXdwb3J0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDsgLy8gR2V0IFZpZXdwb3J0IFdpZHRoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvLyBBcHBseSBvbmx5IGlmIHRoZSB2aWV3cG9ydCB3aWR0aCBpc1xyXG4gICAgICAgIC8vIHVuZGVyIGl0cyBpbml0aWFsIHdpZHRoXHJcblxyXG4gICAgICAgIGlmKGN1cnJlbnRWaWV3cG9ydFdpZHRoIDwgMjAwMCAmJiBjdXJyZW50Vmlld3BvcnRXaWR0aCA+IDgwMCl7XHJcbiAgICAgICAgICAgIG5ld1dpZHRoID0gY3VycmVudFZpZXdwb3J0V2lkdGggLSAxNzsgLy8gdmlld3BvcnQgd2lkdGggbWludXMgc2Nyb2xsIGJhciB3aWR0aFxyXG4gICAgICAgICAgICBuZXdIZWlnaHQgPSBuZXdXaWR0aCAvMi43MzIyO1xyXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRWaWV3cG9ydFdpZHRoIDwgODAwKXtcclxuICAgICAgICAgICAgbmV3V2lkdGggPSAwO1xyXG4gICAgICAgICAgICBuZXdIZWlnaHQgPSAwO1xyXG4gICAgICAgIH1lbHNleyAvLyBBcHBseSBpbml0aWFsIHdpZHRoIGluIG90aGVyIGNhc2VzXHJcbiAgICAgICAgICAgIG5ld1dpZHRoID0gMjAwMDtcclxuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gNzMyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXJvdXNlbC53cmFwcGVyQ2Fyb3VzZWwuc3R5bGUud2lkdGggPSBuZXdXaWR0aCArXCJweFwiO1xyXG4gICAgICAgIGNhcm91c2VsLndyYXBwZXJDYXJvdXNlbC5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgK1wicHhcIjtcclxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBjYXJvdXNlbC5udW1iZXJJdGVtczsgaSsrKXtcclxuICAgICAgICAgICAgY2Fyb3VzZWwuaXRlbXNbaV0uc3R5bGUud2lkdGggPSBuZXdXaWR0aCArXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2Fyb3VzZWxDbGlja0hhbmRsZXIoZSl7XHJcblxyXG4gICAgdmFyIGRpcmVjdGlvbiA9IHRoaXMuaWQ7IC8vIEdldCB0aGUgY3VycmVudCBpdGVtXHJcbiAgICB2YXIgbGltaXQgPSBjYXJvdXNlbC5udW1iZXJJdGVtcyAtIDIgOyAvLyBsb29wIGNvbmRpdGlvblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcIm5leHRcIikge1xyXG4gICAgICAgIGlmIChjYXJvdXNlbC5jb3VudCA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgIGNhcm91c2VsLmNvdW50ICs9IDE7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNhcm91c2VsLmNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT0gXCJwcmV2XCIpe1xyXG4gICAgICAgIGlmIChjYXJvdXNlbC5jb3VudCA+IDApIHtcclxuICAgICAgICAgICAgY2Fyb3VzZWwuY291bnQgLT0gMTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2Fyb3VzZWwuY291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIE1vZGlmeSBpdGVtIGxlZnQgcG9zaXRpb25cclxuICAgIGNhcm91c2VsLndyYXBwZXJJdGVtcy5zdHlsZS5sZWZ0ID0gXCItXCIgKyBjYXJvdXNlbC5jb3VudCAqIDEwMCArIFwiJVwiO1xyXG4gICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSBcImxlZnQgMC41cywgcG9zaXRpb24gMC41c1wiO1xyXG4gICAgaW5mb3NDYXJvdXNlbC5jaGFuZ2VJbmZvcyhjYXJvdXNlbC5jb3VudCk7IC8vIEFuaW1hdGlvbiBpbmZvcyBibG9jIGNhcm91c2VsXHJcbn1cclxuXHJcbnZhciBpbmZvc0Nhcm91c2VsID0ge1xyXG4gICAgd3JhcHBlckluZm9zIDogd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN3cmFwcGVyLWluZm9zLWl0ZW1zIC5pbmZvcy1pdGVtcycpLFxyXG4gICAgY2hhbmdlSW5mb3MgOiBmdW5jdGlvbihhY3RpdmVkKXtcclxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBpbmZvc0Nhcm91c2VsLndyYXBwZXJJbmZvcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKGFjdGl2ZWQgPT0gaSl7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5mb3MgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGogPSAwOyBqIDwgY3VycmVudEluZm9zLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5mb3Nbal0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTsgLy8gUmVtb3ZlIEFsbCBhY3RpdmUgY2xhc3Nlc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5mb3NDYXJvdXNlbC53cmFwcGVySW5mb3NbaV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byB0aGUgSW5mbyBCb3hcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcblxyXG5pZiAoY2Fyb3VzZWwud3JhcHBlckNhcm91c2VsICE9PSBudWxsKXtcclxuXHRjYXJvdXNlbC5yZXNpemVDYXJvdXNlbCgpO1xyXG5cdGNhcm91c2VsLnNldFNpemVJdGVtcygpO1xyXG5cdGNhcm91c2VsLnNsaWRlTGVmdCgpO1xyXG5cdGNhcm91c2VsLmFkZENhcm91c2VsTGlzdGVuZXIoKTtcclxuXHQvL25hdkNhcm91c2VsLnNsaWRlQ29tbWFuZCgpO1xyXG59XHJcbiIsIihmdW5jdGlvbigkKSB7XHJcblxyXG4vKlxyXG4qICBuZXdfbWFwXHJcbipcclxuKiAgVGhpcyBmdW5jdGlvbiB3aWxsIHJlbmRlciBhIEdvb2dsZSBNYXAgb250byB0aGUgc2VsZWN0ZWQgalF1ZXJ5IGVsZW1lbnRcclxuKlxyXG4qICBAdHlwZVx0ZnVuY3Rpb25cclxuKiAgQGRhdGVcdDgvMTEvMjAxM1xyXG4qICBAc2luY2VcdDQuMy4wXHJcbipcclxuKiAgQHBhcmFtXHQkZWwgKGpRdWVyeSBlbGVtZW50KVxyXG4qICBAcmV0dXJuXHRuL2FcclxuKi9cclxuXHJcbmZ1bmN0aW9uIG5ld19tYXAoICRlbCApIHtcclxuXHJcblx0Ly8gdmFyXHJcblx0dmFyICRtYXJrZXJzID0gJGVsLmZpbmQoJy5tYXJrZXInKTtcclxuXHJcblxyXG5cclxuXHQvLyB2YXJzXHJcblx0dmFyIGFyZ3MgPSB7XHJcblx0XHR6b29tXHRcdDogMTYsXHJcblx0XHRjZW50ZXJcdFx0OiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDAsIDApLFxyXG5cdFx0bWFwVHlwZUlkXHQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXHJcblx0fTtcclxuXHJcblxyXG5cdC8vIGNyZWF0ZSBtYXBcclxuXHR2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCggJGVsWzBdLCBhcmdzKTtcclxuXHJcblxyXG5cdC8vIGFkZCBhIG1hcmtlcnMgcmVmZXJlbmNlXHJcblx0bWFwLm1hcmtlcnMgPSBbXTtcclxuXHJcblxyXG5cdC8vIGFkZCBtYXJrZXJzXHJcblx0JG1hcmtlcnMuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgIFx0YWRkX21hcmtlciggJCh0aGlzKSwgbWFwICk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcblx0Ly8gY2VudGVyIG1hcFxyXG5cdGNlbnRlcl9tYXAoIG1hcCApO1xyXG5cclxuXHJcblx0Ly8gcmV0dXJuXHJcblx0cmV0dXJuIG1hcDtcclxuXHJcbn1cclxuXHJcbi8qXHJcbiogIGFkZF9tYXJrZXJcclxuKlxyXG4qICBUaGlzIGZ1bmN0aW9uIHdpbGwgYWRkIGEgbWFya2VyIHRvIHRoZSBzZWxlY3RlZCBHb29nbGUgTWFwXHJcbipcclxuKiAgQHR5cGVcdGZ1bmN0aW9uXHJcbiogIEBkYXRlXHQ4LzExLzIwMTNcclxuKiAgQHNpbmNlXHQ0LjMuMFxyXG4qXHJcbiogIEBwYXJhbVx0JG1hcmtlciAoalF1ZXJ5IGVsZW1lbnQpXHJcbiogIEBwYXJhbVx0bWFwIChHb29nbGUgTWFwIG9iamVjdClcclxuKiAgQHJldHVyblx0bi9hXHJcbiovXHJcblxyXG5mdW5jdGlvbiBhZGRfbWFya2VyKCAkbWFya2VyLCBtYXAgKSB7XHJcblxyXG5cdC8vIHZhclxyXG5cdHZhciBsYXRsbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKCAkbWFya2VyLmF0dHIoJ2RhdGEtbGF0JyksICRtYXJrZXIuYXR0cignZGF0YS1sbmcnKSApO1xyXG5cclxuXHJcblx0Ly8gY3JlYXRlIG1hcmtlclxyXG5cdHZhciBpY29uQmFzZSA9ICcvYXBwL3RoZW1lcy9jYXJlbC9pbWcvJztcclxuXHR2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcblx0XHRwb3NpdGlvblx0OiBsYXRsbmcsXHJcblx0XHRtYXBcdFx0XHQ6IG1hcCxcclxuXHRcdGljb246IGljb25CYXNlICsgJ21hcmtlckdNYXAucG5nJ1xyXG5cdH0pO1xyXG5cclxuXHJcblx0Ly8gYWRkIHRvIGFycmF5XHJcblx0bWFwLm1hcmtlcnMucHVzaCggbWFya2VyICk7XHJcblxyXG5cdC8vIGlmIG1hcmtlciBjb250YWlucyBIVE1MLCBhZGQgaXQgdG8gYW4gaW5mb1dpbmRvd1xyXG5cdGlmKCAkbWFya2VyLmh0bWwoKSApXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIGluZm8gd2luZG93XHJcblx0XHR2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuXHRcdFx0Y29udGVudFx0XHQ6ICRtYXJrZXIuaHRtbCgpXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBzaG93IGluZm8gd2luZG93IHdoZW4gbWFya2VyIGlzIGNsaWNrZWRcclxuXHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRpbmZvd2luZG93Lm9wZW4oIG1hcCwgbWFya2VyICk7XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuLypcclxuKiAgY2VudGVyX21hcFxyXG4qXHJcbiogIFRoaXMgZnVuY3Rpb24gd2lsbCBjZW50ZXIgdGhlIG1hcCwgc2hvd2luZyBhbGwgbWFya2VycyBhdHRhY2hlZCB0byB0aGlzIG1hcFxyXG4qXHJcbiogIEB0eXBlXHRmdW5jdGlvblxyXG4qICBAZGF0ZVx0OC8xMS8yMDEzXHJcbiogIEBzaW5jZVx0NC4zLjBcclxuKlxyXG4qICBAcGFyYW1cdG1hcCAoR29vZ2xlIE1hcCBvYmplY3QpXHJcbiogIEByZXR1cm5cdG4vYVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gY2VudGVyX21hcCggbWFwICkge1xyXG5cclxuXHQvLyB2YXJzXHJcblx0dmFyIGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcclxuXHJcblx0Ly8gbG9vcCB0aHJvdWdoIGFsbCBtYXJrZXJzIGFuZCBjcmVhdGUgYm91bmRzXHJcblx0JC5lYWNoKCBtYXAubWFya2VycywgZnVuY3Rpb24oIGksIG1hcmtlciApe1xyXG5cclxuXHRcdHZhciBsYXRsbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKCBtYXJrZXIucG9zaXRpb24ubGF0KCksIG1hcmtlci5wb3NpdGlvbi5sbmcoKSApO1xyXG5cclxuXHRcdGJvdW5kcy5leHRlbmQoIGxhdGxuZyApO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gb25seSAxIG1hcmtlcj9cclxuXHRpZiggbWFwLm1hcmtlcnMubGVuZ3RoID09IDEgKVxyXG5cdHtcclxuXHRcdC8vIHNldCBjZW50ZXIgb2YgbWFwXHJcblx0ICAgIG1hcC5zZXRDZW50ZXIoIGJvdW5kcy5nZXRDZW50ZXIoKSApO1xyXG5cdCAgICBtYXAuc2V0Wm9vbSggMTYgKTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdC8vIGZpdCB0byBib3VuZHNcclxuXHRcdG1hcC5maXRCb3VuZHMoIGJvdW5kcyApO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbi8qXHJcbiogIGRvY3VtZW50IHJlYWR5XHJcbipcclxuKiAgVGhpcyBmdW5jdGlvbiB3aWxsIHJlbmRlciBlYWNoIG1hcCB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkeSAocGFnZSBoYXMgbG9hZGVkKVxyXG4qXHJcbiogIEB0eXBlXHRmdW5jdGlvblxyXG4qICBAZGF0ZVx0OC8xMS8yMDEzXHJcbiogIEBzaW5jZVx0NS4wLjBcclxuKlxyXG4qICBAcGFyYW1cdG4vYVxyXG4qICBAcmV0dXJuXHRuL2FcclxuKi9cclxuLy8gZ2xvYmFsIHZhclxyXG4vL3ZhciBtYXAgPSBudWxsO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcblx0JCgnLmFjZi1tYXAnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIG1hcFxyXG5cdFx0bWFwID0gbmV3X21hcCggJCh0aGlzKSApO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pO1xyXG5cclxufSkoalF1ZXJ5KTtcclxuXHJcbnZhciBtYXA7XHJcblxuLy8gVGhpcyBDYXJvdXNlbCBuZWVkcyBmaXJzdCBhbmQgbGFzdCBJdGVtcyBpZGVudGljYWxzIC8vXHJcbi8vIHRvIG1ha2UgYW4gaW5maW5pdGUgbG9vcCBlZmZlY3QvL1xyXG5cclxuXHJcbi8qXHJcbnZhciBjYXJvdXNlbCA9IHtcclxuICAgIHdyYXBwZXJDYXJvdXNlbCA6IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmxvYy1jYXJvdXNlbCcpLFxyXG4gICAgd3JhcHBlckl0ZW1zIDogd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyLWl0ZW1zLWNhcm91c2VsJyksXHJcbiAgICBudW1iZXJJdGVtcyA6IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjd3JhcHBlci1pdGVtcy1jYXJvdXNlbCAgLml0ZW1zLWNhcm91c2VsJykubGVuZ3RoLFxyXG4gICAgaXRlbXMgOiB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXRlbXMtY2Fyb3VzZWwnKSxcclxuICAgIGNvdW50IDogMCxcclxuICAgIHNldFNpemVJdGVtcyA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy53cmFwcGVySXRlbXMuc3R5bGUud2lkdGggPSB0aGlzLm51bWJlckl0ZW1zICogMTAwICsgXCIlXCI7IC8vIFNldCB0aGUgd3JhcHBlci1pdGVtcy1jYXJvdXNlbCB3aWR0aFxyXG4gICAgfSxcclxuICAgIHNsaWRlTGVmdCA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaW50ZXJ2YWxlID0gc2V0SW50ZXJ2YWwoY2Fyb3VzZWwuYXV0b1NsaWRlLCA0MDAwKTsgLy8gMTAwMCA9IDEgc2Vjb25kXHJcbiAgICB9LFxyXG4gICAgYXV0b1NsaWRlIDogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZihjYXJvdXNlbC5jb3VudCA9PSAoY2Fyb3VzZWwubnVtYmVySXRlbXMtMSkpe1xyXG4gICAgICAgICAgICBjYXJvdXNlbC53cmFwcGVySXRlbXMuc3R5bGUubGVmdCA9IFwiLVwiICsgY2Fyb3VzZWwuY291bnQgKiAxMDAgKyBcIiVcIjtcclxuICAgICAgICAgICAgLy8gSW5maW5pdGUgTG9vcFxyXG4gICAgICAgICAgICBsYXN0SXRlbSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbC53cmFwcGVySXRlbXMuc3R5bGUubGVmdCA9IDA7IC8vIFB1dCB3cmFwcGVyLWl0ZW1zLWNhcm91c2VsIGF0IGluaXRpYWwgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgIGNhcm91c2VsLndyYXBwZXJJdGVtcy5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7IC8vIERpc2FibGVkIFRyYW5zaXRpb24gZWZmZWN0XHJcbiAgICAgICAgICAgICAgICBpbmZvc0Nhcm91c2VsLmNoYW5nZUluZm9zKDApOyAvLyBBbmltYXRpb24gaW5mb3MgYmxvYyBjYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWwuY291bnQgPSAxOyAvLyBTZXQgQ291bnQgZm9yIHRoZSBzZWNvbmQgSXRlbVxyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLnRyYW5zaXRpb24gPSBcImxlZnQgMC41cywgcG9zaXRpb24gMC41c1wiOyAvLyBFbmFibGVkIFRyYW5zaXRpb24gZWZmZWN0XHJcbiAgICAgICAgICAgIGNhcm91c2VsLndyYXBwZXJJdGVtcy5zdHlsZS5sZWZ0ID0gXCItXCIgKyBjYXJvdXNlbC5jb3VudCAqIDEwMCArIFwiJVwiO1xyXG4gICAgICAgICAgICBpbmZvc0Nhcm91c2VsLmNoYW5nZUluZm9zKGNhcm91c2VsLmNvdW50KTsvLyBBbmltYXRpb24gaW5mb3MgYmxvYyBjYXJvdXNlbFxyXG4gICAgICAgICAgICBjYXJvdXNlbC5jb3VudCsrOyAvLyBDb3VudCBsb29wXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRDYXJvdXNlbExpc3RlbmVyIDogZnVuY3Rpb24oKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjYXJvdXNlbC5yZXNpemVDYXJvdXNlbCwgZmFsc2UpOyAvLyBSZXNwb25zaXZlXHJcbiAgICAgICAgY2Fyb3VzZWwud3JhcHBlckNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGNhcm91c2VsLnBhdXNlSG92ZXIsIGZhbHNlKTsgLy8gU3RvcCBMb29wIGNhcm91c2VsXHJcbiAgICAgICAgY2Fyb3VzZWwud3JhcHBlckNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGNhcm91c2VsLnNsaWRlTGVmdCwgZmFsc2UpOyAvLyBSZWxvYWQgTG9vcCBjYXJvdXNlbFxyXG5cclxuICAgICAgICB2YXIgbmV4dExpbmsgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxuICAgICAgICB2YXIgcHJldkxpbmsgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcclxuICAgICAgICBuZXh0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2Fyb3VzZWxDbGlja0hhbmRsZXIgLCBmYWxzZSk7XHJcbiAgICAgICAgcHJldkxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcm91c2VsQ2xpY2tIYW5kbGVyICwgZmFsc2UpO1xyXG5cclxuICAgIH0sXHJcbiAgICBwYXVzZUhvdmVyIDogZnVuY3Rpb24oKXtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsZSk7IC8vIFN0b3AgTG9vcCBjYXJvdXNlbFxyXG4gICAgfSxcclxuICAgIHJlc2l6ZUNhcm91c2VsIDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgY3VycmVudFZpZXdwb3J0V2lkdGg7IHZhciBuZXdXaWR0aDsgdmFyIG5ld0hlaWdodDtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5pbm5lcldpZHRoICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Vmlld3BvcnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoOyAvLyBHZXQgVmlld3BvcnQgV2lkdGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vIEFwcGx5IG9ubHkgaWYgdGhlIHZpZXdwb3J0IHdpZHRoIGlzXHJcbiAgICAgICAgLy8gdW5kZXIgaXRzIGluaXRpYWwgd2lkdGhcclxuXHJcbiAgICAgICAgaWYoY3VycmVudFZpZXdwb3J0V2lkdGggPCAyMDAwICYmIGN1cnJlbnRWaWV3cG9ydFdpZHRoID4gODAwKXtcclxuICAgICAgICAgICAgbmV3V2lkdGggPSBjdXJyZW50Vmlld3BvcnRXaWR0aCAtIDE3OyAvLyB2aWV3cG9ydCB3aWR0aCBtaW51cyBzY3JvbGwgYmFyIHdpZHRoXHJcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IG5ld1dpZHRoIC8yLjczMjI7XHJcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFZpZXdwb3J0V2lkdGggPCA4MDApe1xyXG4gICAgICAgICAgICBuZXdXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IDA7XHJcbiAgICAgICAgfWVsc2V7IC8vIEFwcGx5IGluaXRpYWwgd2lkdGggaW4gb3RoZXIgY2FzZXNcclxuICAgICAgICAgICAgbmV3V2lkdGggPSAyMDAwO1xyXG4gICAgICAgICAgICBuZXdIZWlnaHQgPSA3MzI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhcm91c2VsLndyYXBwZXJDYXJvdXNlbC5zdHlsZS53aWR0aCA9IG5ld1dpZHRoICtcInB4XCI7XHJcbiAgICAgICAgY2Fyb3VzZWwud3JhcHBlckNhcm91c2VsLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArXCJweFwiO1xyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IGNhcm91c2VsLm51bWJlckl0ZW1zOyBpKyspe1xyXG4gICAgICAgICAgICBjYXJvdXNlbC5pdGVtc1tpXS5zdHlsZS53aWR0aCA9IG5ld1dpZHRoICtcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjYXJvdXNlbENsaWNrSGFuZGxlcihlKXtcclxuXHJcbiAgICB2YXIgZGlyZWN0aW9uID0gdGhpcy5pZDsgLy8gR2V0IHRoZSBjdXJyZW50IGl0ZW1cclxuICAgIHZhciBsaW1pdCA9IGNhcm91c2VsLm51bWJlckl0ZW1zIC0gMiA7IC8vIGxvb3AgY29uZGl0aW9uXHJcbiAgICBpZiAoZGlyZWN0aW9uID09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgaWYgKGNhcm91c2VsLmNvdW50IDwgbGltaXQpIHtcclxuICAgICAgICAgICAgY2Fyb3VzZWwuY291bnQgKz0gMTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2Fyb3VzZWwuY291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PSBcInByZXZcIil7XHJcbiAgICAgICAgaWYgKGNhcm91c2VsLmNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBjYXJvdXNlbC5jb3VudCAtPSAxO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYXJvdXNlbC5jb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gTW9kaWZ5IGl0ZW0gbGVmdCBwb3NpdGlvblxyXG4gICAgY2Fyb3VzZWwud3JhcHBlckl0ZW1zLnN0eWxlLmxlZnQgPSBcIi1cIiArIGNhcm91c2VsLmNvdW50ICogMTAwICsgXCIlXCI7XHJcbiAgICBjYXJvdXNlbC53cmFwcGVySXRlbXMuc3R5bGUudHJhbnNpdGlvbiA9IFwibGVmdCAwLjVzLCBwb3NpdGlvbiAwLjVzXCI7XHJcbiAgICBpbmZvc0Nhcm91c2VsLmNoYW5nZUluZm9zKGNhcm91c2VsLmNvdW50KTsgLy8gQW5pbWF0aW9uIGluZm9zIGJsb2MgY2Fyb3VzZWxcclxufVxyXG5cclxudmFyIGluZm9zQ2Fyb3VzZWwgPSB7XHJcbiAgICB3cmFwcGVySW5mb3MgOiB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3dyYXBwZXItaW5mb3MtaXRlbXMgLmluZm9zLWl0ZW1zJyksXHJcbiAgICBjaGFuZ2VJbmZvcyA6IGZ1bmN0aW9uKGFjdGl2ZWQpe1xyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IGluZm9zQ2Fyb3VzZWwud3JhcHBlckluZm9zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYoYWN0aXZlZCA9PSBpKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmZvcyA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IoaiA9IDA7IGogPCBjdXJyZW50SW5mb3MubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmZvc1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpOyAvLyBSZW1vdmUgQWxsIGFjdGl2ZSBjbGFzc2VzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbmZvc0Nhcm91c2VsLndyYXBwZXJJbmZvc1tpXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpOyAvLyBBZGQgYWN0aXZlIGNsYXNzIHRvIHRoZSBJbmZvIEJveFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuXHJcbmlmIChjYXJvdXNlbC53cmFwcGVyQ2Fyb3VzZWwgIT09IG51bGwpe1xyXG5cdGNhcm91c2VsLnJlc2l6ZUNhcm91c2VsKCk7XHJcblx0Y2Fyb3VzZWwuc2V0U2l6ZUl0ZW1zKCk7XHJcblx0Y2Fyb3VzZWwuc2xpZGVMZWZ0KCk7XHJcblx0Y2Fyb3VzZWwuYWRkQ2Fyb3VzZWxMaXN0ZW5lcigpO1xyXG5cdC8vbmF2Q2Fyb3VzZWwuc2xpZGVDb21tYW5kKCk7XHJcbn1cclxuKi9cclxuXG4vKipcclxuICogRmljaGllciBKcyBwcmluY2lwYWxcclxuICovXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xyXG4gIC8qIE1hdMOpcmlhbGl6ZSBldmVudCAqL1xyXG4gICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpO1xyXG4gICAgJCgnLm1hdGVyaWFsYm94ZWQnKS5tYXRlcmlhbGJveCgpO1xyXG4gICAgJCgnLnNsaWRlcicpLnNsaWRlcih7ZnVsbF93aWR0aDogdHJ1ZX0pO1xyXG5cclxuXHJcbiAgICBob3ZlckV2ZW50KCduYXYubWFpbi1uYXYgdWwuZGVza3RvcCBsaScpO1xyXG4gICAgaG92ZXJFdmVudCgnLnRvcC1wcm9kdWN0cz5kaXYnKTtcclxuICAgIC8vY2VudGVyTWVudShcInVsLmRlc2t0b3BcIik7XHJcblxyXG5cclxuICAgICQoXCJ1bCNuYXYtYWNjb3VudCA+IGxpIGFcIikuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBuYXZBY2NvdW50KHRoaXMpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGlmKCQoXCIuaW5wdXQtZmllbGQgc2VsZWN0XCIpLmxlbmd0aCA+IDApe1xyXG4gICAgICAkKFwiLmlucHV0LWZpZWxkIHNlbGVjdFwiKS5tYXRlcmlhbF9zZWxlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZigkKCcubmF2LWZpbHRlcicpLmxlbmd0aCA+IDApe1xyXG4gICAgICBmaWx0ZXJQb3NpdGlvbigpO1xyXG4gICAgICAkKCB3aW5kb3cgKS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBmaWx0ZXJQb3NpdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmKCQoJy5uYXYtZmlsdGVyICNmaWx0cmVfcHJpeCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICBmb3VyY2hldHRlUHJpeCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjZW50ZXJNZW51KG1lbnUpe1xyXG4gICAgdmFyIHVsV2lkdGggPSAkKG1lbnUpLndpZHRoKCk7XHJcbiAgICAkKG1lbnUpLmF0dHIoXCJ3aWR0aFwiLCB1bFdpZHRoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaG92ZXJFdmVudChwYXJlbnQpe1xyXG4gICAgJChwYXJlbnQpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcImRpdlwiKS5zaG93KCk7XHJcbiAgICB9KTtcclxuICAgICQocGFyZW50KS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oXCJkaXZcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuLyogIEZvbmN0aW9uIHNlcnZhbnQgw6AgZmFpcmUgYXBwYXJhaXRyZS9kaXNwYXJhaXRyZSBsZXMgYmxvY3MgZGUgbGEgc2VjdGlvbiBtb24gY29tcHRlKi9cclxuZnVuY3Rpb24gbmF2QWNjb3VudChsaW5rKXtcclxuICAkKCcuc2VjdGlvbiBkaXYuYWN0aXZlLWFjY291bnQnKS5yZW1vdmVDbGFzcyhcImFjdGl2ZS1hY2NvdW50XCIpO1xyXG4gIHZhciBwYXJ0ID0gJChsaW5rKS5hdHRyKFwiZGF0YS1uYXZcIik7XHJcbiAgJChcIi5cIiArIHBhcnQpLmFkZENsYXNzKCdhY3RpdmUtYWNjb3VudCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJQb3NpdGlvbigpe1xyXG4gIGlmKCQoIHdpbmRvdyApLndpZHRoKCkgPiA5NzUpe1xyXG4gICAgdmFyIGJvZHlXaWR0aCA9ICQoJ2JvZHknKS53aWR0aCgpO1xyXG4gICAgdmFyIG5hdkZpbHRlcldpZHRoID0gYm9keVdpZHRoICogMC4xNSAtIDEwO1xyXG4gICAgdmFyIGxlZnRQb3NpdGlvbiA9IGJvZHlXaWR0aCAqIDAuMTU7XHJcbiAgICAkKCcubmF2LWZpbHRlcicpLndpZHRoKG5hdkZpbHRlcldpZHRoKTtcclxuICAgICQoJy5uYXYtZmlsdGVyJykuY3NzKHsgdG9wOiAwLCBsZWZ0OiBcIi1cIiArIGxlZnRQb3NpdGlvbiArXCJweFwiIH0pO1xyXG4gIH1lbHNle1xyXG4gICAgdmFyIG1heFdpZHRoID0gJCgnLmNvbnRhaW5lcicpLndpZHRoKCk7XHJcbiAgICAkKCcubmF2LWZpbHRlcicpLndpZHRoKG1heFdpZHRoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvdXJjaGV0dGVQcml4KCl7XHJcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0cmVfcHJpeCcpO1xyXG4gICAgbm9VaVNsaWRlci5jcmVhdGUoc2xpZGVyLCB7XHJcbiAgICAgIHN0YXJ0OiBbMjAsIDEwMF0sXHJcbiAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICByYW5nZToge1xyXG4gICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAgJ21heCc6IDQ1MFxyXG4gICAgICAgfSxcclxuICAgIH0pO1xyXG59XHJcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltRmpaaTFuYjI5bmJHVXRiV0Z3TG1weklpd2lZMkZ5YjNWelpXd3Vhbk1pTENKdFlXbHVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlEyaE1RVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlF6TklRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CSWl3aVptbHNaU0k2SW0xaGFXNHVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0b0pDa2dlMXh5WEc1Y2NseHVMeXBjY2x4dUtpQWdibVYzWDIxaGNGeHlYRzRxWEhKY2Jpb2dJRlJvYVhNZ1puVnVZM1JwYjI0Z2QybHNiQ0J5Wlc1a1pYSWdZU0JIYjI5bmJHVWdUV0Z3SUc5dWRHOGdkR2hsSUhObGJHVmpkR1ZrSUdwUmRXVnllU0JsYkdWdFpXNTBYSEpjYmlwY2NseHVLaUFnUUhSNWNHVmNkR1oxYm1OMGFXOXVYSEpjYmlvZ0lFQmtZWFJsWEhRNEx6RXhMekl3TVROY2NseHVLaUFnUUhOcGJtTmxYSFEwTGpNdU1GeHlYRzRxWEhKY2Jpb2dJRUJ3WVhKaGJWeDBKR1ZzSUNocVVYVmxjbmtnWld4bGJXVnVkQ2xjY2x4dUtpQWdRSEpsZEhWeWJseDBiaTloWEhKY2Jpb3ZYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnVaWGRmYldGd0tDQWtaV3dnS1NCN1hISmNibHh5WEc1Y2RDOHZJSFpoY2x4eVhHNWNkSFpoY2lBa2JXRnlhMlZ5Y3lBOUlDUmxiQzVtYVc1a0tDY3ViV0Z5YTJWeUp5azdYSEpjYmx4eVhHNWNjbHh1WEhKY2JseDBMeThnZG1GeWMxeHlYRzVjZEhaaGNpQmhjbWR6SUQwZ2UxeHlYRzVjZEZ4MGVtOXZiVngwWEhRNklERTJMRnh5WEc1Y2RGeDBZMlZ1ZEdWeVhIUmNkRG9nYm1WM0lHZHZiMmRzWlM1dFlYQnpMa3hoZEV4dVp5Z3dMQ0F3S1N4Y2NseHVYSFJjZEcxaGNGUjVjR1ZKWkZ4ME9pQm5iMjluYkdVdWJXRndjeTVOWVhCVWVYQmxTV1F1VWs5QlJFMUJVRnh5WEc1Y2RIMDdYSEpjYmx4eVhHNWNjbHh1WEhRdkx5QmpjbVZoZEdVZ2JXRndYSEpjYmx4MGRtRnlJRzFoY0NBOUlHNWxkeUJuYjI5bmJHVXViV0Z3Y3k1TllYQW9JQ1JsYkZzd1hTd2dZWEpuY3lrN1hISmNibHh5WEc1Y2NseHVYSFF2THlCaFpHUWdZU0J0WVhKclpYSnpJSEpsWm1WeVpXNWpaVnh5WEc1Y2RHMWhjQzV0WVhKclpYSnpJRDBnVzEwN1hISmNibHh5WEc1Y2NseHVYSFF2THlCaFpHUWdiV0Z5YTJWeWMxeHlYRzVjZENSdFlYSnJaWEp6TG1WaFkyZ29ablZ1WTNScGIyNG9LWHRjY2x4dVhISmNiaUFnSUNCY2RHRmtaRjl0WVhKclpYSW9JQ1FvZEdocGN5a3NJRzFoY0NBcE8xeHlYRzVjY2x4dVhIUjlLVHRjY2x4dVhISmNibHh5WEc1Y2RDOHZJR05sYm5SbGNpQnRZWEJjY2x4dVhIUmpaVzUwWlhKZmJXRndLQ0J0WVhBZ0tUdGNjbHh1WEhKY2JseHlYRzVjZEM4dklISmxkSFZ5Ymx4eVhHNWNkSEpsZEhWeWJpQnRZWEE3WEhKY2JseHlYRzU5WEhKY2JseHlYRzR2S2x4eVhHNHFJQ0JoWkdSZmJXRnlhMlZ5WEhKY2JpcGNjbHh1S2lBZ1ZHaHBjeUJtZFc1amRHbHZiaUIzYVd4c0lHRmtaQ0JoSUcxaGNtdGxjaUIwYnlCMGFHVWdjMlZzWldOMFpXUWdSMjl2WjJ4bElFMWhjRnh5WEc0cVhISmNiaW9nSUVCMGVYQmxYSFJtZFc1amRHbHZibHh5WEc0cUlDQkFaR0YwWlZ4ME9DOHhNUzh5TURFelhISmNiaW9nSUVCemFXNWpaVngwTkM0ekxqQmNjbHh1S2x4eVhHNHFJQ0JBY0dGeVlXMWNkQ1J0WVhKclpYSWdLR3BSZFdWeWVTQmxiR1Z0Wlc1MEtWeHlYRzRxSUNCQWNHRnlZVzFjZEcxaGNDQW9SMjl2WjJ4bElFMWhjQ0J2WW1wbFkzUXBYSEpjYmlvZ0lFQnlaWFIxY201Y2RHNHZZVnh5WEc0cUwxeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1lXUmtYMjFoY210bGNpZ2dKRzFoY210bGNpd2diV0Z3SUNrZ2UxeHlYRzVjY2x4dVhIUXZMeUIyWVhKY2NseHVYSFIyWVhJZ2JHRjBiRzVuSUQwZ2JtVjNJR2R2YjJkc1pTNXRZWEJ6TGt4aGRFeHVaeWdnSkcxaGNtdGxjaTVoZEhSeUtDZGtZWFJoTFd4aGRDY3BMQ0FrYldGeWEyVnlMbUYwZEhJb0oyUmhkR0V0Ykc1bkp5a2dLVHRjY2x4dVhISmNibHh5WEc1Y2RDOHZJR055WldGMFpTQnRZWEpyWlhKY2NseHVYSFIyWVhJZ2FXTnZia0poYzJVZ1BTQW5MMkZ3Y0M5MGFHVnRaWE12WTJGeVpXd3ZhVzFuTHljN1hISmNibHgwZG1GeUlHMWhjbXRsY2lBOUlHNWxkeUJuYjI5bmJHVXViV0Z3Y3k1TllYSnJaWElvZTF4eVhHNWNkRngwY0c5emFYUnBiMjVjZERvZ2JHRjBiRzVuTEZ4eVhHNWNkRngwYldGd1hIUmNkRngwT2lCdFlYQXNYSEpjYmx4MFhIUnBZMjl1T2lCcFkyOXVRbUZ6WlNBcklDZHRZWEpyWlhKSFRXRndMbkJ1WnlkY2NseHVYSFI5S1R0Y2NseHVYSEpjYmx4eVhHNWNkQzh2SUdGa1pDQjBieUJoY25KaGVWeHlYRzVjZEcxaGNDNXRZWEpyWlhKekxuQjFjMmdvSUcxaGNtdGxjaUFwTzF4eVhHNWNjbHh1WEhRdkx5QnBaaUJ0WVhKclpYSWdZMjl1ZEdGcGJuTWdTRlJOVEN3Z1lXUmtJR2wwSUhSdklHRnVJR2x1Wm05WGFXNWtiM2RjY2x4dVhIUnBaaWdnSkcxaGNtdGxjaTVvZEcxc0tDa2dLVnh5WEc1Y2RIdGNjbHh1WEhSY2RDOHZJR055WldGMFpTQnBibVp2SUhkcGJtUnZkMXh5WEc1Y2RGeDBkbUZ5SUdsdVptOTNhVzVrYjNjZ1BTQnVaWGNnWjI5dloyeGxMbTFoY0hNdVNXNW1iMWRwYm1SdmR5aDdYSEpjYmx4MFhIUmNkR052Ym5SbGJuUmNkRngwT2lBa2JXRnlhMlZ5TG1oMGJXd29LVnh5WEc1Y2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MEx5OGdjMmh2ZHlCcGJtWnZJSGRwYm1SdmR5QjNhR1Z1SUcxaGNtdGxjaUJwY3lCamJHbGphMlZrWEhKY2JseDBYSFJuYjI5bmJHVXViV0Z3Y3k1bGRtVnVkQzVoWkdSTWFYTjBaVzVsY2lodFlYSnJaWElzSUNkamJHbGpheWNzSUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzVjY2x4dVhIUmNkRngwYVc1bWIzZHBibVJ2ZHk1dmNHVnVLQ0J0WVhBc0lHMWhjbXRsY2lBcE8xeHlYRzVjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDFjY2x4dVhISmNibjFjY2x4dVhISmNiaThxWEhKY2Jpb2dJR05sYm5SbGNsOXRZWEJjY2x4dUtseHlYRzRxSUNCVWFHbHpJR1oxYm1OMGFXOXVJSGRwYkd3Z1kyVnVkR1Z5SUhSb1pTQnRZWEFzSUhOb2IzZHBibWNnWVd4c0lHMWhjbXRsY25NZ1lYUjBZV05vWldRZ2RHOGdkR2hwY3lCdFlYQmNjbHh1S2x4eVhHNHFJQ0JBZEhsd1pWeDBablZ1WTNScGIyNWNjbHh1S2lBZ1FHUmhkR1ZjZERndk1URXZNakF4TTF4eVhHNHFJQ0JBYzJsdVkyVmNkRFF1TXk0d1hISmNiaXBjY2x4dUtpQWdRSEJoY21GdFhIUnRZWEFnS0VkdmIyZHNaU0JOWVhBZ2IySnFaV04wS1Z4eVhHNHFJQ0JBY21WMGRYSnVYSFJ1TDJGY2NseHVLaTljY2x4dVhISmNibVoxYm1OMGFXOXVJR05sYm5SbGNsOXRZWEFvSUcxaGNDQXBJSHRjY2x4dVhISmNibHgwTHk4Z2RtRnljMXh5WEc1Y2RIWmhjaUJpYjNWdVpITWdQU0J1WlhjZ1oyOXZaMnhsTG0xaGNITXVUR0YwVEc1blFtOTFibVJ6S0NrN1hISmNibHh5WEc1Y2RDOHZJR3h2YjNBZ2RHaHliM1ZuYUNCaGJHd2diV0Z5YTJWeWN5QmhibVFnWTNKbFlYUmxJR0p2ZFc1a2MxeHlYRzVjZENRdVpXRmphQ2dnYldGd0xtMWhjbXRsY25Nc0lHWjFibU4wYVc5dUtDQnBMQ0J0WVhKclpYSWdLWHRjY2x4dVhISmNibHgwWEhSMllYSWdiR0YwYkc1bklEMGdibVYzSUdkdmIyZHNaUzV0WVhCekxreGhkRXh1WnlnZ2JXRnlhMlZ5TG5CdmMybDBhVzl1TG14aGRDZ3BMQ0J0WVhKclpYSXVjRzl6YVhScGIyNHViRzVuS0NrZ0tUdGNjbHh1WEhKY2JseDBYSFJpYjNWdVpITXVaWGgwWlc1a0tDQnNZWFJzYm1jZ0tUdGNjbHh1WEhKY2JseDBmU2s3WEhKY2JseHlYRzVjZEM4dklHOXViSGtnTVNCdFlYSnJaWEkvWEhKY2JseDBhV1lvSUcxaGNDNXRZWEpyWlhKekxteGxibWQwYUNBOVBTQXhJQ2xjY2x4dVhIUjdYSEpjYmx4MFhIUXZMeUJ6WlhRZ1kyVnVkR1Z5SUc5bUlHMWhjRnh5WEc1Y2RDQWdJQ0J0WVhBdWMyVjBRMlZ1ZEdWeUtDQmliM1Z1WkhNdVoyVjBRMlZ1ZEdWeUtDa2dLVHRjY2x4dVhIUWdJQ0FnYldGd0xuTmxkRnB2YjIwb0lERTJJQ2s3WEhKY2JseDBmVnh5WEc1Y2RHVnNjMlZjY2x4dVhIUjdYSEpjYmx4MFhIUXZMeUJtYVhRZ2RHOGdZbTkxYm1SelhISmNibHgwWEhSdFlYQXVabWwwUW05MWJtUnpLQ0JpYjNWdVpITWdLVHRjY2x4dVhIUjlYSEpjYmx4eVhHNTlYSEpjYmx4eVhHNHZLbHh5WEc0cUlDQmtiMk4xYldWdWRDQnlaV0ZrZVZ4eVhHNHFYSEpjYmlvZ0lGUm9hWE1nWm5WdVkzUnBiMjRnZDJsc2JDQnlaVzVrWlhJZ1pXRmphQ0J0WVhBZ2QyaGxiaUIwYUdVZ1pHOWpkVzFsYm5RZ2FYTWdjbVZoWkhrZ0tIQmhaMlVnYUdGeklHeHZZV1JsWkNsY2NseHVLbHh5WEc0cUlDQkFkSGx3WlZ4MFpuVnVZM1JwYjI1Y2NseHVLaUFnUUdSaGRHVmNkRGd2TVRFdk1qQXhNMXh5WEc0cUlDQkFjMmx1WTJWY2REVXVNQzR3WEhKY2JpcGNjbHh1S2lBZ1FIQmhjbUZ0WEhSdUwyRmNjbHh1S2lBZ1FISmxkSFZ5Ymx4MGJpOWhYSEpjYmlvdlhISmNiaTh2SUdkc2IySmhiQ0IyWVhKY2NseHVMeTkyWVhJZ2JXRndJRDBnYm5Wc2JEdGNjbHh1WEhKY2JpUW9aRzlqZFcxbGJuUXBMbkpsWVdSNUtHWjFibU4wYVc5dUtDbDdYSEpjYmx4eVhHNWNkQ1FvSnk1aFkyWXRiV0Z3SnlrdVpXRmphQ2htZFc1amRHbHZiaWdwZTF4eVhHNWNjbHh1WEhSY2RDOHZJR055WldGMFpTQnRZWEJjY2x4dVhIUmNkRzFoY0NBOUlHNWxkMTl0WVhBb0lDUW9kR2hwY3lrZ0tUdGNjbHh1WEhKY2JseDBmU2s3WEhKY2JseHlYRzU5S1R0Y2NseHVYSEpjYm4wcEtHcFJkV1Z5ZVNrN1hISmNibHh5WEc1MllYSWdiV0Z3TzF4eVhHNGlMQ0l2THlCVWFHbHpJRU5oY205MWMyVnNJRzVsWldSeklHWnBjbk4wSUdGdVpDQnNZWE4wSUVsMFpXMXpJR2xrWlc1MGFXTmhiSE1nTHk5Y2NseHVMeThnZEc4Z2JXRnJaU0JoYmlCcGJtWnBibWwwWlNCc2IyOXdJR1ZtWm1WamRDOHZYSEpjYmx4eVhHNWNjbHh1THlwY2NseHVkbUZ5SUdOaGNtOTFjMlZzSUQwZ2UxeHlYRzRnSUNBZ2QzSmhjSEJsY2tOaGNtOTFjMlZzSURvZ2QybHVaRzkzTG1SdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RpYkc5akxXTmhjbTkxYzJWc0p5a3NYSEpjYmlBZ0lDQjNjbUZ3Y0dWeVNYUmxiWE1nT2lCM2FXNWtiM2N1Wkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KM2R5WVhCd1pYSXRhWFJsYlhNdFkyRnliM1Z6Wld3bktTeGNjbHh1SUNBZ0lHNTFiV0psY2tsMFpXMXpJRG9nZDJsdVpHOTNMbVJ2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeU4zY21Gd2NHVnlMV2wwWlcxekxXTmhjbTkxYzJWc0lDQXVhWFJsYlhNdFkyRnliM1Z6Wld3bktTNXNaVzVuZEdnc1hISmNiaUFnSUNCcGRHVnRjeUE2SUhkcGJtUnZkeTVrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwYzBKNVEyeGhjM05PWVcxbEtDZHBkR1Z0Y3kxallYSnZkWE5sYkNjcExGeHlYRzRnSUNBZ1kyOTFiblFnT2lBd0xGeHlYRzRnSUNBZ2MyVjBVMmw2WlVsMFpXMXpJRG9nWm5WdVkzUnBiMjRvS1h0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5keVlYQndaWEpKZEdWdGN5NXpkSGxzWlM1M2FXUjBhQ0E5SUhSb2FYTXViblZ0WW1WeVNYUmxiWE1nS2lBeE1EQWdLeUJjSWlWY0lqc2dMeThnVTJWMElIUm9aU0IzY21Gd2NHVnlMV2wwWlcxekxXTmhjbTkxYzJWc0lIZHBaSFJvWEhKY2JpQWdJQ0I5TEZ4eVhHNGdJQ0FnYzJ4cFpHVk1aV1owSURvZ1puVnVZM1JwYjI0b0tYdGNjbHh1SUNBZ0lDQWdJQ0JwYm5SbGNuWmhiR1VnUFNCelpYUkpiblJsY25aaGJDaGpZWEp2ZFhObGJDNWhkWFJ2VTJ4cFpHVXNJRFF3TURBcE95QXZMeUF4TURBd0lEMGdNU0J6WldOdmJtUmNjbHh1SUNBZ0lIMHNYSEpjYmlBZ0lDQmhkWFJ2VTJ4cFpHVWdPaUJtZFc1amRHbHZiaWdwZTF4eVhHNGdJQ0FnSUNBZ0lHbG1LR05oY205MWMyVnNMbU52ZFc1MElEMDlJQ2hqWVhKdmRYTmxiQzV1ZFcxaVpYSkpkR1Z0Y3kweEtTbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjbTkxYzJWc0xuZHlZWEJ3WlhKSmRHVnRjeTV6ZEhsc1pTNXNaV1owSUQwZ1hDSXRYQ0lnS3lCallYSnZkWE5sYkM1amIzVnVkQ0FxSURFd01DQXJJRndpSlZ3aU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpibVpwYm1sMFpTQk1iMjl3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR3hoYzNSSmRHVnRJRDBnZDJsdVpHOTNMbk5sZEZScGJXVnZkWFFvWm5WdVkzUnBiMjRvS1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmhjbTkxYzJWc0xuZHlZWEJ3WlhKSmRHVnRjeTV6ZEhsc1pTNXNaV1owSUQwZ01Ec2dMeThnVUhWMElIZHlZWEJ3WlhJdGFYUmxiWE10WTJGeWIzVnpaV3dnWVhRZ2FXNXBkR2xoYkNCd2IzTnBkR2x2Ymx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyRnliM1Z6Wld3dWQzSmhjSEJsY2tsMFpXMXpMbk4wZVd4bExuUnlZVzV6YVhScGIyNGdQU0JjSW01dmJtVmNJanNnTHk4Z1JHbHpZV0pzWldRZ1ZISmhibk5wZEdsdmJpQmxabVpsWTNSY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHVabTl6UTJGeWIzVnpaV3d1WTJoaGJtZGxTVzVtYjNNb01DazdJQzh2SUVGdWFXMWhkR2x2YmlCcGJtWnZjeUJpYkc5aklHTmhjbTkxYzJWc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZWEp2ZFhObGJDNWpiM1Z1ZENBOUlERTdJQzh2SUZObGRDQkRiM1Z1ZENCbWIzSWdkR2hsSUhObFkyOXVaQ0JKZEdWdFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lEVXdNQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDFsYkhObGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCallYSnZkWE5sYkM1M2NtRndjR1Z5U1hSbGJYTXVjM1I1YkdVdWRISmhibk5wZEdsdmJpQTlJRndpYkdWbWRDQXdMalZ6TENCd2IzTnBkR2x2YmlBd0xqVnpYQ0k3SUM4dklFVnVZV0pzWldRZ1ZISmhibk5wZEdsdmJpQmxabVpsWTNSY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGeWIzVnpaV3d1ZDNKaGNIQmxja2wwWlcxekxuTjBlV3hsTG14bFpuUWdQU0JjSWkxY0lpQXJJR05oY205MWMyVnNMbU52ZFc1MElDb2dNVEF3SUNzZ1hDSWxYQ0k3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2x1Wm05elEyRnliM1Z6Wld3dVkyaGhibWRsU1c1bWIzTW9ZMkZ5YjNWelpXd3VZMjkxYm5RcE95OHZJRUZ1YVcxaGRHbHZiaUJwYm1admN5QmliRzlqSUdOaGNtOTFjMlZzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR05oY205MWMyVnNMbU52ZFc1MEt5czdJQzh2SUVOdmRXNTBJR3h2YjNCY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlMRnh5WEc1Y2NseHVJQ0FnSUdGa1pFTmhjbTkxYzJWc1RHbHpkR1Z1WlhJZ09pQm1kVzVqZEdsdmJpZ3BlMXh5WEc0Z0lDQWdJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLRndpY21WemFYcGxYQ0lzSUdOaGNtOTFjMlZzTG5KbGMybDZaVU5oY205MWMyVnNMQ0JtWVd4elpTazdJQzh2SUZKbGMzQnZibk5wZG1WY2NseHVJQ0FnSUNBZ0lDQmpZWEp2ZFhObGJDNTNjbUZ3Y0dWeVEyRnliM1Z6Wld3dVlXUmtSWFpsYm5STWFYTjBaVzVsY2loY0ltMXZkWE5sWlc1MFpYSmNJaXdnWTJGeWIzVnpaV3d1Y0dGMWMyVkliM1psY2l3Z1ptRnNjMlVwT3lBdkx5QlRkRzl3SUV4dmIzQWdZMkZ5YjNWelpXeGNjbHh1SUNBZ0lDQWdJQ0JqWVhKdmRYTmxiQzUzY21Gd2NHVnlRMkZ5YjNWelpXd3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpaGNJbTF2ZFhObGJHVmhkbVZjSWl3Z1kyRnliM1Z6Wld3dWMyeHBaR1ZNWldaMExDQm1ZV3h6WlNrN0lDOHZJRkpsYkc5aFpDQk1iMjl3SUdOaGNtOTFjMlZzWEhKY2JseHlYRzRnSUNBZ0lDQWdJSFpoY2lCdVpYaDBUR2x1YXlBOUlIZHBibVJ2ZHk1a2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYm1WNGRDY3BPMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQndjbVYyVEdsdWF5QTlJSGRwYm1SdmR5NWtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmNISmxkaWNwTzF4eVhHNGdJQ0FnSUNBZ0lHNWxlSFJNYVc1ckxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb1hDSmpiR2xqYTF3aUxDQmpZWEp2ZFhObGJFTnNhV05yU0dGdVpHeGxjaUFzSUdaaGJITmxLVHRjY2x4dUlDQWdJQ0FnSUNCd2NtVjJUR2x1YXk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aVkyeHBZMnRjSWl3Z1kyRnliM1Z6Wld4RGJHbGphMGhoYm1Sc1pYSWdMQ0JtWVd4elpTazdYSEpjYmx4eVhHNGdJQ0FnZlN4Y2NseHVJQ0FnSUhCaGRYTmxTRzkyWlhJZ09pQm1kVzVqZEdsdmJpZ3BlMXh5WEc0Z0lDQWdJQ0FnSUdOc1pXRnlTVzUwWlhKMllXd29hVzUwWlhKMllXeGxLVHNnTHk4Z1UzUnZjQ0JNYjI5d0lHTmhjbTkxYzJWc1hISmNiaUFnSUNCOUxGeHlYRzRnSUNBZ2NtVnphWHBsUTJGeWIzVnpaV3dnT2lCbWRXNWpkR2x2YmlncGUxeHlYRzRnSUNBZ0lDQWdJSFpoY2lCamRYSnlaVzUwVm1sbGQzQnZjblJYYVdSMGFEc2dkbUZ5SUc1bGQxZHBaSFJvT3lCMllYSWdibVYzU0dWcFoyaDBPMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2QybHVaRzkzTG1sdWJtVnlWMmxrZEdnZ0lUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SV2FXVjNjRzl5ZEZkcFpIUm9JRDBnZDJsdVpHOTNMbWx1Ym1WeVYybGtkR2c3SUM4dklFZGxkQ0JXYVdWM2NHOXlkQ0JYYVdSMGFGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdMeThnUVhCd2JIa2diMjVzZVNCcFppQjBhR1VnZG1sbGQzQnZjblFnZDJsa2RHZ2dhWE5jY2x4dUlDQWdJQ0FnSUNBdkx5QjFibVJsY2lCcGRITWdhVzVwZEdsaGJDQjNhV1IwYUZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmloamRYSnlaVzUwVm1sbGQzQnZjblJYYVdSMGFDQThJREl3TURBZ0ppWWdZM1Z5Y21WdWRGWnBaWGR3YjNKMFYybGtkR2dnUGlBNE1EQXBlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnVaWGRYYVdSMGFDQTlJR04xY25KbGJuUldhV1YzY0c5eWRGZHBaSFJvSUMwZ01UYzdJQzh2SUhacFpYZHdiM0owSUhkcFpIUm9JRzFwYm5WeklITmpjbTlzYkNCaVlYSWdkMmxrZEdoY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1NHVnBaMmgwSUQwZ2JtVjNWMmxrZEdnZ0x6SXVOek15TWp0Y2NseHVJQ0FnSUNBZ0lDQjlaV3h6WlNCcFppaGpkWEp5Wlc1MFZtbGxkM0J2Y25SWGFXUjBhQ0E4SURnd01DbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWxkMWRwWkhSb0lEMGdNRHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdibVYzU0dWcFoyaDBJRDBnTUR0Y2NseHVJQ0FnSUNBZ0lDQjlaV3h6WlhzZ0x5OGdRWEJ3YkhrZ2FXNXBkR2xoYkNCM2FXUjBhQ0JwYmlCdmRHaGxjaUJqWVhObGMxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYZFhhV1IwYUNBOUlESXdNREE3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRzVsZDBobGFXZG9kQ0E5SURjek1qdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ1kyRnliM1Z6Wld3dWQzSmhjSEJsY2tOaGNtOTFjMlZzTG5OMGVXeGxMbmRwWkhSb0lEMGdibVYzVjJsa2RHZ2dLMXdpY0hoY0lqdGNjbHh1SUNBZ0lDQWdJQ0JqWVhKdmRYTmxiQzUzY21Gd2NHVnlRMkZ5YjNWelpXd3VjM1I1YkdVdWFHVnBaMmgwSUQwZ2JtVjNTR1ZwWjJoMElDdGNJbkI0WENJN1hISmNiaUFnSUNBZ0lDQWdabTl5S0drZ1BTQXdPeUJwSUR3Z1kyRnliM1Z6Wld3dWJuVnRZbVZ5U1hSbGJYTTdJR2tyS3lsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGNtOTFjMlZzTG1sMFpXMXpXMmxkTG5OMGVXeGxMbmRwWkhSb0lEMGdibVYzVjJsa2RHZ2dLMXdpY0hoY0lqdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5TEZ4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdOaGNtOTFjMlZzUTJ4cFkydElZVzVrYkdWeUtHVXBlMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQmthWEpsWTNScGIyNGdQU0IwYUdsekxtbGtPeUF2THlCSFpYUWdkR2hsSUdOMWNuSmxiblFnYVhSbGJWeHlYRzRnSUNBZ2RtRnlJR3hwYldsMElEMGdZMkZ5YjNWelpXd3ViblZ0WW1WeVNYUmxiWE1nTFNBeUlEc2dMeThnYkc5dmNDQmpiMjVrYVhScGIyNWNjbHh1SUNBZ0lHbG1JQ2hrYVhKbFkzUnBiMjRnUFQwZ1hDSnVaWGgwWENJcElIdGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb1kyRnliM1Z6Wld3dVkyOTFiblFnUENCc2FXMXBkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhKdmRYTmxiQzVqYjNWdWRDQXJQU0F4TzF4eVhHNGdJQ0FnSUNBZ0lIMWxiSE5sZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhKdmRYTmxiQzVqYjNWdWRDQTlJREE3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZXVnNjMlVnYVdZb1pHbHlaV04wYVc5dUlEMDlJRndpY0hKbGRsd2lLWHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9ZMkZ5YjNWelpXd3VZMjkxYm5RZ1BpQXdLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR05oY205MWMyVnNMbU52ZFc1MElDMDlJREU3WEhKY2JpQWdJQ0FnSUNBZ2ZXVnNjMlY3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR05oY205MWMyVnNMbU52ZFc1MElEMGdNRHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNiaUFnSUNBdkx5Qk5iMlJwWm5rZ2FYUmxiU0JzWldaMElIQnZjMmwwYVc5dVhISmNiaUFnSUNCallYSnZkWE5sYkM1M2NtRndjR1Z5U1hSbGJYTXVjM1I1YkdVdWJHVm1kQ0E5SUZ3aUxWd2lJQ3NnWTJGeWIzVnpaV3d1WTI5MWJuUWdLaUF4TURBZ0t5QmNJaVZjSWp0Y2NseHVJQ0FnSUdOaGNtOTFjMlZzTG5keVlYQndaWEpKZEdWdGN5NXpkSGxzWlM1MGNtRnVjMmwwYVc5dUlEMGdYQ0pzWldaMElEQXVOWE1zSUhCdmMybDBhVzl1SURBdU5YTmNJanRjY2x4dUlDQWdJR2x1Wm05elEyRnliM1Z6Wld3dVkyaGhibWRsU1c1bWIzTW9ZMkZ5YjNWelpXd3VZMjkxYm5RcE95QXZMeUJCYm1sdFlYUnBiMjRnYVc1bWIzTWdZbXh2WXlCallYSnZkWE5sYkZ4eVhHNTlYSEpjYmx4eVhHNTJZWElnYVc1bWIzTkRZWEp2ZFhObGJDQTlJSHRjY2x4dUlDQWdJSGR5WVhCd1pYSkpibVp2Y3lBNklIZHBibVJ2ZHk1a2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjamQzSmhjSEJsY2kxcGJtWnZjeTFwZEdWdGN5QXVhVzVtYjNNdGFYUmxiWE1uS1N4Y2NseHVJQ0FnSUdOb1lXNW5aVWx1Wm05eklEb2dablZ1WTNScGIyNG9ZV04wYVhabFpDbDdYSEpjYmlBZ0lDQWdJQ0FnWm05eUtHa2dQU0F3T3lCcElEd2dhVzVtYjNORFlYSnZkWE5sYkM1M2NtRndjR1Z5U1c1bWIzTXViR1Z1WjNSb095QnBLeXNwZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloaFkzUnBkbVZrSUQwOUlHa3BlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRWx1Wm05eklEMGdkMmx1Wkc5M0xtUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NWhZM1JwZG1VbktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Y2locUlEMGdNRHNnYWlBOElHTjFjbkpsYm5SSmJtWnZjeTVzWlc1bmRHZzdJR29yS3lsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRWx1Wm05elcycGRMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9YQ0poWTNScGRtVmNJaWs3SUM4dklGSmxiVzkyWlNCQmJHd2dZV04wYVhabElHTnNZWE56WlhOY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x1Wm05elEyRnliM1Z6Wld3dWQzSmhjSEJsY2tsdVptOXpXMmxkTG1Oc1lYTnpUR2x6ZEM1aFpHUW9YQ0poWTNScGRtVmNJaWs3SUM4dklFRmtaQ0JoWTNScGRtVWdZMnhoYzNNZ2RHOGdkR2hsSUVsdVptOGdRbTk0WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOUxGeHlYRzU5TzF4eVhHNWNjbHh1YVdZZ0tHTmhjbTkxYzJWc0xuZHlZWEJ3WlhKRFlYSnZkWE5sYkNBaFBUMGdiblZzYkNsN1hISmNibHgwWTJGeWIzVnpaV3d1Y21WemFYcGxRMkZ5YjNWelpXd29LVHRjY2x4dVhIUmpZWEp2ZFhObGJDNXpaWFJUYVhwbFNYUmxiWE1vS1R0Y2NseHVYSFJqWVhKdmRYTmxiQzV6Ykdsa1pVeGxablFvS1R0Y2NseHVYSFJqWVhKdmRYTmxiQzVoWkdSRFlYSnZkWE5sYkV4cGMzUmxibVZ5S0NrN1hISmNibHgwTHk5dVlYWkRZWEp2ZFhObGJDNXpiR2xrWlVOdmJXMWhibVFvS1R0Y2NseHVmVnh5WEc0cUwxeHlYRzRpTENJdktpcGNjbHh1SUNvZ1JtbGphR2xsY2lCS2N5QndjbWx1WTJsd1lXeGNjbHh1SUNvdlhISmNibXBSZFdWeWVTaGtiMk4xYldWdWRDa3VjbVZoWkhrb1puVnVZM1JwYjI0b0pDa2dlMXh5WEc0Z0lDOHFJRTFoZE1PcGNtbGhiR2w2WlNCbGRtVnVkQ0FxTDF4eVhHNGdJQ0FnSkNoY0lpNWlkWFIwYjI0dFkyOXNiR0Z3YzJWY0lpa3VjMmxrWlU1aGRpZ3BPMXh5WEc0Z0lDQWdKQ2duTG0xaGRHVnlhV0ZzWW05NFpXUW5LUzV0WVhSbGNtbGhiR0p2ZUNncE8xeHlYRzRnSUNBZ0pDZ25Mbk5zYVdSbGNpY3BMbk5zYVdSbGNpaDdablZzYkY5M2FXUjBhRG9nZEhKMVpYMHBPMXh5WEc1Y2NseHVYSEpjYmlBZ0lDQm9iM1psY2tWMlpXNTBLQ2R1WVhZdWJXRnBiaTF1WVhZZ2RXd3VaR1Z6YTNSdmNDQnNhU2NwTzF4eVhHNGdJQ0FnYUc5MlpYSkZkbVZ1ZENnbkxuUnZjQzF3Y205a2RXTjBjejVrYVhZbktUdGNjbHh1SUNBZ0lDOHZZMlZ1ZEdWeVRXVnVkU2hjSW5Wc0xtUmxjMnQwYjNCY0lpazdYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDUW9YQ0oxYkNOdVlYWXRZV05qYjNWdWRDQStJR3hwSUdGY0lpa3VZMnhwWTJzb1puVnVZM1JwYjI0b1pYWmxiblFwZTF4eVhHNGdJQ0FnSUNCbGRtVnVkQzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh5WEc0Z0lDQWdJQ0J1WVhaQlkyTnZkVzUwS0hSb2FYTXBPMXh5WEc0Z0lDQWdmU2s3WEhKY2JseHlYRzVjY2x4dUlDQWdJR2xtS0NRb1hDSXVhVzV3ZFhRdFptbGxiR1FnYzJWc1pXTjBYQ0lwTG14bGJtZDBhQ0ErSURBcGUxeHlYRzRnSUNBZ0lDQWtLRndpTG1sdWNIVjBMV1pwWld4a0lITmxiR1ZqZEZ3aUtTNXRZWFJsY21saGJGOXpaV3hsWTNRb0tUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JwWmlna0tDY3VibUYyTFdacGJIUmxjaWNwTG14bGJtZDBhQ0ErSURBcGUxeHlYRzRnSUNBZ0lDQm1hV3gwWlhKUWIzTnBkR2x2YmlncE8xeHlYRzRnSUNBZ0lDQWtLQ0IzYVc1a2IzY2dLUzV5WlhOcGVtVW9ablZ1WTNScGIyNG9LWHRjY2x4dUlDQWdJQ0FnSUNCbWFXeDBaWEpRYjNOcGRHbHZiaWdwTzF4eVhHNGdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHbG1LQ1FvSnk1dVlYWXRabWxzZEdWeUlDTm1hV3gwY21WZmNISnBlQ2NwTG14bGJtZDBhQ0ErSURBcGUxeHlYRzRnSUNBZ0lDQm1iM1Z5WTJobGRIUmxVSEpwZUNncE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dVhISmNibjBwTzF4eVhHNWNjbHh1WEhKY2JseHlYRzVtZFc1amRHbHZiaUJqWlc1MFpYSk5aVzUxS0cxbGJuVXBlMXh5WEc0Z0lDQWdkbUZ5SUhWc1YybGtkR2dnUFNBa0tHMWxiblVwTG5kcFpIUm9LQ2s3WEhKY2JpQWdJQ0FrS0cxbGJuVXBMbUYwZEhJb1hDSjNhV1IwYUZ3aUxDQjFiRmRwWkhSb0tUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYUc5MlpYSkZkbVZ1ZENod1lYSmxiblFwZTF4eVhHNGdJQ0FnSkNod1lYSmxiblFwTG0xdmRYTmxaVzUwWlhJb1puVnVZM1JwYjI0b0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSkNoMGFHbHpLUzVqYUdsc1pISmxiaWhjSW1ScGRsd2lLUzV6YUc5M0tDazdYSEpjYmlBZ0lDQjlLVHRjY2x4dUlDQWdJQ1FvY0dGeVpXNTBLUzV0YjNWelpXeGxZWFpsS0daMWJtTjBhVzl1S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ1FvZEdocGN5a3VZMmhwYkdSeVpXNG9YQ0prYVhaY0lpa3VhR2xrWlNncE8xeHlYRzRnSUNBZ2ZTazdYSEpjYm4xY2NseHVMeW9nSUVadmJtTjBhVzl1SUhObGNuWmhiblFndzZBZ1ptRnBjbVVnWVhCd1lYSmhhWFJ5WlM5a2FYTndZWEpoYVhSeVpTQnNaWE1nWW14dlkzTWdaR1VnYkdFZ2MyVmpkR2x2YmlCdGIyNGdZMjl0Y0hSbEtpOWNjbHh1Wm5WdVkzUnBiMjRnYm1GMlFXTmpiM1Z1ZENoc2FXNXJLWHRjY2x4dUlDQWtLQ2N1YzJWamRHbHZiaUJrYVhZdVlXTjBhWFpsTFdGalkyOTFiblFuS1M1eVpXMXZkbVZEYkdGemN5aGNJbUZqZEdsMlpTMWhZMk52ZFc1MFhDSXBPMXh5WEc0Z0lIWmhjaUJ3WVhKMElEMGdKQ2hzYVc1cktTNWhkSFJ5S0Z3aVpHRjBZUzF1WVhaY0lpazdYSEpjYmlBZ0pDaGNJaTVjSWlBcklIQmhjblFwTG1Ga1pFTnNZWE56S0NkaFkzUnBkbVV0WVdOamIzVnVkQ2NwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm1hV3gwWlhKUWIzTnBkR2x2YmlncGUxeHlYRzRnSUdsbUtDUW9JSGRwYm1SdmR5QXBMbmRwWkhSb0tDa2dQaUE1TnpVcGUxeHlYRzRnSUNBZ2RtRnlJR0p2WkhsWGFXUjBhQ0E5SUNRb0oySnZaSGtuS1M1M2FXUjBhQ2dwTzF4eVhHNGdJQ0FnZG1GeUlHNWhka1pwYkhSbGNsZHBaSFJvSUQwZ1ltOWtlVmRwWkhSb0lDb2dNQzR4TlNBdElERXdPMXh5WEc0Z0lDQWdkbUZ5SUd4bFpuUlFiM05wZEdsdmJpQTlJR0p2WkhsWGFXUjBhQ0FxSURBdU1UVTdYSEpjYmlBZ0lDQWtLQ2N1Ym1GMkxXWnBiSFJsY2ljcExuZHBaSFJvS0c1aGRrWnBiSFJsY2xkcFpIUm9LVHRjY2x4dUlDQWdJQ1FvSnk1dVlYWXRabWxzZEdWeUp5a3VZM056S0hzZ2RHOXdPaUF3TENCc1pXWjBPaUJjSWkxY0lpQXJJR3hsWm5SUWIzTnBkR2x2YmlBclhDSndlRndpSUgwcE8xeHlYRzRnSUgxbGJITmxlMXh5WEc0Z0lDQWdkbUZ5SUcxaGVGZHBaSFJvSUQwZ0pDZ25MbU52Ym5SaGFXNWxjaWNwTG5kcFpIUm9LQ2s3WEhKY2JpQWdJQ0FrS0NjdWJtRjJMV1pwYkhSbGNpY3BMbmRwWkhSb0tHMWhlRmRwWkhSb0tUdGNjbHh1SUNCOVhISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR1p2ZFhKamFHVjBkR1ZRY21sNEtDbDdYSEpjYmlBZ2RtRnlJSE5zYVdSbGNpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZG1hV3gwY21WZmNISnBlQ2NwTzF4eVhHNGdJQ0FnYm05VmFWTnNhV1JsY2k1amNtVmhkR1VvYzJ4cFpHVnlMQ0I3WEhKY2JpQWdJQ0FnSUhOMFlYSjBPaUJiTWpBc0lERXdNRjBzWEhKY2JpQWdJQ0FnSUdOdmJtNWxZM1E2SUhSeWRXVXNYSEpjYmlBZ0lDQWdJSE4wWlhBNklERXNYSEpjYmlBZ0lDQWdJQ0J5WVc1blpUb2dlMXh5WEc0Z0lDQWdJQ0FnSUNBbmJXbHVKem9nTUN4Y2NseHVJQ0FnSUNBZ0lDQWdKMjFoZUNjNklEUTFNRnh5WEc0Z0lDQWdJQ0FnZlN4Y2NseHVJQ0FnSUgwcE8xeHlYRzU5WEhKY2JpSmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUwzTnZkWEpqWlM4aWZRPT1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
