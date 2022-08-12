
(function ($) {
    "use strict"; 

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

    
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
   
    navbarCollapse();
    
    $(window).scroll(navbarCollapse);

    $('#certificates').magnificPopup({
        delegate: 'span',
        type: 'image',
        tLoading: 'Cargando imagen ...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
           
        },
        image: {
            tError: '<a href="%url%">La imagen no pudo ser cargada :s'
        }
    });

    $(`#projects`).magnificPopup({
        delegate: 'span',
        type: 'image',
        tLoading: 'Cargando imagen ...',
        mainClass: 'mfp-img-mobile',
        
        
        image: {
            type:'image',
            tError: '<a href="%url%">La imagen no pudo ser cargada :s'
        }
    });

    function switchLang(lang)
{
    $("[data-" + lang + "]").text(function(i, e) {
        return $(this).data(lang);
    });
}

    switchLang("sp");

$(".switchlang").click(function() {
    
    $(this).text($(this).data("lang"));
    
    var lang = $(this).data("lang") == "en" ? "sp" : "en" ;

   
     
    $(this).data("lang", lang);
    switchLang(lang)
});

})(jQuery); 


