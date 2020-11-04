 $(window).scroll(function() {
	var scrl = $(window).scrollTop();
	if (scrl < 60){						
		$('.header_01').removeClass('fixedbar');
	}else{						
		$('.header_01').addClass('fixedbar');					
	}				
});

(function($) {
  	"use strict"; 
	$('.anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,  
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
})(jQuery);

 /*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

}); 

new WOW().init();
                          
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});