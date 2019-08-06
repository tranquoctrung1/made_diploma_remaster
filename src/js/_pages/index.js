'use strict'
// scroll function for window screen
$(window).scroll(() =>
{
	console.log($(this).scrollTop())
	$(this).scrollTop() > 100 ? $('#scroll-top').css({"opacity": 1}) : $('#scroll-top').css({"opacity": 0})
})

// smooth croll function
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


$('.homeSlider .owl-carousel').owlCarousel({
  loop:true,
  rtl:true,
  nav:true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 4000,
  autoplayHoverPause: true,
  items: 1,
    responsive:{
        0:{
            nav: false
        },
        600:{
            nav: true,
        },
    }
})

$('.home-clients .owl-carousel').owlCarousel({
  loop:true,
  rtl:true,
  margin: 10,
  nav:false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
    responsive:{
        0:{
          items: 2,
        },
        600:{
          items: 4,
        },
        1000: {
          items: 6,
        }
    }
})