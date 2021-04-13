import Swiper from 'swiper/bundle';

const carousel = {
    init() {
        this.carousel = Array.prototype.slice.call(document.querySelectorAll('.swiper-container'));
        if (!this.carousel.length) {
            return;
        }
        this.enableCarousel()
    },
    enableCarousel() {
        this.mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    }
}

export default carousel;