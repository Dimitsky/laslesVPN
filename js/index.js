let myMap = ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      controls: [],
      zoom: 2
    });

    
    var NY = new ymaps.Placemark([40.730610, -73.935242], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.svg',
      iconImageSize: [27, 27],
      iconImageOffset: [-13, -13]
    });
    
    myMap.geoObjects.add(NY);

    var MSK = new ymaps.Placemark([55.751244, 37.618423], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.svg',
      iconImageSize: [27, 27],
      iconImageOffset: [-13, -13]
    });
    
    myMap.geoObjects.add(MSK);

    var BERLIN = new ymaps.Placemark([52.531677, 13.381777], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.svg',
      iconImageSize: [27, 27],
      iconImageOffset: [-13, -13]
    });
    
    myMap.geoObjects.add(BERLIN);
    
    var STOCKHOLM = new ymaps.Placemark([59.334591, 18.063240], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.svg',
      iconImageSize: [27, 27],
      iconImageOffset: [-13, -13]
    });
    
    myMap.geoObjects.add(STOCKHOLM);

    var OTTAWA = new ymaps.Placemark([45.424721, -75.695000], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.svg',
      iconImageSize: [27, 27],
      iconImageOffset: [-13, -13]
    });
    
    myMap.geoObjects.add(OTTAWA);
  }


  const swiper = new Swiper('.swiper-reviews', {
    speed: 400,
    slidesPerView: 1,
    slideClass: 'swiper-reviews__slide',
    slideActiveClass: 'swiper-reviews__slide--active',
    slidePrevClass: 'swiper-reviews__slide--prev',
    slideNextClass: 'swiper-reviews__slide--next',
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },
    pagination: {
      el: '.swiper-reviews__pagination',
      type: 'bullets',
      bulletClass: 'swiper-reviews__bullet',
      bulletActiveClass: 'swiper-reviews__bullet--active',
    },
    navigation: {
      prevEl: '.swiper-reviews__btn--prev',
      nextEl: '.swiper-reviews__btn--next',
      disabledClass: 'swiper-reviews__btn--disabled',
    },
  });