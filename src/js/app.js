import accordions from "./components/accordions";
import countDownTimer from "./components/countDownTimer";
import tabsPanel from "./components/tabsPanel";
import carousel from "./components/carousel";
import tooltips from "./components/tooltips";
import dropDown from "./components/dropdown";

window.addEventListener('DOMContentLoaded', () => {
    accordions.init();
    countDownTimer.init();
    tabsPanel.init();
    carousel.init();
    tooltips.init();
    dropDown.init();
});
