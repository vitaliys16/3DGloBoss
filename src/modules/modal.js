import  {animate} from './helpers';

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';

            if (window.innerWidth > 767) {
                modal.style.opacity = 0;
                animate({
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress;
                    }
                });
            } else {
                modal.style.opacity = 1;
            }
        });
    });

    modal.addEventListener('click', (e) => { //при клике мимо модального окна само окно должно закрываться
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';  
            modal.style = '';  
        }
    });
};

export default modal;