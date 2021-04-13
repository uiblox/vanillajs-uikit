import accordions from "./components/accordions";
import countDownTimer from "./components/countDownTimer";
import tabsPanel from "./components/tabsPanel";
import carousel from "./components/carousel";

window.addEventListener('DOMContentLoaded', () => {
    accordions.init();
    countDownTimer.init();
    tabsPanel.init();
    carousel.init();
});
