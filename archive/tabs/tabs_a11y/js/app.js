(function TabsObj() {
    let tabGroups = document.querySelectorAll(".container");
    Array.prototype.slice.call(tabGroups).map(function (ele) {
        const tabList = Array.prototype.slice.call(ele.querySelectorAll(".tabs--list .tab--item")),
            tabListLinks = Array.prototype.slice.call(ele.querySelectorAll(".tabs--list .tab--item a")),
            tabContent = Array.prototype.slice.call(ele.querySelectorAll(".tab--contentWrapper .tab--content")),
            first = tabListLinks[0],
            last = tabListLinks[tabListLinks.length - 1];

        //set ids for tabs list. Will correlate with tabs content
        tabList.map(function (tab, index) {
            tab.setAttribute('id', `tab-${index}`)
            tab.setAttribute('aria-controls', `tabC-${index}`)
            tab.addEventListener('click', updateTab)
        })
        // set ids for tabs content. Will correlate with tabs list
        tabContent.map(function (tabC, index) {
            tabC.setAttribute('id', `tabC-${index}`)
            tabC.setAttribute('aria-labelledby', `tab-${index}`)
        })
        // set index 0 for active tab (tab with active class) and also append event handler to each tab item
        tabListLinks.map(function (itemlink) {
            hasClass(itemlink.parentNode, 'active') ? itemlink.setAttribute('tabindex', 0) : itemlink.setAttribute('tabindex', -1);
            itemlink.addEventListener('keydown', keySelection)
        })

        // keyboard accessibility for tabs list. Allows us to use the arrow keys to navigate the list.
        function keySelection(e) {
            var current = tabListLinks.indexOf(this)
            if (e.keyCode === 39 || e.keyCode === 40) {
                if (current !== (tabListLinks.length - 1)) {
                    unsetTabIndex(current)
                    tabForward(current)
                } else {
                    unsetTabIndex(current)
                    first.setAttribute("tabindex", 0)
                    first.focus()
                }
            } else if (e.keyCode === 37 || e.keyCode === 38) {
                if (current !== 0) {
                    unsetTabIndex(current)
                    tabBackWard(current)
                } else {
                    unsetTabIndex(current)
                    last.setAttribute("tabindex", 0)
                    last.focus()
                }
            }
        }

        // functions related to keyboard accessibility
        function unsetTabIndex(current) {
            tabListLinks[current].setAttribute("tabindex", -1)
        }

        function tabForward(current) {
            tabListLinks[current + 1].setAttribute("tabindex", 0)
            tabListLinks[current + 1].focus()
        }

        function tabBackWard(current) {
            tabListLinks[current - 1].setAttribute("tabindex", 0)
            tabListLinks[current - 1].focus()
        }
    })

    function updateTab(e) {
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
}())

function hasClass(target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className)
}