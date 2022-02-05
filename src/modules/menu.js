const menu = () => {
    const body = document.querySelector('body');
    const menu = document.querySelector('menu');
    let closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', (e) =>{
        e.preventDefault();
    });

    body.addEventListener('click', (e) => {
        const handleMenu = () => {
            menu.classList.toggle('active-menu');
        };
        if (e.target.closest('.menu')) {
            handleMenu();   
        } else if (e.target.closest('.close-btn') || e.target.closest('ul > li > a')) {
            handleMenu();
        } else if (!e.target.closest('.active-menu')) {
            if (menu.classList.contains('active-menu')) {
                handleMenu();
            }
        }
    });
};
export default menu;