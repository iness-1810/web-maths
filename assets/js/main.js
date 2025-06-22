

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			normal:    [ '1081px',  '1280px'  ],
			narrow:    [ '821px',   '1080px'  ],
			narrower:  [ '737px',   '820px'   ],
			mobile:    [ '481px',   '736px'   ],
			mobilep:   [ null,      '480px'   ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 300,
			alignment: 'center',
			noOpenerFade: true
		});

	// Nav.

		
	// Cargar header global
	$(function() {
		$("#header-placeholder").load("header.html", function() {
			// Re-inicializar el menú después de cargar el header
			if (typeof $.fn.dropotron !== 'undefined') {
				$('#nav > ul').dropotron({
					mode: 'fade',
					speed: 300,
					alignment: 'center',
					noOpenerFade: true
				});
			}
			var $navPanel = $('#navPanel');

			// Toggle general menú móvil (botón hamburguesa)
			$('#navButton .toggle').off('click').on('click', function(e) {
			e.preventDefault();
			if ($navPanel.hasClass('visible')) {
				$navPanel.removeClass('visible').css('transform', 'translateY(-50vh)');
			} else {
				$navPanel.addClass('visible').css('transform', 'translateY(0vh)');
			}
			});

			// Toggle submenús en móvil (pulsar en enlace con submenu)
			$('#nav li.has-submenu > a').off('click').on('click', function(e) {
			var $submenu = $(this).next('ul');

			// Sólo para móvil (ajusta según breakpoints)
			if (window.innerWidth <= 736) {
				e.preventDefault();

				if ($submenu.is(':visible')) {
				$submenu.slideUp();
				} else {
				$('#nav ul ul').slideUp(); // Cierra otros submenús
				$submenu.slideDown();
				}
			}
			});

			// Cerrar menú al pulsar en enlaces normales (sin submenú)
			$('#nav a:not(.has-submenu > a)').off('click').on('click', function() {
			if (window.innerWidth <= 736) {
				$navPanel.removeClass('visible').css('transform', 'translateY(-50vh)');
			}
			});

				$(window).on('scroll', function() {
				var $navPanel = $('#navPanel');
				if ($navPanel.hasClass('visible')) {
					$navPanel.removeClass('visible').css('transform', 'translateY(-50vh)');
				}
			});
		});	
	});

	// cargar footer global	
	$(function(){   
		$("#footer-placeholder").load("footer.html");
	});
})(jQuery);