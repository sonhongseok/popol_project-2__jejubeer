console.clear();

// pc Fade-in, Fade-out 기능
function SliderBox1__init() {
  let SliderBox1__idx = 0;

  setInterval(function () {
    $('.slider-box-1').attr('data-index', ++SliderBox1__idx % 2);
  }, 4000);
}

SliderBox1__init();

// 스와이퍼기능
const swiper = new Swiper('.swiper-banner-box__con .swiper', {
  loop: true,
  speed: 700,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});