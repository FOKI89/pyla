$( document ).ready(function() {
    if ($(window).height() > $('body').height())
    {
	    var extra = $(window).height() - $('body').height();
	    $('footer').css('margin-top', extra);
    }
});