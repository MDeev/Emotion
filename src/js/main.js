$(window).on('load', function() {
	// Hidding the loader
	$('.loader').delay(500).fadeOut(500);
});

$(document).ready(function() {

	// ScrollReveal
	new ScrollReveal();
	ScrollReveal({ reset: true }).reveal('.reveal', {duration: 300, scale: 0.8});

	// Showing the loader
	$('.loader span').animate({width: '100%'}, 700);

	// Fire the scroll
	$("body").niceScroll({
		cursorcolor:"#e59361",
		cursorwidth: "15px",
		cursorborder: "none",
		cursorborderradius: "0",
		background: "#444",
		zindex: 999
	});

	// Show the image
	$('.story').on('click', function() {
		// Hide navbar
		$('.navbar').css('top', '-400px');

		var src = $(this).children('img').attr('src');
		$('.view').fadeIn(100).children('img').attr('src', src).addClass('show');
	});

	// Hide image by clicking on Close button
	$('.close').on('click', function() { hideView(); });

	// Hide image by clicking on view area
	$('.view').on('click', function(e) { if(e.target === this) { hideView(); } });

	// Hide image function  
	function hideView() {

		// Show navbar
		$('.navbar').css('top', 0);

		$('.view').children('img').removeClass('show').stop().delay(100).queue(function(){
			  $('.view').fadeOut(500);
		});
	}

	function navbar_gotoTop() {

		var top = $(window).scrollTop();

		if (top <= 0) $('.navbar').removeClass('sticky');
		else if(top <= 100) $('.scroll-top').css('transform', 'scale(0)');
		else { 
			$('.navbar').addClass('sticky');
			$('.scroll-top').css('transform', 'scale(1)');
		}
	}

	// Fire the function on scroll
	$(window).scroll(function() { navbar_gotoTop(); });

	// Fire the function
	navbar_gotoTop();

	// Go to Top
	$('.scroll-top').on('click', function() {
		 $('body, html').animate({scrollTop: 0}, 400);
	});


	// Browsering 
	$('[data-go]').on('click', function(e) {
		e.preventDefault();

		var go = $(this).data('go');
		var top = 0;

		if(go !== 'heading') top = $('.' + go).offset().top - $('.navbar').innerHeight();

		 $('body, html').animate({scrollTop: top}, 400);
	});

});