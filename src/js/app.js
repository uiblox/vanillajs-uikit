import accordions from "./components/accordions";
import countDownTimer from "./components/countDownTimer";
import tabsPanel from "./components/tabsPanel";
import carousel from "./components/carousel";
import tileCarousel from "./components/tileCarousel";
import tooltips from "./components/tooltips";
import dropDown from "./components/dropdown";
import Modal from "./components/modal";
import autoPlay from "./components/autoPlay";
import tabsCarousel from "./components/tabsCarousel";

window.addEventListener('DOMContentLoaded', () => {
    autoPlay.init()
    accordions.init();
    countDownTimer.init();
    dropDown.init();
    Modal.init();
    tabsPanel.init();
    tooltips.init();
    carousel.init();
    tileCarousel.init();
    tabsCarousel.init();
});
