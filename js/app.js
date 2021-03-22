const dropDown = {
    init() {
        this.dropDownContainers = Array.prototype.slice.call(document.querySelectorAll('.u-dropdown'));

        if (!this.dropDownContainers.length) {
            return;
        }
        this.setDropDown();
    },
    setDropDown() {
        this.dropDownContainers.forEach(container => {
            this.dataSet = categories;
            this.dropDownBtn = container.querySelector('.u-dropdownbtn');
            this.menu = container.querySelector('.u-dropdown-menu').innerHTML = this.templateData(this.dataSet, this.listBuilder);
            this.dropDownBtn.addEventListener('click', this.toogleDropDown);
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
    // toggles the drop down open or closed
    toogleDropDown(e) {
        const container = this.parentNode;
        container.classList.toggle('open');
        if (hasClass(container, "open")) {
            this.setAttribute('aria-expanded', true);
            if (e.detail === 0) {
                first.focus();
            }
        } else {
            this.setAttribute('aria-expanded', false);
        }
    },
    // will close drop down if user clicks on element other then open list
    closeDropDown: function (e, container) {
        console.log(container)
        // const container = this.parentNode;
        if (!hasClass(e.target, 'u-dropdownbtn')) {
            container.classList.remove('open')
        }
    }
}
//helper functions
function hasClass(target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

dropDown.init()
    // const dataSet = categories,
    //     dropDownContainer = document.querySelector('.u-dropdown'),
    //     dropDown = document.querySelector('.u-dropdownbtn');


//     function init() {
//         const menu = document.querySelector('.u-dropdown-menu').innerHTML = templateData(dataSet, listBuilder),
//             menuItems = Array.prototype.slice.call(dropDownContainer.querySelectorAll('.u-dropdown-item')),
//             menuLinks = Array.prototype.slice.call(dropDownContainer.querySelectorAll('.u-dropdown-item a'));

//         let first = menuLinks[0],
//             last = menuLinks[menuLinks.length - 1],
//             lastActiveElement = document.activeElement;

//         menuItems.map(function (itemlink) {
//             itemlink.addEventListener('click', clickSelection)
//         })

//         menuLinks.map(function (itemlink) {
//             itemlink.addEventListener('keydown', keySelection)
//         })

//         // update dropdown with selection list item
//         function clickSelection(e) {
//             e.preventDefault()
//             dropDownContainer.classList.remove('open')
//             selection(this, dropDownContainer)
//         }

//         // user can tab through menu items. Will loop
//         function keySelection(e) {
//             e.preventDefault()
//             var current = menuLinks.indexOf(this)
//             if (e.keyCode === 32 || e.keyCode === 13) {
//                 // space keyCode: 32 | enter keyCode: 13
//                 dropDownContainer.classList.remove('open')
//                 lastActiveElement.focus()
//                 selection(this.parentNode, dropDownContainer)
//             } else if (e.keyCode === 39 || e.keyCode === 40) {
//                 // right keyCode: 39 | down keyCode: 40
//                 if (current !== menuLinks.length - 1) {
//                     menuLinks[current + 1].focus()
//                 } else {
//                     first.focus()
//                 }
//             } else if (e.keyCode === 37 || e.keyCode === 38) {
//                 // left keyCode: 37 | up keyCode: 38
//                 if (current !== 0) {
//                     menuLinks[current - 1].focus()
//                 } else {
//                     last.focus()
//                 }
//             } else if (e.keyCode === 27) {
//                 // esc keyCode: 27
//                 lastActiveElement.focus()
//                 dropDownContainer.classList.remove('open')
//             }
//         }

//     },

//     // returns an html string that will build a menu item
//     listBuilder: function (listItem) {
//         let template = `<li class='u-dropdown-item'><a role='menuitem' data-moduleId='${listItem.category}' class='u-dropdown-link' href="#">${listItem.category}</a></li>`
//         return template;
//     },

//     // accepts a data set and template. Will loop through data set and build an html string for each data point
//     templateData: function (data, template) {
//         let html = ``;
//         data.map(function (item) {
//             html += template(item)
//         })
//         return html
//     },

//     // toggles the drop down open or closed
//     toogleDropDown: function (e) {
//         dropDownContainer.classList.toggle('open')
//         if (hasClass(dropDownContainer, "open")) {
//             this.setAttribute("aria-expanded", true)
//             if (e.detail === 0) {
//                 first.focus()
//             }
//         } else {
//             this.setAttribute("aria-expanded", false)
//         }
//     },

//     // will close drop down if user clicks on element other then open list
//     closeDropDown: function (e) {
//         if (!hasClass(e.target, "u-dropdownbtn")) {
//             dropDownContainer.classList.remove('open')
//         }
//     },

//     // Updates dropdown with selected value
//     selection: (item, container) {
//         dropDown.childNodes[0].textContent = item.textContent
//     },

//         addEventListener: function () {
//             dropDown.addEventListener('click', toogleDropDown);
//             window.addEventListener("click", closeDropDown);
//         }
//     //helper functions
//     function hasClass(target, className) {
//         return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
//     }
// }


