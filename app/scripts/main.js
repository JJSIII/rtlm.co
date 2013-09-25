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
		$('.panel-home').css('background-image','url(images/forest.jpg)');
	} else {
		// desktop
		$('.panel-home').videoBG({
			autoplay: true,
			position: 'absolute',
			zIndex: -1,
			mp4: 'videos/forest.mp4',
			ogv: 'videos/forest.ogv',
			webm: 'videos/forest.webm',
			poster: 'images/forest.jpg',
			fullscreen: true,
			opacity: 0.5,
			scale: false
		});
	}

	// mute video
	//$('video').prop('muted', true);

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

	// intro animation chaining
	if (!Modernizr.touch) {
		$('.logo').addClass('visible').delay(2000).queue(function(next) {
			$('.logo').addClass('logo-top').delay(1000).queue(function(next) {
				$('.positioning').addClass('visible').delay(1000).queue(function() {
					$('.panel-home nav li').each(function(index) {
						var myElem = $(this);
						setTimeout(function() {
							myElem.addClass('nav-visible');
						}, 400 * (index + 1));
					});
				});
				next();
			});
			next();
		});

		$('.videoBG').fadeIn(3000);
	}

});