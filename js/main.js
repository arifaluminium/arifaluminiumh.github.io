(function ($) {
	"use strict";

	/*----------------------------
	counterUp active
------------------------------ */
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	/*----- countdown -----*/
	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<span class="up-down"><span class="cdown days"> <span class="time-count">%-D</span></span> <span class="days-p"><p>Days</p></span></span> <span class="cdown hour"> <span class="time-count">%-H</span></span> <p>Hours</p> <span class="cdown minutes"> <span class="time-count">%M</span></span> <p>Min</p> <span class="cdown second"><span class="time-count">%S</span></span> <p>Sec</p> '));
		});
	});

	/*----------------------------
	nivo--slider active
------------------------------ */
	$('#mainSlider').nivoSlider({
		directionNav: false,
		animSpeed: 500,
		slices: 18,
		pauseTime: 5000,
		controlNav: true,
		beforeChange: function () {
			$(".layer2-image img").animate({
				left: '120%'
			}, "2000");

			$(".width2-cap").animate({
				left: '-60%'
			}, "2000");
		},
		afterChange: function () {
			$(".layer2-image img").animate({
				left: '50%'
			}, "2000");
			$(".width2-cap").animate({
				left: '12%'
			}, "2000");
		}
	});


	$('.top-product-list').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		dotsEach: false,
		smartSpeed: 500,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 2
			},
			980: {
				items: 3
			},
			1199: {
				items: 3
			}
		}
	});

	/*----------------------------
	 jQuery MeanMenu
	------------------------------ */
	jQuery('nav#dropdown').meanmenu();
	/*----------------------------
	 wow js active
	------------------------------ */
	new WOW().init();

	/*----------------------------
	 owl active
	------------------------------ */
	$("#owl-demo").owlCarousel({
		autoPlay: false,
		slideSpeed: 2000,
		pagination: false,
		navigation: true,
		items: 4,
		/* transitionStyle : "fade", */
		/* [This code for animation ] */
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [980, 3],
		itemsTablet: [768, 2],
		itemsMobile: [479, 1],
	});
	/*----------------------------
	 price-slider active
	------------------------------ */
	$("#slider-range").slider({
		range: true,
		min: 40,
		max: 600,
		values: [60, 570],
		slide: function (event, ui) {
			$("#amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
		}
	});
	$("#amount").val("£" + $("#slider-range").slider("values", 0) +
		" - £" + $("#slider-range").slider("values", 1));

	/*--------------------------
	 scrollUp
	---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});

})(jQuery);