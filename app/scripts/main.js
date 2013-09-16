'use strict';

$(document).ready(function() {

	// video background
	$('.panel-home').videoBG({
		autoplay: true,
		position: 'absolute',
		zIndex: 0,
		mp4: 'videos/jellyfish.mp4',
		ogv: 'videos/jellyfish.ogv',
		webm: 'videos/jellyfish.webm',
		//poster: 'images/jellyfish.jpg',
		fullscreen: true,
		scale: false
	});

	// mute video
	$('video').prop('muted', true);

});