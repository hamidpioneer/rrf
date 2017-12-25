(function ($) {
	"use strict";

    jQuery(document).ready(function($){
			var dSize = $(document).height();
			var wSize = $(window).height();
			var dw = dSize - wSize;


			// start to-Top-btn
			$(window).scroll(function(){
				if($(this).scrollTop()>200){
					$(".to-Top-btn").fadeIn();
				}else{
					$(".to-Top-btn").fadeOut();
				}
			});

			$(".to-Top-btn").on("click", function(){
				$("html, body").animate({
					scrollTop:0,
				}, 1000);
				return false;
			});


			$(window).scroll(function(){
				if($(this).scrollTop() < dw ){
					$(".to-Bottom-btn").fadeIn();
				}else{
					$(".to-Bottom-btn").fadeOut();
				}
			});

			$(".to-Bottom-btn").on("click", function(){
				$("html, body").animate({
					scrollTop:dSize,
				}, 1000);
				return false;
			});
			//
			// $(".to-Bottom-btn").on("click", function(){
			// 	$("html, body").animate({
			// 		scrollTop:dSize;
			// 	}, 1000);
			// 	return false;
			// });









    });


    jQuery(window).load(function(){


    });


}(jQuery));
