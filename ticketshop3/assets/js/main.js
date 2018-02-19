$(document).ready(function(){
	$('.upcoming-event-slider-items').owlCarousel({
		items:2,
		margin:30,
		loop:true,
		// center:true,
		autoplay:false,

		dots:true,
		nav:true,
		navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		responsive:{
			0:{items: 1},
			400:{items: 1},
			600: {items: 2},
		}
	});


	$('.our-clients-slider').owlCarousel({
		items:6,
		margin:10,
		loop:true,
		// center:true,
		autoplay:false,

		dots:true,
		nav:false,
		// navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		// responsive:{
		// 	0:{items: 1},
		// 	400:{items: 1},
		// 	600: {items: 2},
		// }
	});

	$('.testimonial-slider').owlCarousel({
		items:3,
		margin:15,
		loop:true,
		// center:true,
		autoplay:false,

		dots:true,
		nav:false,
		navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		// responsive:{
		// 	0:{items: 1},
		// 	400:{items: 1},
		// 	600: {items: 2},
		// }
	});

	$(".category-titles li").on("click", function(){
		$(".category-titles li").removeClass("isotope-active");
		$(this).addClass("isotope-active");
	});


	$(".category-titles li").on("click", function(){
		var selector = $(this).attr('data-filter');
		$(".category-list").isotope({
			filter: selector,
		});
	});


});
