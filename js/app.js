(function () {
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
                this.dataSet = categories;
                this.dropDownBtn = container.querySelector('.u-dropdownbtn');
                this.menu = container.querySelector('.u-dropdown-menu').innerHTML = this.templateData(this.dataSet, this.listBuilder);
                this.setKeys(container, this.dropDownBtn);
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
        //
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
            function toogleDropDown(e) {
                const container = this.parentNode;
                container.classList.toggle('open');
                if (hasClass(container, "open")) {
                    this.setAttribute('aria-expanded', true);
                    // when using keyboard, ensures that first item that is focused is
                    if (e.detail === 0) {
                        first.focus();
                    }
                } else {
                    this.setAttribute('aria-expanded', false);
                }
            }
            // will close drop down if user clicks on element other then open list
            function closeDropDown(e) {
                if (!hasClass(e.target, 'u-dropdownbtn')) {
                    container.classList.remove('open')
                }
            }
        },
        // Updates dropdown with selected value
        selection(item, dropDownBtn) {
            dropDownBtn.childNodes[0].textContent = item.textContent
        }
    }

    const accordion = {

        init() {
            this.accordions = document.querySelectorAll(".accordion-group");
            const accordionsBtns = document.querySelectorAll(".accordion-group .accordion-button");
            if (!this.accordions.length) {
                return;
            }
            this.registerEvents();
        },
        registerEvents() {
            console.log(this.accordions)
            Array.prototype.slice.call(this.accordions).map((group, index) => {
                console.log(group)
                const accordionHeading = group.querySelector('.accordion-heading')
                const accordionPanel = group.querySelector('.accordion-detail')
                accordionHeading.setAttribute('id', 'accordionHeader' + index)
                accordionPanel.setAttribute('id', 'accordionPanel' + index)
                accordionPanel.setAttribute('aria-labeledby', 'accordionHeader' + index)
                group.addEventListener("click", this.toggleAccordian)
            })
        },
        toggleAccordian() {
            var button = this.querySelector('.accordion-button');
            let expandedState = false;

            if (this.classList.contains("is-expanded")) {
                expandedState = false;
                this.classList.remove("is-expanded");
                button.classList.remove('active')
            } else {
                expandedState = true;
                this.classList.add("is-expanded");
                button.classList.add('active')
            }
            accordion.setAnimateVisibility(expandedState, this)
            accordion.setAriaState(expandedState, this);
        },
        setAriaState(openState, group) {
            openState === false
                ? group.setAttribute("aria-expanded", "false")
                : group.setAttribute("aria-expanded", "true");
        },
        setAnimateVisibility(openState, group) {
            var thisDetail = group.querySelector('.accordion-detail')
            if (openState === false) {
                thisDetail.classList.remove('animate-visibility')
            } else {
                setTimeout(function () {
                    thisDetail.classList.add('animate-visibility')
                }, 10)
            }
        }
    }

    //
    const countdownTimer = {
        init: () => {
            this.timers = Array.prototype.slice.call(document.querySelectorAll('.countdown__container'));

            if (!this.timers) {
                return;
            }

            this.timers.forEach(timer => {
                this.time = timer;
                countdownTimer.count(this.time);
            })
        },
        count: (root) => {
            let pendulum;
            let targetDate;
            const eleDate = root.getAttribute('data-countdown');

            if (eleDate === '') {
                const d = new Date();
                targetDate = d.setDate(d.getDate() + 1);
            } else {
                targetDate = new Date(eleDate);
            }

            pendulum = setInterval(() => {
                const current = Date.now();
                const diff = targetDate - current;
                if (diff < 0) {
                    clearTimeout(pendulum);
                }
                countdownTimer.logTime(diff, root);
            }, 1000);
        },
        logTime: (diff, root) => {
            const dayDisplay = root.querySelector('.countdown__days');
            const hourDisplay = root.querySelector('.countdown__hours');
            const minsDisplay = root.querySelector('.countdown__mins');
            const secsDisplay = root.querySelector('.countdown__secs');

            const days = Math.floor(diff / 1000 / 60 / 60 / 24);
            const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
            const mins = Math.floor(diff / 1000 / 60) % 60;
            const secs = Math.floor(diff / 1000) % 60;

            dayDisplay.textContent = `${days < 10 ? 0 : ''}${days} :`;
            hourDisplay.textContent = `${hours < 10 ? 0 : ''}${hours} :`;
            minsDisplay.textContent = `${mins < 10 ? 0 : ''}${mins} :`;
            secsDisplay.textContent = `${secs < 10 ? 0 : ''}${secs}`;
            if (diff < 0) {
                dayDisplay.textContent = `00 :`;
                hourDisplay.textContent = `00 :`;
                minsDisplay.textContent = `00 :`;
                secsDisplay.textContent = `00`;
            }
        }
    }


    window.addEventListener('load', () => {
        dropDown.init();
        accordion.init();
        countdownTimer.init();
    })


    //helper functions
    function hasClass(target, className) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
    }
}())


