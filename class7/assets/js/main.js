$(document).ready(function(){
	$('.owl-carousel-items').owlCarousel({
		items:4,
		margin:15,
		loop:true,
		center:true,
		nav:true,
		navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		responsive:{
			0:{items: 1},
			400:{items: 2},
			600: {items: 3},
			800: {items: 4},
			1000: {items: 5},
		}
	});
});
