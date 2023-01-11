function changeActiveTab() {
  const tabButtons = document.querySelectorAll('.tabs__nav-btn');
  const tabContents = document.querySelectorAll('.tabs__content-item');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab-id');
      const tabContent = document.querySelector(
        `.tabs__content-item[data-tab-id='${tabId}']`
      );
      for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('tabs__nav-btn--active');
      }
      for (let i = 0; i < tabButtons.length; i++) {
        tabContents[i].classList.remove('tabs__content-item--active');
      }
      button.classList.add('tabs__nav-btn--active');
      tabContent.classList.add('tabs__content-item--active');
    });
  });
}
changeActiveTab();
