const accordion = {
    init() {
        this.accordions = Array.prototype.slice.call(document.querySelectorAll(".accordion__group"));
        if (!this.accordions.length) {
            return;
        }
        this.setAccordion(this.accordions);
    },
    setAccordion(accordGrp) {
        (accordGrp).map((group, index) => {
            const heading = group.querySelector('.accordion__heading')
            const detail = group.querySelector('.accordion__detail')
            heading.setAttribute('id', 'accordionHeader' + index)
            detail.setAttribute('id', 'accordionPanel' + index)
            detail.setAttribute('aria-labeledby', 'accordionHeader' + index)
            this.registerEvents(group);
        })
    },
    registerEvents(group) {
        group.addEventListener("click", this.toggleAccordian)
    },
    toggleAccordian() {
        const current = this
        const currentBtn = current.querySelector('.accordion__button');
        let expandedState = false;

        if (current.classList.contains("is-expanded")) {
            expandedState = false;
            current.classList.remove("is-expanded");
            currentBtn.classList.remove('active')
        } else {
            expandedState = true;
            current.classList.add("is-expanded");
            currentBtn.classList.add('active')
        }
        accordion.setAnimateVisibility(expandedState, current)
        accordion.setAriaState(expandedState, current);
    },
    setAnimateVisibility(openState, current) {
        const revealDetail = current.querySelector('.accordion__detail')
        if (openState === false) {
            revealDetail.classList.remove('animate-visibility')
        } else {
            setTimeout(function () {
                revealDetail.classList.add('animate-visibility')
            }, 10)
        }
    },
    setAriaState(openState, group) {
        openState === false
            ? group.setAttribute("aria-expanded", "false")
            : group.setAttribute("aria-expanded", "true");
    }
}

export default accordion;

