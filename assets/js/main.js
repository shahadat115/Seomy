(function ($) {
  "use strict";

  // back to top
  // var windowOn = $(window);

  // function back_to_top() {
  //   var btn = $('#back_to_top');
  //   var btn_wrapper = $('.back-to-top-wrapper');

  //   windowOn.scroll(function () {
  //     if (windowOn.scrollTop() > 300) {
  //       btn_wrapper.addClass('back-to-top-btn-show');
  //     } else {
  //       btn_wrapper.removeClass('back-to-top-btn-show');
  //     }
  //   });

  //   btn.on('click', function (e) {
  //     e.preventDefault();
  //     $('html, body').animate({ scrollTop: 0 }, '300');
  //   });
  // }
  // back_to_top();


  //------------- offcanvas category menu start ------------------

  // var tpCategoryMenuWrap = $('.tp-category-menu').clone();
  // var tpCategorySideMenu = $('.tp-offcanvas-category-menu > nav');
  // tpCategorySideMenu.append(tpCategoryMenuWrap);
  // if ($(tpCategorySideMenu).find('.tp-submenu, .mega-menu').length != 0) {
  //   $(tpCategorySideMenu).find('.tp-submenu, .mega-menu').parent().append('<button class="tp-menu-close"><i class="fal fa-chevron-right fa-fw"></i></button>');
  // }
  

  // var tpCategorySideMenuList = $('.tp-offcanvas-category-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-category-menu nav > ul li.has-dropdown > a');
  // $(tpCategorySideMenuList).on('click', function (e) {
  //   console.log(e);
  //   e.preventDefault();
  //   if (!($(this).parent().hasClass('active'))) {
  //     $(this).parent().addClass('active');
  //     $(this).siblings('.tp-submenu, .mega-menu').slideDown();
  //   } else {
  //     $(this).siblings('.tp-submenu, .mega-menu').slideUp();
  //     $(this).parent().removeClass('active');
  //   }
  // });

  //------------- offcanvas category menu end ------------------



  //------------- mobile menu start ------------------

  // var tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
  // var tpSideMenu = $('.tp-offcanvas-menu > nav');
  // tpSideMenu.append(tpMenuWrap);
  // if ($(tpSideMenu).find('.tp-submenu, .tp-mega-menu').length != 0) {
  //   $(tpSideMenu).find('.tp-submenu, .tp-mega-menu').parent().append('<button class="tp-menu-close"><i class="fal fa-chevron-right fa-fw"></i></button>');
  // }

  // var sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
  // $(sideMenuList).on('click', function (e) {
  //   console.log(e);
  //   e.preventDefault();
  //   if (!($(this).parent().hasClass('active'))) {
  //     $(this).parent().addClass('active');
  //     $(this).siblings('.tp-submenu, .tp-mega-menu').slideDown();
  //   } else {
  //     $(this).siblings('.tp-submenu, .tp-mega-menu').slideUp();
  //     $(this).parent().removeClass('active');
  //   }
  // });
  //------------- mobile menu end ------------------
    

  //------------- offcanvas bar toggle start ------------------

  // $(".tp-offcanvas-toggle").on('click', function(){
  //   $(".tp-offcanvas").addClass("tp-offcanvas-open");
  //   $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
  // });

  // $(".tp-offcanvas-close-toggle, .tp-offcanvas-overlay").on('click', function(){
  //   $(".tp-offcanvas").removeClass("tp-offcanvas-open");
  //   $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
  // });
  
  
  // ------------- offcanvas bar toggle end ------------------
    
  

  //------------- preloader start ------------------
  
  //     windowOn.on("load",function() {
  //       $("#preloader").fadeOut(500);
  //     })
  
  //     //tob to bottom
  //     var btn = $('#ToptoBottom');
  
  //     windowOn.on("scroll",function() {
  //       if (windowOn.scrollTop() > 300) {
  //         btn.addClass('show');
  //       } else {
  //         btn.removeClass('show');
  //       }
  //     });
      
  //     btn.on('click', function(e) {
  //       e.preventDefault();
  //       $('html, body').animate({scrollTop:0}, '300');
  //     });

  //------------- preloader end ------------------
  
      

  //------------- sticky js start ------------------

  // windowOn.on('scroll', function () {
  //   var scroll = windowOn.scrollTop();
  //   if (scroll < 100) {
  //     $("#tp-header-sticky").removeClass("header-sticky");
  //   } else {
  //     $("#tp-header-sticky").addClass("header-sticky");
  //   }
    // });

//------------- sticky js end ------------------
  
  

  //------------- data - background-img section start ------------

  $("[data-background]").each(function(){
    $(this).css("background-image","url(" + $(this).attr("data-background") +")")
  });
  //------------- data - background-img section end --------------


  //------------- data-bg-color section start --------------------
  
  $("[data-bg-color]").each(function(){
    $(this).css("background-color",$(this).attr("data-bg-color"))
  });

  $("[data-color]").each(function(){
    $(this).css("color",$(this).attr("data-color"))
  });
  
  //------------- data-bg-color section end ---------------------

  //------------- analysis switch section start -----------------
  $(".tp-analysis-switch").on("click",function(){
    $(this).toggleClass("is-active");

    $("#monthly-analysis").toggleClass("hide");
    $("#hourly-analysis").toggleClass("show");

  })
  //------------- analysis switch section end -------------------


  //------------- pricing switch section start ------------------
  $(".tp-pricing-switch").on("click",function(){
    $(this).toggleClass("is-active");

    $("#tp-pricing-pay-monthly").toggleClass("not_active");
    $("#tp-pricing-pay-yearly").toggleClass("is_active");

    $("#tp-pricing-monthly").toggleClass("hide");
    $("#tp-pricing-yearly").toggleClass("show");

  })
  //------------- pricing switch section end --------------------

  //------------- pricing-3 switch section start ----------------
  $(".tp-pricing-switch-3").on("click",function(){
    $(this).toggleClass("is-active");

    $("#tp-pricing-pay-monthly-3").toggleClass("not_active");
    $("#tp-pricing-pay-yearly-3").toggleClass("is_active");

    $("#tp-pricing-monthly-3").toggleClass("hide");
    $("#tp-pricing-yearly-3").toggleClass("show");

  })
  //------------- pricing-3 switch section end ------------------


  //-------------H2 Project Gallery section start ---------------
  $('.col-custom').on("click", function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  //------------- H2 Project Gallery section end ----------------


  //------------- h1 case slider section start ------------------
  var swiper = new Swiper(".tp-case-slider-active", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".tp-case-arrow-btn-next",
      prevEl: ".tp-case-arrow-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
  //------------- h1 case slider section end --------------------


  //------------- h1 testimonial slider section start -----------
  var swiper = new Swiper(".tp-testimonial-slider-active", {
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tp-testimonial-arrow-btn-next",
      prevEl: ".tp-testimonial-arrow-btn-prev",
    },
  });
  //------------- h1 testimonial slider section end --------------

  
  //------------- h2 testimonial slider section start ------------
  $('.tp-testimonial-slider-active-2').slick({
    slidesToShow: 1,
    dots: true,
    infinite: true,
    vertical: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><span><i class="fal fa-chevron-up fa-fw"></i></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span><i class="fal fa-chevron-down fa-fw"></i></span></button>'
  });
  //------------- h2 testimonial slider section end --------------


  //------------- h2 brand slider section start ------------------
  var swiper = new Swiper(".tp-brand-active", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    freemode: true,
    centeredSlides: true,
    allowTouchMove: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 6,
      }
    }
  });
  //------------- h2 brand slider section end --------------------


  //------------- h2 feature slider section start ------------------

  $('.tp-feature-slider-active').slick({
    // infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
  });
  //------------- h2 feature slider section end --------------------


  //------------- h3 portfolio slider section start --------------
  var swiper = new Swiper(".tp-portfolio-slider-active", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".tp-portfolio-arrow-btn-next",
      prevEl: ".tp-portfolio-arrow-btn-prev",
    },
  });
  //------------- h3 portfolio slider section end ----------------


    //------------- h3 testimonial slider section start -----------
    var swiper = new Swiper(".tp-testimonial-slider-3-active", {
      slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".tp-testimonial-arrow-3-btn-next",
        prevEl: ".tp-testimonial-arrow-3-btn-prev",
      },
    });
    //------------- h3 testimonial slider section end -------------
  



















  



})(jQuery);

  
  
  