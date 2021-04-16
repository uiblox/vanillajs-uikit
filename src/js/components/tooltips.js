import { createPopper } from '@popperjs/core';
import flip from "@popperjs/core/lib/modifiers/flip";

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
        this.tooltipElements.forEach(ele => {
            ele.addEventListener('click', (e) => {
                if (e.target.className === 'tooltip__button') {
                    this.openTip(ele);
                }
            })
            ele.addEventListener('mouseenter', (e) => {
                if (e.target.className === 'tooltip__button') {
                    this.openTip(ele);
                }
            }, true)
            ele.addEventListener('mouseleave', (e) => {
                if (e.target.className === 'tooltip__button') {
                    this.closeTip(ele);
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
        tooltip.querySelector('.tooltip__button').setAttribute('aria-expanded', true);
        const tipContainer = this.toolTipContainer;
        const arrow = tipContainer.querySelector('.arrow');
        if (!tipContainer.classList.contains('active')) {
            createPopper(tooltip, tipContainer, {
                flip,
                modifiers: [
                    {
                        name: "arrow",
                        options: {
                            element: arrow,
                            padding: 3
                        }
                    },
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 16],

                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            padding: 16
                        }
                    }
                ],
            });
            tipContainer.querySelector('.content').textContent = toolTipText;
            tipContainer.setAttribute('aria-hidden', false);
            tooltip.setAttribute('aria-expanded', true);
            tipContainer.classList.toggle('active');

        }
    },
    closeTip(tooltip) {
        this.toolTipContainer.classList.remove('active');
        this.toolTipContainer.querySelector('.content').textContent = '';
        this.toolTipContainer.setAttribute('aria-hidden', false);
        tooltip.querySelector('.tooltip__button').setAttribute('aria-expanded', false);
    }
}

export default tooltips;