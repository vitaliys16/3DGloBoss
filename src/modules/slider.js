const slider = () => {
    console.log('Я слвйдер');
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const dotsPanel = document.querySelector('.portfolio-dots');
    let dots = document.querySelectorAll('.dot');
    const timeInterval = 2000;

    let currentSlide = 0;
    let interval;

    //определяем количество точек на основе количества слайдов
    slides.forEach((e, index) => {
        let li = document.createElement("li");
        li.classList.add('dot', 'dot-active');
        dotsPanel.appendChild(li);
        if (index > 0) {
           li.classList.remove('dot-active');
            dotsPanel.appendChild(li); 
        }
        dots = document.querySelectorAll('.dot'); //переопределяем элементы с классом .dot, т.к. 
    });

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slides.length) { //если слайды закончатся, то начнем их листать сначала
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (timer = 1500) => { //= - означает значение по умолчанию
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) { //если слайды закончатся, то начнем их листать сначала
            currentSlide = 0;
        }
        if (currentSlide < 0) { //если слайды закончатся, то начнем их листать сначала
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');

    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true); //true для того чтобы событие отрабатывало на дочерних элементах

    startSlide(timeInterval);
};

export default slider;