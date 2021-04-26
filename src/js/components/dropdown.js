import { hasClass } from "./helpers";
import categories from '../../data/categories';

const dropDown = {
    init() {
        this.dropDownContainers = Array.prototype.slice.call(document.querySelectorAll('.u-dropdown'));

        if (!this.dropDownContainers.length) {
            return;
        }
        this.buildMenu();
    },
    buildMenu() {
        this.dropDownContainers.forEach(container => {
            const dataSet = categories;
            const dropDownBtn = container.querySelector('.u-dropdownbtn');
            const menu = container.querySelector('.u-dropdown-menu').innerHTML = this.templateData(dataSet, this.listBuilder);
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
        ele.addEventListener('click', this.dropDownSelection)
        ele.addEventListener('keydown', this.keySelection)
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
                const menuLinks = Array.prototype.slice.call(this.querySelectorAll('.u-dropdown-item a'));
                if (e.detail === 0) {
                    menuLinks[0].focus();
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
    keySelection(e) {
        if (e.target.className === 'u-dropdown-link') {

            const menuLinks = Array.prototype.slice.call(this.querySelectorAll('.u-dropdown-item a'));
            const dropDownBtn = this.querySelector('.u-dropdownbtn');

            let first = menuLinks[0],
                last = menuLinks[menuLinks.length - 1],
                lastActiveElement = document.activeElement,
                currentPosition = menuLinks.indexOf(e.target);

            // right keyCode: 39 | down keyCode: 40
            if (e.keyCode === 39 || e.keyCode === 40) {
                if (currentPosition !== menuLinks.length - 1) {
                    menuLinks[currentPosition + 1].focus()
                    console.log(currentPosition)
                } else {
                    first.focus()
                }
            }
            // left keyCode: 37 | up keyCode: 38
            if (e.keyCode === 37 || e.keyCode === 38) {
                if (currentPosition !== 0) {
                    menuLinks[currentPosition - 1].focus()
                } else {
                    last.focus()
                }
            }
            // esc keyCode: 27
            if (e.keyCode === 27) {
                dropDownBtn.focus();
                this.classList.remove('open')
            }
            // enter keyCode: 13
            if (e.keyCode === 13) {
                dropDownBtn.focus();
                return
            }
        }
    },
    // Updates dropdown with selected value
    dropDownSelection(e) {
        const btn = this.querySelector('.u-dropdownbtn')
        if (e.target.className === 'u-dropdown-item' || e.target.className === 'u-dropdown-link') {
            e.preventDefault();
            switch (e.target.className) {
                case 'u-dropdown-item':
                    btn.childNodes[0].textContent = e.target.textContent
                    break;
                case 'u-dropdown-link':
                    btn.childNodes[0].textContent = e.target.textContent
                    break;
                default:
                    return
            }
        }
    }
}

export default dropDown;

