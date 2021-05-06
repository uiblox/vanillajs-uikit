import SwiperCore, { Navigation, Pagination } from 'swiper/core'
SwiperCore.use([Navigation, Pagination]);

const carousel = function () {

    const init = function () {
        this.carousel = Array.prototype.slice.call(document.querySelectorAll('.swiper-container'));
        if (!this.carousel.length) {
            return;
        }
        this.enableCarousel()
    }

    const enableCarousel = function () {
        this.mySwiper = new SwiperCore('.swiper-container', {
            spaceBetween: 0,
            loop: true,
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 1
                }
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                breakpoint: function (swiper) {
                    if (swiper.navigation.prevEl !== undefined || swiper.navigation.nextEl !== undefined) {
                        setNavigation(swiper)
                    }
                }
            }
        })
    }

    const setNavigation = function (swiper) {
        const mdBreakPoint = window.matchMedia('(min-width: 768px)').matches;
        if (mdBreakPoint === true) {
            swiper.navigation.prevEl.classList.remove('swiper-button-hidden')
            swiper.navigation.nextEl.classList.remove('swiper-button-hidden')
            swiper.navigation.prevEl.classList.add('swiper-button-prev')
            swiper.navigation.nextEl.classList.add('swiper-button-next')
            swiper.navigation.update();
        } else {
            swiper.navigation.prevEl.classList.remove('swiper-button-prev')
            swiper.navigation.nextEl.classList.remove('swiper-button-next')
            swiper.navigation.prevEl.classList.add('swiper-button-hidden')
            swiper.navigation.nextEl.classList.add('swiper-button-hidden')
            swiper.navigation.update();
        }
    }

    return {
        init: init,
        enableCarousel: enableCarousel,
        setNavigation: setNavigation
    }
}

export default carousel();