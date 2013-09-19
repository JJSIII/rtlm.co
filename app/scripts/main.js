'use strict';

$(document).ready(function() {

	// video background
	$('.panel-home').videoBG({
		autoplay: true,
		position: 'absolute',
		zIndex: -1,
		mp4: 'videos/jellyfish.mp4',
		ogv: 'videos/jellyfish.ogv',
		webm: 'videos/jellyfish.webm',
		//poster: 'images/jellyfish.jpg',
		fullscreen: true,
		//opacity: .7,
		scale: false
	});

	// mute video
	$('video').prop('muted', true);

	// center positioning

	if (Modernizr.mq('only screen and (min-width: 500px)')) {
		var elPositioning = $('.positioning');
		var positioningHeight = elPositioning.outerHeight() / 2;
		elPositioning.css('margin-top',-positioningHeight);
	}

});