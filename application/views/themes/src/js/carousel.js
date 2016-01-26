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
