/* tabs */
const tab = {
    init() {
        this.tabGroups = Array.prototype.slice.call(document.querySelectorAll('.tabs__container'));
        if (!this.tabGroups.length) {
            return;
        }
        this.setTabs();
    },
    setTabs() {
        this.tabGroups.forEach(group => {
            this.item = Array.prototype.slice.call(group.querySelectorAll(".tabs--list .tab--item"));
            this.itemLink = Array.prototype.slice.call(group.querySelectorAll(".tabs--list .tab--item a"));
            this.tabContent = Array.prototype.slice.call(group.querySelectorAll(".tab--contentWrapper .tab--content"));
            console.log(this.itemLink)
        }),
            //  set ids for tabs list. Will correlate with tabs content
            this.item.forEach((tab, index) => {
                tab.setAttribute('id', `tab-${index}`)
                tab.setAttribute('aria-controls', `tabC-${index}`)
                tab.addEventListener('click', this.updateTab)
            }),
            //  set index 0 for active tab (tab with active class) and also append event handler to each tab item
            this.itemLink.map(function (link) {
                hasClass(link.parentNode, 'active') ? link.setAttribute('tabindex', 0) : link.setAttribute('tabindex', -1);
                link.addEventListener('keydown', this.keySelection)
            }),
            // set ids for tabs content. Will correlate with tabs list
            this.tabContent.map(function (tabC, index) {
                tabC.setAttribute('id', `tabC-${index}`)
                tabC.setAttribute('aria-labelledby', `tab-${index}`)
            }),
            // keyboard accessibility for tabs list. Allows us to use the arrow keys to navigate the list.
            this.keySelection(e) {
            let current = this.itemLink.indexOf(this)
            console.log(e)
            console.log(this)
            console.log(current)
            // if (e.keyCode === 39 || e.keyCode === 40) {
            //     if (current !== (tabListLinks.length - 1)) {
            //         console.log("asdfasf")
            //         this.unsetTabIndex(current)
            //         this.tabForward(current)
            //     } else {
            //         this.unsetTabIndex(current)
            //         first.setAttribute("tabindex", 0)
            //         first.focus()
            //     }
            // } else if (e.keyCode === 37 || e.keyCode === 38) {
            //     if (current !== 0) {
            //         this.unsetTabIndex(current)
            //         this.tabBackWard(current)
            //     } else {
            //         this.unsetTabIndex(current)
            //         last.setAttribute("tabindex", 0)
            //         last.focus()
            //     }
            // }
        }
    },

    // functions related to keyboard accessibility
    unsetTabIndex(current) {
        tabListLinks[current].setAttribute("tabindex", -1)
    },
    tabForward(current) {
        tabListLinks[current + 1].setAttribute("tabindex", 0)
        tabListLinks[current + 1].focus()
    },
    tabBackWard(current) {
        tabListLinks[current - 1].setAttribute("tabindex", 0)
        tabListLinks[current - 1].focus()
    },
    updateTab(e) {
        e.preventDefault();
        const newTab = this,
            thisParent = this.parentNode.parentNode.parentNode,
            prevTab = thisParent.querySelector('.tab--item.active'),
            prevContentId = prevTab.getAttribute("aria-controls"),
            prevContent = thisParent.querySelector(`#${prevContentId}`),
            newContentId = newTab.getAttribute("aria-controls"),
            newContent = thisParent.querySelector(`#${newContentId}`);

        // unset active state for old tab
        prevTab.querySelector('a').setAttribute('tabindex', -1);
        prevTab.classList.remove('active');
        prevContent.classList.remove('active');
        prevTab.setAttribute("aria-selected", false);

        // set active state for new active tab
        newTab.querySelector('a').setAttribute('tabindex', 0);
        newTab.classList.add('active');
        newTab.setAttribute("aria-selected", true);
        // set active state for new active tab
        newContent.classList.add('active');
    }
}