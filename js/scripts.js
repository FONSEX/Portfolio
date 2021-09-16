
(function ($) {
    "use strict"; 

    // Smooth scrolling 
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 1,
                    duration: 1200,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Magnific popup calls
    $('#certificates').magnificPopup({
        delegate: 'span',
        type: 'image',
        tLoading: 'Cargando imagen #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $(`#projects`).magnificPopup({
        delegate: 'span',
        type: 'image',
        tLoading: 'Cargando imagen #%curr%...',
        mainClass: 'mfp-img-mobile',
        
        
        image: {
            type:'image',
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });



   /* $('#more_certificates').magnificPopup({
        items: [
          {
            src: 'path-to-image-1.jpg',
            type: 'image'
          },
          {
            src: 'path-to-image-1.jpg',
            type: 'image'
          },
          {
            src: 'path-to-image-1.jpg',
            type: 'image'
          },
          {
            src: 'path-to-image-1.jpg',
            type: 'image'
          },
          {
            src: 'path-to-image-1.jpg',
            type: 'image'
          }
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is default type
    }); */ 

    

})(jQuery); // End of use strict
