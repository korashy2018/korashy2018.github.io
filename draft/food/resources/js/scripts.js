$(document).ready(function () {
    //sticky navigation
    $(".js-features").waypoint(function(direction) {
        if (direction === "down") {
            $("nav").addClass("sticky")
        } else {
            $("nav").removeClass("sticky")
        }

    },{
        offset:"60px;"
    });
    //scroll buttons
    $('.js-scroll-to-plan').click(function () {
      $("html, body").animate({scrollTop:$('.pricing').offset().top},2000);
    });
    //Smooth scrolling
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
        // animation on scroll
        $('.js-wp-1').waypoint(function (direction) {
           $(".js-wp-1").addClass("animated fadeIn")
        },{
            offset: "50%"
        });
      $('.app-shot img').waypoint(function (direction) {
        $(".app-shot img").addClass("animated fadeInUp")
      },{
        offset: "50%"
       });

      $('.js-wp-2').waypoint(function (direction) {
        $(".js-wp-2").addClass("animated fadeIn")
      },{
        offset: "50%"
       });

       $('.js-wp-3').waypoint(function (direction) {
        $(".js-wp-3").addClass("animated pulse")
      },{
        offset: "50%"
       });

//       the burger icon
    $('.js-nav-icon').click(function () {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon');
        if(icon.hasClass("ion-navicon-round")){
            icon.addClass("one-close-round");
            icon.removeClass("ion-navicon-round");
        }else{
            icon.removeClass("one-close-round");
            icon.addClass("ion-navicon-round");
        }
    });
});