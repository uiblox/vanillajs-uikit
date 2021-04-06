(function () {
  const accordions = document.querySelectorAll(".accordion-group");
  const accordionsBtns = document.querySelectorAll(
    ".accordion-group .accordion-button"
  );

  /*  Each accordion groups is composed of an accordion heading and
  an accordion panel. To distinguish multiple accordion groups, we
  set unique ids per accordion group
  */

  Array.prototype.slice.call(accordions).map((group, index) => {
    const accordionHeading = group.querySelector('.accordion-heading')
    const accordionPanel = group.querySelector('.accordion-detail')
    accordionHeading.setAttribute('id', 'accordionHeader' + index)
    accordionPanel.setAttribute('id', 'accordionPanel' + index)
    accordionPanel.setAttribute('aria-labeledby', 'accordionHeader' + index)
    group.addEventListener("click", toogleAccordian);
  })

  function toogleAccordian() {
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
    setAnimateVisibility(expandedState, this)
    setAriaState(expandedState, this);
  }

  function setAriaState(openState, group) {
    openState === false
      ? group.setAttribute("aria-expanded", "false")
      : group.setAttribute("aria-expanded", "true");
  }

  function setAnimateVisibility(openState, group) {
    var thisDetail = group.querySelector('.accordion-detail')
    if (openState === false) {
      thisDetail.classList.remove('animate-visibility')
    } else {
      setTimeout(function () {
        thisDetail.classList.add('animate-visibility')
      }, 10)
    }
  }
})();
