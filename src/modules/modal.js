const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';

            if (window.innerWidth > 767) {
                let number = 0;
                modal.style.opacity = 0;
                let animation = setInterval(() => {
                    number = number + 0.1;
                    modal.style.opacity = number;
                    if (number > 1) {
                        clearInterval(animation);
                    }
                }, 30);
            } else {
                modal.style.opacity = 1;
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';  
        modal.style = '';   
    });
};

export default modal;