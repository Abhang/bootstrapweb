/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  'use strict';

  /* ========================================================================= */
  /*	Page Preloader
  /* ========================================================================= */
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });


  // navbarDropdown
  if ($(window).width() < 992) {
    $('#navigation .dropdown-toggle').on('click', function () {
      $(this).siblings('.dropdown-menu').animate({
        height: 'toggle'
      }, 300);
    });
  }

  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    dots: false,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.hero-slider').slickAnimation();

  /* ========================================================================= */
  /*	Portfolio Filtering Hook
  /* =========================================================================  */
  // filter
  setTimeout(function () {
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
      filterizd = $('.filtr-container').filterizr({});
    }
  }, 500);

  /* ========================================================================= */
  /*	Testimonial Carousel
  /* =========================================================================  */
  //Init the slider
  $('.testimonial-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500
  });


  /* ========================================================================= */
  /*	Clients Slider Carousel
  /* =========================================================================  */
  //Init the slider
  $('.clients-logo-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    }
    ]
  });

  /* ========================================================================= */
  /*	Company Slider Carousel
  /* =========================================================================  */
  $('.company-gallery').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    }
    ]
  });

  /* ========================================================================= */
  /*	On scroll fade/bounce effect
  /* ========================================================================= */
  var scroll = new SmoothScroll('a[href*="#"]');

  // -----------------------------
  //  Count Up
  // -----------------------------
  function counter() {
    var oTop;
    if ($('.counter').length !== 0) {
      oTop = $('.counter').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  // -----------------------------
  //  On Scroll
  // -----------------------------
  $(window).scroll(function () {
    counter();

    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $('.navigation').addClass('sticky-header');
    } else {
      $('.navigation').removeClass('sticky-header');
    }
  });
  /*
    function abhang() {
      var contentDiv = document.getElementById('cpg') ;
      var cpg = "" ;
      
      switch(cpg){
        case ''
      }
    }
  

  document.addEventListener('DOMContentLoaded', function () {
    // Get all industry links
    var industryLinks = document.querySelectorAll('.nav-tabs a');

    // Add click event listener to each industry link
    industryLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Get the industry id from the link's href attribute
        var industryId = link.getAttribute('href').substring(1);

        // Call the changeContent function with the industry id
        changeContent(industryId);
      });
    });

    // Initial content for the first industry (optional)
    changeContent(industryLinks[0].getAttribute('href').substring(1));
  });
*/
  document.addEventListener('DOMContentLoaded', function () {
    function changeContent(industry) {
      var content = '';

      // Define content based on the selected industry
      switch (industry) {
        case 'cpg':
          content = "<p>Content for Consumer Packaged Goods...</p>";
          break;
        case 'automobile':
          content = '<p>Content for Automobile...</p>';
          break;
        case 'logistics':
          content = '<p>Content for Logistics...</p>';
          break;
        // Add cases for other industries if needed

        default:
          content = '<p>We hold expertise for multiple industires</p>';
      }

      // Update the content in the "cpg" element
      document.getElementById('cpg').innerHTML = content;
    }
    // Add click event listeners after the DOM is fully loaded
    var industryLinks = document.querySelectorAll('.nav-tabs a');

    industryLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var industryId = link.getAttribute('href').substring(1);
        changeContent(industryId);
      });
    });

    // Initial content for the first industry (optional)
    changeContent(industryLinks[0].getAttribute('href').substring(1));
  });


  $(function(){
    $("#snippet-counter").load("snippet-counter.html");
  });

  $(function(){
    $("#snippet-navbar").load("snippet-navbar.html");
  });

  $(function(){
    $("#snippet-footer").load("snippet-footer.html");
  });

  $(function(){
    $("#snippet-blogsection").load("snippet-blogsection.html");
  });

  $(function(){
    $("#snippet-testimonial").load("snippet-testimonial.html");
  });

})(jQuery);
