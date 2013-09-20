'use strict';

/*global Modernizr */

$(document).ready(function() {

	// reload page on window resize
	function reloadPage() {
	    window.location = window.location;
	}

	var resizeTimer;
	$(window).resize(function() {
	    clearTimeout(resizeTimer);
	    resizeTimer = setTimeout(reloadPage, 200);
	});

	// video background
	if (Modernizr.touch) {
		// mobile
		$('.panel-home').css('background-image','url(images/jellyfish.jpg)');
	} else {
		// desktop
		$('.panel-home').videoBG({
			autoplay: true,
			position: 'absolute',
			zIndex: -1,
			mp4: 'videos/jellyfish.mp4',
			ogv: 'videos/jellyfish.ogv',
			webm: 'videos/jellyfish.webm',
			poster: 'images/jellyfish.jpg',
			fullscreen: true,
			opacity: 0.6,
			scale: false
		});
	}

	// mute video
	$('video').prop('muted', true);

	// center positioning

	if (Modernizr.mq('only screen and (min-width: 500px)')) {
		var elPositioning = $('.positioning');
		var positioningHeight = elPositioning.outerHeight() / 2.5;
		elPositioning.css('margin-top',-positioningHeight);
	}

	// launch modal
	$('.panel-home .projects').click(function() {
		$('.md-modal').addClass('md-show');
		$('html').addClass('md-perspective');
		event.preventDefault();
	});

	$('.md-close').click(function() {
		$('.md-modal').removeClass('md-show');
	});

});