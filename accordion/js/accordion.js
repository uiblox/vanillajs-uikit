(function () {
  var accordions = document.querySelectorAll(".accordion-group");
  var accordionsBtns = document.querySelectorAll(
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
  })

  // Accordion open/close functionality
  Array.prototype.slice.call(accordionsBtns).map(function (button) {
    button.addEventListener("click", toogleAccordian);
  });

  function toogleAccordian() {
    var thisGroup = this.parentNode.parentNode;
    var thisButton = this;
    var expandedState = false;

    if (thisGroup.classList.contains("is-expanded")) {
      expandedState = false;
      thisGroup.classList.remove("is-expanded");
      thisButton.classList.remove('active')
    } else {
      expandedState = true;
      thisGroup.classList.add("is-expanded");
      thisButton.classList.add('active')
    }
    setAnimateVisibility(expandedState, thisGroup)
    setAriaState(expandedState, thisGroup);
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
      }, 20)
    }
  }
})();
