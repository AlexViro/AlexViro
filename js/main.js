const catItem = document.querySelectorAll(".catalog__block");
const catContent = document.querySelectorAll('.catalog-cards__item');


catItem.forEach(function(element) {
 element.addEventListener('click', open)
})

function open(evt) {
  const catTarget = evt.currentTarget;
  const button = catTarget.dataset.button;

  catItem.forEach(function(item){
    item.classList.remove("catalog__block-active");
  });
  
  
  catTarget.classList.add("catalog__block-active");

  catContent.forEach(function(item){
    item.classList.remove("catalog-cards__item-active");
  });

  document.querySelector(`#${button}`).classList.add('catalog-cards__item-active');
}

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});