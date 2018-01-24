var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      centeredSlides: true,
      spaceBetween: 10,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

var activeTab = $('.tab-accord__button')
var tabAccord = $('.tab-accord__item')
$('.tab-accord__button').click(function(){
  tabAccord.removeClass('tab-accord__item--active');
  $('.tab-accord__button').removeClass('tab-accord__button--active');
  $(this).addClass('tab-accord__button--active');
  var currentTab = $(this).data('number');
  tabAccord[currentTab].classList.toggle('tab-accord__item--active');
  
});

