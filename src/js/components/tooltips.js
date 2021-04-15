import { createPopper } from '@popperjs/core';

const tooltips = {
    init() {
        this.tooltipElements = Array.prototype.slice.call(document.querySelectorAll('.tooltip'));
        if (!this.tooltipElements.length) {
            return;
        }
        this.registerEvents();
        this.renderToolTipContainer();
    },
    registerEvents() {
        this.tooltipElements.forEach(tip => {
            tip.addEventListener('click', (e) => {
                if (e.target.className === 'tooltip__button') {
                    this.openTip(tip);
                }
            })
            tip.addEventListener('mouseenter', (e) => {
                if (e.target.className === 'tooltip__button') {
                    this.openTip(tip);
                }
            }, true)
            tip.addEventListener('mouseleave', (e) => {
                if (e.target.className === 'tooltip__button') {
                    this.closeTip();
                }
            }, true)
        })
    },
    renderToolTipContainer() {
        const toolTipHTML = `<div id="tooltipContainer" class="tooltip__container" aria-hidden="true" role="tooltip"><div class="arrow" data-popper-arrow></div><div class="content"></div></div>`;
        document.body.insertAdjacentHTML('beforeend', toolTipHTML);
        this.toolTipContainer = document.querySelector('.tooltip__container');
    },
    openTip(tooltip) {
        const toolTipText = tooltip.querySelector('.tooltip__wrapper').getAttribute('data-tooltip-content');
        // const tipCoords = tooltip.getBoundingClientRect();
        const arrow = this.toolTipContainer.querySelector('.arrow');

        if (!this.toolTipContainer.classList.contains('active')) {
            // const coords = {
            //     top: tipCoords.top + window.scrollY,
            //     left: tipCoords.left + window.scrollX
            // }

            createPopper(tooltip, this.toolTipContainer, {
                modifiers: [

                    {
                        name: 'offset',
                        options: {
                            offset: [0, 16],

                        },
                    },
                    {
                        name: 'arrow',
                        options: {
                            element: arrow,
                        },
                    },
                ],
            });
            this.toolTipContainer.querySelector('.content').textContent = toolTipText;
            // const offsetLeft = (this.toolTipContainer.offsetWidth - tooltip.offsetWidth) / 2;
            // const offsetTop = tooltip.offsetWidth
            // this.toolTipContainer.style.transform = `translate(${coords.left - offsetLeft}px, ${coords.top + 32}px)`
            this.toolTipContainer.classList.toggle('active');
        }
    },
    closeTip() {
        this.toolTipContainer.classList.remove('active');
        this.toolTipContainer.querySelector('.content').textContent = '';
    }
}

export default tooltips;