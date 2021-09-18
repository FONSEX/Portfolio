
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

    function switchLang(lang)
{
    $("[data-" + lang + "]").text(function(i, e) {
        return $(this).data(lang);
    });
}



var user = window.navigator.userLanguage || window.navigator.language;
var userLang = user.substring(0,2);

if (userLang === 'en') {
    switchLang("en");
}else if (userLang === 'sp') {
    switchLang("sp");
} else {
    switchLang("en");
}
               
               



$(".switchlang").click(function() {
    // change the button caption here, eg a flag
    // UX opinion of whether it should be what it is 
    // or what it will become
    // ie "de" click to make it "de"
    // or "de" it's currently "de", click to change it
    $(this).text($(this).data("lang"));
    
    // switch to other language based on language on the button
    var lang = $(this).data("lang") == "sp" ? "en" : "sp";
    $(this).data("lang", lang);
    switchLang(lang)
});

    

})(jQuery); // End of use strict


