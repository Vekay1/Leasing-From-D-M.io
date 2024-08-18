const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
})

const tabItem = document.querySelector('.tabs__btn-item')
const tabContent = document.querySelector('.tabs__content-item')

tabItem.forEach(function (element){
    element.addEventListener('click', open);
})