
(function initTabs() {
    const tabGroups = document.querySelectorAll(".tab-group");

    Array.prototype.slice.call(tabGroups).map(obj => {
        const tabList = obj.querySelectorAll(".tab-card");
        const tabPanel = obj.querySelectorAll(".tab-panel");
        Array.prototype.slice.call(tabList).map((card, index) => {
            card.addEventListener('click', updateTab)
            card.setAttribute('data-tab-card', 'tab' + index)
        })
        Array.prototype.slice.call(tabPanel).map((panel, index) => {
            panel.setAttribute('data-tab-panel', 'tab' + index)
        })
    })
}())

function updateTab() {
    const tabGroup = this.parentNode.parentNode;
    const prev = tabGroup.querySelector('.tab-card.active');
    const prevTabIndex = prev.getAttribute('data-tab-card');
    const prevContent = tabGroup.querySelector('[data-tab-panel=' + prevTabIndex + ']');
    prev.classList.remove('active');
    prevContent.classList.remove('active');

    this.classList.add('active');
    const newTabIndex = this.getAttribute('data-tab-card');
    const newContent = tabGroup.querySelector('[data-tab-panel=' + newTabIndex + ']');
    newContent.classList.add('active');
}
