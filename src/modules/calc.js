import  {animate} from './helpers';

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

 
    const animateCalc = (num, elem) => {
        animate({
            duration: 500,
            timing(timeFraction) {
                //return timeFraction;
                return 1 - Math.sin(Math.acos(timeFraction));
            },
            draw(progress) {
                let i = document.getElementById(elem);
                i.textContent = Math.round(num * progress);
            }
        });
    };

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        //указываем значение выбранного раздела
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10; //прибавляем К calcCountValue 10%;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }
        total.textContent = totalValue;

        //animationOutNum(totalValue, 'total');
        animateCalc(totalValue, 'total');
    };

    calcBlock.addEventListener('input', (e) => {
        //countCalc();
        //console.log(e.target);
        if (e.target === calcType || e.target === calcSquare 
            || e.target === calcCount || e.target === calcDay) {
            countCalc();
        }
    });

    calcType.addEventListener('input', () => { //обнуление инпутов при изменения селекта
        if (calcType.options[calcType.selectedIndex].value == 0) {
            calcSquare.value = "";
            calcCount.value = "";
            calcDay.value = "";
        }
    });
    
};

export default calc;