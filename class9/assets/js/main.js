(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

				$('.owl-carousel-testimonials').owlCarousel({
					items: 3,
					// autoplay:true,
					// center: true,
					loop: true,
					margin: 10,
					// nav: true,
					navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
					dots: true,
					merge: true,
				});






    });


    jQuery(window).load(function(){


    });


}(jQuery));
