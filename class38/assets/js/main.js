(function ($) {
	"use strict";

    jQuery(document).ready(function($){

				$('.header-slides').owlCarousel({
					items: 1,
					loop: true,
					nav: true,
					navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
					dots: true,
					animateOut: 'fadeOut'
				});

    });


    jQuery(window).load(function(){


    });


}(jQuery));
