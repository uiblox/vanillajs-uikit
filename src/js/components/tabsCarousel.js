import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, EffectFade]);

const tabsCarousel = function () {

    const init = function () {
        this.carousel = Array.prototype.slice.call(document.querySelectorAll('.carousel__tabs'));
        if (!this.carousel.length) {
            return;
        }
        this.enableCarousel()
    }

    const enableCarousel = function () {
        this.carouselTabs = new SwiperCore('.carousel__tabs', {
            spaceBetween: 0,
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            breakpoints: {
                320: {
                    allowTouchMove: true,
                    slidesPerView: 1
                },
                768: {
                    allowTouchMove: false,
                    slidesPerView: 1
                }
            },
            pagination: {
                el: '.tabs-pagination',
                clickable: true,
                type: 'bullets',
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
            swiper.navigation.nextEl.classList.add('swiper-button-hidden')
            swiper.navigation.nextEl.classList.remove('swiper-button-next')
        } else {
            swiper.navigation.update();
            swiper.navigation.nextEl.classList.remove('swiper-button-hidden')
            swiper.navigation.nextEl.classList.add('swiper-button-next')
        }
    }
    return {
        init: init,
        enableCarousel: enableCarousel
    }
}

export default tabsCarousel();