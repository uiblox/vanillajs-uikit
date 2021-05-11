import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

const tileCarousel = function () {

    const init = function () {
        this.carousel = Array.prototype.slice.call(document.querySelectorAll('.carousel__tiles'));
        if (!this.carousel.length) {
            return;
        }
        this.enableCarousel()
    }

    const enableCarousel = function () {
        this.mySwiper = new SwiperCore('.carousel__tiles', {
            spaceBetween: 0,
            loop: true,
            breakpoints: {
                320: {
                    allowTouchMove: true,
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 4,
                    allowTouchMove: false
                }
            },
            pagination: {
                el: '.tiles-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            on: {
                breakpoint: function (swiper) {
                    if (swiper.navigation.nextEl !== undefined) {
                        setNavigation(swiper)
                    }
                }
            }
        })
    }

    const setNavigation = function (swiper) {
        const mdBreakPoint = window.matchMedia('(min-width: 768px)').matches;
        if (mdBreakPoint === true) {
            swiper.navigation.update();
            swiper.pagination.el.classList.add('swiper-pagination-hidden')
            swiper.navigation.nextEl.classList.add('swiper-button-hidden')
            swiper.navigation.nextEl.classList.remove('swiper-button-next')
        } else {
            swiper.navigation.update();
            swiper.pagination.el.classList.remove('swiper-pagination-hidden')
            swiper.navigation.nextEl.classList.remove('swiper-button-hidden')
            swiper.navigation.nextEl.classList.add('swiper-button-next')
        }
    }

    return {
        init: init,
        enableCarousel: enableCarousel
    }
}

export default tileCarousel();