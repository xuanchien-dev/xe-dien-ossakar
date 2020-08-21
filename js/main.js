(function ($) {
    "use strict";
    // TOP Menu Sticky
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $("#sticky-header").removeClass("sticky");
            $("#back-top").fadeIn(500);
        } else {
            $("#sticky-header").addClass("sticky");
            $("#back-top").fadeIn(500);
        }
    });

    $(document).ready(function () {
        // mobile_menu
        var menu = $("ul#navigation");
        if (menu.length) {
            menu.slicknav({
                prependTo: ".mobile_menu",
                closedSymbol: "+",
                openedSymbol: "-",
            });
        }
        // blog-menu
        // $('ul#blog-menu').slicknav({
        //   prependTo: ".blog_menu"
        // });

        // review-active
        $(".slider_sctive").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplaySpeed: 300,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                767: {
                    items: 1,
                    dots: true,
                },
                992: {
                    items: 1,
                    dots: true,
                },
            },
        });

        // for filter
        // slide-a8
        $(".slider_a8").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            navText: ['<img src="./images/prev-a8.png" alt="" />', '<img src="./images/next-a8.png" alt="" />'],
            nav: true,
            dots: true,
            smartSpeed: 500,
            autoplaySpeed: 300,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                767: {
                    items: 1,
                    dots: true,
                },
                992: {
                    items: 1,
                    dots: true,
                },
            },
        });

        // slide-a8  // for filter
        




        /*slide-mau xe*/
        $(".mau-xe-slide").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            navText: ['<img src="./images/prev-a8.png" alt="" />', '<img src="./images/next-a8.png" alt="" />'],
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplaySpeed: 300,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                767: {
                    items: 1,
                    dots: true,
                },
                992: {
                    items: 1,
                    dots: true,
                },
            },
        });

        // slide-mau xe end

         /*slide-a10*/
        $(".slide-a10").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            navText: ['<img src="./images/prev-a8.png" alt="" />', '<img src="./images/next-a8.png" alt="" />'],
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplaySpeed: 300,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                767: {
                    items: 1,
                    dots: true,
                },
                992: {
                    items: 1,
                    dots: true,
                },
            },
        });

        // slide-a10 end


         /*slide-gogo*/
        $(".slide-gogo").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            navText: ['<img src="./images/prev-a8.png" alt="" />', '<img src="./images/next-a8.png" alt="" />'],
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplaySpeed: 300,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                767: {
                    items: 1,
                    dots: true,
                },
                992: {
                    items: 1,
                    dots: true,
                },
            },
        });

        // slide-gogo end

         /*slide-nipa*/
        $(".slider_nipa").owlCarousel({
            loop: true,
            margin: 0,
            items: 2,
            autoplay: true,
            navText: ['<img src="./images/prev-nipa.png" alt="" />', '<img src="./images/next-nipa.png" alt="" />'],
            nav: true,
            dots: true,
            smartSpeed: 500,
            autoplaySpeed: 300,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                767: {
                    items: 2,
                    dots: true,
                },
                992: {
                    items: 2,
                    dots: true,
                },
            },
        });

        // slide-nipa end


         /*slide-cl-nipa*/
        $(".slider_cl_nipa").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            navText: ['<img src="./images/prev-nipa.png" alt="" />', '<img src="./images/next-nipa.png" alt="" />'],
            nav: true,
            dots: true,
            smartSpeed: 500,
            autoplaySpeed: 300,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                767: {
                    items: 1,
                    dots: true,
                },
                992: {
                    items: 1,
                    dots: true,
                },
            },
        });

        // slide-cl-nipa end



        // filter items on button click
        $(".portfolio-menu").on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
        });

        //for menu active class
        $(".portfolio-menu button").on("click", function (event) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            event.preventDefault();
        });

        // wow js
        new WOW().init();

      

        /* magnificPopup img view */
        $(".popup-image").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        /* magnificPopup img view */
        $(".img-pop-up").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });
        /* magnificPopup video view */
        $(".popup-video").magnificPopup({
            type: "iframe",
        });

        // scrollIt for smoth scroll
        $.scrollIt({
            upKey: 38, // key code to navigate to the next section
            downKey: 40, // key code to navigate to the previous section
            easing: "linear", // the easing function for animation
            scrollTime: 600, // how long (in ms) the animation takes
            activeClass: "active", // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: 0, // offste (in px) for fixed top navigation
        });

        // scrollup bottom to top
        $.scrollUp({
            scrollName: "scrollUp", // Element ID
            topDistance: "4500", // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: "fade", // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        // blog-page

        

        //project-active
        $(".project-active").owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            // autoplay:true,
            navText: ['<i class="Flaticon flaticon-left-arrow"></i>', '<i class="Flaticon flaticon-right-arrow"></i>'],
            nav: true,
            dots: false,
            // autoplayHoverPause: true,
            // autoplaySpeed: 800,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                767: {
                    items: 1,
                    nav: false,
                },
                992: {
                    items: 2,
                    nav: false,
                },
                1200: {
                    items: 1,
                },
                1501: {
                    items: 2,
                },
            },
        });

        //project-active

        //about-pro-active
        $(".about-pro-active").owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            // autoplay:true,
            navText: ['<i class="Flaticon flaticon-left-arrow"></i>', '<i class="Flaticon flaticon-right-arrow"></i>'],
            nav: true,
            dots: false,
            // autoplayHoverPause: true,
            // autoplaySpeed: 800,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                767: {
                    items: 1,
                    nav: false,
                },
                992: {
                    items: 1,
                    nav: false,
                },
                1200: {
                    items: 1,
                },
            },
        });
    });


   /* fancybox-js*/

  $('[data-fancybox="images"]').fancybox({
  buttons : [ 
    'slideShow',
    'share',
    'zoom',
    'fullScreen',
    'close'
  ],
  thumbs : {
    autoStart : true
  }
});

 /*js-slide đôi a9*/
            var sync1 = $("#carousel-1");
            var sync2 = $("#carousel-2");
            var slidesPerPage = 1; //globaly define number of elements per page
            var syncedSecondary = true;

            sync1.owlCarousel({
                items: 4,
                slideSpeed: 2000,
                nav: false,
                autoHeight: true,
                autoplayTimeout: 2000,
                dots: false,
                loop: true,
                responsiveRefreshRate: 200,
                responsive: {
                    600: {
                        items: 4,
                        autoplay: true,
                        loop: true,
                    },
                    1000: {
                        items: 4,
                        loop: true,
                         autoplay: true,
                    }
                },
                onChanged: syncPosition,
            });

            sync2.owlCarousel({
                responsive: {
                     0: {
                        items: 1,
                        margin: 5,
                        loop: true,
                    },
                    600: {
                        items: 1,
                        margin: 5,
                        loop: true,
                    },
                    1000: {
                        items: 1,
                        margin: 20,
                        loop: true,
                    }
                },
                dots: false,
                nav: false,
                margin: 30,
                smartSpeed: 1000,
                slideSpeed: 1000,
                slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100,
                onInitialized: function () {
                    sync2.find(".owl-item").eq(0).addClass("synced");
                },
                onChanged: syncPosition2
            });

            function syncPosition(el) {
                var count = el.item.count - 1;
                var current = Math.round(el.item.index - (el.item.count / 2) - .5);

                if (current < 0) {
                    current = count;
                }
                if (current > count) {
                    current = 0;
                }
                //end block

                sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced");
                sync2.trigger('to.owl.carousel', [current, 100, true]);
            }

            function syncPosition2(el) {
                if (syncedSecondary) {
                    var number = el.item.index;
                    sync1.trigger('to.owl.carousel', [number, 100, true]);
                }
            }

            sync1.on("click", ".owl-item", function (e) {
                e.preventDefault();
                var number = $(this).index();
                sync2.trigger('to.owl.carousel', [number, 100, true]);
            });
            

   
})(jQuery);


