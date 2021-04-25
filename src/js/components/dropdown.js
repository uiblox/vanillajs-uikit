import { hasClass } from "./helpers";
import categories from '../../data/categories';

const dropDown = {
    init() {
        this.dropDownContainers = Array.prototype.slice.call(document.querySelectorAll('.u-dropdown'));

        if (!this.dropDownContainers.length) {
            return;
        }
        this.buildMenu();
        console.log(categories)
    },
    buildMenu() {
        this.dropDownContainers.forEach(container => {
            const dataSet = categories;
            const dropDownBtn = container.querySelector('.u-dropdownbtn');
            const menu = container.querySelector('.u-dropdown-menu').innerHTML = this.templateData(dataSet, this.listBuilder);
            // this.setKeys(container, dropDownBtn);
            this.registerEventListenered(container);
        })
    },
    // accepts a data set and template. Will loop through data set and build an html string for each data point
    templateData(data, template) {
        let html = ``;
        data.map(item => {
            html += template(item);
        })
        return html;
    },
    // returns an html string that will build a menu item
    listBuilder(listItem) {
        let template = `<li class='u-dropdown-item'><a role='menuitem' data-moduleId='${listItem.category}' class='u-dropdown-link' href="#">${listItem.category}</a></li>`;
        return template;
    },
    registerEventListenered(ele) {
        ele.addEventListener('click', this.toggleDropDown)
        window.addEventListener('click', (e) => {
            dropDown.closeDropDown(e, ele);
        })
    },
    toggleDropDown(e) {
        if (e.target.className === 'u-dropdownbtn') {
            this.classList.toggle('open');
            if (hasClass(this, "open")) {
                this.setAttribute('aria-expanded', true);
                // when using keyboard, ensures that first item that is focused is
                if (e.detail === 0) {
                    first.focus();
                }
            } else {
                this.setAttribute('aria-expanded', false);
            }
        }
    },
    closeDropDown(e, ele) {
        if (e.target.className !== 'u-dropdownbtn') {
            if (hasClass(ele, "open")) {
                ele.classList.remove('open')
            }
        }
    },
    setKeys(container, dropDownBtn) {
        const menuItems = Array.prototype.slice.call(container.querySelectorAll('.u-dropdown-item')),
            menuLinks = Array.prototype.slice.call(container.querySelectorAll('.u-dropdown-item a'));

        let first = menuLinks[0],
            last = menuLinks[menuLinks.length - 1],
            lastActiveElement = document.activeElement;

        menuItems.forEach(itemlink => {
            itemlink.addEventListener('click', clickSelection)
        })

        menuLinks.forEach(itemlink => {
            itemlink.addEventListener('keydown', keySelection)
        })

        this.dropDownBtn.addEventListener('click', toogleDropDown);
        window.addEventListener('click', closeDropDown);
        // update dropdown with selection list item
        function clickSelection(e) {
            e.preventDefault()
            container.classList.remove('open')
            dropDown.selection(this, dropDownBtn)
        }
        // user can tab through menu items. Will loop
        function keySelection(e) {
            e.preventDefault()
            var current = menuLinks.indexOf(this)
            if (e.keyCode === 32 || e.keyCode === 13) {
                // space keyCode: 32 | enter keyCode: 13
                container.classList.remove('open')
                dropDownBtn.focus();
                dropDown.selection(this.parentNode, dropDownBtn)
            } else if (e.keyCode === 39 || e.keyCode === 40) {
                // right keyCode: 39 | down keyCode: 40
                if (current !== menuLinks.length - 1) {
                    menuLinks[current + 1].focus()
                } else {
                    first.focus()
                }
            } else if (e.keyCode === 37 || e.keyCode === 38) {
                // left keyCode: 37 | up keyCode: 38
                if (current !== 0) {
                    menuLinks[current - 1].focus()
                } else {
                    last.focus()
                }
            } else if (e.keyCode === 27) {
                // esc keyCode: 27
                dropDownBtn.focus()
                container.classList.remove('open')
            }
        }
        // toggles the drop down open or closed
        // function toogleDropDown(e) {
        //     const container = this.parentNode;
        //     container.classList.toggle('open');
        //     if (hasClass(container, "open")) {
        //         this.setAttribute('aria-expanded', true);
        //         // when using keyboard, ensures that first item that is focused is
        //         if (e.detail === 0) {
        //             first.focus();
        //         }
        //     } else {
        //         this.setAttribute('aria-expanded', false);
        //     }
        // }
        // will close drop down if user clicks on element other then open list
        // function closeDropDown(e) {
        //     if (!hasClass(e.target, 'u-dropdownbtn')) {
        //         container.classList.remove('open')
        //     }
        // }
    },
    // Updates dropdown with selected value
    selection(item, dropDownBtn) {
        dropDownBtn.childNodes[0].textContent = item.textContent
    }
}

export default dropDown;

