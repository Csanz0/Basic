const d = document;
const img = [
  "./img/cocacola.jpg",
  "./img/market_Car.jpg",
  "./img/supermarket.jpg",
];
const colors = ["#d1d", "#d1d", "#d1d"];
export function slider(sliderContent, subtitle) {
  let $slider = d.querySelector(sliderContent);
  let $subtitle = d.querySelector(subtitle);
  let i = 0;
  $slider.style = `background:url(${img[i]}) no-repeat`;
  setInterval(() => {
    if (i < img.length - 1) {
      i++;
      $slider.style = `background:url(${img[i]}) no-repeat`;
      $subtitle.style = `color:${colors[i]}`;
    } else {
      i = 0;
      $slider.style = `background:url(${img[i]}) no-repeat`;
      $subtitle.style = `color:${colors[i]}`;
    }
  }, 1500);
}
