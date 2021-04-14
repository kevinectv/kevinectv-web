	var digiciaApp = {

				/* ---------------------------------------------
		    ## Pop Up Scripts
		 --------------------------------------------- */
		popupscript: function() {	
			function getScrollBarWidth () {
			    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
			        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
			    $outer.remove();
			    return 100 - widthWithScroll;
			}

			// Image Pop up
			var $popupImage = $(".popup-image");
			if ( $popupImage.length > 0 ) {
			    $popupImage.magnificPopup({
			        type:'image',
			        fixedContentPos: false,
			        gallery: { enabled:true },
			        removalDelay: 300,
			        mainClass: 'mfp-fade',
			        callbacks: {
			            // This prevenpt pushing the entire page to the right after opening Magnific popup image
			            open: function() {
			                $(".page-wrapper, .navbar-nav").css("margin-right", getScrollBarWidth());
			            },
			            close: function() {
			                $(".page-wrapper, .navbar-nav").css("margin-right", 0);
			            }
			        }
			    });
			}
		},

 /* ---------------------------------------------
            ## Scroll top
        --------------------------------------------- */
        scroll_top: function () {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $scrolltop
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },
				/* ---------------------------------------------
		    ## Isotope Activation
		--------------------------------------------- */
		isotope_activation: function() {
			var IsoGriddoload = $('.portfolio-grid');
			IsoGriddoload.isotope({
			    itemSelector: '.item',
			    percentPosition: true,
			    layoutMode: 'packery',
			});

			var ProjMli = $('.portfolio-filter li a');
			var ProjGrid = $('.portfolio-grid');
			ProjMli.on('click', function(e) {
				e.preventDefault();
			    ProjMli.removeClass("active");
			    $(this).addClass("active");
			    var selector = $(this).attr('data-filter');
			    ProjGrid.isotope({
			        filter: selector,
			        animationOptions: {
			            duration: 750,
			            easing: 'linear',
			            queue: false,
			        }
			    });
			});
        },

				/* ---------------------------------------------
            ## Portfolio Carousel
        --------------------------------------------- */
        portfolio_carousel: function() {
            if ($('#portfolio-carousel').length) {
                var items = 4;
                $('#portfolio-carousel').owlCarousel({
                    center: false,
                    items: items,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 30,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: true,
                    responsive: {
                        280: {
                            items: 1
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: 3
                        },
                        1366: {
                            items: items
                        }
                    }
                });  
            }
            $('.portfolio-block .btn-links-area .btn-prev').on('click', function() {
                $('#portfolio-carousel').trigger('prev.owl.carousel');
            });
            $('.portfolio-block .btn-links-area .btn-next').on('click', function() {
                $('#portfolio-carousel').trigger('next.owl.carousel');
            });
        },
			/* ---------------------------------------------
		 function initializ
		 --------------------------------------------- */
		initializ: function() {
            digiciaApp.portfolio_carousel();
			digiciaApp.popupscript();
		}
	};
	/* ---------------------------------------------
	 Document ready function
	 --------------------------------------------- */
	$(function() {
		digiciaApp.initializ();
	});

	$(window).on('load', function() {
	"use strict";
	
	var digiciaApp = {
		/* ---------------------------------------------
		    ## Content Loading
		--------------------------------------------- */	
		contentLoading: function() {
			$("body").imagesLoaded( function() {
                $(".loader-wrapper").fadeOut(500);
				setTimeout(function() {
				    //After 2s, the no-scroll class of the body will be removed
				    $('body').removeClass('no-scroll');
					$("body").addClass("loading-done");
				}, 1000); //Here you can change preloader time
			});
		},	
        
        /* ---------------------------------------------
            ## Scroll top
        --------------------------------------------- */
        scroll_top: function () {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $scrolltop
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },
        
		/* ---------------------------------------------
            ## Mobile Menu
        --------------------------------------------- */
        mobile_menu: function () {
            var mobilesearch = $('.site-header .navigation-area .header-navigation-right').clone().appendTo('.mobile-menu');
            // mobile Menu
            //-------------------------------
            $('.site-navigation .mainmenu-area nav').meanmenu({
                meanMenuClose: "<i class='fas fa-times'></i>",
                meanMenuCloseSize: '18px',
                meanScreenWidth: '1199',
                meanExpandableChildren: true,
                meanMenuContainer: '.mobile-menu-area .mobile-menu'
            });
        },	

        /*-------------------------------------------
            ## Sticky Header
        --------------------------------------------- */
        sticky_header: function() {
            // drop down menu width overflow problem fix
            var menuWidth = $(window).width();
            if (menuWidth > 1199) {
                $('ul').parent('li').hover(function () {
                    var menu = $(this).find("ul");
                    var menupos = $(menu).offset();
                    if (menupos.left + menu.width() > $(window).width()) {
                    var newpos = -$(menu).width() - 50;
                    menu.css({
                        left: newpos
                    });
                    }
                });
            }

            if ($('.site-header').length) {
                $(window).on('scroll', function() {
                    var w = $(window).width();
                    if (w > 1199) {
                        if ($(this).scrollTop() > 0) {
                            $('.site-header').addClass('sticky-active');
                        } else {
                            $('.site-header').removeClass('sticky-active');
                        }
                    }
                });
            } 
        },

        /* ---------------------------------------------
            ## One Page Menu
        --------------------------------------------- */
        onePage_menu: function () {
            if ($('#onePageMenu #nav').length) {
                $('#onePageMenu #nav').onePageNav({
                    currentClass: 'current',
                    changeHash: true,
                    scrollSpeed: 750,
                    scrollThreshold: 0.5
                });
            }
        },	

        /* ---------------------------------------------
            ## Search
        --------------------------------------------- */
        search: function () {
            $('.search-wrap .search-btn').on('click', function(){
                if($(this).siblings('.search-form').hasClass('active')){

                    $(this).siblings('.search-form').removeClass('active').slideUp();
                    $(this).removeClass('active');
                }
                else{
                    $(this).siblings('.search-form').removeClass('active').slideUp();
                    $(this).siblings('.search-form').removeClass('active');
                    $(this).addClass('active');
                    $(this).siblings('.search-form').addClass('active').slideDown();
                }
            });
        },
        
        /*-------------------------------------------
            ## Initialize Plugin
        --------------------------------------------- */
        initialize_plugin: function () {
            // Page Animation Script
            // $("[data-animate]").scrolla({
            //     mobile: true,
            //     once: true
            // });

            // Page switcher Script
            $(".switcher-btn").on('click', function (e) {
                $(".dark-light-switcher").toggleClass("s_active");
            });

            // Light Box for ( gallery, video )
            $('a[data-rel^=lightcase]').lightcase();

            //Faq
            $('.faq-wrapper .faq-title').on('click', function (e) {
                var f_info = $(this).parent('.faq-info');
                var element = $(this).parent('.faq-info').parent('.faq-item');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('.faq-content').removeClass('open');
                    element.find('.faq-content').slideUp(300);
                } else {
                    element.addClass('open');
                    f_info.children('.faq-content').slideDown(300);
                    element.siblings('.faq-item').find('.faq-content').slideUp(300);
                    element.siblings('.faq-item').removeClass('open');
                    element.siblings('.faq-item').find('.faq-title').removeClass('open');
                    element.siblings('.faq-item').find('.faq-content').slideUp(300);
                }
            });
        },
        
        /* ---------------------------------------------
            ## Promo Numbers
         --------------------------------------------- */
        promo_numbers: function() {
            $(".fanfact-promo-numbers").each(function () {
                $(this).isInViewport(function(status) {
                    if (status === "entered") {
                        for( var i=0; i < document.querySelectorAll(".odometer").length; i++ ){
                            var el = document.querySelectorAll('.odometer')[i];
                            el.innerHTML = el.getAttribute("data-odometer-final");
                        }
                    }
                });
            });
        },  

        /*-------------------------------------------
            ## Parallax Background
        --------------------------------------------- */
        bg_parallax: function () {
            var $bg_parallax = $(".bg-parallax");

            if ($bg_parallax.length) {
                $bg_parallax.each(function() {
                    $bg_parallax.parallax(20 + "%", -0.2);
                });
            }
        },
        
        /* ---------------------------------------------
		    ## Isotope Activation
		--------------------------------------------- */
		isotope_activation: function() {
			var IsoGriddoload = $('.portfolio-grid');
			IsoGriddoload.isotope({
			    itemSelector: '.item',
			    percentPosition: true,
			    layoutMode: 'packery',
			});

			var ProjMli = $('.portfolio-filter li a');
			var ProjGrid = $('.portfolio-grid');
			ProjMli.on('click', function(e) {
				e.preventDefault();
			    ProjMli.removeClass("active");
			    $(this).addClass("active");
			    var selector = $(this).attr('data-filter');
			    ProjGrid.isotope({
			        filter: selector,
			        animationOptions: {
			            duration: 750,
			            easing: 'linear',
			            queue: false,
			        }
			    });
			});
        },

        /* ---------------------------------------------
            ## Portfolio Carousel
        --------------------------------------------- */
        portfolio_carousel: function() {
            if ($('#portfolio-carousel').length) {
                var items = 4;
                $('#portfolio-carousel').owlCarousel({
                    center: false,
                    items: items,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 30,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: true,
                    responsive: {
                        280: {
                            items: 1
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: 3
                        },
                        1366: {
                            items: items
                        }
                    }
                });  
            }
            $('.portfolio-block .btn-links-area .btn-prev').on('click', function() {
                $('#portfolio-carousel').trigger('prev.owl.carousel');
            });
            $('.portfolio-block .btn-links-area .btn-next').on('click', function() {
                $('#portfolio-carousel').trigger('next.owl.carousel');
            });
        },
        /* ---------------------------------------------
            ## Services Carousel
        --------------------------------------------- */
        services_carousel: function() {
            if ($('.services-items-carousel').length) {
                var items = 3;
                $('.services-items-carousel').owlCarousel({
                    center: true,
                    items: items,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 30,
                    singleItem: false,
                    loop: true,
                    nav: true,
                    dots: false,
                    navText: ['<span class="flaticon-left-chevron"></span>','<span class="flaticon-right-chevron"></span>'],
                    responsive: {
                        280: {
                            items: 1
                        },
                        480: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 2
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
        },
        /* ---------------------------------------------
            ## Team Carousel
        --------------------------------------------- */
        team_carousel: function() {
            if ($('.team-carousel').length) {
                var items = 3;
                $('.team-carousel').owlCarousel({
                    center: false,
                    items: items,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 30,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: true,
                    responsive: {
                        280: {
                            items: 1
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
        },
        
        /* ---------------------------------------------
		    ## Testimonial Carousel
		 --------------------------------------------- */
		testimonial_carousel: function() {
            var testimonialkSlider = jQuery('#testimonail-carousel');
            if (testimonialkSlider.length) {
                var items = 1;
                testimonialkSlider.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 0,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: true
                });  
            }

            var activeImg = testimonialkSlider.find(".owl-item.active .thumbnails > img").attr('src');
            $('.client-thumbnails-area .client-thumbnail-inner > img').attr('src', activeImg);

            testimonialkSlider.on('changed.owl.carousel', function(property) {
                var current = property.item.index;
                var activeThumb = $(property.target).find(".owl-item").eq(current).find("img").attr('src');
                $('.client-thumbnails-area .client-thumbnail-inner').find('img').attr('src', activeThumb);
            });

            testimonialkSlider.on("translate.owl.carousel", function(){
                $(".testimonail-carousel-thumb .thumb-active").removeClass("active");
            });
        
            testimonialkSlider.on("translated.owl.carousel", function(){
                $(".testimonail-carousel-thumb .thumb-active").addClass("active");
            });
        },

        /* ---------------------------------------------
		    ## Pop Up Scripts
		 --------------------------------------------- */
		popupscript: function() {	
			function getScrollBarWidth () {
			    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
			        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
			    $outer.remove();
			    return 100 - widthWithScroll;
			}

			// Image Pop up
			var $popupImage = $(".popup-image");
			if ( $popupImage.length > 0 ) {
			    $popupImage.magnificPopup({
			        type:'image',
			        fixedContentPos: false,
			        gallery: { enabled:true },
			        removalDelay: 300,
			        mainClass: 'mfp-fade',
			        callbacks: {
			            // This prevenpt pushing the entire page to the right after opening Magnific popup image
			            open: function() {
			                $(".page-wrapper, .navbar-nav").css("margin-right", getScrollBarWidth());
			            },
			            close: function() {
			                $(".page-wrapper, .navbar-nav").css("margin-right", 0);
			            }
			        }
			    });
			}
		},

        /* ---------------------------------------------
            ## Brands Slider
         --------------------------------------------- */
         brands_slider: function() {
            var $brandSlider = $('.brands-slider')
            if($brandSlider.length) {
                $('.brands-slider').jConveyorTicker({
                    force_loop: true,
                    reverse_elm: true,
                    anim_duration: 300
                });
            }
        },
		/* ---------------------------------------------
		    ## Sidebar Script
		--------------------------------------------- */
		sidebarScript: function() {
            var w = $(window).width();
            var MarginTop = (w > 1199) ? 85 : 0;
			if ($('.sidebar-items').length) {
                $('.sidebar-items').theiaStickySidebar({
                    'containerSelector': '.blog-page-block',
                    'additionalMarginTop': MarginTop,
                    'minWidth': 992,
                });
            } 
			if ($('.sidebar-services').length) {
                $('.sidebar-services').theiaStickySidebar({
                    'containerSelector': '.service-details-block',
                    'additionalMarginTop': MarginTop,
                    'minWidth': 992,
                });
            } 
		},	
		/* ---------------------------------------------
		 function initializ
		 --------------------------------------------- */
		initializ: function() {
			digiciaApp.scroll_top();
			digiciaApp.mobile_menu();
			digiciaApp.sticky_header();
			digiciaApp.onePage_menu();
			digiciaApp.search();
			digiciaApp.initialize_plugin();
            digiciaApp.promo_numbers();
            digiciaApp.bg_parallax();
            digiciaApp.portfolio_carousel();
            digiciaApp.services_carousel();
            digiciaApp.team_carousel();
            digiciaApp.testimonial_carousel();
            digiciaApp.popupscript();
            digiciaApp.brands_slider();
            digiciaApp.sidebarScript();
		}
	};
	/* ---------------------------------------------
	 Document ready function
	 --------------------------------------------- */
	$(function() {
		digiciaApp.initializ();
	});

	$(window).on('load', function() {
		digiciaApp.contentLoading();
		digiciaApp.isotope_activation();
	});
})(jQuery);

