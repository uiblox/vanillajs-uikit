const tooltips = {
    init() {
        this.tooltipElements = Array.prototype.slice.call(document.querySelectorAll('.tooltip'));
        if (!this.tooltipElements.length) {
            return;
        }
        console.log(this.tooltipElements)
        this.registerEvents();
        this.renderToolTipContainer();
    },
    registerEvents() {
        this.toolTipTrigger = document.querySelector('.tooltip');
        this.toolTipTrigger.addEventListener('click', (e) => {
            if (e.target.className === 'tooltip__button') {
                this.openTip(this.toolTipTrigger);
            }
        })
        this.toolTipTrigger.addEventListener('mouseenter', (e) => {
            if (e.target.className === 'tooltip__button') {
                this.openTip(this.toolTipTrigger);
            }
        }, true)
        this.toolTipTrigger.addEventListener('mouseleave', (e) => {
            if (e.target.className === 'tooltip__button') {
                this.closeTip();
            }
        }, true)
    },
    renderToolTipContainer() {
        const toolTipHTML = `<div class="tooltip__container" aria-hidden="true" role="none"></div>`;
        document.body.insertAdjacentHTML('beforeend', toolTipHTML);
        this.toolTipContainer = document.querySelector('.tooltip__container');
    },
    openTip(tooltip) {
        const toolTipText = tooltip.querySelector('.tooltip__wrapper').getAttribute('data-tooltip-content');
        const tipCoords = tooltip.getBoundingClientRect();

        if (!this.toolTipContainer.classList.contains('active')) {
            const coords = {
                top: tipCoords.top + window.scrollY,
                left: tipCoords.left + window.scrollX
            }
            this.toolTipContainer.textContent = toolTipText;
            const offsetLeft = (this.toolTipContainer.offsetWidth - tooltip.offsetWidth) / 2;
            const offsetTop = tooltip.offsetWidth
            this.toolTipContainer.style.transform = `translate(${coords.left - offsetLeft}px, ${coords.top + 32}px)`
            this.toolTipContainer.classList.toggle('active');
        }
    },
    closeTip() {
        this.toolTipContainer.classList.remove('active');
        this.toolTipContainer.textContent = '';
    }
}

export default tooltips;