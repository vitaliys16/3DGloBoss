const tabs = () => {
    const tabsPanel = document.querySelector('.service-header');
    const tabs = document.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');

    tabsPanel.addEventListener('click', (e) => {
        if (e.target.closest('.service-header-tab')) { //для того чтобы не ломалось при клике на span
            const tabBtn = e.target.closest('.service-header-tab'); 
            tabs.forEach((tab, index) => {
                if (tab === tabBtn) {
                    tab.classList.add('active');
                    tabContent[index].classList.remove('d-none');
                } else {
                    tab.classList.remove('active');
                    tabContent[index].classList.add('d-none');
                }
            });
        }
    });
};
export default tabs;