import { hasClass } from './helpers';

const tabsPanel = {
    init() {
        this.tabGroups = Array.prototype.slice.call(document.querySelectorAll('.tab__group'));
        if (!this.tabGroups.length) {
            return;
        }
        this.setTabs(this.tabGroups)
    },
    setTabs(tabGroups) {
        tabGroups.forEach(tabGroup => {
            tabGroup.addEventListener('click', this.updateTab)
            const tabNavItems = Array.prototype.slice.call(tabGroup.querySelectorAll(".tab__item"));
            const tabContentItems = Array.prototype.slice.call(tabGroup.querySelectorAll(".tab__content"));
            tabNavItems.forEach((tabNavItem, index) => {
                tabNavItem.setAttribute('id', `tab-${index}`)
                tabNavItem.setAttribute('aria-controls', `tabC-${index}`)
                this.updateIndex(tabNavItem)
            })
            tabContentItems.forEach((tabContentItem, index) => {
                tabContentItem.setAttribute('id', `tabC-${index}`)
                tabContentItem.setAttribute('aria-labelledby', `tab-${index}`)
            })
        })
    },
    updateIndex(current) {
        hasClass(current, 'active') ? current.setAttribute('tabindex', 0) : current.setAttribute('tabindex', -1)
    },
    registerEvents(item) {
        item.addEventListener('click', this.updateTab)
        item.addEventListener('keydown', this.keySelection)
    },
    updateTab(e) {
        e.preventDefault();
        const current = e.target.closest('li')
        if (current.classList.contains('active')) {
            return
        }
        const prevActiveContent = this.querySelector('.tab__content.active')
        const allTabItems = this.querySelectorAll('.tab__item');
        const currentContentId = current.getAttribute('aria-controls')
        const currentContent = this.querySelector(`#${currentContentId}`)
        allTabItems.forEach((item) => {
            item.classList.remove('active')
            item.setAttribute('aria-selected', false)
            tabsPanel.updateIndex(item)
        })
        prevActiveContent.classList.remove('active')
        current.classList.add('active')
        current.setAttribute('aria-selected', true)
        tabsPanel.updateIndex(current)
        currentContent.classList.add('active')
    },
    keySelection(e) {

    }
}

export default tabsPanel;