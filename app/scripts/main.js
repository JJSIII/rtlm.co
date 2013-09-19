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
			opacity: 0.4,
			scale: false
		});
	}



	// mute video
	$('video').prop('muted', true);

	// center positioning

	if (Modernizr.mq('only screen and (min-width: 500px)')) {
		var elPositioning = $('.positioning');
		var positioningHeight = elPositioning.outerHeight() / 2;
		elPositioning.css('margin-top',-positioningHeight);
	}

});