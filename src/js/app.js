import accordions from "./components/accordions";
import countDownTimer from "./components/countDownTimer";
import tabsPanel from "./components/tabsPanel";
import carousel from "./components/carousel";
import tileCarousel from "./components/tileCarousel";
import tooltips from "./components/tooltips";
import dropDown from "./components/dropdown";
import Modal from "./components/modal";
import autoPlay from "./components/autoPlay";

window.addEventListener('DOMContentLoaded', () => {
    accordions.init();
    countDownTimer.init();
    tabsPanel.init();
    tooltips.init();
    dropDown.init();
    carousel.init();
    tileCarousel.init();
    Modal.init();
    autoPlay.init()
});
