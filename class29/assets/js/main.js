(function ($) {
	"use strict";

    jQuery(document).ready(function($){

			$(".projects-titles li").on("click", function(){
				$(".projects-titles li").removeClass("isotope-active");
				$(this).addClass("isotope-active");
			});


			$(".projects-titles li").on("click", function(){
				var selector = $(this).attr('data-filter');
				$(".projects-list").isotope({
					filter: selector,
				});
			});

    });


    jQuery(window).load(function(){
			jQuery(".projects-list").isotope();

    });


}(jQuery));
