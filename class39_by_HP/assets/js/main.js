(function ($) {
	"use strict";

    jQuery(document).ready(function($){
			$(".hamburger-icon").on("click", function(){
				$(".mobile-menu, .mobile-menu-overlay").addClass("active");
				return false;
			});
			$(".mobile-menu .close-icon, .mobile-menu-overlay").on("click", function(){
				$(".mobile-menu, .mobile-menu-overlay").removeClass("active");
			});

    });


    jQuery(window).load(function(){


    });


}(jQuery));
